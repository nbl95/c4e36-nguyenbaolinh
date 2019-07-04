// BT1:
// var inventory = {
//     gold: 500,
//     pouch: ['flit', 'twine', 'gemstone'],
//     backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// }
// inventory.pocket = ['seashell', 'strange berry', 'lint'];
// var index = inventory.backpack.indexOf("dagger")
// inventory.backpack.splice(index, 1);
// inventory.gold = parseInt(inventory.gold) + 50;
// console.log(inventory);

// BT2:
// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "orange": 1.5,
//     "pear": 3
// }
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "orange": 32,
//     "pear": 15
// }
// const fruit = ['banana','apple','orange','pear']
// fruit.forEach((food, index) => {
//     console.log(`${food}:
// price: ${prices[food]}
// stock: ${stock[food]} `);
// })
// let total = 0;
// fruit.forEach((food, index) => {
//     x = prices[food] * stock[food];
//     console.log(`Value of ${food} = ${x}`);
//     total += x;
// })
// console.log(`Total = ${total}`)