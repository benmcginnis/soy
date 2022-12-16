import {
  DemoAutoescapeFalse,
  DemoAutoescapeTrue, DemoBidiSupport,
  DemoCallWithoutParam,
  DemoCallWithParam,
  DemoCallWithParamBlock,
  DemoComments,
  DemoDoubleBraces,
  DemoExpressions,
  DemoFor,
  DemoForeach,
  DemoIf,
  DemoLineJoining,
  DemoMsg, DemoParamWithKindAttribute,
  DemoPlural,
  DemoPrint,
  DemoPrintDirectives,
  DemoRawTextCommands,
  DemoSwitch,
  ExampleHeader,
} from './soy/examples/features';
import { HelloNames } from './soy/examples/simple';

function App() {
  const Examples = [{
    name: "demoComments",
    example: () => {
      return (<DemoComments/>)
    }
  },
    {
      name: "demoLineJoining",
      example: () => {
        return (<DemoLineJoining/>)
      }
    },
    {
      name: "demoRawTextCommands",
      example: () => {
        return (<DemoRawTextCommands/>)
      }
    },
    {
      name: "demoPrint",
      example: () => {
        return (<DemoPrint boo={"Boo!"} two={2}/>)
      }
    },
    {
      name: "demoPrintDirectives",
      example: () => {
        return (<DemoPrintDirectives
          longVarName={"thisIsSomeRidiculouslyLongVariableName"}
          elementId={"my_element_id"}
          cssClass={"my_css_class"}
        />)
      }
    },
    {
      name: "demoAutoescapeTrue",
      example: () => {
        return (<DemoAutoescapeTrue italicHtml={<i>italic</i>}/>)
      }
    },
    {
      name: "demoAutoescapeFalse",
      example: () => {
        return (<DemoAutoescapeFalse italicHtml={<i>italic</i>}/>)
      }
    },
    {
      name: "demoMsg",
      example: () => {
        return (<DemoMsg name={"Ed"} labsUrl={"http://labs.google.com"}/>)
      }
    },
    {
      name: "demoPlural",
      example: () => {
        return (<DemoPlural eggs={1}/>)
      }
    },
    {
      name: "demoPlural",
      example: () => {
        return (<DemoPlural eggs={2}/>)
      }
    },
    {
      name: "demoPlural",
      example: () => {
        return (<DemoPlural eggs={0}/>)
      }
    },
    {
      name: "demoIf",
      example: () => {
        return (<DemoIf pi={3.14159}/>)
      }
    },
    {
      name: "demoIf",
      example: () => {
        return (<DemoIf pi={2.71828}/>)
      }
    },
    {
      name: "demoIf",
      example: () => {
        return (<DemoIf pi={1.61803}/>)
      }
    },
    {
      name: "demoSwitch",
      example: () => {
        return (<DemoSwitch name={"Fay"}/>)
      }
    },
    {
      name: "demoSwitch",
      example: () => {
        return (<DemoSwitch name={"Go"}/>)
      }
    },
    {
      name: "demoSwitch",
      example: () => {
        return (<DemoSwitch name={"Hal"}/>)
      }
    },
    {
      name: "demoSwitch",
      example: () => {
        return (<DemoSwitch name={"Ivy"}/>)
      }
    },
    {
      name: "demoForeach",
      example: () => {
        return (<DemoForeach persons={[
          {"name": "Jen", "numWaffles": 1},
          {"name": "Kai", "numWaffles": 3},
          {"name": "Lex", "numWaffles": 1},
          {"name": "Mel", "numWaffles": 2},
        ]}/>)
      }
    },

    {
      name: "demoFor",
      example: () => {
        return (<DemoFor numLines={3}/>)
      }
    },
    {
      name: "demoCallWithoutParam",
      example: () => {
        return (<DemoCallWithoutParam name={"Neo"} tripInfo={{name: "Neo", destination: "The Matrix"}}/>)
      }
    },
    {
      name: "demoCallWithParam",
      example: () => {
        return (<DemoCallWithParam
          name={"Oz"}
          companionName={"Pip"}
          destinations={[
            "Gillikin Country",
            "Munchkin Country",
            "Quadling Country",
            "Winkie Country",
          ]}
        />)
      }
    },
    {
      name: "demoCallWithParamBlock",
      example: () => {
        return (<DemoCallWithParamBlock name={"Quo"}/>)
      }
    },
    {
      name: "demoExpressions",
      example: () => {
        return (<DemoExpressions
          currentYear={2008}
          students={[
            {name: "Rob", major: "Physics", year: 1999},
            {name: "Sha", major: "Finance", year: 1980},
            {name: "Tim", major: "Engineering", year: 2005},
            {name: "Uma", major: "Biology", year: 1972},
          ]}
        />)
      }
    },
    {
      name: "demoDoubleBraces",
      example: () => {
        return (<DemoDoubleBraces
          setName={"prime numbers"}
          setMembers={[2, 3, 5, 7, 11, 13]}
        />)
      }
    },
    {
      name: "demoBidiSupport",
      example: () => {
        return (
          <DemoBidiSupport
            title={"2008: A BiDi Odyssey"}
            author={"John Doe, Esq."}
            year={""} keywords={[
              "Bi(Di)",
              "2008 (\u05E9\u05E0\u05D4)",
              "2008 (year)",
            ]}
          />
        )
      },
    },
    {
      name: "demoParamWithKindAttribute",
      example: () => {
        return (
          <DemoParamWithKindAttribute message={"Gopher Kids"} list={["Ada", "Rory", "Liam"]} />
        )
      },
    },
    {
      name: "helloNames",
      example: () => {
        return (
          <HelloNames names={["Ada", "Rory", "Liam"]} />
        )
      },
    },
  ];

  return Examples.map((ex, index: number) => {
    return (
      <>
        <ExampleHeader exampleNum={index} exampleName={ex.name}/>
        <ex.example/>
      </>
    )
  })
}

export default App
