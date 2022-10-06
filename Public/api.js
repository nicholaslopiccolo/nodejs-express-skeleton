axios.post('/user', {user:1})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

axios.post('/user/async', {user:1})
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

axios.head('/u')
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})