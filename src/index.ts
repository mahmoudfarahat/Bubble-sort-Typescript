import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
//tsc -w 
//tsc --init
// npm init -y 

import { Sorter } from "./sorter"

 


const numbersCollection = new  NumbersCollection ([10,3,-5,0])
const charactersCollection = new  CharactersCollection ('fsaea')
 
//  const sorter = new Sorter(numbersCollection)
 const sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(sorter.collection) 