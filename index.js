const express = require('express')
const consign = require('consign')
const app = express()

app.use(express.json());
consign().include('routes').include('utils').into(app)

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
