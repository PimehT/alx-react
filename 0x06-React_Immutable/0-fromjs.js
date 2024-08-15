import { fromJS } from 'immutable';

/* getImmutableObject - converts @object into immutable map using fromJs
 * @object: parameter to convert
 *
 * Return: Immutable Map
 */

export default function getImmutableObject (object) {
  return fromJS(object);
}
