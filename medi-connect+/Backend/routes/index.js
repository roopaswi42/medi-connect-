const router = require("express").Router();
const postRouter = require("./postRoutes");
const getRouter = require("./getRoutes");
const hospitalRouter=require('./hospitalRoutes');

router.use("/", postRouter, getRouter);
router.use("/hospital",hospitalRouter);


module.exports = router;