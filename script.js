let menubtn=document.getElementById('menubtn')
let slidebar=document.getElementById('slidebar')
menubtn.style.left='1em'
menubtn.addEventListener("click",()=>{
    if(slidebar.classList.toggle('show')){
    slidebar.style.background="wheat"
    slidebar.style.position="fixed"
    menubtn.style.position='fixed'
     slidebar.style.transition="0.7s"
    menubtn.style.transition='1s'
     menubtn.style.left='5em'
     menubtn.style.top='2em'
     menubtn.style.backgroundColor='transparent'
    menubtn.textContent='ⅹ'
    menubtn.style.color="black"
    menubtn.style.borderStyle="solid"
             
    }else{
    menubtn.style.left='1em'
     menubtn.style.backgroundColor='red'
     menubtn.textContent='≡'
    menubtn.style.position='relative'
     menubtn.style.top='1em'
    }
})

function formsub(){
    alert("Message send")
}
