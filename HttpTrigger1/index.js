module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    if(name){
        context.res = {
            status= 200,
            body: "Hello, " + name
        };
    }
    else{
        context.res = {
            status= 400,
            body: "Hello, " + name
    }
    module.exports = async function (context, req) {
        context.log('JavaScript HTTP trigger function 1.');
    
        const name = (req.query.name || (req.body && req.body.name));
        context.log('JavaScript HTTP trigger function 2.');
    
        if(name)
        {
            context.res = {
                status: 200, /* Defaults to 200 */
                body: "Welcome, " + name
            };
        }else{
            context.res = {
                status: 400, 
                body: "Pass a name in the query string or in the request body"
            };
        }
    
    } ;
    const responseMessage = name
        ? "Hello, " + name
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        status: 200, 
        body: responseMessage
    };
}
}
