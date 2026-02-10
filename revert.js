try {
    const myerror = new Error();

    throw myerror
} catch (err) {
    console.log("error catches" ,err);

}
//  console.log(myerror);
