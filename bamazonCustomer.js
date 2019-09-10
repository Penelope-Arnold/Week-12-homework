var mysql = require("mysql")

var inquirer = require("inquirer")

var Table = require("cli-table");

var choices = [];

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "penelope1",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    display();
  });

  var display = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,20,20,10,10]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
                [res[i].item_id,
                res[i].product_name, 
                res[i].department_name, 
                res[i].price, 
                res[i].stock_quantity]
                );
                choices.push(res[i].item_id);
		}
		console.log(displayTable.toString());
		purchasePrompt(choices);
	});
}


function purchasePrompt(displayTable){
inquirer.prompt([
    {
        name:"item_id",
        type: "list",
        choices: choices,
        message: "Please enter the ID of the item you would like to purchase",

    },
    {
        name:"quantity",
        type:"input",
        message:"How many items would you like to purchase",

    }
]).then(function(answers){
    var amtNeeded = answers.quantity;
    var item_id = answers.item_id;
    purchase(amtNeeded, item_id);
})
}

function purchase(amtNeeded, item_id){
    connection.query(`SELECT * FROM products WHERE item_id = "${item_id}"`, function(err, response){
        if(err) throw err; 

        console.log(response[0].stock_quantity);
        if(amtNeeded <= response[0].stock_quantity){
            var cost = response[0].price * amtNeeded;
            console.log("Your Order is in Stock");
            console.log(`Your total cost for ${amtNeeded} 
            ${response[0].product_name} is ${cost}`);
            console.log("Thank you for your order");
            connection.query(`UPDATE products SET stock_quantity = stock_quantity - 
            ${amtNeeded} WHERE item_id = ${item_id}`)
            buyAgain();
        }else{
            console.log("Insufficient stock, please try again later")
            buyAgain();
        } 
    })
        
}

function buyAgain () {
    inquirer.prompt([
        {
            name:"continue",
            type:"confirm",
            message:"Would you like to make another order",
    
        }
    ]).then(function(answers){
        if (answers){
            display();
        }else{
            console.log("Have a Nice Day");
        }
    })
}


