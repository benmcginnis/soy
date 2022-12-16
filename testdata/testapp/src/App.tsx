import { DemoAutoescapeFalse } from './soy/examples/features/DemoAutoescapeFalse';
import { DemoAutoescapeTrue } from './soy/examples/features/DemoAutoescapeTrue';
import { DemoCallWithoutParam } from './soy/examples/features/DemoCallWithoutParam';
import { DemoCallWithParam } from './soy/examples/features/DemoCallWithParam';
import { DemoCallWithParamBlock } from './soy/examples/features/DemoCallWithParamBlock';
import { DemoComments } from './soy/examples/features/DemoComments';
import { DemoDoubleBraces } from './soy/examples/features/DemoDoubleBraces';
import { DemoExpressions } from './soy/examples/features/DemoExpressions';
import { DemoFor } from './soy/examples/features/DemoFor';
import { DemoForeach } from './soy/examples/features/DemoForeach';
import { DemoIf } from './soy/examples/features/DemoIf';
import { DemoLineJoining } from './soy/examples/features/DemoLineJoining';
import { DemoMsg } from './soy/examples/features/DemoMsg';
import { DemoPlural } from './soy/examples/features/DemoPlural';
import { DemoPrint } from './soy/examples/features/DemoPrint';
import { DemoPrintDirectives } from './soy/examples/features/DemoPrintDirectives';
import { DemoRawTextCommands } from './soy/examples/features/DemoRawTextCommands';
import { DemoSwitch } from './soy/examples/features/DemoSwitch';
import { ExampleHeader } from './soy/examples/features/ExampleHeader';

function App() {
    const Examples = [{
        name: "demoComments",
        example: () => { return (<DemoComments /> )}
    },
        {
            name: "demoLineJoining",
            example: () => { return (<DemoLineJoining /> )}
        },
        {
            name: "demoRawTextCommands",
            example: () => { return (<DemoRawTextCommands /> )}
        },
        {
            name: "demoPrint",
            example: () => { return (<DemoPrint boo={"Boo!"} two={2} /> )}
        },
        {
            name: "demoPrintDirectives",
            example: () => { return (<DemoPrintDirectives
              longVarName={"thisIsSomeRidiculouslyLongVariableName"}
              elementId={"my_element_id"}
              cssClass={"my_css_class"}
            /> )}
        },
        {
            name: "demoAutoescapeTrue",
            example: () => { return (<DemoAutoescapeTrue italicHtml={<i>italic</i>}/> )}
        },
        {
            name: "demoAutoescapeFalse",
            example: () => { return (<DemoAutoescapeFalse italicHtml={<i>italic</i>}/> )}
        },
        {
            name: "demoMsg",
            example: () => { return (<DemoMsg name={"Ed"} labsUrl={"http://labs.google.com"}/> )}
        },
        {
            name: "demoPlural",
            example: () => { return (<DemoPlural eggs={1} /> )}
        },
        {
            name: "demoPlural",
            example: () => { return (<DemoPlural eggs={2} /> )}
        },
        {
            name: "demoPlural",
            example: () => { return (<DemoPlural eggs={0} /> )}
        },
        {
            name: "demoIf",
            example: () => { return (<DemoIf pi={3.14159} /> )}
        },
        {
            name: "demoIf",
            example: () => { return (<DemoIf pi={2.71828} /> )}
        },
        {
            name: "demoIf",
            example: () => { return (<DemoIf pi={1.61803} /> )}
        },
        {
            name: "demoSwitch",
            example: () => { return (<DemoSwitch name={"Fay"} /> )}
        },
        {
            name: "demoSwitch",
            example: () => { return (<DemoSwitch name={"Go"} /> )}
        },
        {
            name: "demoSwitch",
            example: () => { return (<DemoSwitch name={"Hal"} /> )}
        },
        {
            name: "demoSwitch",
            example: () => { return (<DemoSwitch name={"Ivy"} /> )}
        },
        {
            name: "demoForeach",
            example: () => { return (<DemoForeach persons={[
                {"name": "Jen", "numWaffles": 1},
                {"name": "Kai", "numWaffles": 3},
                {"name": "Lex", "numWaffles": 1},
                {"name": "Mel", "numWaffles": 2},
            ]} /> )}
        },

        {
            name: "demoFor",
            example: () => { return (<DemoFor numLines={3}/> )}
        },
        {
            name: "demoCallWithoutParam",
            example: () => { return (<DemoCallWithoutParam name={"Neo"} tripInfo={{name: "Neo", destination: "The Matrix"}}/> )}
        },
        {
            name: "demoCallWithParam",
            example: () => { return (<DemoCallWithParam
              name={"Oz"}
              companionName={"Pip"}
              destinations={[
                  "Gillikin Country",
                  "Munchkin Country",
                  "Quadling Country",
                  "Winkie Country",
              ]}
            /> )}
        },
        {
            name: "demoCallWithParamBlock",
            example: () => { return (<DemoCallWithParamBlock name={"Quo"}/> )}
        },
        {
            name: "demoExpressions",
            example: () => { return (<DemoExpressions
              currentYear={2008}
              students= {[
                  {name: "Rob", major: "Physics", year: 1999},
                  {name: "Sha", major: "Finance", year: 1980},
                  {name: "Tim", major: "Engineering", year: 2005},
                  {name: "Uma", major: "Biology", year: 1972},
              ]}
            /> )}
        },
        {
            name: "demoDoubleBraces",
            example: () => { return (<DemoDoubleBraces
              setName={"prime numbers"}
              setMembers={[2, 3, 5, 7, 11, 13]}
            /> )}
        },
    ];

  return Examples.map((ex, index: number) => {
      return (
        <>
            <ExampleHeader exampleNum={index} exampleName={ex.name} />
            <ex.example />
        </>
      )
  })
}

export default App
