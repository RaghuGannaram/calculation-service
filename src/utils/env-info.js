import { LogLevel } from "../constants/index.js";
import { ErrorExposureDepth } from "../constants/index.js";

export function getClientURL() {
    return process.env["CLIENT_URL"];
}

export function getAdditionServiceURL() {
    return process.env["ADDITION_SERVICE_URL"];
}

export function getSubtractionServiceURL() {
    return process.env["SUBTRACTION_SERVICE_URL"];
}

export function getMultiplicationServiceURL() {
    return process.env["MULTIPLICATION_SERVICE_URL"];
}

export function getDivisionServiceURL() {
    return process.env["DIVISION_SERVICE_URL"];
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
    return process.env["ERROR_EXPOSURE_DEPTH"] || ErrorExposureDepth.BUSINESS;
}
