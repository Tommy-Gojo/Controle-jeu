function chiffreatrouve(max) {
    return Math.floor(Math.random() * max);
  }
console.log(chiffreatrouve(1000))

let randomNumber = chiffreatrouve(1000);
console.log(randomNumber)

let input = document.querySelector("#ini")
let button = document.querySelector("#btn")
button.addEventListener("click",function(e){
    e.preventDefault()
    if(input.value == 0){
        console.log('entrez un nombre')
        if(isNaN(input.value)){
            console.log("ce nest pas un nombre")
            if(input.value < randomNumber){
                    console.log("c'est plus")
                }else if(input.value > randomNumber){
                    console.log("c'est moins")
                }else{
                    console.log("bien joué")
            }
        }
    }else{
       console.log('coucou') 
    }
})

