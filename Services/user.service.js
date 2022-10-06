const userController = require('../Controllers/user.controller')

module.exports = {
    someSyncFun(req,res){
        res.send('some user.')
    },
    async someAsyncFun(req,res){
        const { user } = req.body;

        let mSec = await userController.someAsyncFun(user);
        res.send(`some user after ${mSec/1000} sec.`);
    }
}