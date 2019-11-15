export * from './deployment';

export function isObject(val:any) {
  return typeof val === 'object'
}

export function isString(val:any) {
  return typeof val === 'string';
}

export function keysAreValid(val:any, keys:string[], isValid:(val:any)=>boolean) {
  return isObject(val) && keys.every((key:string)=>isValid(val[key]));
}

export function keysAreStrings(val:any, keys:string[]) {
  return keysAreValid(val, keys, isString);
}