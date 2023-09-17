db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "readWrite",
                db: "stock"
            }
        ]
    }
);

db = db.getSiblingDB('stock');
db.createCollection('StockEntries');

db.StockEntries.insertMany([
	{
		idProduct: 1,
		operation: 'in',
		quantity: 10
	},
	{
		idProduct: 1,
		operation: 'in',
		quantity: 10
	},
	{
		idProduct: 2,
		operation: 'in',
		quantity: 20
	}
]);
