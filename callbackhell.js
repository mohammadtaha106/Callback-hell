//CALLBACK HELL
//Making Pizza 
//getting cheese

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is the", cheese);
        callback(cheese);
    }, 2000);

}
//makingdough
function makeDough(cheese ,callback) {
    setTimeout(() => {
        const dough = cheese + '🍛'
    console.log("dough is ready", dough)
    callback(dough)
        
    }, 2000);
    

}
// finally baking pizza 
function bakePizza(dough,callback) {
    setTimeout(() => {
        const pizza = dough + '🍕'
    console.log("pizza is baked", pizza)
    callback(dough)
        
    }, 3000);
    

}

getCheese((cheese) => {
    makeDough(cheese ,( dough)=>{
        bakePizza(dough ,( pizza)=>{
            console.log("got my pizza 🍕"  )
       
        })
    })


})
