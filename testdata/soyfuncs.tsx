import * as React from 'react';

export function print(obj: any) :string {
    return (
        <>
            {obj}
        </>
    )
}

export function id(thingToPrint: any) :string {
    return 'this is an id';
}

export function insertWordBreaks(thingToPrint: any, num: number) :string {
    return `${thingToPrint} printed ${num}`
}

// TODO: this doesn't really do what noAutoescape does as it
// introduces a wrapping <div> and there wouldn't have been one in the
// tree before.
export function noAutoescape(thingToPrint: any) :string {
    return (
        <div dangerouslySetHTML={{__html: thingToPrint}} />
    )
}

// TODO: this doesn't really do anything, need to figure out how to handle
export function escapeHtml(thingToPrint: any) :string {
    return (
        <>
            {thingToPrint}
        </>
    )
}

export function isNonnull(arg :any) :boolean {
    return  arg != null;
}

export function length(arg :any) :number {
    const arrayArg = arg as Array<any>;
    return arrayArg.length;
}

export function keys(arg :any) :Array<string> {
    const input = arg as object;
    return Object.keys(input);
}

// TODO: implement this
export function augmentMap(arg1, arg2 :any) :object{
    const map1 = arg1 as object;
    const map2 = arg2 as object;
    return Object.assign({}, map1, map2)
}

export function round(arg :any, precision :number = 0) :number {
    const input = arg as number;
    if (precision === 0) {
        return Math.round(input);
    }

    return Math.round(input * Math.pow(10, precision)) / Math.pow(10, precision);
}

export function floor(arg :any) :number {
    const input = arg as number;
    return Math.floor(input);
}

export function ceiling(arg :any) :number {
    const input = arg as number;
    return Math.ceil(input);
}

export function min(arg1 :any, arg2 :any) :number {
    const input1 = arg1 as number;
    const input2 = arg2 as number;
    return Math.min(input1, input2);
}

export function max(arg1 :any, arg2 :any) :number {
    const input1 = arg1 as number;
    const input2 = arg2 as number;
    return Math.max(input1, input2);
}

export function randomInt(arg :any) :number {
    const input = arg as number;
    return Math.floor(Math.random() * input);
}

export function strContains(haystack, needle :any) :boolean {
    const haystackStr = haystack as string;
    const needleStr = needle as string;
    return haystackStr.indexOf(needleStr) !== -1;
}

export function hasData() :boolean {
    return true
}

export function bidiGlobalDir() :number {
    return 1
}

export function bidiDirAttr(arg :any) :string {
    return 'ltr'
}

export function bidiStartEdge(arg :any) {
    return 'left';
}

export function bidiEndEdge() :string {
    return 'right';
}

export function bidiUnicodeWrap(arg :any) {
    return arg;
}

export function bidiSpanWrap(arg :any) :string {
    return (
        <span dir={'ltr'}>
            {arg}
        </span>
    )
}

export function range(limit :number, init:number =0, increment :number=1 ) :Array<number> {
    const retValue = [];
    for (let index = init; index < limit; index += increment ) {
        retValue.push(index);
    }
    return retValue;
}