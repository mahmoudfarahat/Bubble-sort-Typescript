"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
//tsc -w 
//tsc --init
// npm init -y 
var sorter_1 = require("./sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('fsaea');
//  const sorter = new Sorter(numbersCollection)
var sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
