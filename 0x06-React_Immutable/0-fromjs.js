#!/usr/bin/node
const { fromJS } = require('immutable');

/* getImmutableObject - converts @object into immutable map using fromJs
 * @object: parameter to convert
 *
 * Return: Immutable Map
 */

function getImmutableObject (object) {
  return fromJS(object);
}

module.exports = getImmutableObject;
