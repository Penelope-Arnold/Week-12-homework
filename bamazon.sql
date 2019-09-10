DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(30) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(101, "soccer ball", "sports", 13.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(102, "cleats", "sports", 59.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(103, "rugby ball", "sports", 15.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(104, "mouth guard", "sports", 10.00, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(201, "notebook", "office", 1.99, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(202, "pens", "office", 3.50, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(203, "stapler", "office", 8.49, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(204, "printer ink", "office", 15.99, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(301, "couch", "home", 100, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(302, "vaccuum", "home", 59.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(303, "Dining Table", "home", 100, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(304, "Bathroom Towels", "home", 22.70, 25);
    