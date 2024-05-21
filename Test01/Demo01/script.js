let pinguin = "Pingouin"

let pollarBear = 'Ours polaire'

let toDay = new Date()

let location = ["banquis","batman","madagascar","l'age de glace"]

console.log(pinguin)
console.log(typeof pinguin)
console.log(location)

//boucles

for(const locations of pinguin){
    console.log(location)
}

 let morse = {
    name: "MorseAttack",
     age: 12,
     gender: "M",
 }

for(const morceKey in morse){
    console.log(morse)
    console.log(morse[morceKey])
}


location.forEach(function (value){
    console.log(value)
})


location.forEach(val => console.log(val + " " + "lambda") )

const hell = function (){
    console.log("hell World ! ")
}

function hello(){
    console.log("hello world ! ")
}

hello()
hell()