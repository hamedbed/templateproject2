document.addEventListener('alpine:init', () => {
    Alpine.data('usersdata',function(){
        return{
            users:[],
            pageusers:[],
            isloading: false,
            showaddmodal: false,
            pagecount:1,
            itemscount:4,
            currentpage:1,
            getusers(){ 
                this.isloading= true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                     this.users=res.data
                     this.pagination()
                 }).catch(error=>
                 {
                    console.log(error.message)
                 }).finally(()=>
                 { 
                    this.isloading=false

                 })
            },
            pagination()
            {
                
                this.pagecount= Math.ceil(this.users.length/this.itemscount)
                let start=(this.currentpage*this.itemscount)-this.itemscount
                let end= this.currentpage* this.itemscount
                this.pageusers=this.users.slice(start,end)
            },
            nextpage()
            {
                this.currentpage++
                if (this.currentpage>this.pagecount)    this.currentpage=this.pagecount
                
                this.pagination()
            },
            priviouspage()
            {
                this.currentpage--
                if (this.currentpage<1)    this.currentpage=1
                
                this.pagination()
            }
        }
    })
})

// message: 'i love css',
            // asami= ['ali','hasan','reyhane'],
            // testFunc() 
            //     alert(this.message)
  