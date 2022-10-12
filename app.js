// for exporting files outside a module use------
//module .export and make an objcet out of it 

module.exports = {

    x:"dee",
    y: "mad",
    z:function(d){
        var a = 50;
        var c = 100;
if( d < a)
{
    return "Hehe";
}
else{
    return "khikhi";
}
    }
}

// after this use  const objectname = require(./filename)

// check intro.js for reference 