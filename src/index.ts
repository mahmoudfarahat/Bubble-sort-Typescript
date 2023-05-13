import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
//tsc -w 
//tsc --init
// npm init -y 

import { Sorter } from "./sorter"
import { LinkedList } from './LinkedList';

 


// const numbersCollection = new  NumbersCollection ([10,3,-5,0,1])

// numbersCollection.sort()
// console.log(numbersCollection)
// const charactersCollection = new  CharactersCollection ('fsaXea')
// charactersCollection.sort()

// console.log(charactersCollection)

 const linkedList = new LinkedList()
 linkedList.add(500)
 linkedList.add(-10)
 linkedList.add(-3)
 linkedList.add(4)

 linkedList.sort()
  linkedList.print()

//  const sorter = new Sorter(numbersCollection)
//  const sorter = new Sorter(charactersCollection)
// const sorter = new Sorter(linkedList)

// sorter.sort()
//  linkedList.print()