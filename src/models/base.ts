import { Knex, knex } from "knex";

class BaseModel {
  knex: Knex;

  constructor(config: Knex.Config) {
      this.knex = knex(config);
  }
  
    async findAll(tableName) {
      return this.knex(tableName).select('*');
    }
  
    async findById(tableName, id) {
      return this.knex(tableName).where({ id }).first();
    }
  
    // You can add more common methods here
    // For example, a method to create a new record in a table
    async create(tableName, data) {
      return this.knex(tableName).insert(data).returning('id');
    }
  
    // For example, a method to update a record in a table
    async update(tableName, id, data) {
      return this.knex(tableName).where({ id }).update(data);
    }
  
    // For example, a method to delete a record from a table
    async delete(tableName, id) {
      return this.knex(tableName).where({ id }).del();
    }
  }
  
export default BaseModel;
  
  