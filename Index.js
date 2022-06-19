const express = require("express");
const app = express();
const port = 8080;
const siswaRoute = require("./DataSiswa");

app.get("/",(req,res) => {
    res.send (
        "Selamat Datang Di Data Center Siswa Indonesia"
    );
});

app.use("/datasiswa", siswaRoute);

app.listen(port, (req,res) => {
    console.log(`Using server ${port}`);
});