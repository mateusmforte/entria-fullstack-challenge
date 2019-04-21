import {
    Environment,
    Network,
    RecordSource,
    Store
} from 'react-relay'

function fetchQuery (request,variables) {
    return fetch('/graphql',{
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            query: request.text,
            variables,
        }),
    }).then(response=>{
        return response.json();
    });
}

const env = new Environment({
    network:  Network.create(fetchQuery),
    store: new Store(new RecordSource()),
})

export default env;