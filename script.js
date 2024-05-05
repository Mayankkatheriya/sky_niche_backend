const express = require('express');
const mongoose = require('mongoose')
const employeeRoute = require('./router/route');
const cors = require("cors")

const app = express();
app.use(express.json());

app.use(cors({
    origin:"*"
}));
//todo: connect mongoDB here ...
mongoose.connect("mongodb+srv://gupta_ji_813:G4RyLfJm1vbBivsg@cluster0.ugkcmbj.mongodb.net/addEmployee")
.then(()=>console.log('Connected to Mongo DB'))
.catch((error)=>console.log('Failed to Connect'));

//todo: API middleware
app.use('/dashboard/employee', employeeRoute);

//todo: listen port
app.listen(10000, () => {
    console.log('server is up and running at port 10000')
})
