const express = require("express");
const app = express();
const PORT = 8001;

const rappers = {
    "21 savage": {
        "age": 29,
        "birthName": "Sheyaa Bin Abraham-Joseph",
        "birthLocation": "London, England"
    },
    "chance the rapper": {
        "age": 29,
        "birthName": "Chancelor Bennett",
        "birthLocation": "Chicago, Illinois"
    },
    "unknown": {
        "age": 0,
        "birthName": "unkown",
        "birthLocation": "unkown"
    }
}
    

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/api/:rapperName", (req, res) => {
    console.log(req.params.rapperName);
    const rapperName = req.params.rapperName.toLowerCase();
    if(rappers[rapperName]) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers['unknown']);
    }    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on PORT: ${PORT}! Better go catch it!`)
})