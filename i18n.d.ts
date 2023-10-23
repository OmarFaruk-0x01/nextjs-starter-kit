import { authLocale, commonLocale } from '~/../locales';

type RecursiveKeys<T> = T extends string
  ? T
  : {
      [K in keyof T]: T[K] extends string
        ? `${K}`
        : `${K}` | `${K}.${RecursiveKeys<T[K]>}`;
    }[keyof T];

const locals = {
  auth: authLocale,
  common: commonLocale,
};

export type NamespacesType = keyof typeof locals;

type LocaleType<K extends NamespacesType> = RecursiveKeys<(typeof locals)[K]>;
