/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TaskList_tasks$ref: FragmentReference;
export type TaskList_tasks = $ReadOnlyArray<{|
  +title: string,
  +description: string,
  +$refType: TaskList_tasks$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TaskList_tasks",
  "type": "tasks",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
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
};
// prettier-ignore
(node/*: any*/).hash = '802d654e172aa513d86280557114b58b';
module.exports = node;
