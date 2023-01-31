// get the tottal value in the cart 
const cart = [
    {title: "s7",price: 500, qty: 1},
    {title: "pixel",price: 400, qty: 2},
    {title: "mi note 2",price: 600, qty: 4},
    {title: "mi note 5",price: 300, qty: 3}
]
let total = cart.reduce(
    (total, cartItem)=>{
        const {price, qty} = cartItem
        total.totalItems += qty
        total.cartTotal += (price*qty)
        return total
    }, {
        totalItems: 0,
        cartTotal: 0,
    }
)

console.log(total);