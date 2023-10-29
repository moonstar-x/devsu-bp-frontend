import { ProductSchema } from './product.ts';
import { ProductMutationFormBody } from '$services/api/models/product.ts';

describe('Schemas: Product', () => {
  describe('ProductSchema', () => {
    const RELEASE_DATE = new Date();
    const REVISION_DATE = new Date();
    REVISION_DATE.setFullYear(REVISION_DATE.getFullYear() + 1);

    const Schema = ProductSchema;
    const validProduct: ProductMutationFormBody = {
      id: 'tj-crd',
      name: 'Tarjeta de Credito',
      description: 'Tarjeta de consumo',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: RELEASE_DATE.toISOString(),
      date_revision: REVISION_DATE.toISOString()
    };

    it('should validate false against incomplete objects.', () => {
      const { id, name, description, logo, date_revision, date_release } = validProduct;

      const values = [
        { id },
        { id, name },
        { id, name, description },
        { id, name, description, logo },
        { id, name, description, logo, date_release },
        { id, name, description, logo, date_revision }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate false against bad id.', () => {
      const values = [
        { ...validProduct, id: '' },
        { ...validProduct, id: null },
        { ...validProduct, id: 123 },
        { ...validProduct, id: 'id' },
        { ...validProduct, id: 'really_long_id' }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate false against bad name.', () => {
      const values = [
        { ...validProduct, name: '' },
        { ...validProduct, name: null },
        { ...validProduct, name: 123 },
        { ...validProduct, name: 'abcd' },
        { ...validProduct, name: 'really_long_name'.repeat(10) }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate false against bad description.', () => {
      const values = [
        { ...validProduct, description: '' },
        { ...validProduct, description: null },
        { ...validProduct, description: 123 },
        { ...validProduct, description: 'too_short' },
        { ...validProduct, description: 'really_long_description'.repeat(10) }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate false against bad logo.', () => {
      const values = [
        { ...validProduct, logo: '' },
        { ...validProduct, logo: null },
        { ...validProduct, logo: 123 },
        { ...validProduct, logo: 'not_an_uri' }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate false against bad date_release.', () => {
      const now = new Date();
      const date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate() + 1);

      const values = [
        { ...validProduct, date_release: '' },
        { ...validProduct, date_release: null },
        { ...validProduct, date_release: 123 },
        { ...validProduct, date_release: date }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate false against bad date_revision.', () => {
      const now = new Date();

      const values = [
        { ...validProduct, date_revision: '' },
        { ...validProduct, date_revision: null },
        { ...validProduct, date_revision: 123 },
        { ...validProduct, date_revision: now }
      ];

      for (const value of values) {
        expect(Schema.validate(value).error).toBeTruthy();
      }
    });

    it('should validate true against valid objects.', () => {
      expect(Schema.validate(validProduct).error).toBeFalsy();
    });
  });
});
