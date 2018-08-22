// Horner method for degree-n polynomial
function eval (a, t) {

    // f(x) = a0+ a1x + ... + anxn
    var n = a.length - 1;// degree (n)
    var b = [];
    var c = [];
    var i, k;
    for (i = 0; i <= n; i++)
        b.push(0), c.push(0);
    
    b[n] = a[n];
    c[n] = b[n];
  	for (k = n-1; k >= 1; k--) {
        b[k] = a[k] + t*b[k+1];
        c[k] = b[k] + t*c[k+1];
    }
    b[0] = a[0] + t*b[1];

    return [b[0],c[1]];
}

// simple Newton
function Newton (eval, x0, epsilon) {
    var eps = epsilon || 1e-4;
 	var imax = 20;
    for (var i = 0; i < imax; i++) {
	    var fdf = eval (coeff, x0);
        x1 = x0 - fdf[0]/fdf[1];
        if (Math.abs(x1 - x0) < eps)
            break;
        x0 = x1;
    }
    return [x1, i];  // return [approx. root, iterations]
}

// simple bisection
function bisection (func, interval, eps) {
    var xLo = interval[0];
    var xHi = interval[1];
    
	fHi = func(coeff,xHi)[0];   // fb
	fLo = func(coeff,xLo)[0];   // fa
    if (fLo * fHi > 0)
        return undefined;
    
	var xMid, fHi, fLo, fMid;
	var iter = 0;
    while (xHi - xLo > eps) {
        ++iter;
		xMid = (xLo+xHi)/2;
		fMid = func(coeff,xMid)[0];  // fc
		
        if (Math.abs(fMid) < eps)
			return [xMid, iter];

        else if (fMid*fLo < 0) { // fa*fc < 0 --> [a,c]
			xHi = xMid;
			fHi = fMid;
		} else {  // fc*fb < 0 --> [c,b]
			xLo = xMid;
			fLo = fMid;
		}
	}
    
	return [(xLo+xHi)/2, iter];
}

// f(x) = 5x^3 - 27x^2 + 60x - 20
//      = 5*(x-0.4)*(x^2 - 5x + 10)
var coeff = [-20,60,-27,5];  

var t0 = performance.now();
var sol1 = Newton (eval, 0.5, 1e-4);
var t1 = performance.now();
var sol0 = bisection (eval, [0,1], 1e-4);
var t2 = performance.now();

console.log ('Newton time: '+ (t1-t0).toFixed(3) +  ': ' + sol1);
console.log ('bisection time: '+ (t2-t1).toFixed(3) + ': ' + sol0);
