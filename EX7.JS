let num_premier = [];
let num_Nom_premier = [];

for (let i = 1 ; i <= 50 ;i++) {
    let premier = false ;
     if (i % 2 === 0) {
        num_premier.push(i);
    }
    else{
         num_Nom_premier.push(i);     }
     
    
}
console.log(num_Nom_premier);
// console.log(num_premier);
