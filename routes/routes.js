const homeController = require('./../controllers/homeController');
const express = require("express");
const router = express.Router();

router.get("/", homeController.index)
router.get("/slenderman",homeController.slenderman)
router.get("/notas", homeController.notas)

module.exports = router;