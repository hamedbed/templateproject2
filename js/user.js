document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});





  const adduserbutton=document.getElementById('add_user_button')

  adduserbutton.addEventListener('click',()=>{
    document.querySelector('.add_user_modal').classList.add('show')
    document.querySelector('.add_user_modal_back').classList.remove('dis_none')
    })

    document.querySelector('.add_user_modal_back').addEventListener('click',()=>{
      document.querySelector('.add_user_modal').classList.remove('show')
      e.target.classList.add('dis_none')
    })



  })