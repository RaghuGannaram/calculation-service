import axios from "axios";
import { catchAsyncDataError, DataError, DataErrors, processAxiosError } from "../utils/application-errors.js";
import {
    getAdditionServiceURL,
    getSubtractionServiceURL,
    getMultiplicationServiceURL,
    getDivisionServiceURL,
} from "../utils/env-info.js";
import logger from "../configs/logger.config.js";

const addition = catchAsyncDataError(async (number1, number2) => {
    logger.info(`calculationDataServices.addition called with number1=${number1} and number2=${number2}`);

    let response;
    try {
        logger.debug(`calculationDataServices.addition calling axios.post with URL: ${getAdditionServiceURL()}`);
        response = await axios.post(getAdditionServiceURL(), { number1, number2 });
    } catch (error) {
        processAxiosError(error);
    }

    const result = response.data.result;

    logger.info(`calculationDataServices.addition response is %o`, result);

    return result;
});

const subtraction = catchAsyncDataError(async (number1, number2) => {
    logger.info(`calculationDataServices.subtraction called with number1=${number1} and number2=${number2}`);

    let response;

    try {
        logger.debug(`calculationDataServices.subtraction calling axios.post with URL: ${getSubtractionServiceURL()}`);
        response = await axios.post(getSubtractionServiceURL(), { number1, number2 });
    } catch (error) {
        processAxiosError(error);
    }

    const result = response.data.result;

    logger.info(`calculationDataServices.subtraction response is %o`, result);

    return result;
});

const multiplication = catchAsyncDataError(async (number1, number2) => {
    logger.info(`calculationDataServices.multiplication called with number1=${number1} and number2=${number2}`);

    let response;
    try {
        logger.debug(`calculationDataServices.multiplication calling axios.post with URL: ${getMultiplicationServiceURL()}`);
        response = await axios.post(getMultiplicationServiceURL(), { number1, number2 });
    } catch (error) {
        processAxiosError(error);
    }

    const result = response.data.result;

    logger.info(`calculationDataServices.multiplication response is %o`, result);

    return result;
});

const division = catchAsyncDataError(async (number1, number2) => {
    logger.info(`calculationDataServices.division called with number1=${number1} and number2=${number2}`);

    let response;

    try {
        logger.debug(`calculationDataServices.division calling axios.post with URL: ${getDivisionServiceURL()}`);
        response = await axios.post(getDivisionServiceURL(), { number1, number2 });
    } catch (error) {
        processAxiosError(error);
    }

    const result = response.data.result;

    logger.info(`calculationDataServices.division response is %o`, result);

    return result;
});

export default {
    addition,
    subtraction,
    multiplication,
    division,
};
