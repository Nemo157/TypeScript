﻿// no error
var numStrTuple: [number, string] = [5, "hello"];
var numStrTuple2: [number, string] = [5, "foo", true];
var numStrBoolTuple: [number, string, boolean] = [5, "foo", true];
var objNumTuple: [{ a: string }, number] = [{ a: "world" }, 5];
var strTupleTuple: [string, [number, {}]] = ["bar", [5, { x: 1, y: 1 }]];
numStrTuple = numStrTuple2;
numStrTuple = numStrBoolTuple;

// error
objNumTuple = [ {}, 5];
numStrBoolTuple = numStrTuple;
var strStrTuple: [string, string] = ["foo", "bar", 5];
