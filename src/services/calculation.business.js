import calculationDataServices from "./calculation.data.js";
import { catchAsyncBusinessError, BusinessError, BusinessErrors } from "../utils/application-errors.js";
import { supportedOperations } from "../constants/index.js";
import logger from "../configs/logger.config.js";

const calculation = catchAsyncBusinessError(async (operation, number1, number2) => {
    logger.info(`calculationBusinessService.calculation called with number1=${number1} and number2=${number2}`);

    if (!Object.values(supportedOperations).includes(operation)) {
        throw new BusinessError(BusinessErrors.VALIDATION_FAILURE, "operation is not supported");
    }

    if (isNaN(number1) || isNaN(number2)) {
        throw new BusinessError(BusinessErrors.VALIDATION_FAILURE, "number1 and number2 must be numbers");
    }

    let result;
    switch (operation) {
        case "addition":
            result = await calculationDataServices.addition(number1, number2);
            break;
        case "subtraction":
            result = await calculationDataServices.subtraction(number1, number2);
            break;
        case "multiplication":
            result = await calculationDataServices.multiplication(number1, number2);
            break;
        case "division":
            result = await calculationDataServices.division(number1, number2);
            break;
    }

    logger.info(`calculationBusinessService.calculation response is %o`, result);

    return result;
});

export default {
    calculation,
};
