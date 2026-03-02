const mongoose=require("mongoose");

main()
.then((res)=>{
    console.log("connection successfull");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); 
}
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:0,
    },
    discount:{
        type:String,
        default:0,
    },
    genre:[String],
})
const Book= mongoose.model("Book",bookSchema);
Book.findByIdAndUpdate(('69a47e7ac828dc2baf36eea2'),{price:-4}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
// let book1=new Book({
//     title:"batman",
//     price:500,
//     genre:["fiction","action","DC"],
// })
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });