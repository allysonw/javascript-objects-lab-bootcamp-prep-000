var recipes = {};

/*returns an object with the orignal key value pairs and the new key
 value pair:*/
function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject = Object.assign({}, object, {[key]: value});
  return newObject;

}

/* updates `object` with the given `key` and `value` (it is
destructive) and returns the entire updated object */
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}
