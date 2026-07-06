const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.n0flkcc.mongodb.net/?appName=Cluster0`).then((res) => {
    console.log("Database connected successfully!")
}).catch((error) => {
    console.error("Error connecting to database: ", error)
})
