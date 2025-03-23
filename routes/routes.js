const homeController = require('./../controllers/homeController');
const express = require("express");
const router = express.Router();

router.get("/", homeController.index)
router.get("/slenderman",homeController.slenderman)
router.get("/notas", homeController.notas)
router.get("/notass/nota3", homeController.notaTres)
router.get("/notass/nota6", homeController.notaSeis)
router.get("/notass/nota8", homeController.notaOcho)
router.get("/final", homeController.final)

module.exports = router;