function Promise(callback) {
    let ans;
    callback(response => (ans = response));
    let then = function(call) {
        if (typeof call === 'function') {
            ans = call(ans);
            return then(ans);
        }
        return { then };
    };
    return then(ans);
}

Promise(resolve => {
    resolve(23424);
})
    .then(response => {
        console.log(response);
        return 64546;
    })
    .then(response => {
        console.log(response);
        return 546;
    })
    .then(response => console.log(response));

// .then(response=>console.log('response2'));
