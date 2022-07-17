const addBinary = (a, b) => {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    final = "";

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += a.charAt(i--) - "0";
    if (j >= 0) sum += b.charAt(j--) - "0";
    final += Math.floor(sum % 2);
    carry = sum / 2;
  }
  if (carry != 0) final += Math.floor(carry);
  return final.split("").reverse().join("").replace(/^0+/, "") || "0";
};

// ref: https://leetcode.com/problems/add-binary/discuss/24488/Short-AC-solution-in-Java-with-explanation
