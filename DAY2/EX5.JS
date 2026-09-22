const isEmpty = (str) => {

if (str.trim() == ""){
    return true;
} else{
  return false ;
}  
}
console.log(isEmpty("  "));
console.log(isEmpty("hello")); 
