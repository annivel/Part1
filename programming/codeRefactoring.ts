// refactored code
enum TestsStatuses {
    PENDING = "pending",
    RUNNING = "running",
    PASSED = "passed",
    FAILED = "failed"
}

type TestState = {
    status: TestsStatuses;
    failedTests: string[];
}

function runTest(testName: string, testFn: () => void, state: TestState): TestState {
    console.log(`Running test: ${testName}`);

    let newState: TestState = {
        status: TestsStatuses.RUNNING,
        failedTests: [...state.failedTests]
    };

    try {
        testFn();
        newState.status = TestsStatuses.PASSED;
    } catch (error: any) {
        newState.status = TestsStatuses.FAILED;
        newState.failedTests.push(testName);
        console.error(`Test ${testName} failed: ${error.message}`);
    }

    return newState;
}

function getTestSummary(state: TestState) {
    return {
        status: state.status,
        failedTests: state.failedTests,
        totalFailed: state.failedTests.length
    };
}
// positive test case
let initialState: TestState = {
    status: TestsStatuses.PENDING,
    failedTests: []
};

let updatedState = runTest("addition test", () => {
    if (2 + 2 !== 4) {
        throw new Error("Addition test error");
    }
}, initialState);

console.log("Test state before test run", getTestSummary(initialState));
console.log("Test state after test run", getTestSummary(updatedState))

// negative test case
let initialState2: TestState = {
    status: TestsStatuses.PENDING,
    failedTests: []
};

let updatedState2 = runTest("division test", () => {
    if (2/0 !== undefined) {
        throw new Error("devdivision test error");
    }
}, initialState2);

console.log("Test state before test run", getTestSummary(initialState2));
console.log("Test state after test run", getTestSummary(updatedState2))