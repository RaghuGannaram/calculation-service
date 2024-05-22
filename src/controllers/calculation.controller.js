import calculationBusinessService from "../services/calculation.business.js";
import catchAsyncError from "../middlewares/catch-async-error.middleware.js";
import { HttpError, HttpErrors } from "../utils/application-errors.js";
import logger from "../configs/logger.config.js";

const calculation = catchAsyncError(async (req, res) => {
    logger.info(`calculationController.calculation called with body %o`, req.body);

    const { operation, number1, number2 } = req.body;
    if (number1 === undefined || number2 === undefined || operation === undefined) {
        throw new HttpError(400, HttpErrors.BAD_REQUEST, "number1, number2 and operation are required");
    }

    const result = await calculationBusinessService.calculation(operation, number1, number2);

    logger.info(`calculationController.calculation response is %o`, result);

    res.status(200).json({ result });
});

export default {
    calculation,
};
