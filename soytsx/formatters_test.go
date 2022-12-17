package soytsx

import (
	"testing"
)

func TestTSXFormatter(t *testing.T) {
	tests := []struct{
		templateName string
		expectedIdentifier string
		expectedImport string
		expectedExport string
	}{
		{
			"common.modules.helpers.head_includes",
			"common/modules/helpers/HeadIncludes",
			`import { HeadIncludes } from "common/modules/helpers/HeadIncludes"`,
			`export const HeadIncludes = `,
		},

	}

	formatter := &TSXFormatter{}

	for _, test := range tests {
		identifierResult, exportResult := formatter.Template(test.templateName)
		identifierResult2, importResult := formatter.Call(test.templateName)

		if identifierResult != test.expectedIdentifier || identifierResult2 != test.expectedIdentifier {
			t.Errorf(
				"identifiers don't match\nexpected: %s\none: %s\ntwo: %s",
				test.expectedIdentifier,
				identifierResult,
				identifierResult2,
			)
		}

		if test.expectedExport != exportResult {
			t.Errorf("export doesn't match\nexpected: %s\ngot: %s", test.expectedExport, exportResult)
		}

		if test.expectedImport != importResult {
			t.Errorf("import doesn't match expected:\n%s got\n%s", test.expectedImport, importResult)
		}
	}
}