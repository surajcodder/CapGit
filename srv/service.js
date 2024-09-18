const cds = require('@sap/cds');
module.exports = cds.service.impl(async function(srv){
    srv.on('printHelloWorld', req =>{
        console.log(req.data.input)
        return `Hello ${req.data.input}!`
    })
    srv.on('addition', req=>{
        var result = req.data.num1 + req.data.num2;
        return result;
    })
    srv.on('myFunction', req=>{
        let result1 = {}
        if(req.data.catagory == 1){
            result.product = 'BMW',
            result.price = '4200 USD',
            result.location = 'LONDON'
        } else{
            result.product = 'AUDI',
            result.priceArray = {
                'price': 23345,
                'color': 'red'
            }
        }
    })

})