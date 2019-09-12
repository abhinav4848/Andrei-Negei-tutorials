const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it broke')
    }
})

// a promise starts working the moment it is created.
//.then is just to process the output

promise
    .then(result0 => result0 + '!')
    .then(result1 => {
        console.log(result1);
        return result1 + '?'
    })

    .then((result2) => console.log(result2 + '...'))
    .then(() => {
        //result2 is lost
        //so no use of accepting arguments to this f()
        console.log('Dont mind me')
    })

    .catch(() => {
        //only runs for errors occuring before it
        console.log('Error!')
    })
    .then(result3 => {
        //result3 is undefined
        throw Error('Oops result is lost here.');
        console.log(result3 + '?')
    })
    .catch((e) => {
        //if error is not caught, promise is rejected
        console.log('Error at the end: ' + e)
    })