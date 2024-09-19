const cds = require("@sap/cds");
module.exports = cds.service.impl(async function (srv) {
  srv.on("printHelloWorld", (req) => {
    console.log(req.data.input);
    return `Hello ${req.data.input}!`;
  });
  srv.on("addition", (req) => {
    var result = req.data.num1 + req.data.num2;
    return result;
  });
  srv.on("myFunction", (req) => {
    var result1 = {};
    debugger;
    if (req.data.Catagory === 1) {
      (result1.product = "BMW"),
        (result1.price = "4200 USD"),
        (result1.location = "LONDON");
    } else {
      (result1.product = "AUDI"),
        (result1.priceArray = {
          price: 23345,
          color: "red",
        });
    }
    debugger;
    return result1;
  });
});
