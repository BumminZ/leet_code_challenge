const merge = (nums1, m, nums2, n) => {
  let i = nums1.length - 1;
  let j = 0;
  while (i >= m) {
    if (nums2[j] && j <= n) {
      nums1[i] = nums2[j];
    }
    i--;
    j++;
  }
  nums1.sort((x, y) => x - y);
};

