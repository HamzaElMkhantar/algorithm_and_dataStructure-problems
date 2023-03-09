// Solution 1 for Problem 1 with JavaScript and array 

function sumDistinctElements_array(set1, set2) {
  let distinctElements = [];
  let sum = 0;
  
  for (let i = 0; i < set1.length; i++) {
    if (!distinctElements.includes(set1[i])) {
      distinctElements.push(set1[i]);
      sum += set1[i];
    }
  }
  
  for (let i = 0; i < set2.length; i++) {
    if (!distinctElements.includes(set2[i])) {
      distinctElements.push(set2[i]);
      sum += set2[i];
    }
  }
  
  return sum;
}


// Solution 2 for Problem 1 with JavaScript and hash table 

function sumDistinctElements_hashTable(set1, set2) {
  let elementCountMap = new Map();
  
  for (let i = 0; i < set1.length; i++) {
    let count = elementCountMap.get(set1[i]) || 0;
    elementCountMap.set(set1[i], count + 1);
  }
  
  for (let i = 0; i < set2.length; i++) {
    let count = elementCountMap.get(set2[i]) || 0;
    elementCountMap.set(set2[i], count + 1);
  }
  
  let sum = 0;
  for (let [element, count] of elementCountMap) {
    if (count === 1) {
      sum += element;
    }
  }
  
  return sum;
}

// Solution 1 for Problem 2 with JavaScript and array

function sumOverlappingElements_array(set1, set2) {
  let sum = 0;
  
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        sum += set1[i];
        break;
      }
    }
  }
  
  return sum;
}

// Solution 2 for Problem 2 with JavaScript and hash table 

function sumOverlappingElements_hashTable(set1, set2) {
  let elementCountMap = new Map();
  
  for (let i = 0; i < set1.length; i++) {
    let count = elementCountMap.get(set1[i]) || 0;
    elementCountMap.set(set1[i], count + 1);
  }
  
  let sum = 0;
  for (let i = 0; i < set2.length; i++) {
    let count = elementCountMap.get(set2[i]) || 0;
    if (count === 1) {
      sum += set2[i];
    }
  }
  
  return sum;
}

