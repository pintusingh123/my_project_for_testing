let user = {
  name:"pintu"
}
let arr = ["kota", 20]

function greet(city){
  console.log(`hello ${this.name} from ${city}`)
}

function greet2(city,age){
  console.log(`
    hello ${this.name} from ${city} and age is ${age}`)
}

greet.call(user, "kota")

greet2.apply(user, arr)

let bindfunresponse  = greet2.bind(user, "kota", 23)
bindfunresponse()