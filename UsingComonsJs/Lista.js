
/**
 * type:
 *  commonsJs => require
 *  module => import
 */
//import Nodo from './Nodo.js'

const {Nodo} = require('./Nodo');

class DoubleList {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    add(data) {
        let nodo = new Nodo(data, null, null);
        if (this.primero == null) {
            this.primero = nodo;
            this.ultimo = nodo;
        } else {
            nodo.anterior = this.ultimo;
            this.ultimo.siguiente = nodo;
            this.ultimo = nodo;
        }
    }

    print() {
        let aux = this.primero;
        while (aux != null) {
            console.log(aux.data);
            aux = aux.siguiente;
        }
    }
}

module.exports.DoubleList = DoubleList;