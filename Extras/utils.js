function is_object_empty(object)
{
  if (object == undefined || object == null) return true;

  return Object.keys(object).length == 0 ? true : false;
}