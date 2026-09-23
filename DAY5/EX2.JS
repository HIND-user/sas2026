let user = {
    age : "18",
    isactive : true ,
    active :  function (){
    return this.isactive;
}

}
console.log(user.active());