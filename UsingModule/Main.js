
/**
 * type:
 *  commonsJs => require
 *  module => import
 */

//import { DoubleList } from "./Lista.js";

import { DoubleList } from "./Lista.js";

var lista = new DoubleList();
lista.add(10);
lista.add(20);
lista.add(30);
lista.print()

console.log("=================")

var lista = new DoubleList();
lista.add(30);
lista.add(20);
lista.add(10);
lista.print()