require("dotenv").config();

const express = require("express")

const app = express()
const PORT = process.env.PORT

require("./connection")
app.get("/", (req, res) => {
    res.send({
        message: "Hello & welcome to our backend!"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})