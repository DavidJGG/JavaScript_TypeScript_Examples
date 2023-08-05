const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();
const calculator = require("../Core/Calculadora.js");

describe("Operaciones aditivas22222", () => {
    before(function () {
        // runs before all tests in this block
        var resultGlobal;
    });
    after(function () {
        // runs after all tests in this block
    });
    beforeEach(function () {
        // runs before each test in this block
    });
    afterEach(function () {
        // runs after each test in this block
        resultGlobal = null;
    });
    describe("Probando la suma con expect", () => {
        it("Verificando numero", () => {
            let result = calculator.sum(5,3);
            expect(result).to.be.a('number')
        })

        it("Verificando resultado", () => {
            let result = calculator.sum(5,3);
            expect(result).to.equal(8)
        })
    })

    describe("Probando la resta con should", () => {
        it("Verificando numero", () => {
            resultGlobal = calculator.sum(5,3);
            resultGlobal.should.be.a('number')
        })

        it("Verificando resultado", () => {
            let result = calculator.sub(5,3);
            result.should.equal(2)
        })
    })
})


describe("Operaciones multiplicativas2222", () => {
    describe("Probando la multiplicacion con assert interface from chai", () => {
        it("Verificando numero", () => {
            let result = calculator.mul(5,3);
            assert.typeOf(result, 'number')
        })

        it("Verificando resultado", () => {
            let result = calculator.mul(5,3);
            assert.equal(result, 15)
        })
    })

    describe("Probando la division con assert module", () => {
        it("Verificando numero", () => {
            let res = calculator.div(10,2);
            assert(typeof(res), "number")
        })

        it("Verificando resultado", () => {
            let result = calculator.div(10,2);
            assert(result, 5)
        })

        it("Verificando throw assert", () => {
            assert.throws(()=>{
                calculator.div(10,0)
            }, /^Divisor/)
        })

        it("Verificando throw should", () => {
            should.throw(()=>calculator.div(10,0), /^Divisor/)
        })
    })
})
