function getNodo(data, ant, sig) {
    return {
        data: data,
        ant: ant,
        sig: sig
    }
}

class DoubleList {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    insertar(data) {
        let nodo = getNodo(data, null, null);
        if (this.primero == null) {
            this.primero = nodo;
            this.ultimo = nodo;
        } else {
            this.ultimo.sig = nodo;
            nodo.ant = this.ultimo;
            this.ultimo = nodo;
        }
    }
}


var ls = new DoubleList();

function insertar(data) {
    ls.insertar(data)
    printHtml()
}

function printHtml() {
    let aux = ls.primero;
    document.getElementById("msg").innerHTML = "NULO";
    while (aux != null) {
        let ant = document.getElementById("msg").innerHTML;
        document.getElementById("msg").innerHTML = ant + " <--> " + `
        <div class="caja">
            <p class="number">${aux.data}</p>
        </div>
        `
        aux = aux.sig;
    }
    let ant = document.getElementById("msg").innerHTML;
    document.getElementById("msg").innerHTML = ant + "NULO"
}

