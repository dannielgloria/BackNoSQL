import { celebrate, Joi, Segments } from "celebrate";

export const userValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().max(50).messages({
            'string.empty': 'El nombre es requerido',
            'string.max': 'El nombre no puede tener mas de 50 caracteres',
        }),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    })
})