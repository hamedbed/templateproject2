document.addEventListener('alpine:init', () => {
    Alpine.data('usersdata',function(){
        return{
            users:[],
            isloading: false,
            showaddmodal: false,
            getusers(){ 
                this.isloading= true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                     this.users=res.data
                 }).catch(error=>
                 {
                    console.log(error.message)
                 }).finally(()=>
                 { 
                    this.isloading=false

                 })
            }
        }
    })
})

// message: 'i love css',
            // asami= ['ali','hasan','reyhane'],
            // testFunc() 
            //     alert(this.message)
  