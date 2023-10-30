function mySwap(arr, index1, index2) {
  index1num = arr[index1];
  index2num = arr[index2];

  arr[index1] = index2num;
  arr[index2] = index1num;

  return arr;
}
