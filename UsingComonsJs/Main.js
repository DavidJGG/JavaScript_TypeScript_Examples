
/**
 * type:
 *  commonsJs => require
 *  module => import
 */

//import { DoubleList } from "./Lista.js";
const {DoubleList} = require('./Lista')
var lista = new DoubleList();
lista.add(1);
lista.add(2);
lista.add(3);
lista.print()

console.log("=================")

var lista = new DoubleList();
lista.add(3);
lista.add(2);
lista.add(1);
lista.print()