import { LogLevel } from "../constants/index.js";

export function getClientURL() {
    const clientDevURL = process.env["CLIENT_DEV_URL"];
    const clientProdURL = process.env["CLIENT_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? clientProdURL : clientDevURL;
}

export function getAdditionServiceURL() {
    const additionServiceDevURL = process.env["ADDITION_SERVICE_DEV_URL"];
    const additionServiceProdURL = process.env["ADDITION_SERVICE_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? additionServiceProdURL : additionServiceDevURL;
}

export function getSubtractionServiceURL() {
    const subtractionServiceDevURL = process.env["SUBTRACTION_SERVICE_DEV_URL"];
    const subtractionServiceProdURL = process.env["SUBTRACTION_SERVICE_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? subtractionServiceProdURL : subtractionServiceDevURL;
}

export function getMultiplicationServiceURL() {
    const multiplicationServiceDevURL = process.env["MULTIPLICATION_SERVICE_DEV_URL"];
    const multiplicationServiceProdURL = process.env["MULTIPLICATION_SERVICE_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? multiplicationServiceProdURL : multiplicationServiceDevURL;
}

export function getDivisionServiceURL() {
    const divisionServiceDevURL = process.env["DIVISION_SERVICE_DEV_URL"];
    const divisionServiceProdURL = process.env["DIVISION_SERVICE_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? divisionServiceProdURL : divisionServiceDevURL;
}

export function getCurrentEnv() {
    return process.env["NODE_ENV"] || "development";
}

export function getCurrentPort() {
    return Number(process.env["PORT"]) || 5000;
}

export function getLogLevel() {
    return process.env["LOG_LEVEL"] || LogLevel.INFO;
}

export function getErrorExposureDepth() {
    return process.env["ERROR_EXPOSURE_DEPTH"] || "BUSINESS";
}
