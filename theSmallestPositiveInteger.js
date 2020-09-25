// solution 1    time complexity = O(n^2) 
function solution(A) {
  for (i = 1; i < 1000000; i++) {
    if(!A.includes(i)) return i;
  }
}

// solution 2    time complexity = O(n) 
var firstMissingPositive = function(nums) {
    var swap = function(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };

    for (let i = 0; i < nums.length; i++) {
        while (0 < nums[i] && nums[i] - 1 < nums.length
                && nums[i] != i + 1
                && nums[i] != nums[nums[i] - 1]) {
            swap(i, nums[i] - 1);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};


// solution 3     time complexity = O(n) 
function findNumber(values) {
  let result = [];

  for (let i = 0; i < values.length; ++i) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; ++i) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1
}

// soltuin 4
function solution(A) {
  const set = new Set(A);
  let i = 1;

  while (set.has(i)) {
    i++;
  }

  return i;
}
