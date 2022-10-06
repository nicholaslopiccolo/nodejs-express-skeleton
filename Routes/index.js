let express = require('express');
let router = express.Router();

router.post('/',(req,res)=>{
    res.send({text:'Hello world!!'})
})

module.exports = router
