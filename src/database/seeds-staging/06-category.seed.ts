/* eslint-disable @typescript-eslint/no-unused-vars */
import { Seeder, Factory } from 'typeorm-seeding';
import { resolve } from 'path';
import { convertCsvToJson, insertDbData } from '../../core/utils/appHelper';

export default class CreateCategories implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const table = 'categories';
    const fields = ['id', 'name', 'slug'];
    const numberTypeFields = ['id'];
    const nullableFields = [];
    const filepath = resolve(__dirname, 'data', 'category.csv');
    const fetchData = await convertCsvToJson(filepath);
    await insertDbData(table, fields, numberTypeFields, nullableFields, fetchData);
  }
}
