    function escreveConsole(){
        console.log('Clicou no botão escreva console!!')
    }

    function exibeDados(){
        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;
        document.getElementById('result').innerHTML = 'Nome ' + nome + '<br>Senha: ' + senha; //Exibe ome no Paragrafo
        alert('Seja bem vindo '+ nome); //Exibe mensagem
    }

    //versao sem for radios
    function verRadio(){
        let elementos = document.getElementsByName('f');
        if (elementos [0].checked){
            document.getElementById('radios').innerHTML = 'Você é feliz '+elementos[0].value;
        }else if (elementos [1].checked){
            document.getElementById('radios').innerHTML = 'Você é feliz '+elementos[1].value;
        }else if (elementos [2].checked){
        document.getElementById('radios').innerHTML = 'Você é feliz '+elementos[2].value;
        }
    }
    // versao com for para radios
    function verRadio2(){
        let elementos = document.getElementsByName('f');
        for( let i=0; i< elementos.length; i++){
            if(elementos[i].checked){
                document.getElementById('radios').innerHTML = "Você é feliz "+ elementos[i].value
            }
        }    
    }

    function verSelect(){
        let selecionado = document.querySelector('#curso'); //seleciona elemento com id curso
        document.querySelector('.output').textContent = 'Curso: '+selecionado.value; //seleciona um elemento da class output 
    }