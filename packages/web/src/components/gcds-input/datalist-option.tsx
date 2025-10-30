export type DataListOptionObject = {
  label: string;
  value?: string;
};

export function isDataListObject(obj: any): obj is DataListOptionObject {
  if (typeof obj !== 'object' || obj === null) return false;

  const validKeys = ['value', 'label'];
  const objKeys = Object.keys(obj);

  const hasValidTypes =
    typeof obj.label === 'string' &&
    (obj.value === undefined || typeof obj.value === 'string');

  const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));

  return hasValidTypes && hasOnlyValidKeys;
}
