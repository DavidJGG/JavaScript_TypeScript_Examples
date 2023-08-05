const { Router } = require('express')
const router = Router();

router.get('/carros', (req, res) => {
    return res.send("carros")
})

module.exports = router;