package soytsx

import (
	"bytes"
	"io/fs"
	"io/ioutil"
	"path/filepath"
	"strings"
	"testing"

	"github.com/robfig/soy"
	"github.com/robfig/soy/template"
)

const splitSoyDirectory = "../testdata/splittemplates/src/soy/examples"
const globals = "../testdata/FeaturesUsage_globals.txt"
const splitTSXDirectory = "../testdata/testapp/src/soy/examples"

func TestGenerator(t *testing.T) {
	type JSXResult struct {
		file string
		contents string
	}

	var (
		soyFiles []string
		testResults = make(map[string]*JSXResult)
		bundle = soy.NewBundle().AddGlobalsFile(globals)
		registry *template.Registry
		err error
	)

	if err = filepath.Walk(splitSoyDirectory, func(path string, info fs.FileInfo, err error) error {
		if info.IsDir() || filepath.Ext(path) != ".soy" {
			return nil
		}

		soyFiles = append(soyFiles, path)
		bundle.AddTemplateFile(path)
		return nil
	}); err != nil {
		t.Error(err)
		return
	}

	if registry, err = bundle.Compile(); err != nil {
		t.Error(err)
		return
	}

	if err = filepath.Walk(splitTSXDirectory, func(path string, info fs.FileInfo, err error) error {
		if info.IsDir() || filepath.Ext(path) != ".tsx" {
			return nil
		}

		key := strings.Replace(path, "../testdata/testapp/src/", "", -1)
		key = strings.Replace(key, ".tsx", "", -1)
		key = strings.ToLower(key)

		contentBytes, err := ioutil.ReadFile(path)
		if err != nil {
			return err
		}

		testResults[key] = &JSXResult{
			file:     path,
			contents: string(contentBytes),
		}

		return nil
	}); err != nil {
		t.Error(err)
		return
	}

	var gen = NewGenerator(registry)

	for _, soyFile := range soyFiles {
		var buf bytes.Buffer

		key := strings.Replace(soyFile, "../testdata/splittemplates/src/", "", -1)
		key = strings.Replace(key, ".soy", "", -1)
		key = strings.ToLower(key)

		expectedResult, ok := testResults[key]
		if !ok {
			t.Errorf("missing corresponding tsx file %s", key)
			continue
		}

		if err := gen.WriteFile(&buf, soyFile);  err != nil {
			t.Error(err)
			return
		}

		result := buf.String()

		if result != expectedResult.contents {
			t.Errorf(
				"\n%s\nexpected:\n====================\n%s\ngot:\n====================\n%s\n====================\n",
				key,
				expectedResult.contents,
				result,
			)
		}
	}
}