// ENVIO DO FORMULÁRIO

function IncluirRegistro() {
    document.getElementById('btnincluir').innerHTML = IncluirRegistro()
}

//BUSCA DE ENDEREÇOS

function pesquisacep(cep) {
    let cepfinal = cep
    let validacep = /^[0-9]{8}$/ /*REGEX CEP */

    if (cepfinal != "") {
        if (validacep.test(cepfinal)) {
            let script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name'
            document.body.appendChild(script)
        }
        else{
            alert('CEP inválido')
        }
    }
    else {
        limparcampos()
    }
}

function callback_name(objetocep) {

    if (!("erro" in objetocep)) {
        document.getElementById('rua').value = (objetocep.logradouro)
        document.getElementById('bairro').value = (objetocep.bairro)
        document.getElementById('cidade').value = (objetocep.localidade)
        document.getElementById('uf').value = (objetocep.uf)
    }
    else {
        limparcampos()
        alert('CEP não encontrado')
    }
}

function limparcampos() {
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('uf').value = ""
}

// INCLUIR DADOS NA TABELA

function IncluirRegistro() {
    let nomeUsuario = document.getElementById('nome').value
    let emailUsuario = document.getElementById('email').value
    let objetocep = document.getElementById('endereco').value
    console.log(objetocep)
    if (nomeUsuario != "" && emailUsuario != "" && objetocep != "") {
        let tabela = document.getElementById('tabelaUsuarios')
        let numeroLinhas = tabela.rows.length
        let linha = tabela.insertRow(numeroLinhas)
        let campo1 = linha.insertCell(0)
        let campo2 = linha.insertCell(1)
        let campo3 = linha.insertCell(2)
        let campo4 = linha.insertCell(3)
        campo1.innerHTML = nomeUsuario
        campo2.innerHTML = emailUsuario
        campo3.innerHTML = objetocep
        campo4.innerHTML = "<button class='btn - btn-danger' onclick='removerLinha(this)'>Remover</button>"
        document.getElementById('nome','email').value = ""
    }
    else {
        alert('Você precisa incluir uma solicitação válida')
    }
}


function removerLinha(linha) {
    console.log(linha.parentNode.parentNode)
    let limpar = linha.parentNode.parentNode.rowIndex
    document.getElementById('tabelaUsuarios').deleteRow(limpar)
}

