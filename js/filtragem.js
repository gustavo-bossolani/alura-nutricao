var campo = document.querySelector('#filtrar-tabela');
var botaoLimparCampo = document.querySelector("#btn-limpar");
var pacientes = document.querySelectorAll(".paciente");

campo.addEventListener('input', function () {

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        pacientes.forEach((paciente) => {
            var TdNome = paciente.querySelector(".info-nome");
            var nome = TdNome.textContent;
            var expressao = RegExp(this.value, 'i');

            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add('invisivel');
            }
        });

    } else {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

campo.addEventListener('focus', () => {
    Materialize.toast('Para remover basta clicar 2 vezes sob o Paciente.', 2500, 'rounded');
});