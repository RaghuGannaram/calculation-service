import express from "express";
import calculationController from "../controllers/calculation.controller.js";

const router = express.Router();

router.post("/calculation", calculationController.calculation);

export default router;
