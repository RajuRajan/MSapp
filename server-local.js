const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Basic asset delivery pipeline */
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/* Start server <-> http://localhost:3000/ */
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
