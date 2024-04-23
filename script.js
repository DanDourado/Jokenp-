const pedra1 = document.getElementById("pedra")
const papel2 = document.getElementById("papel")
const tesoura3 = document.getElementById("tesoura")

// const pedra = 1
// const papel = 2
// const tesoura = 3

function op_pedra(){
   let maquina = Math.floor(Math.random()*3)+1
    if( maquina === 1){
        alert("Você Empatou")
    }
    else if(maquina === 2){
        alert("Você Perdeu")
    }
    else if(maquina === 3){
        alert("Você Ganhou")
    }
    console.log(maquina)
}
function op_papel(){
    let maquina = Math.floor(Math.random() * 3)+1
    if(maquina === 2){
        alert("Você Empatou")
    }
    if( maquina === 1){
        alert("Você Ganhou!")
    }
    else if(maquina === 3){
        alert("Você Perdeu!")
    }
    console.log(maquina)
}
function op_tesoura(){
    let maquina = Math.floor(Math.random()*3)+1
    if(maquina === 3 ){
        alert("Você Empatou")
    }
    if( maquina === 1){
        alert("Você Perdeu!")
    }
    else if(maquina === 3){
        alert("Você Empatou!")
    }
    console.log(maquina)
}
pedra1.addEventListener("click",  op_pedra) 
papel2.addEventListener("click", op_papel) 
tesoura3.addEventListener("click", op_tesoura) 