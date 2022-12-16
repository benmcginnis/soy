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

function App() {

  return (
    <>
      <h3>demoComments</h3>
      <DemoComments />
      <h3>demoLineJoining</h3>
      <DemoLineJoining />
      <h3>demoRawTextCommands</h3>
      <DemoRawTextCommands />
      <h3>demoPrint</h3>
      <DemoPrint boo={"Boo!"} two={2} />
      <h3>demoPrintDirectives</h3>
      <DemoPrintDirectives
        longVarName={"thisIsSomeRidiculouslyLongVariableName"}
        elementId={"my_element_id"}
        cssClass={"my_css_class"}
        />
      <h3>demoAutoescapeTrue</h3>
      <DemoAutoescapeTrue italicHtml={<i>italic</i>}/>
      <h3>demoAutoescapeFalse</h3>
      <DemoAutoescapeFalse italicHtml={<i>italic</i>}/>
      <h3>demoMsg</h3>
      <DemoMsg name={"Ed"} labsUrl={"http://labs.google.com"}/>
      <h3>demoPlural</h3>
      <DemoPlural eggs={1} />
      <h3>demoPlural</h3>
      <DemoPlural eggs={2} />
      <h3>demoPlural</h3>
      <DemoPlural eggs={0} />
      <h3>demoIf</h3>
      <DemoIf pi={3.14159} />
      <h3>demoIf</h3>
      <DemoIf pi={2.71828} />
      <h3>demoIf</h3>
      <DemoIf pi={1.61803} />
      <h3>demoSwitch</h3>
      <DemoSwitch name={"Fay"} />
      <h3>demoSwitch</h3>
      <DemoSwitch name={"Go"} />
      <h3>demoSwitch</h3>
      <DemoSwitch name={"Hal"} />
      <h3>demoSwitch</h3>
      <DemoSwitch name={"Ivy"} />
      <h3>demoForeach</h3>
      <DemoForeach persons={[
        {"name": "Jen", "numWaffles": 1},
        {"name": "Kai", "numWaffles": 3},
        {"name": "Lex", "numWaffles": 1},
        {"name": "Mel", "numWaffles": 2},
      ]} />

      <h3>demoFor</h3>
      <DemoFor numLines={3}/>
      <h3>demoCallWithoutParam</h3>
      <DemoCallWithoutParam name={"Neo"} tripInfo={{name: "Neo", destination: "The Matrix"}}/>
      <h3>demoCallWithParam</h3>
      <DemoCallWithParam
        name={"Oz"}
        companionName={"Pip"}
        destinations={[
          "Gillikin Country",
          "Munchkin Country",
          "Quadling Country",
          "Winkie Country",
        ]}
      />
      <h3>demoCallWithParamBlock</h3>
      <DemoCallWithParamBlock name={"Quo"}/>
      <h3>demoExpressions</h3>
      <DemoExpressions
        currentYear={2008}
        students= {[
          {name: "Rob", major: "Physics", year: 1999},
          {name: "Sha", major: "Finance", year: 1980},
          {name: "Tim", major: "Engineering", year: 2005},
          {name: "Uma", major: "Biology", year: 1972},
        ]}
      />
      <h3>demoDoubleBraces</h3>
      <DemoDoubleBraces
        setName={"prime numbers"}
        setMembers={[2, 3, 5, 7, 11, 13]}
      />
    </>
  )
}

export default App
