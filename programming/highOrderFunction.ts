const testResults = [
    { id: 1, name: "Login Test", status: "passed", duration: 1.2, feature: "Authentication" },
    { id: 2, name: "Search Test", status: "failed", duration: 0.8, feature: "Search" },
    { id: 3, name: "Add to Cart", status: "passed", duration: 1.5, feature: "Cart" },
    { id: 4, name: "Checkout", status: "failed", duration: 2.3, feature: "Checkout" },
    { id: 5, name: "Payment", status: "failed", duration: 1.9, feature: "Checkout" }
  ];
const totalTestCount = testResults.length;

// 2a. Filter test results to show only failed tests
console.log(testResults.filter(testStatus => testStatus.status === 'passed'));

//2b. Calculate test statistics (pass rate, average duration, etc.)
let totalDuration = testResults.reduce((sum, current) => sum + current.duration, 0);
let avgDuration = totalDuration / totalTestCount;

console.log(`Average test duration is: ${avgDuration.toFixed(2)} seconds`)
let passedTestsCount = testResults.filter(test => test.status === 'passed').length;
let passRate = (passedTestsCount / totalTestCount) * 100;

console.log(`Pass rate is ${passRate}%`);

//2c. Group tests by feature area
const groupedTests = testResults.reduce<Record<string, typeof testResults>>((result, test) => {
    if (!result[test.feature]) {
        result[test.feature] = [];
    }
        result[test.feature].push(test);
    
    return result;
}, {});
console.log(groupedTests);
