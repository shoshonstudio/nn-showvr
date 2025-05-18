"use client"

import { z, ZodSchema } from 'zod';

type ZodSchemaFields = { [K: string]: ZodSchemaFields | true };
type DirtyZodSchemaFields = { [K: string]: DirtyZodSchemaFields };

const _proxyHandler = {
  get(fields: DirtyZodSchemaFields, key: string | symbol) {
    if (key === 'then' || typeof key !== 'string') {
      return;
    }
    if (!fields[key]) {
      fields[key] = new Proxy({}, _proxyHandler);
    }

    console.log(fields)

    return fields[key];
  },
};

function _clean(fields: DirtyZodSchemaFields) {
  const cleaned: ZodSchemaFields = {};
  Object.keys(fields).forEach((k) => {
    const val = fields[k];
    cleaned[k] = Object.keys(val).length ? _clean(val) : true;
  });
  return cleaned;
}

export function getZodSchemaFields(schema: ZodSchema): ZodSchemaFields {
  const fields = {};
  schema.safeParse(new Proxy(fields, _proxyHandler));
  return _clean(fields);
}

export function getDefaultsFromSchema<Schema extends z.AnyZodObject>(schema: Schema) {

  return Object.fromEntries(
      Object.entries(schema.shape).map(([key, value]) => {
          if (value instanceof z.ZodDefault) return [key, value._def.defaultValue()]
          return [key, undefined]
      })
  )
}