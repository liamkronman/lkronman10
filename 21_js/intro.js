// Team Monday - Ishita Gupta, Liam Kronman
// SoftDev
// K21 -- Get Scripty/Use prior knowledge of Java and Scheme to write basic fibonacci and factorial functions in JavaScript
// 2021-04-11
// 
// Syntax is very similar to Java. Was unsure whether to define type of variables; went ahead and defined them as vars.


// define function factI with parameter num
function factI(num) {
    // iteratively multiplies numbers to output (default 1) until num is reached
    var output = 1
    for (i = 2; i <= num; i++) {
        output = output * i;
    }
    // returns output
    return output;
}

function factR(num) {
    // base case: if num is 1 return 1
    if (num == 1) {
        return 1;
    }
    // otherwise recursively call function until num = 1
    return num * factR(num - 1);
}

function fibI(num) {
    // define two variables representing "last two elements" of current fibonacci sequence
    var first = 1;
    var second = 1;
    // iteratively adds last two elements to generate a third and updates what last two elements are
    for (i = 3; i <= num; i++) {
        second = first + second;
        first = second - first;
    }
    return second;
}

function fibR(num) {
    // if num is 1 or 2 return 1
    if (num == 1 || num == 2) {
        return 1;
    }
    // otherwise return the sum of previous two elements in fibonacci sequence
    return fibR(num - 1) + fibR(num - 2);
}