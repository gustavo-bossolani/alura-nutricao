var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;

    var imc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        imc.textContent = "Peso Inválido";

        paciente.classList.add("white-text");
        paciente.classList.add("deep-orange");
        paciente.classList.add("darken-3");
        paciente.id = "paciente-invalido";

    }
    if (!alturaEhValida) {
        imc.textContent = "Altura Inválida";

        paciente.classList.add("white-text");
        paciente.classList.add("deep-orange");
        paciente.classList.add("darken-3");
        paciente.id = "paciente-invalido";
    }

    if (pesoEhValido && alturaEhValida) {
        imc.textContent = calculaImc(altura, peso);
    }
}
function calculaImc(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.0) {
        return true;
    }
    return false;
}