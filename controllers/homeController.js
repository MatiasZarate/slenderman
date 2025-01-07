const path = require("path");

const controlador = {
    index: (req,res)=>{
        res.render("index")
    },
    slenderman: (req,res)=>{
        res.render("slenderman")
    }
}

module.exports = controlador;