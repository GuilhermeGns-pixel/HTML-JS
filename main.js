const form = document.getElementById('form-Campos');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');

function campos (campoA, campoB){
    const mensagemSucess = `O Campo B: <b>${campoB.value}</b> e maior do que o Campo A: <b>${campoA.value}</b> `
    if (parseInt(campoB.value) > parseInt(campoA.value)){
        document.querySelector('.sucess-mensagem').innerHTML = mensagemSucess;
        document.querySelector('.sucess-mensagem').style.display = 'block'
        campoA.value = '';
        campoB.value = '';
        return campoB;
        
    }
    else{
        document.querySelector('.error-mensagem').innerHTML = mensagemSucess;
        document.querySelector('.error-mensagem').style.display = 'block'
        return campoA;
    }

}

form.addEventListener('submit', function (e){
    e.preventDefault();
   campos(campoA, campoB);


})


console.log(form);

