package soytsx

import (
	"strings"
)

// The JSFormatter interface allows for callers to choose which
// version of Javascript they would like soyjs to output. To
// maintain backwards compatibility, if no JSFormatter is specified
// in the Options, soyjs will default to the ES5Formatter implemented
// in exec.go
type JSFormatter interface {
	// Template returns two values, the name of the template to save
	// in the defined functions map, and how the function should be defined.
	Template(name string) (string, string)
	// Call returns two values, the name of the template to save
	// in the called functions map, and a string that is written
	// into the imports
	Call(name string) (string, string)
	// Directive takes in a PrintDirective and returns a string
	// that is written into the imports
	Directive(PrintDirective) string
	// Function takes in a Func and returns a string
	// that is written into the imports
	Function(Func) string
}

// TSXFormatter implements the JSFormatter interface
// and creates Typescript JSX files compatible
// with Typescript and React
type TSXFormatter struct{}

var _ JSFormatter = (*TSXFormatter)(nil)


func TSXFileName(s string) (string, string) {
	parts := strings.Split(s, ".")
	dirParts := parts[:len(parts)-1]
	path := strings.Join(dirParts, "/")

	lastFilepath := parts[len(parts)-1]
	if lastFilepath == "" {
		return path, lastFilepath
	}

	b := strings.Builder{}
	b.Grow(len(lastFilepath))

	var capitalizeNextLetter = true
	for _, letter := range []byte(lastFilepath) {
		isLower := letter >= 'a' && letter <= 'z'
		isNumber := letter >= '0' && letter <= '9'
		isSep := letter == ' ' || letter == '_' || letter == '.'

		if capitalizeNextLetter && isLower {
			letter += 'A'
			letter -= 'a'
		}

		capitalizeNextLetter = isNumber ||  isSep // should capitalize

		if isSep {
			continue
		}

		b.WriteByte(letter)
	}

	fileName := b.String()
	fullFilePathWithoutExtension:= strings.Join([]string{path, fileName},"/")
	//fullPathWithExt := strings.Join([]string{fullFilePathWithoutExtension, "tsx"}, ".")

	return fullFilePathWithoutExtension, fileName
}

// Template returns two values, the name of the template to save
// in the defined functions map, and how the function should be defined.
// For ES6, the function is not defined globally, but exported
func (t *TSXFormatter) Template(name string) (string, string) {
	return TSXFileName(name)
}

// Call returns two values, the name of the template to save
// in the called functions map, and a string that is written
// into the imports
func (t *TSXFormatter) Call(name string) (string, string) {
	filePath, templateName := TSXFileName(name)
	return filePath, "import { " + templateName + ` } from "` + filePath + `";`
}


// Directive takes in a PrintDirective and returns a string
// that is written into the imports
func (t *TSXFormatter) Directive(dir PrintDirective) string {
	return "import { " + dir.Name + " } from '" + dir.Name + ".js';"
}

// Function takes in a Func and returns a string
// that is written into the imports
func (t *TSXFormatter) Function(fn Func) string {
	return "import { " + fn.Name + " } from '" + fn.Name + ".js';"
}