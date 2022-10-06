module.exports = {
    someSyncFun(){

    },
    async someAsyncFun(user){
        const mSec = 5000;

        const wait = (ttd) => new Promise((resolve) => setTimeout(resolve, ttd));
        await wait(mSec)
        
        return mSec
    }
}