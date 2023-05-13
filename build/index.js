"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new  NumbersCollection ([10,3,-5,0,1])
// numbersCollection.sort()
// console.log(numbersCollection)
// const charactersCollection = new  CharactersCollection ('fsaXea')
// charactersCollection.sort()
// console.log(charactersCollection)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
//  const sorter = new Sorter(numbersCollection)
//  const sorter = new Sorter(charactersCollection)
// const sorter = new Sorter(linkedList)
// sorter.sort()
//  linkedList.print()
