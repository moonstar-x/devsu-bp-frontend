import Joi from 'joi';
import { ProductMutationFormBody } from '$services/api/models/product.ts';

const NOW = new Date();
const ONE_YEAR_FROM_NOW = new Date(NOW.getFullYear() + 1, NOW.getMonth(), NOW.getDate());

export const ProductSchema = Joi.object<ProductMutationFormBody>({
  id: Joi.string().min(3).max(10).required(),
  name: Joi.string().min(5).max(100).required(),
  description: Joi.string().min(10).max(200).required(),
  logo: Joi.string().uri().required(),
  date_release: Joi.date().min(NOW).required(),
  date_revision: Joi.date().min(ONE_YEAR_FROM_NOW).required()
});
