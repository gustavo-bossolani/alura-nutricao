var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener('click', () => {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/paciente111s');

    xhr.addEventListener("load", function () {
        var erroImport = document.querySelector('#erro-importar-pacientes');

        console.log(typeof xhr.status);
        
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(paciente => {
                adcionaPacienteNaTabela(paciente);
                console.log(paciente);
            });

        } else {
            erroImport.classList.add('invisivel');
        }
    });
    xhr.send();
});