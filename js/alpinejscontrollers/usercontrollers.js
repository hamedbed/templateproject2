document.addEventListener('alpine:init', () => {
    Alpine.data('usersdata',function(){
        return{
            users:[],
            getusers(){ 
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                     this.users=res.data
                     console.log(res)
                 }) 
            }
        }
    })
})

// message: 'i love css',
            // asami= ['ali','hasan','reyhane'],
            // testFunc() 
            //     alert(this.message)
  