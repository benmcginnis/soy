package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/robfig/soy"
	"github.com/robfig/soy/template"
)

const (
	outputDir = "splittemplates/src/"
	featuresSoy = "./features.soy"
	simpleSoy = "./simple.soy"
	globals = "./FeaturesUsage_globals.txt"
)

func fatalIf(err error) {
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func _main() {
	var (
		bundle = soy.NewBundle().
			AddGlobalsFile(globals).
			AddTemplateFile(featuresSoy).
			AddTemplateFile(simpleSoy)
		registry *template.Registry
		err error
	)

	registry, err = bundle.Compile()
	fatalIf(err)

	for _, t := range registry.Templates {
		allParts := strings.Split(t.Node.Name, ".")
		fileName := allParts[len(allParts)-1] + ".soy"
		pathParts := allParts[:len(allParts)-1]
		folderPath := filepath.Join(pathParts...)
		folderPath = filepath.Join(outputDir, folderPath)

		var (
			f *os.File
		)

		if _, err = os.Stat(folderPath); os.IsNotExist(err) {
			err = os.MkdirAll(folderPath, os.ModePerm)
			fatalIf(err)
		}

		f, err = os.Create(filepath.Join(folderPath, fileName))
		fatalIf(err)

		_, err = f.Write([]byte(t.Namespace.String()))
		fatalIf(err)

		_, err = f.Write([]byte(t.Doc.String()))
		fatalIf(err)

		_, err = f.Write([]byte(t.Node.String()))
		fatalIf(err)
	}
 }
