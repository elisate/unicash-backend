import mongoose, { Schema } from "mongoose";

const {model,schema}=mongoose;
const userschema=new Schema(
 {
userEmail:{type:string,require:true},
userNames:{type:string,require:true},
userRole:{type:string,require:true, enum: ["Admin"],},

    },
    { timestamps: true }
)

const GateUser =model("GateUser",userschema);
export default GateUser;