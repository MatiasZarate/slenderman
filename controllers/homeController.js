const path = require("path");

const controlador = {
    index: (req,res)=>{
        res.render("index")
    },
    slenderman: (req,res)=>{
        res.render("slenderman")
    },
    notas: (req,res)=>{
        res.render("notas")
    },
    notaTres: (req,res)=>{
        res.render("notass/nota3")
    },
    notaSeis: (req,res)=>{
        res.render("notass/nota6")
    }, 
    notaOcho: (req,res)=>{
        res.render("notass/nota8")
    },
    final: (req,res)=>{
        res.render("final")
    }
}

module.exports = controlador;