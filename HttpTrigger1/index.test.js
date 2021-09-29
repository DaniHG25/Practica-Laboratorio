const functions = require('./index');
const context = require('../testing/Context');
//const { test } = require('@jest/globals');

test('Http trigger', async () =>{
    const request = {
        query: { name: 'Daniela' }
    };

    await functions(context, request);
    expect(context.res.body).toEqual('Hello again, Daniela');
    expect(context.log.mock.calls.length).toBe(1);
});