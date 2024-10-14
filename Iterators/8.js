//Reduce method

const myrr=[1,2,3,4]

let newArr=myrr.reduce((acc,curr)=>{
    // console.log(`acc:${acc},curr:${curr}`)
    return acc+curr

},0)
 newArr=myrr.reduce(function(acc,curr){
    console.log(`acc:${acc},curr:${curr}`)
    return acc+curr

},0)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);