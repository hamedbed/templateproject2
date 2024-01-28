document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});





  const adduserbutton=document.getElementById('add_user_button')

  adduserbutton.addEventListener('click',()=>{
    document.querySelector('.add_user_modal').classList.add('show')
    document.querySelector('.add_user_modal_back').classList.remove('dis_none')
    });

    document.querySelector('.add_user_modal_back').addEventListener('click',()=>{
      document.querySelector('.add_user_modal').classList.remove('show')
      e.target.classList.add('dis_none')
    });



    setTimeout(function(){
      console.log("start...");
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) =>{
        console.log("end...");
        console.log(json);
        let html=""
        for (const user of json ){
          html=html+`<tr>
                      <td>
                      <td>${user.id}</td>
                      <td>${user.name}</td>
                      <td>${user.username} </td>
                      <td>${user.email} </td>
                      <td>${user.address.city} </td>
                      <td> 
                      <i class="material-icons red-tex hov-pointer"> delete_forever </i>
                      <i class="material-icons green-text hov-pointer"> edit </i>
                         </td>
                        </td>
                   </tr>`
        }

                document.querySelector('.desktop_table_body').innerHTML=html
      });
          
    },5000);
    


    