const runTest = (descr, test) => {
    console.log(descr)
    try {
        test();
        console.log("\tPass");
    } catch(err) {
        console.log(`\tFail: ${err.message} \n\t${err}`);
    }
};

module.exports = runTest;