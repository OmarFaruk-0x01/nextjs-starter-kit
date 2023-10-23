import { HttpStatusCode } from 'axios';
import { ZodType } from 'zod';

export type ResponseType = {
  code: number;
  status: string;
  message: string;
};

export type ErrorResponseType =
  | {
      correlationId: string;
      name: string;
      message: string;
      code: HttpStatusCode;
      status: string;
      stack: string;
    }
  | Record<string, string>;

export type GetFeatureProps = {
  id: string;
};
export type ListFeaturesProps = {
  page: number;
  size?: number;
};

export type GetFeatureModel<T, K extends string> = ResponseType & {
  data: {
    [_key in K]: T;
  };
};

export type ListFeatureModel<T, K extends string> = ResponseType & {
  data: {
    [_key in K]: T;
  } & { totalItem: number; totalPage: number };
};

export type ValidatorType<T> = {[_ in keyof  T]: ZodType}

// export type WithRelations<T, K extends string, TK> = T & {
//   [_ in K]: TK;
// };
