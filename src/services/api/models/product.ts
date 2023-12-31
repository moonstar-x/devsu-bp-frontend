type BaseProductModel = {
  id: string
  name: string
  description: string
  logo: string
};

export type RawProductModel = BaseProductModel & {
  date_release: string
  date_revision: string
};

export type ProductModel = BaseProductModel & {
  dateRelease: Date
  dateRevision: Date
};

export const rawProductToModel = (rawProduct: RawProductModel): ProductModel => {
  const { date_release, date_revision, ...restRawProduct } = rawProduct;

  return {
    ...restRawProduct,
    dateRelease: new Date(date_release),
    dateRevision: new Date(date_revision)
  };
};

export type ProductMutationFormBody = BaseProductModel & {
  date_release: Date | string
  date_revision: Date | string
};
