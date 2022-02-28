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

// Simple examples.
// Author: Kai Huang

import * as React from 'react';
import {hasData} from '../soyfuncs';

/**
 * Says hello to the world.
 */
export function SoyExamplesSimple__helloWorld() {
    // TODO: implement i18n
    return (
        <>
        `Hello world!`
        </>
    )
}

export interface SoyExamplesSimple__helloNameProps {
    name?: any
}

/**
 * Says hello to a person (or to the world if no person is given).
 * @param props HelloNameProps
 * @param? props.name The name of the person to say hello to.
 */
export function SoyExamplesSimple__helloName(props: SoyExamplesSimple__helloNameProps) {
    if (hasData() && props.name) {
        return (
            <>
                // TODO: implement i18n
                `Hello ${props.name}`
            </>
        )
    }

    return (
        <SoyExamplesSimple__helloWorld />
    )
}

export interface SoyExamplesSimple__helloNamesProps {
    names: Array<any>
}

/**
 * Say hello to a list of people.
 * @param props HelloNamesProps
 * @param props.names List of names of the people to say hello to.
 */
export function SoyExamplesSimple__helloNames(props: SoyExamplesSimple__helloNamesProps) {
    if (props.names.length > 0) {
        return (
            <ul>
                {props.names.map(( name, index) => {
                    return (
                        <React.Fragment key={index}>
                            <SoyExamplesSimple__helloName name={name} />
                        </React.Fragment>
                    )
                })}
            </ul>
        )

    }
    return (
        <SoyExamplesSimple__helloWorld />
    )
}
