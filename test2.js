const Promise = callback => {
    const queue = [];
    let resolve = null;

    const _next = resp => {
        var func = queue.shift();
        // console.log(typeof func === 'function');
        if (!resolve) {
            func(res => {
                resolve = res;
                _next(resolve);
            });
        } else if (func) {
            _next(func(resp));
        }
    };

    const then = func => {
        queue.push(func);
        return { then };
    };

    setTimeout(_next, 0);
    return then(callback);
};

Promise(resolve => {
    //   resolve('resolve');
    setTimeout(() => {
        console.log('start tik-tak');
        resolve(1);
    }, 1000);
})
    .then(response => {
        return response + 1;
    })
    .then(response => {
        return response + 1;
    })
    .then(response => console.log(response));

// .then(response=>console.log('response2'));
