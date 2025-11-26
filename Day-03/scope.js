let globalVariable = "I am on roof";

function myRoom(){
    let privateVar="im in the room";//fucntion scope
    console.log(globalVariable);//works (room can access roof)
    console.log(privateVar);//works (room can access room);

}
myRoom();
console.log(globalVariable);//works (roof can access roof);
//console.log(privateVar);//error (roof cannot access room);    