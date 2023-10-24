function myIncludes(arr, val) {
  if (val in arr) {
    return true;
  }
  return false;
}

console.log(myIncludes(["a", "b", "c"], "a"));
