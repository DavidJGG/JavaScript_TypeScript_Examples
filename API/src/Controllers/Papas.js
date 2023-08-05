const { Router } = require('express')
const router = Router();

router.get('/papas', (req, res) => {
    return res.send("papas")
})

module.exports = router;