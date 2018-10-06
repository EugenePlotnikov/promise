function Promise(resolve, reject) {
    queue = [];

    function _next() {
        const resolve = queue.shift();
        if (typeof resolve === 'function') {
            console.log(resolve(_next));
        }
    }

    setTimeout(_next, 0);

    var then = function (response, reject = null) {
        // queue.push(response);
        return {
            then(response)
        };
    };
    let ans;
    resolve(response => (ans = response));
    return then(ans);
}

Promise((resolve, reject) => {
    resolve('resolve');
    // reject('reject');
})
    .then((response) => {
        console.log(response);
        //     response('user');
        return 'user1';
    })
    .then(
        response => 'user2',
    //     return 'user2';
    )
    .then(response => 'user3')
    .then(response => 'user4')
    .then(response => 'user5')
    .then(response => 'user6');
// .then(response=>console.log('response2'));
