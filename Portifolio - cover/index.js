
// const form1 = document.getElementById('form1');
// const login = document.getElementById('login');
// const signi = document.getElementById('signi');
// const form2 = document.getElementById('form2');
// const sign = document.getElementById('sign')
// const log = document.getElementById('logbottom')
// const btn5 = document.getElementById('btn5')

//  btn5.addEventListener('click',function(){
//  signi.style.display = "none"
//  form2.style.display = "none"
// form1.style.display = "inline"
// login.style.display = "inline"
// btn5.style.display = "none"
// sign.addEventListener('click',function(){
//         form1.style.display = "inline"
//         login.style.display = "inline"
//         signi.style.display = "none"
//         form2.style.display = "none"
        
//         log.addEventListener('click',function(){
//             form2.style.display = "none"
//             signi.style.display = "none"
//             login.style.display = "inline"
//             form1.style.display = "inline"
       
//         })    
//     })
// })
// function btn_(){
//     alert('weeeeee');
// }
// let input4 =  document.getElementById('input4')
//  let input6 = document.getElementById('input6');




 let navbar = document.querySelector('.navbar');
 console.log(navbar);
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItems.classList.remove('active');
}

let cartItems = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = ()=>{
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll= ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItems.classList.remove('active');
}