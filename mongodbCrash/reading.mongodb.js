use("ecommerce");
//db.items.find(); //all find karne ke liye
//db.items.find({name: "Laptop"}); //specific find karne ke liye
//db.items.find({price: {$gt: 100}}); //greater than
//db.items.find({price: {$lt: 500}}); //less than
//db.items.find({price: {$gte: 300}}); //greater than or equal to
//db.items.find({price: {$lte: 300}}); //less than or equal to
//db.items.find({price: {$ne: 300}}); //not equal to

// $or operator
//db.items.find({$or: [{category: "Electronics"}, {category: "Furniture"}]}); //either electronics or furniture

// sort karne ke liye
//db.items.find().sort({price: 1}).limit(2); //ascending order and limit to 2 results
//db.items.find().sort({price: -1}); //descending order and no limit
