use("ecommerce");

// Update karne ke liye
// db.items.updateOne({name: "Laptop"}, {$set: {price: 1000}}); //specific item ka price update karne ke liye
// db.items.updateMany({category: "Electronics"}, {$set: {price: 900}}); //multiple items ka price update karne ke liye
// db.items.updateOne({name: "Book"}, {$inc: {price: 5}}); //price ko increment karne ke liye
// db.items.updateOne({name: "Desk"}, {$mul: {price: 1.1}}); //price ko 10% increase karne ke liye
// db.items.updateOne({name: "Laptop"}, {$rename: {price: "cost"}}); //field name change karne ke liye
// db.items.updateOne({name: "Laptop"}, {$unset: {category: ""}}); //field delete karne ke liye