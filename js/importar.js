var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener('click', () => {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener("load", function () {
        var erroImport = document.querySelector('#erro-importar-pacientes');
        
        if (xhr.status == 200) {
            erroImport.classList.add("invisivel");
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