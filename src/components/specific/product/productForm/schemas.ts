import Joi from 'joi';
import { ProductMutationFormBody } from '$services/api/models/product.ts';

export const CreateProductSchema = Joi.object<ProductMutationFormBody>({
  id: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  logo: Joi.string(),
  date_release: Joi.string(),
  date_revision: Joi.string()
});
