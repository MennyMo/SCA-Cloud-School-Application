const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/", (req, res) => res.send("Welcome to SCA Cloud School Application"));

	app.listen(5004, () => {
	console.log("This app is listening on port 5000!");
});