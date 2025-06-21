function sortArray() {
    const input = document.getElementById("numbersInput").value;
    const algo = document.getElementById("algorithmSelect").value;
    const nums = input.split(",").map(Number);
  
    let sorted = [];
    let complexity = "";
  
    switch (algo) {
      case "bubble":
        sorted = bubbleSort(nums);
        complexity = "Time Complexity: O(n²)";
        break;
      case "selection":
        sorted = selectionSort(nums);
        complexity = "Time Complexity: O(n²)";
        break;
      case "merge":
        sorted = mergeSort(nums);
        complexity = "Time Complexity: O(n log n)";
        break;
      case "quick":
        sorted = quickSort(nums);
        complexity = "Time Complexity: O(n log n) avg, O(n²) worst";
        break;
    }
  
    document.getElementById("result").innerText = `Sorted: ${sorted.join(", ")}`;
    document.getElementById("complexity").innerText = complexity;
  }
  
  // Sorting Algorithms
  
  function bubbleSort(arr) {
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
        }
      }
    }
    return a;
  }
  
  function selectionSort(arr) {
    let a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let min = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[min]) min = j;
      }
      [a[i], a[min]] = [a[min], a[i]];
    }
    return a;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    let res = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) res.push(left.shift());
      else res.push(right.shift());
    }
    return [...res, ...left, ...right];
  }
  
  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = arr.slice(1).filter(n => n <= pivot);
    const right = arr.slice(1).filter(n => n > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  