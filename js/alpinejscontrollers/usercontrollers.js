document.addEventListener('alpine:init', () => {
    Alpine.data('usersdata',function(){
        return{
            users:[],
            mainusers:[],
            pageusers:[],
            isloading: false,
            showaddmodal: true,
            pagecount:1,
            itemscount:4,
            currentpage:1,
            useridtoedit:null,
            newuserinfo:
            {
                name:"",
                username:"",
                email:""
            },

            getusers(){ 
                this.isloading= true
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                     this.users=res.data
                     this.mainusers=res.data
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
            },
            handlechangesitemscount(value)
            {
                this.currentpage=1
                if (value>this.itemscount)  this.itemscount=this.users.length
                if (value<1)    this.itemscount=1
                // this.pagination()
            },
            handlesearch(e)
            {
                setTimeout(() => {
                   this.users=this.mainusers.filter(
                    user=> user.name.includes(e.value)|| 
                           user.username.includes(e.value)|| 
                           user.email.includes(e.value))
                    
                }, 10);
                this.currentpage=1
                this.pagination()
            },
            handlesubmitadduserform()
            {
                console.log(this.newuserinfo);
                axios.post("https://jsonplaceholder.typicode.com/users", this.newuserinfo).then((res)=>{
                    //  this.users=res.data
                    //  this.mainusers=res.data
                    //  this.pagination()
                    if (res.status == 201){
                       this.mainusers.push(res.data)
                       this.pagination()
                       M.toast({html: 'عملیات ایجاد کاربر جدید با موفقیت انجام شد', classes: 'rounded blue'})
                       this.handleresetform()
                       this.showaddmodal=false
                    }
                 }).catch(error=>
                 {
                    console.log(error.message)
                 }).finally(()=>
                 { 
                    this.isloading=false

                 })
            },
            handleresetform()
            {
                this.newuserinfo={
                    name:"",
                    username:"",
                    email:""
                }
            },
            handledeleteuser(user){
                var toastHTML = '<span> ('+user+')از حذف کاربر مطمئن هستید؟ </span><button class="btn-flat blue-text toast-action" x-on:click="handleconfirmdeleteuser('+user.id+')">Delete</button>';
                M.toast({html: toastHTML});
            },
            handleconfirmdeleteuser(userId)
            {
                this.isloading=true
                axios.delete("https://jsonplaceholder.typicode.com/users"+userId).then((res)=>{                    
                    if (res.status == 200){
                            this.mainusers=this.mainusers.filter(user=>user.id!=userId)
                            this.users=this.users.filter(user=>user.id!=userId)
                            this.pagination()
                            M.toast({html: 'کاربر با موفقیت حذف شد' , classes:"blue"})
                    }
                 }).finally(()=>
                 { 
                    this.isloading=false
                    
                 })
            },
            handleupdateuser(user){
                axios.get("https://jsonplaceholder.typicode.com/users"+user.id).then(res=>{
                    if (res.data==200){
                        this.newuserinfo={
                            name: res.data.name,
                            username: res.data.username,
                            email: res.data.email,
                        }
                        this.useridtoedit=this.data.id
                    }
                })    
                // this.showaddmodal= true
            }

        }
    })
})

// message: 'i love css',
            // asami= ['ali','hasan','reyhane'],
            // testFunc() 
            //     alert(this.message)
  