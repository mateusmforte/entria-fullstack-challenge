/**
 * @flow
 * @relayHash 88e6cdb4b71ec4dc24949c49be6c9287
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TaskList_task$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +tasks: ?$ReadOnlyArray<?{|
    +_id: string,
    +$fragmentRefs: TaskList_task$ref,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  tasks {
    _id
    ...TaskList_task
  }
}

fragment TaskList_task on tasks {
  title
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "getTasks",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": null,
        "args": null,
        "concreteType": "tasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "TaskList_task",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": null,
        "args": null,
        "concreteType": "tasks",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  tasks {\n    _id\n    ...TaskList_task\n  }\n}\n\nfragment TaskList_task on tasks {\n  title\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f8a8cc8654d82cd5d984006c7ee0ac1';
module.exports = node;
