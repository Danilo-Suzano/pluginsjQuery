
$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '( ) _____-____'
    });
    $('#cpf').mask('00000000000',{
        placeholder: '___.___.___-__'
    });
    $('#cep').mask('00000000',{
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },

        messages: {
            nome: 'Por Favor insira seu Nome.',
            telefone: 'Por Favor insira seu Telefone.',
            email: 'Por Favor insira seu Email.',
            cpf: 'Por Favor insira seu CPF.',
            cep: 'Por Favor insira seu CEP.',
            endereco: 'Por Favor insira seu Endereço.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})