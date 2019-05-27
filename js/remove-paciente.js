var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener("dblclick", (event) => {
    //Verificando se o item clicado é uma TD
    if (event.target.tagName == 'TD') {
        //Caso entre no if o parent(pai) deste TD será removido, no caso um TR
        event.target.parentNode.classList.add("fadeOut");
        event.target.parentNode.classList.remove("hoverable");
        setTimeout(() => {
            event.target.parentNode.remove();
        }, 550);
    }
});