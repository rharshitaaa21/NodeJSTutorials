
// Steps for connecting --
// 1. initialise mongo into the project 
// 2. create a url variable that stores the path of local database mongo 
// 3. connect node with mongo by the initiliasing a client var 
// 4. create getdata fucntion , and first connect mongo with the client 

const {MongoClient} = require("mongodb");
let url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// async function getdata()
// 
//    // let result = await client.connect();

//     let result = await client.connect();
//     let db = result.db('ecomm');
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getdata();

//reading from mongo with node.js 

async function dbconnect()
{
    let result = await client.connect();
    let db = result.db('ecomm');
    let collection = db.collection('products');
    // let response = await collection.find({}).toArray();
    // console.log(response);

}

// }
// const main =async() =>
// {
//     let data =await  dbconnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }
// main();
//inserting data in momgodb with nodejs