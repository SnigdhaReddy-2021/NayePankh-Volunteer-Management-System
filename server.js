const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

let volunteers = [];

if (fs.existsSync("data.json")) {
    volunteers = JSON.parse(
        fs.readFileSync("data.json", "utf8")
    );
}

app.get("/", (req, res) => {
    res.send("NayePankh Backend Running Successfully");
});

app.post("/register", (req, res) => {

    const volunteer = req.body;

    volunteers.push(volunteer);

    fs.writeFileSync(
        "data.json",
        JSON.stringify(volunteers, null, 2)
    );

    res.json({
        success: true,
        message: "Volunteer Registered Successfully"
    });

});

app.get("/volunteers", (req, res) => {

    res.json(volunteers);

});

app.get("/count", (req, res) => {

    res.json({
        count: volunteers.length
    });

});

app.delete("/clear", (req, res) => {

    volunteers = [];

    fs.writeFileSync(
        "data.json",
        JSON.stringify([], null, 2)
    );

    res.json({
        message: "All volunteer records deleted"
    });

});

app.listen(3001, () => {

    console.log(
        "Server running on http://localhost:3001"
    );

});