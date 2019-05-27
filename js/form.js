var botaoAdcionarPaciente = document.querySelector("#adicionar-paciente");

botaoAdcionarPaciente.addEventListener("click", () => {
    if (event) event.preventDefault();

    var form = document.querySelector('#form-adiciona'); //Selecionando o formulário

    var paciente = criaPaciente(form); //Criando um paciente com as informações do formulario

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        limparElemento('#mensagem-erro');
        geraErro(erros);
        return;
    }

    form.reset();
    Materialize.toast(`O Paciente ${paciente.nome} foi adcionado com Sucesso!`, 3000, 'rounded');
    limparElemento('#mensagem-erro');
    adcionaPacienteNaTabela(paciente);
});

function criaPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    };
    return paciente;
}

function montarTd(content, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = content;
    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.classList.add("hoverable");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O Nome do Paciente não deve ser um campo vazio");
    }

    if (paciente.peso.length == 0) {
        erros.push("O Peso do Paciente não deve ser um campo vazio");
    }

    if (paciente.altura.length == 0) {
        erros.push("A Altura do Paciente não deve ser um campo vazio");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A Porcentagem de Gordura do Paciente não deve ser um campo vazio");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O Peso está inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A Altura está inválida");
    }

    return erros;
}


function geraErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    var header = document.createElement("li");
    var h4 = document.createElement("h4");
    header.classList.add("collection-header");
    h4.textContent = "Erros Encontrados no Formulário";

    ul.appendChild(header);
    header.appendChild(h4);

    erros.forEach(function (erro) {

        var li = document.createElement("li");
        li.classList.add("collection-item");

        var span = document.createElement("span");
        span.classList.add("red-text");
        span.classList.add("text-darken-2");

        span.textContent = erro;
        li.appendChild(span);
        ul.appendChild(li);
    });
}

function limparElemento(seletor) {
    var elemento = document.querySelector(seletor);
    elemento.innerHTML = "";
}

function adcionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente); //Criando uma Tr e Td's de acordo com o paciente criado
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}