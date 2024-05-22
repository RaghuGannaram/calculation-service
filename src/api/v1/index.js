import express from "express";
import calculationRouter from "../../routes/calculation.route.js";

const router = express.Router();

router.use("/", calculationRouter);

export default router;
