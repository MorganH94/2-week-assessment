///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((x, y) => {
    return x + y.price
}, 0)

const cartTotal = summedPrice

console.log(cartTotal)




//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax++){
    let total = cartTotal * (tax)
    total -= couponValue
    return(total)
}

const finalPrice = calcFinalPrice
console.log(finalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The properties that my custoemr object will have are name, phone number, review, and favorite dish.
I chose these properties because they all seem like valuable information to have
about the customer frequenting your restaurant. You would like to be able to know their name,
have their nnumber on file for reservations or waitlists, know their review of the food and service
for growth opportunities, and lastly, their favorite dish to help know what is popular
and to help get to know your customers better.
*/
 
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: 'Harry',
    phoneNumber: '(480)-555-2894',
    review: 5,
    favoriteDish: 'Grilled Cheese'

}