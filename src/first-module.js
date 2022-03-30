function foo() {
    console.log('first-module code');
    import(/* webpackChunkName: "secondModule" */ './second-module.js');
}

foo();
