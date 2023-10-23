import zod from 'zod';
import { AddUpdateProductModel } from './product.model';
import { ValidatorType } from '~/helpers/shared-model';

export const addUpdateProductSchema = zod.object<ValidatorType<AddUpdateProductModel>>({

});
