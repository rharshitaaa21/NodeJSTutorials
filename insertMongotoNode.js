const dbConnect = require('./nodeConnectionwithMongo.js');
 const insert = async ()=>
 {
const db =await  dbConnect();
const result = db.insert(
    {
        name: 'note 9 pro',
        brand: 'xiaomi',
        price: 3200,
        category: 'mobile',
    });
    console.log(insert);
 }
 insert();

 