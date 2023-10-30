import BaseJoi from 'joi';
import JoiDate from '@joi/date';
import dayjs from 'dayjs';
import { Client } from '$services/api/client/Client.ts';
import { ProductMutationFormBody } from '$services/api/models/product.ts';

const Joi: typeof BaseJoi & ReturnType<typeof JoiDate> = BaseJoi.extend(JoiDate);

const NOW = dayjs(new Date()).format('YYYY-MM-DD');

const ONE_YEAR_FROM_NOW_AS_DATE = new Date();
ONE_YEAR_FROM_NOW_AS_DATE.setFullYear(ONE_YEAR_FROM_NOW_AS_DATE.getFullYear() + 1);
const ONE_YEAR_FROM_NOW = dayjs(ONE_YEAR_FROM_NOW_AS_DATE).format('YYYY-MM-DD');

export const createProductSchema = (client: Client, editing: boolean = false) => {
  const validateIdExists: BaseJoi.ExternalValidationFunction<string, unknown> = async (value, helpers) => {
    if (editing) {
      return value;
    }

    const exists = await client.products.checkProduct(value);
    if (exists) {
      return helpers.message({ external: 'This ID already exists.' });
    }

    return value;
  };

  return Joi.object<ProductMutationFormBody>({
    id: Joi.string().min(3).max(10).required().external(validateIdExists)
      .messages({
        'string.empty': 'ID cannot be empty.',
        'any.required': 'ID cannot be empty.',
        'string.min': 'ID must be at least 3 characters long.',
        'string.max': 'ID must be shorter than 10 characters.'
      }),
    name: Joi.string().min(5).max(100).required()
      .messages({
        'string.empty': 'Name cannot be empty.',
        'any.required': 'Name cannot be empty.',
        'string.min': 'Name must be at least 5 characters long.',
        'string.max': 'Name must be shorter than 100 characters.'
      }),
    description: Joi.string().min(10).max(200).required()
      .messages({
        'string.empty': 'Description cannot be empty.',
        'any.required': 'Description cannot be empty.',
        'string.min': 'Description must be at least 10 characters long.',
        'string.max': 'Description must be shorter than 200 characters.'
      }),
    logo: Joi.string().uri().required()
      .messages({
        'string.empty': 'Logo cannot be empty.',
        'any.required': 'Logo cannot be empty.',
        'string.uri': 'Logo must be a valid URL.'
      }),
    date_release: Joi.date().min(NOW).utc().required()
      .messages({
        'date.empty': 'Release date cannot be empty.',
        'date.base': 'Release date must be a valid date.',
        'any.required': 'Release date cannot be empty.',
        'date.min': 'Release date cannot be before today.'
      }),
    date_revision: Joi.date().min(ONE_YEAR_FROM_NOW).utc().required()
      .messages({
        'date.empty': 'Revision date cannot be empty.',
        'date.base': 'Revision date must be a valid date.',
        'any.required': 'Revision date cannot be empty.',
        'date.min': 'Revision date cannot be before one year from today.'
      })
  });
};
