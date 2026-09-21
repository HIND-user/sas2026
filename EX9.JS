let a=0;
let b=1;
let total ;
for( i=0 ; i <= 10 ; i++){
    console.log(a);
    total = a + b
    a=b
    b=total
}
console.log(total);