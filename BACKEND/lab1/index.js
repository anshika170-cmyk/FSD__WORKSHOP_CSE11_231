import EventEmitter from "node:events";
// const myEmitter =new EventEmitter();
// myEmitter.on("greet",(teacher)=>
// {
//     console.log(`class started by ${teacher}`);
// });
// myEmitter.on("exit",(teacher) =>{
//       console.log(`class finished by ${teacher}`);
// });
// myEmitter.emit("greet","chandrahas");
// myEmitter.emit("exit","chandrahas");
const details=new EventEmitter();
details.on("info",(subject,name) =>
{
    console.log(`My name is ${name} and my subject is ${subject}.`);
});
details.emit("info","history","Anshika");