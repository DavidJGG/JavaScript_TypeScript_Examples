const { Router } = require('express')
const router = Router();
const { sum, sub, mul, div } = require('../Core/Calculadora.js')

router.get('/calc/:val1/:val2', (req, res) => {
    let v1 = Number(req.params.val1) 
    let v2 = Number(req.params.val2)
    var response = {
        val1: v1,
        val2: v2,
        sum: sum(v1, v2),
        res: sub(v1, v2),
        mul: mul(v1, v2),
        div: div(v1, v2) 
    }
    return res.json(response);
})

module.exports = router;