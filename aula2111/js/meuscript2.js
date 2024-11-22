let i = 1;
// A cada clique, executa a função abaixo
function salvar(){
    let nome = document.getElementById('n').value;
    nome = nome +' '+document.getElementById('sn').value;
    let email = document.getElementById('e').value;
    //alert('Olá' + nome + 'seu e-mail é'+ email);

    // Recupera tBody da tabela
    let tBody = document.querySelector('.table tbody');
    //Cria linha tabela row - tr
    let linha = document.createElement('tr');
    //Cria colunas (table data - td)
    let colid = document.createElement('td');
    let colNome = document.createElement('td');
    let colEmail = document.createElement('td');
    // Associar valores as td
    i++; //Atualiza id
    colid.innerHTML = i; //associa i a colid
    colNome.innerHTML = nome;
    colEmail.innerHTML = email;
    //Associa colunas (td) a linha (tr)
    linha.appendChild(colid);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);
    //Associa linha com colunas ao body da tabela
    tBody.appendChild(linha);
}



