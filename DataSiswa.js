const express = require("express");
const route = express.Router();

route.get("/", (req,res) => {
    res.json (
        {
            Nama : "Richard Muhammad",
            TanggalLahir : "14 Januari 1994",
            JenisKelamin : "Laki-Laki",
            Hobi : "Membaca Buku"
        }
    );
});

module.exports = route;