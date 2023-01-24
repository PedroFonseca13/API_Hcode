const express = require('express')
const consign = require('consign')
const expressValidator = require('express-validator')

const app = express()

app.use(express.json());
app.use(expressValidator())
consign().include('routes').include('utils').into(app)

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
