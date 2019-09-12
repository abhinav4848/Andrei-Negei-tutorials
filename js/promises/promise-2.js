const promise0 = new Promise((resolve, reject) => {
    resolve('Stuff Worked')
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII');
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Looking for me?');
    }, 3000);
})

//the variables take time to get their values, not Promise.all
Promise.all([promise0, promise1, promise2, promise3])
    .then(values => {
        console.log(values);
    })