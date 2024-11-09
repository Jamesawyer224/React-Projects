
import {text,hello} from './extra.js';
import {readFile} from  'fs/promises';

//  const extra = require('./extra.js');
//  console.log(extra.text);
  
 
console.log(text);
console.log("test log from index.js");

async function txtfile(){

var deta = await readFile('./sample.txt','utf8');
console.log(data);
}

txtfile()