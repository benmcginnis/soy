// Copyright 2008 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Features examples.
// Author: Kai Huang

import * as React from 'react';
import { GLOBAL_INT, GLOBAL_STR, GLOBAL_BOOL} from "./Globals";
import {
    print,
    escapeHtml,
    id,
    insertWordBreaks,
    noAutoescape,
    round,
    range,
    hasData,
    randomInt,
    ceiling, bidiDirAttr, bidiSpanWrap, bidiUnicodeWrap, bidiGlobalDir, bidiEndEdge
} from "../soyfuncs";
import {SoyExamplesSimple__helloWorld} from "./Simple";

/**
 * Demo comments.
 */
export function SoyExamplesFeatures__demoComments() {
    return (
        <>
            blah blah<br/>  {/* comment comment */}
            {/* comment
             comment */}

            {/* Note: The '//' below doesn't start a comment because it's preceded by a non-whitespace. */}

            http://www.google.com<br/>
        </>
    )
}


/**
 * Demo line joining.
 */
export function SoyExamplesFeatures__demoLineJoining() {
    return (
        <>
            {/* Without any HTML or Soy tags at the end of the first line or start of the second line, the two} () */}
            {/* lines will be joined by adding a space. */}
            First
            second.<br/>
            {/* With either an HTML or Soy tag bordering the join location (end of the first line or start of () */}
            {/* the second line), the lines will be joined without adding a space. */}
            {/* Example with HTML tag at end of first line: */}
            <i>First</i>
            second.<br/>
            {/* Example with Soy tag at start of second line: () */}

            First
            {''}second.<br/>
            {/* To add a space to a line-joining location where a space would not normally be added (because () */}
            {/* (it borders an HTML or Soy tag), use the {sp} tag. */}
            <i>First</i>{' '}
            second.<br/>
            {/* To prevent a space from being added to a line-joining location where a space would normally be () */}
            {/* added, use the {nil} tag. This tag prints nothing (empty string), but causes the line-joining */}
            {/* location to border a Soy tag, thus preventing the line-joining space. */}
            First{''}
            second.<br/>
        </>
    )
}


/**
 * Demo raw text commands.
 */
export function SoyExamplesSimple__demoRawTextCommands() {
    return (
        <>
            <pre>
            // Special characters.
            Space       : AA{' '}BB<br/>
            Empty string: AA{''}BB<br/>
            New line    : AA{'\n'}BB<br/>
            Carriage ret: AA{'\r'}BB<br/>
            Tab         : AA{'\t'}BB<br/>
            Left brace  : AA{'{'}BB<br/>
            Right brace : AA{'}'}BB<br/>

            // Literal block.
            // Note: Lines are not joined and indentation is not stripped, so the new line and 2-space indent
            // between 'CC' and 'DD' will appear in the output exactly as written.
            Literal     : {`AA	BB { CC
            DD } EE {sp}{\n}{rb} FF`}
            </pre>
        </>
    )
}

export interface SoyExamplesSimple__demoPrint__props {
    boo: any
    two: any
}

/**
 * Demo 'print'.
 * @param props SoyExamplesSimple__demoPrint__props
 * @param props.boo Something scary.
 * @param props.two Preferably the number 2.
 */
export function SoyExamplesSimple__demoPrint(props: SoyExamplesSimple__demoPrint__props) {
    return (
        <>
            {print('Boo!')}<br/>  // print a string
            {'Boo!'}<br/>  // the command name 'print' is implied
            {1 + 2}<br/>  // print the result of an expression
            {props.boo}<br/>  // print a data value
            {1 + props.two}<br/>  // print the result of an expression that uses a data value
            {GLOBAL_INT}, {GLOBAL_BOOL}.<br/>  // print globals
        </>
    )
}

export interface SoyExamplesSimple__demoPrintDirectives__props {
    longVarName: any
    elementId: any
    cssClass: any
}

/**
 * Demo print directives.
 * @param props SoyExamplesSimple__demoPrintDirectives__props
 * @param props.longVarName Some ridiculously long variable name.
 * @param props.elementId The id for an element.
 * @param props.cssClass A CSS class name.
 */
export function SoyExamplesSimple__demoPrintDirectives(props: SoyExamplesSimple__demoPrintDirectives__props) {
    return (
        <>
            insertWordBreaks:<br/>
            <div style={{width:'150px', border:'1px solid #00CC00'}}>
                {props.longVarName}<br/>  // will run outside the div border
                {insertWordBreaks(props.longVarName, 5)}<br/>  {/* will be allowed to wrap*/}
            </div>

            id:<br/>
            {/* The 'id' and 'class' attributes of this span will not be needlessly autoescaped because they */}
            {/* are marked with the print directive '|id'. */}
            {/* Note: Only use '|id' with identifiers like id and class (otherwise use '|noAutoescape') */}
            <span id={id(props.elementId)} className={id(props.cssClass)} style={{border:'1px solid #000000'}}>
                Hello
            </span>
        </>
    )
}

export interface SoyExamplesSimple__demoAutoescapeTrue__props {
    italicHtml: any
}

/**
 * Demo autoescape true.
 * @param props SoyExamplesSimple__demoAutoescapeTrue__props
 * @param props.italicHtml A string surrounded by HTML italics tags.
 */
export function SoyExamplesSimple__demoAutoescapeTrue(props: SoyExamplesSimple__demoAutoescapeTrue__props) {
    return (
        <>
            {/* Note: We explicitly list autoescape="true" in the 'template' tag for demonstration. Usually ( */}
            {/* it's omitted because "true" is the attribute's default value. */}
            {/* Note: The parameter name 'italicHtml' demonstrates the good practice of adding the suffix */}
            {/* 'Html' to identify strings that may contain HTML tags and are known to be safe. */}
            {props.italicHtml}<br/>  {/* autoescape causes HTML tags to appear literally */}
            {noAutoescape(props.italicHtml)}<br/>  {/* noAutoescape directive prevents autoescaping */}
        </>
    )
}

export interface SoyExamplesSimple__demoAutoescapeFalse__props {
    italicHtml: any
}

/**
 * Demo autoescape false.
 * @param props SoyExamplesSimple__demoAutoescapeFalse__props
 * @param props.italicHtml A string surrounded by HTML italics tags.
 */
export function SoyExamplesSimple__demoAutoescapeFalse(props: SoyExamplesSimple__demoAutoescapeFalse__props) {
    return (
        <>
            {/* Note: Use autoescape="false" with care, as more cross-site scripting bugs may slip through. */}
            {props.italicHtml}<br/> {/* no autoescaping will be applied */}
            {escapeHtml(props.italicHtml)}<br/>  {/* escapeHtml directive applies HTML escaping */}
        </>
    )
}

export interface SoyExamplesSimple__demoMsg__props {
    name :any
    labsUrl :any
}

/**
 * Demo 'msg'.
 * @param props SoyExamplesSimple__demoMsg__props
 * @param props.name The name of the person to say hello to.
 * @param props.labsUrl The URL of the unreleased 'Labs' feature.
 */
export function SoyExamplesSimple__demoMsg(props :SoyExamplesSimple__demoMsg__props) {
    return (
        <>
            {/*{msg desc="Says hello to a person."} */}
        Hello {props.name}!
            {/*{/msg}*/}<br/>

    {/*{msg desc="Link to the unreleased 'Labs' feature."}*/}
        Click <a href={props.labsUrl}>here</a> to access Labs.
    {/*{/msg}*/}<br/>

    {/* The 'meaning' attribute is used when you have two messages that are exactly the same string in */}
    {/* English, but may be translated to different strings in other languages. The 'meaning' attribute */}
    {/* should then be a short string that distinguishes the two strings, and will be used for */}
    {/* generating different message ids. The 'meaning' will not be shown to translators, so you must */}
    {/* still communicate all the details in the 'desc' text. */}
    {/*{msg meaning="noun" desc="The word 'Archive' used as a noun, i.e. an information store."}*/}
        Archive
    {/*{/msg}*/}<br/>
    {/*{msg meaning="verb" desc="The word 'Archive' used as a verb, i.e. to store information."}*/}
        Archive
    {/*{/msg}*/}
    </>
    )
}

export interface SoyExamplesSimple__demoIf__props {
    pi :any
}

/**
 * Demo 'if'.
 * @param props
 * @param props.pi An approximate value for pi.
 */
export function SoyExamplesSimple__demoIf(props :SoyExamplesSimple__demoIf__props) {
    return (
        <>
            {(() => {
                if (round(props.pi, 2) == 3.14) {
                    return (
                        <>
                            {/*{msg desc="Example: 3.1416 is a good approximation of pi."}*/}
                                {props.pi} is a good approximation of pi.)
                            {/*{/msg}*/}
                        </>
                )
                } else if (round(props.pi) == 3) {
                    return (
                        <>
                            {/*{msg desc="Example: 3.1 is a bad approximation of pi."}*/}
                                {props.pi} is a bad approximation of pi.
                            {/*{/msg}*/}
                        </>
                    )
                } else {
                    return (
                        <>
                            {/*{msg desc="Example: 5 is nowhere near the value of pi."}*/}
                                {props.pi} is nowhere near the value of pi.
                            {/*{/msg}*/}
                        </>
                    )
                }
            })()}
            <br/>
        </>
    )
}

export interface SoyExamplesSimple__demoPlural__props {
    eggs :any
}

/**
 * Demo 'plural'.
 * @param props
 * @param props.eggs The number of eggs you need to buy
 */
export function SoyExamplesSimple__demoPlural(props :SoyExamplesSimple__demoPlural__props) {
    // TODO: Implement this
    return (
        <>
            {/*{msg desc="The number of eggs you need."}*/}
            {/*{plural $eggs}*/}
            {/*{case 1}You have one egg*/}
            {/*{default}You have {$eggs} eggs*/}
            {/*{/plural}*/}
            {/*{/msg}*/}
        <br/>
    </>
    )
}

export interface SoyExamplesSimple__demoSwitch__props {
    name :any
}

/**
 * Demo 'switch'.
 * @param props
 * @param props.name The name of a kid.
 */
export function SoyExamplesSimple__demoSwitch(props :SoyExamplesSimple__demoSwitch__props) {
    return (
        <>
            Dear {props.name}, &nbsp;

            {(() => {
                switch (props.name) {
                    case 'Go':
                        return (
                            <>
                                You've been bad this year.
                            </>
                        )
                    case 'Fay':
                    case 'Ivy':
                        return (
                            <>
                                You've been good this year.
                            </>
                        )
                    default:
                        return (
                            <>
                                You don't really believe in me, do you?
                            </>
                        )
                }
            })()}

            &nbsp; --Santa<br/>
    </>
    )
}

export interface SoyExamplesSimple__demoForeach__props {
    persons :any
}

/**
 * Demo 'foreach'.
 * @param props
 * @param props.persons List of persons. Each person must have 'name' and 'numWaffles'.
 */
export function SoyExamplesSimple__demoForeach(props :SoyExamplesSimple__demoForeach__props) {
    return (
        <>
            {(()=>{
                if (props.persons.length >= 0) {
                    return (
                        <>
                            {props.persons.map((person, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {(()=>{
                                            if (index === 0) {
                                                return (
                                                    <>
                                                        First,
                                                    </>
                                                )
                                            } else if (index === props.persons.length -1) {
                                                return (
                                                    <>
                                                        Finally,
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        Then
                                                    </>
                                                )
                                            }
                                        })}
                                        {' '}
                                        {(()=>{
                                            if (person.numWaffles == 1){
                                                return (
                                                    <>
                                                        {person.name} ate 1 waffle.
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        {person.name} ate {person.numWaffles} waffles.
                                                    </>
                                                )
                                            }
                                        })()}
                                        <br/>
                                    </React.Fragment>
                                )
                            })}
                        </>
                    )
                } else {
                    return (
                        <>
                            Nobody here ate any waffles.<br/>
                        </>
                    )
                }
            })}
        </>
    )
}

export interface SoyExamplesSimple__demoFor__props {
    numLines :any
}

/**
 * Demo 'for'.
 * @param props
 * @param props.numLines The number of lines to display.
 */
export function SoyExamplesSimple__demoFor(props :SoyExamplesSimple__demoFor__props) {
    return (
        <>
            {range(props.numLines).map((i) =>{
                return (
                    <React.Fragment key={i}>
                        Line {i + 1} of {props.numLines}.<br/>
                    </React.Fragment>
                )
            })}

            {range(2, 10, 2).map((i)=>{
                return (
                    <React.Fragment key={i}>
                        {i}...{' '}
                    </React.Fragment>
                )
            })}
            Who do we appreciate?<br/>
    </>
    )
}

export interface SoyExamplesSimple__demoCallWithoutParam__props {
    name :any
    tripInfo :any
}

/**
 * Demo 'call' without 'param's.
 * @param props
 * @param props.name The name of the person who took a trip.
 * @param props.tripInfo The full record of the trip ('name' and 'destination').
 */
export function SoyExamplesSimple__demoCallWithoutParam(props :SoyExamplesSimple__demoCallWithoutParam__props) {
    return (
        <>

            {/* Call template defined in a different file. */}
            <SoyExamplesSimple__helloWorld/><br/>

            {/* Call template defined in this file. */}
            <TripReport_ /><br/>

            {/* Pass all of the current template data to the callee. */}
            {/* Note: Only the top-level key 'name' will be used because it matches the name of a parameter */}
            {/* expected by the callee. */}
            <TripReport_ {...props}/><br/>

            {/* Pass a subset of the current template data to the callee. */}
            <TripReport_ {...props.tripInfo}/><br/>

        </>
    )
}

export interface SoyExamplesSimple__demoCallWithParam__props {
    name :any
    companionName :any
    destinations :any
}

/**
 * Demo 'call' with 'param's.
 * @param props
 * @param props.name The name of the person who took the trips.
 * @param props.companionName The name of the person who went along for the odd-numbered trips only.
 * @param props.destinations List of destinations visited by this person.
 */
export function SoyExamplesSimple__demoCallWithParam(props :SoyExamplesSimple__demoCallWithParam__props) {
    return (
        <>
            {props.destinations.map((destination, index)=>{
                return (
                    <React.Fragment key={index}>
                        {/* Pass the current template data and also pass a parameter. */}
                        {/* Note: Only passing data="all" is not sufficient for providing the 'destination' parameter of */}
                        {/* the callee because $destination is a local variable here, not part of the template data */}
                        {/* passed by data="all". */}
                        <TripReport_ {...props} destination={destination} /><br/>
                        {(()=>{
                            if (index % 2 === 0) { // even index means odd-numbered trip since index is 0-based
                                // Pass two parameters.
                                return (
                                    <>
                                        <TripReport_ name={props.companionName} destination={destination} /><br/>
                                    </>
                                )
                            }
                        })()}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export interface SoyExamplesSimple__demoCallWithParamBlock__props {
    name :any
}

/**
 * Demo 'call' with a 'param' block.
 * @param props
 * @param props.name The name of the person who took the trip.
 */
export function SoyExamplesSimple__demoCallWithParamBlock(props :any) {
    return (
        <>
            {/* Pass 2 parameters, one of which is built using Soy code. */}
            <TripReport_ name={props.name} destination={(()=>{
                switch (randomInt(3)) {
                    case 0:
                        return (
                            <>
                                Boston
                            </>
                        )
                    case 1:
                        return (
                            <>
                                Singapore
                            </>
                        )
                    case 2:
                        return (
                            <>
                                Zurich
                            </>
                        )
                }
            })()} />
            <br/>
        </>
    )
}

interface tripReport___props {
    name? :any
    destination? :any
}

/**
 * Private helper for demoCallWithoutParams, demoCallWithParams, and demoCallWithParamBlock.
 * Reports on a trip.
 * @param props
 * @param? props.name The name of the person who took a trip (optional).
 * @param? props.destination The destination of the trip (optional).
 */
function TripReport_(props :tripReport___props) {
    return (
        <>
            {/* Note: The template name demonstrates the good practice of adding a trailing underscore to */}
            {/* private templates (template that should never be called from hand-written code). */}

            {/* Note: All parameters to this template are optional. Therefore, below, we must check for */}
            {/* "not (hasData() and $name)" rather than simply "not $name" because if absolutely no data is */}
            {/* passed, then evaluating "$name" will cause an exception. */}

            {(() =>{
                if (!(hasData() && props.name)) {
                    return (
                        <>
                            {/* Note: The message below demonstrates that the 'desc' attribute can be left empty. However, */}
                            {/* this is not recommended except for the simplest messages, otherwise you risk confusing some */}
                            {/* translators and getting poor translations. */}
                            {/*{msg desc=""}*/}
                                A trip was taken.
                            {/*{/msg}*/}
                        </>
                    )
                } else if (!props.destination) {
                    return (
                        <>
                            {/*{msg desc="Example: Alice took a trip."}*/}
                                {props.name} took a trip.
                            {/*{/msg}*/}
                        </>
                    )
                } else {
                    return (
                        <>
                            {/*{msg desc="Example: Alice took a trip to wonderland."}*/}
                                {props.name} took a trip to {props.destination}.
                            {/*{/msg}*/}
                        </>
                    )
                }
            })()}
        </>
    )
}

export interface SoyExamplesSimple__demoParamWithKindAttribute {
    message :any
    list :any
}

// TODO: figure out how to implement this contextual autoescaping
/**
 * Demo {param} blocks with 'kind' attribute.
 * @param props
 * @param props.message A message text.
 * @param props.list A list of things.
 */
export function SoyExamplesSimple__demoParamWithKindAttribute(props :SoyExamplesSimple__demoParamWithKindAttribute) {
    // autoescape="contextual"
    return (
        <>
            <div>
                {/* Note that the {param} blocks for the message and listItems parameter are declared to have */}
                {/* content of kind HTML. This instructs the contextual autoescaper to process the content of */}
                {/* these blocks as HTML, and to wrap the the value of the parameter as a soydata.SanitizedHtml */}
                {/* object. */}
                <DemoParamWithKindAttributeCallee_
                    // kind="html"
                    message={(()=>{
                        return (
                            <>
                                <b>{props.message}</b>
                            </>
                        )
                    })()}
                    // kind="html"
                    listItems={(()=>{
                        return (
                            <>
                                {props.list.map((i)=>{
                                    return (
                                        <React.Fragment key={i}>
                                            <li>{i}</li>
                                        </React.Fragment>
                                    )
                                })}
                            </>
                        )
                    })()}
                />
            </div>
        </>
    )
}

interface DemoParamWithKindAttributeCallee___props {
    message :any
    listItems :any
}

/**
 * Demo {param} blocks with 'kind' attribute.
 * @param props
 * @param props.message A message with HTML markup.
 * @param props.listItems A HTML-formatted list.
 */
function DemoParamWithKindAttributeCallee_(props :DemoParamWithKindAttributeCallee___props) {
    // private="true" autoescape="contextual"
    // TODO: how to actually mimic this in jsx?
    return (
        <>
            {/* Note that both $message and $listItems contain HTML markup produced by a {param} block in the */}
            {/* the calling template.  Since the {param} blocks are declared to have HTML content, their values */}
            {/* are wrapped as soydata.SanitizedHtml objects.  This in turn causes them to be emitted here */}
            {/* without further escaping.  In particular, it is not necessary to use the |noAutoescape print */}
            {/* directive to prevent double-escaping. */}
            <div>
                {props.message}
            </div>
            <ol>
                {props.listItems}
            </ol>
        </>
    )
}

export interface SoyExamplesSimple__demoExpressions__props {
    students :any
    currentYear :any
}

/**
 * Demo expressions.
 * @param props
 * @param props.students Nonempty list of students. Each student must have 'name', 'major', and 'year'.
 * @param props.currentYear The current year.
 */
export function SoyExamplesSimple__demoExpressions(props :SoyExamplesSimple__demoExpressions__props) {
    return (
        <>
            First student's major: {props.students[0].major}<br/>
            Last student's year: {props.students[props.students.length - 1].year}<br/>
            Random student's major: {props.students[randomInt(props.students.length)].major}<br/>

            {props.students.map((student, index, arr)=>{
                return (
                    <React.Fragment key={index}>
                        {student.name}:
                        {(()=>{
                            if (index === 0) {
                                return (
                                    <>
                                        {' '}First.
                                    </>
                                )
                            } else if (index === arr.length) {
                                return (
                                    <>
                                        {' '}Last.
                                    </>
                                )
                            // Note: must use floor() in next check since division is floating-point.
                            } else if (index === ceiling(props.students.length / 2) -1) {
                                return (
                                    <>
                                        {' '}Middle.
                                    </>
                                )
                            }
                        })()}
                        {(()=>{
                            if (index % 2 === 1) { return <> Even.</> }
                        })()}
                        {' '}{student.major}.
                        {(()=>{
                            if (student.major === 'Physics' || student.major === 'Biology') { return <> Scientist.</> }
                        })()}
                        {(()=>{
                            if (props.currentYear - student.year < 10) { return <> Young.</> }
                        })()}
                        {/* The following print statement prints "70s", "80s", "90s", or "00s". Note that "00s" is a */}
                        {/* special case since using the same expression would yield "0s", not "00s". */}
                        {' '}{student.year < 2000 ? round(student.year - 1905, -1) + 's' : '00s'}.
                        {/* Equivalent to previous line. */}
                        {' '}{(()=>{
                            if (student.year < 2000) {
                                return (
                                    <>
                                        {round(student.year - 1905, -1)}
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        00
                                    </>
                                )
                            }
                        })()}s.
                        <br/>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export interface SoyExamplesSimple__demoDoubleBraces__props {
    setName :any
    setMembers :any
}

/**
 * Demo double braces.
 * @param props
 * @param props.setName The name of the infinite set.
 * @param props.setMembers List of the first few members of the set.
 */
export function SoyExamplesSimple__demoDoubleBraces(props :SoyExamplesSimple__demoDoubleBraces__props) {
    // TODO: i18n
    return (
        <>
            {/* If a Soy tag needs to have brace characters within, use double braces to delimit the tag. */}
        {/*{{msg desc="Example: The set of prime numbers is {2, 3, 5, 7, 11, 13, ...}."}}*/}
            {/* Note: This message also demonstrates a useful trick. Since a 'msg' block cannot contain a */}
            {/* 'foreach' statement (impossible to translate as one message), we use a 'call' to a helper */}
            {/* template that contains the 'foreach' loop. In order to use this trick, please observe the */}
            {/* following: (a) the output of the 'call' must not contain translated content, otherwise the */}
            {/* message would be translated in multiple parts and may not read correctly in some languages, */}
            {/* (b) since the whole 'call' turns into a single placeholder, be sure to provide a clear */}
            {/* description and example to the translator. */}
            The set of {props.setName} is {'{'}
            <BuildCommaSeparatedList_ items={props.setMembers} />
            , ...{'}'}.
        {/*{/msg}*/}
        </>
    )
}

interface BuildCommaSeparatedList___props {
    items :any
}

/**
 * Private helper to build a comma separated list.
 * @param props
 * @param props.items The list of items.
 */
function BuildCommaSeparatedList_(props :BuildCommaSeparatedList___props) {
    return (
        <>
            {props.items.map((item, index, arr) => {
                return (
                    <React.Fragment key={index}>
                        {(()=>{
                            if (!(index === 0)) {
                                return (
                                    <>
                                        ,{' '}
                                    </>
                                )
                            }
                        })()}
                        {item}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export interface SoyExamplesSimple__demoBidiSupport__props {
    title :any
    author :any
    year :any
    keywords :any
}

/**
 * Demo BiDi support.
 * @param props
 * @param props.title Book title.
 * @param props.author Author's name.
 * @param props.year Year published.
 * @param props.keywords List of keywords.
 */
export function SoyExamplesSimple__demoBidiSupport(props :SoyExamplesSimple__demoBidiSupport__props) {
    return (
        <>
        {/* If $title has the opposite directionality relative to the overall locale, it needs to be */}
        {/* declared as such using the dir attribute on the element around it. Otherwise, it may be */}
        {/* garbled. For example, in an RTL page, an LTR value like "101 Dalmatians!" will be displayed */}
        {/* as "!Dalmatians 101". */}
        {/* */}
        {/* Setting the dir attribute on a block element like <div> has the side-effect of setting its */}
        {/* default alignment. In some cases, this is desirable, since text is generally more readable */}
        {/* when start-aligned. In such cases, we declare directionality using the bidiDirAttr() function, */}
        {/* which returns dir="ltr" for an LTR value in an RTL locale, dir="rtl" for an RTL value in an LTR */}
        {/* locale, and an empty string otherwise. */}
        {/* */}
        <div id="title1" style="font-variant:small-caps" dir={bidiDirAttr(props.title)}>
            {props.title}
        </div>

        {/* In other cases, changing alignment may do more harm than good by upsetting the layout of the */}
        {/* page, and we do not want to do it. Our $title seems to be one such case. To avoid setting the */}
        {/* dir attribute on the <div>, we declare $title's directionality using the |bidiSpanWrap print */}
        {/* directive, which wraps the value to be printed in a <span dir="ltr">, <span dir="rtl">, or */}
        {/* nothing at all when it has the same directionality as the locale. */}
        <div id="title2" style="font-variant:small-caps">
            {bidiSpanWrap(props.title)}
        </div>

        {/* The |bidiSpanWrap directive is in fact the usual way to declare directionality. One of its */}
        {/* advantages is that it can be used when the possibly opposite-directionality value, like our */}
        {/* $author here, is not already wrapped in an element of its own, without adding to the size of */}
        {/* the output in the usual case of same directionality. */}
        {/* */}
        {/* Another even more important advantage is that it prevents an opposite-directionality value */}
        {/* from "sticking" to a number or another opposite-directionality string following it in-line. In */}
        {/* this case, for example, it makes sure we get 'by HEBREW NAME (2009)', not */}
        {/* 'by 2009) HEBREW NAME)'. */}
        {/*{msg desc="Indicates who wrote the book and when, e.g. 'by Rudyard Kipling (1892)'"}*/}
            by {bidiSpanWrap(props.author)} ({props.year})
        {/*{/msg}*/}

        <div id="choose_a_keyword">
            {/* Please note that messages, by definition being in the language of the overall locale, can */}
            {/* not be of the opposite directionality and do not need directionality declaration. */}
            {/*{msg desc="Ask user to pick best keyword"}*/}
                Your favorite keyword
            {/*{/msg}*/}
            :{' '}
            <select>
                {props.keywords.map((keyword, index, arr) => {
                    return (
                        <React.Fragment key={index}>
                            {/* Mark-up is not allowed under the option element, and setting its dir attribute does not */}
                            {/* do what one would expect. The only way to prevent the garbling of opposite- */}
                            {/* directionality options is to use |bidiUnicodeWrap, which wraps its input in Unicode BiDi */}
                            {/* formatting characters that declare its directionality. So why not always use */}
                            {/* |bidiUnicodeWrap instead of |bidiSpanWrap? Because the W3C strongly deprecates the use */}
                            {/* of the formatting characters it uses except in places where mark-up cannot be used. */}
                            <option value={keyword}>{bidiUnicodeWrap(keyword)}</option>
                        </React.Fragment>
                    );
                })}
            </select>
        </div>

        {/* Since most of the layout of an RTL page is supposed to be the mirror image of an LTR page, */}
        {/* most instances of 'left' and 'right' in the style should be replaced with {bidiStartEdge()} */}
        {/* and {bidiEndEdge()}, respectively. Here, we want the Help link at the "far" edge of the page, */}
        {/* i.e. on the right in LTR and on the left in RTL. */}
        <a href="#" style={{float: bidiEndEdge()}}>
            {/*{msg desc="Link to Help"}*/}
                Help
            {/*{/msg}*/}
        </a>
        <br/>

    </>
    )
}


/**
 * Template that outputs -1 in a right-to-left page and 1 in a left-to-right page, i.e. basically
 * exposes the results of Soy's bidiGlobalDir() to scripts.
 */
export function SoyExamplesSimple__bidiGlobalDir() {
    return (
        <>
            {bidiGlobalDir()}
        </>
    )
}

export interface SoyExamplesSimple__exampleHeader__props {
    exampleNum :any
    exampleName :any
}

/**
 * Template for printing the header to add before each example.
 * @param props
 * @param props.exampleNum The number of the example.
 * @param props.exampleName The name of the example.
 */
export function SoyExamplesSimple__exampleHeader(props :SoyExamplesSimple__exampleHeader__props) {
    return (
        <>
            <hr/>
            <b>{props.exampleNum}. {props.exampleName}</b><br/>
        </>
    )
}
