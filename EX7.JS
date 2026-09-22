for (let i = 1 ; i <= 50 ;i++) {
    let premier = true
    for (let j = 0; j <i ; j++) {
        if ( i % j === 0) {
            premier = false;
        }
        
    }
    if (premier) {
        console.log(i);
        
    }
}