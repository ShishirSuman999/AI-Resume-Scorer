require("dotenv").config();

const express = require("express")

const app = express()
const PORT = process.env.PORT

require("./connection")
app.use(express.json())

const UserRoutes = require("./Routes/user")

app.use('/api/user', UserRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
