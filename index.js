const mongoose=require("mongoose");

main()
.then((res)=>{
    console.log("connection successfull");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); 
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User=mongoose.model("User",userSchema);
// const Employee=mongoose.model("Employee",userSchema);   
// const user2=new User({
//     name:"eve",
//     email:"eve@yahoo.in",
//     age:45,
// })
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.insertMany([
//     {name:"vivek chamoli",email:"vivekchamoli153@gmail.com",age:19},
//     {name:"adam kumar",email:"adam@yahoo.in",age:55},
//     {name:"eve kumari",email:"eve@yahoo.ac.in",age:45}, 
// ]).then((data)=>{
//     console.log(data);
// })
// User.findById('69a433032387725388bd1249').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// User.findByIdAndUpdate(("69a433032387725388bd1247"),{age:20},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.findByIdAndDelete(('69a433032387725388bd1249'))
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });