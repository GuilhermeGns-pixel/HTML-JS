const form = document.getElementById('form-Campos');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');

function campos (campoA, campoB){

        if (parseInt(campoB.value) > parseInt(campoA.value)){
        document.querySelector('.sucess-mensagem').innerHTML = mensagemSucess;
        document.querySelector('.sucess-mensagem').style.display = 'block'
        campoA.value = '';
        campoB.value = '';
        return campoB;
        
    }
    else{
        document.querySelector('.error-mensagem').innerHTML = mensagemError;
        document.querySelector('.error-mensagem').style.display = 'block'
        return campoA;
    }

}

form.addEventListener('submit', function (e){
    e.preventDefault();
   campos(campoA, campoB);
    document.querySelector('.error-mensagem').style.display = 'none'
    document.querySelector('.sucess-mensagem').style.display = 'none'
        

        //apagar itens q aparecem
})


campoB.addEventListener('keyup', function (e) {
    console.log(e.target.value)
    valida = (parseInt(campoB.value) > parseInt(campoA.value))

    const mensagemSucess = `O Campo B : <b>${campoB.value}</b> e maior do que o Campo A: <b>${campoA.value}</b> `
    const mensagemError = `O Campo A : <b>${campoA.value}</b> e maior do que o Campo B : <b>${campoB.value}</b> `

    if (valida) {
        document.querySelector('.sucess-mensagem').innerHTML = mensagemSucess;
        document.querySelector('.sucess-mensagem').style.display = 'block'
        document.querySelector('.error-mensagem').style.display = 'none'
    }
    else {
        document.querySelector('.error-mensagem').innerHTML = mensagemError;
        document.querySelector('.error-mensagem').style.display = 'block'
        document.querySelector('.sucess-mensagem').style.display = 'none' 
    }

})
console.log(form);

