const promise = new Promise((resolve, reject) => {
    resolve();
    });
    promise
    .then(() => {
    console.log('first'); 
    })
    .then(()=>{
        console.log('second');
    })
    .then(()=>{
        console.log('third');
    })
    .catch((error)=>{
        console.log('error' );
    });

   