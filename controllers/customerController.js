const { dbPool } = require('../DB/dbConnect');

function checkBody(req, res, next) {
	if (!req.body.firstName || !req.body.lastName || !req.body.email) {
		return res.status(400).json({
			status: 'fail',
			message: 'Missing firstName, lastName or email',
		});
	}
	next();
}

function getCustomers(req, res) {
    (async () => {
		try {
			console.log(dbPool);
			let results = await dbPool.query('SELECT "CustomerId" , "FirstName", "LastName", "Email"  FROM "Customer" ORDER BY "CustomerId" DESC LIMIT 100');
			const {rows} = results;
            res.status(200).json({
                data: rows || ''
            })
		} catch (e) {
			console.log(e);
			res.status(500).json({
                "Internal server error" : "problem with db"
            })
			return [];
		}
	})();
}

function createCustomer(req, res) {

	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	(async () => {
		try {
			let results = await dbPool.query(`INSERT INTO "Customer" ( "FirstName", "LastName", "Email", "SupportRepId") VALUES ( N'${firstName}', N'${lastName}', N'${email}', 4);`);
			const rows = results;
            res.status(200).json({
                results
            })
		} catch (e) {
			console.log(e);
			res.status(500).json({
                "Internal server error" : "problem with db"
            })
			return [];
		}
	})();	
	console.log(req.body);
}


module.exports = {
	getCustomers,
	createCustomer,
	checkBody,
};
