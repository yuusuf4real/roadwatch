const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('API is running')
})

const PORT = process.env.PORT || 3030

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))