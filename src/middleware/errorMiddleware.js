import { errors as celebrateErrors } from "celebrate";

export const celebrateErrorHandler = celebrateErrors();

export const generalErrorHandler = (err, req, res, next) => {
    if (err.joi) {
        return res.status(400).json({
            message: 'Error de validación',
            details: err.joi.details.map(d => d.message),
        });
    }

    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
};
