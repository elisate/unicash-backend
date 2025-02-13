
import mongoose from "mongoose";
const {schema,model}=mongoose;
const productschema= new schema(
    {
        productId:{
            type:String,
            required:true
        },
        productName:{
            type:String,
            required:true
        },
        productPrice:{
            type:String,
            required:true
        },
        productCategory:{
            type:String,
            required:true
        },
        productImage:{
            type:String,
            required:true
        }
    }
) 
const Product=model("Product",productschema);
export default Product;