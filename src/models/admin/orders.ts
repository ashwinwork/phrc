import pgParams from "../../database";
import logger from "../../utils/logger";
import BaseModel from "../base";

interface Order {
    clientId: number,  
    fromLanguage: string, 
    toLanguage: string, 
    pages: number, 
    pricePerPage: number, 
    orderStatus: string
};

class OrderModel extends BaseModel{
    private static table_name = 'orders';

    private static baseConnection = new BaseModel(pgParams);

    public static async addOrders(body: Order){
        try{
            const {clientId, fromLanguage, toLanguage, pages, pricePerPage, orderStatus} = body;
            await this.baseConnection.create(this.table_name, {client_id: clientId, from_language: fromLanguage,to_language: toLanguage,pages: pages,price_per_page: pricePerPage, orderStatus: orderStatus });
    
            return true;
        }catch(err){
            logger.error("Model: Unable to add order at the moment:",err)
        }
    }

    public static async readOrders(userId: number){
        try{
            if(userId){
                const [orders] = await this.baseConnection.findById(this.table_name, userId);
                return orders;
            }
            const [orders] = await this.baseConnection.findAll(this.readOrders);
            return orders;
        }catch(err){
            logger.error("Model: Unable to fetch orders", err)
        }
    }

    public static async deleteOrders(orderId: number){
        try{
            await this.baseConnection.delete(this.table_name, orderId);
            return true;
        }catch(err){
            logger.error('Model: Unable to delete orders', "err")
        }
    }

    public static async updateOrders(orderId: number, data: Order){
        try{
            const {clientId, fromLanguage, toLanguage, pages, pricePerPage, orderStatus} = data;
            await this.baseConnection.update(this.table_name, orderId, {client_id: clientId, from_language: fromLanguage,to_language: toLanguage,pages: pages,price_per_page: pricePerPage, orderStatus: orderStatus } )
        }catch(err){
            logger.error('Model: Unable to delete orders', "err")
        }
    }
}

export default OrderModel;