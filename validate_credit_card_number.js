// http://www.codewars.com/kata/validate-credit-card-number/javascript

function validate(n){
	var result = false;
	var len = 0;
	var sum = 0;
	if (n) {
		var digits = n.toString().split('').reverse();
		var len = (n.toString().length);
	}
	if (len > 0 && len <= 16) {
		for (var i=0; i<len; i++) {
			digits[i] = parseInt(digits[i]);
			if (i % 2 !== 0) {
				x = digits[i] * 2;
				if (x <= 9) {
					digits[i] = x;
				} else {
					digits[i] = x - 9;
				}
			}
			sum += digits[i];
		}
		if (sum % 10 === 0) {
			result = true;
		}
	}
	return result;
}
