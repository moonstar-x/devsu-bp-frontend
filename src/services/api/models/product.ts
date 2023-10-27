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
