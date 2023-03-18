

function ativarNavbar(){
    let navbar = document.querySelector('.navbar');

    navbar.classList.add('ativo')
}


function desativarNavbar(){
    let navbar = document.querySelector('.navbar');

    navbar.classList.remove('ativo')

}

window.onscroll = ()=>{
    
    if(window.scrollY > 10){
        ativarNavbar();

    }
    else{
        desativarNavbar();
    }
}