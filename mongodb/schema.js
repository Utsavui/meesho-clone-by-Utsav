import mongoose from "mongoose";

const orderschema=new mongoose.Schema({
     product:{
      type:Object,
      required:true
     },
      qty:{
          type:Number,
      required:true
      },
      price:{

        type:Number,
      required:true
      },
      address:{
        type:Object,
      required:true
      },
      paymentmode:{
        type:String,
      required:true
      }
})

const orderpro =mongoose.model("orderfinal",orderschema)

export {orderpro}
