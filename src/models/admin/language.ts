import knex = require("knex");
import pgParams from "../../database";
import logger from "../../utils/logger";
import BaseModel from "../base";

class LanguageModel extends BaseModel{
    private static baseConnection = new BaseModel(pgParams);
    private static table_name = 'language';

    public static async addLanguage(langIdentifier: string, language:string){
        try{
        await this.baseConnection.create(this.table_name, {lang_identifier: langIdentifier, language: language});
        
        return true;
        }catch(err){
            logger.error("Model:Cannot create language",err)
        }
    }

    public static async getLanguages(){
        try{
        const [languages]= await this.baseConnection.findAll(this.table_name);

        return languages;
        }catch(err){
            logger.error("Model:Cannot fetch language at the moment",err)
        }
    }

    public static async deleteLanguage(langIdentifier: string){
        try{            
            await this.baseConnection.delete(this.table_name, langIdentifier)
            return true;
        }catch(err){
            logger.error("Model:Cannot delete language at the moment",err)
        }
    }
}

export default LanguageModel;