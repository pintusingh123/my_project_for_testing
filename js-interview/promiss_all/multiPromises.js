async function  getDetails() {
  try{
    let userdata = fetch('/api/user')
    let productdata = fetch('/api/products')

    // const [user, products] = (await userdata).json()
    const user = await userdata.json();
    const products = await productdata.json();
         console.log(user);
        console.log(products)

        
  }catch(err){
    console.log(err);
    
  }
//   Destructuring 

//  Spread/rest 

//  Template literals 

//  Default parameters 

//  Modules
  
}

getDetails()










// testing example 
 async function getData(){
  let userapi = [
    {name:"jhala", class:10},
    {name:"pintu", class:10},
  ]
  let productapi = [
    {name:"shirt", size:28},
    {name:"pent", size:30},
  ]


  try{
      let userdata =  Promise.resolve(userapi)
      let productdata = Promise.resolve(productapi)

      let result = await Promise.all([
        userdata,
        productdata
      ])
      console.log(result)


  } catch(error){
    console.log(error)
  }

}
getData()