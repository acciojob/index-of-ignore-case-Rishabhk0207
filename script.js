function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let lower = s1.toLowerCase();
	let lower1 = s2.toLowerCase();

	let ans = lower.indexOf(lower1);
	return ans;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
