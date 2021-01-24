import { Request } from '@hapi/hapi';
import { TestObject, ListValue } from './types';

const list: Array<string> = [] // list square

export async function getTest(): Promise<Array<TestObject>> {
  return Promise.resolve([
    { name: 'Name 1', count: 1 },
    { name: 'Name 2', count: 2 },
  ]);
}

export async function getList(): Promise<Array<string>> {
  return Promise.resolve(list);
}

export async function updateList(req: Request): Promise<ListValue> {
  const newValue = req.payload as ListValue;
  list.push(newValue.value);
  return Promise.resolve(newValue);
}

export async function changeTest(req: Request): Promise<TestObject> {
  return Promise.resolve(req.payload as TestObject);
}
