let A =[1,2,3,4,5,6];
let B =[36,56,23,12,9,11];
for (let i = 1 ;i <= A.length-1;i++) {
    const num = A[i];
    for (let j = 1 ; j < B.length-1;j++) {
        const num1 = B[j];
      if( B % 2 === 0 && B % 10 === 0){
            console.log(B[j] + " pair");
        }else{
            console.log( B[j] + " impair");
        }
        
    }
    if( A % 2 === 0 && A % 10 === 0){
            console.log(A[i] + " pair");
    }else {
        console.log(A[i] + " impaire");
    }
}