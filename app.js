const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello brave new world!');
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
