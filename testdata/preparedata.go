package main

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"io/ioutil"
	"os"
	"path/filepath"
	"sort"
	"strings"
)

const splitSoyDirectory = "../testdata/splittemplates/src/soy/examples"
const splitTSXDirectory = "../testdata/testapp/src/soy/examples"

type PromptPair struct {
	SoyTemplate string `json:"prompt"`
	TSXTemplate string `json:"completion"`
}

func main() {
	type JSXResult struct {
		file string
		contents string
	}

	var (
		tuples = make(map[string]*PromptPair)
		err error
	)

	err = filepath.Walk(splitSoyDirectory, func(path string, info fs.FileInfo, err error) error {
		if info.IsDir() || filepath.Ext(path) != ".soy" {
			return nil
		}

		keyPath := strings.Replace(path, "../testdata/splittemplates/src/soy/examples/", "", -1)
		key := strings.Replace(keyPath, ".soy", "", -1)
		key = strings.ToLower(key)

		contentBytes, err := ioutil.ReadFile(path)
		if err != nil {
			return err
		}

		tuples[key] = &PromptPair{
			SoyTemplate: "// "+ keyPath +"\n" + string(contentBytes) + "\n",
		}

		return nil
	})
	fatalIf(err)

	err = filepath.Walk(splitTSXDirectory, func(path string, info fs.FileInfo, err error) error {
		if info.IsDir() || filepath.Ext(path) != ".tsx" {
			return nil
		}

		keyPath := strings.Replace(path, "../testdata/testapp/src/soy/examples/", "", -1)
		key := strings.Replace(keyPath, ".tsx", "", -1)
		key = strings.ToLower(key)

		contentBytes, err := ioutil.ReadFile(path)
		if err != nil {
			return err
		}

		if _, ok := tuples[key]; !ok {
			return fmt.Errorf("missing corresponding tsx file %s", key)
		}

		tuples[key].TSXTemplate = " \n// "+keyPath +"\n" + string(contentBytes) + " END"

		return nil
	})
	fatalIf(err)

	outputFile, err := os.Create("trainingdata.jsonl")
	fatalIf(err)

	defer func(outputFile *os.File) {
		err := outputFile.Close()
		fatalIf(err)
	}(outputFile)

	var keys []string

	for key, _ := range tuples {
		keys = append(keys, key)
	}

	sort.Strings(keys)
	for _, key := range keys {
		tuple := tuples[key]
		d, err := json.Marshal(tuple)
		fatalIf(err)
		_, err = outputFile.Write(d)
		fatalIf(err)
		_, err = outputFile.Write([]byte("\n"))
	}
}