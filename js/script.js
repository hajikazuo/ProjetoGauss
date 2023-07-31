function enviarFormulario() {
    const nome = document.getElementById('inputName').value;
    const genero = document.getElementById('gender').value;
    const contato = document.getElementById('contact').value;
    const faixaEtaria = document.getElementById('ageRange').value;
    const eventosFavoritos = [];
    const locaisFavoritos = [];
    const sugestao = document.getElementById('inputDescription').value;

    const checkboxesEventos = document.querySelectorAll('input[name="eventType"]:checked');
    checkboxesEventos.forEach(checkbox => eventosFavoritos.push(checkbox.value));

    const checkboxesLocais = document.querySelectorAll('input[name="location"]:checked');
    checkboxesLocais.forEach(checkbox => locaisFavoritos.push(checkbox.value));

    const formularioData = {
        nome: nome,
        genero: genero,
        contato: contato,
        faixaEtaria: faixaEtaria,
        eventosFavoritos: eventosFavoritos,
        locaisFavoritos: locaisFavoritos,
        sugestao: sugestao
    };

    console.log(formularioData);

}

function limparFormulario() {
    document.getElementById('inputName').value = '';
    document.getElementById('gender').value = 'masculino';
    document.getElementById('contact').value = '';
    document.getElementById('ageRange').value = '0-12';

    var inputs = $('input[type=checkbox]');
    inputs.attr('checked', false);
    inputs.prop('checked', false);

    document.getElementById('inputDescription').value = '';

}