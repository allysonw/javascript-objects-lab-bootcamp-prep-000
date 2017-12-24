var recipes = {};

/*returns an object with the orignal key value pairs and the new key
 value pair:*/
function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject = Object.assign({}, object, {key: value})
  return object;

}
