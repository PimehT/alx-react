import { Map } from 'immutable';

/* getImmutableObject - converts @object into immutable map using Map
 * @object: parameter to convert
 *
 * Return: Immutable Map
 */

export default function getImmutableObject (object) {
  return Map(object);
}
