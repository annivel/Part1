import { List, Map, Record, Set } from 'immutable';

const TestStatus = {
    PENDING: 'PENDING',
    PASSED: 'PASSED',
    FAILED: 'FAILED',
} as const;

type TestStatus = typeof TestStatus[keyof typeof TestStatus];

const TestCaseRecord = Record({
    id: '',
    name: '',
    description: '',
    status: TestStatus.PENDING,
    tags: Set<string>()
});

type TestCase = Record<{
    id: string,
    name: string,
    description: string,
    status: TestStatus,
    tags: Set<string>
}>;

type TestSuite = Map<string, TestCase>;


function createNewTestCase(id: string, name: string, description: string, tags: string[]): TestCase {
    return new TestCaseRecord({
        id,
        name,
        description,
        status: TestStatus.PENDING,
        tags: Set(tags)
    }) as TestCase;
}

function createTestSuite(): TestSuite {
    return Map<string, TestCase>();
}

function addTestCase(suite: TestSuite, testCase: TestCase): TestSuite {
    return suite.set(testCase.get('id'), testCase);
}

function updateTestStatus(id: string, suite: TestSuite, newStatus: TestStatus): TestSuite {
    const testCase = suite.get(id);

    if (!testCase) {
        return suite;
    }

    const updatedTestCase = testCase.set('status', newStatus);

    return suite.set(id, updatedTestCase);
}

function filterByStatus(suite: TestSuite, status: TestStatus): TestSuite {
    return suite.filter(testCase => testCase.get('status') === status) as TestSuite;
}

const testCase1 = createNewTestCase("1", "Login", "Verify user can login", ["smoke"]);
const testCase2 = createNewTestCase("2", "User Profile", "Verify user can update nickname", ["regression"]);
const testCase3 = createNewTestCase("3", "User's Connections", "Verify user can add new connection", ["smoke"]);

let testSmokeSuite = createTestSuite();
testSmokeSuite = addTestCase(testSmokeSuite, testCase1);
testSmokeSuite = addTestCase(testSmokeSuite, testCase3);
//console.log(`Smoke suite contains ${testSmokeSuite.size} test(s): ${testSmokeSuite}`);

let testRegressionSuite = createTestSuite();
testRegressionSuite = addTestCase(testRegressionSuite, testCase2);
//console.log(`Regression suite contains ${testRegressionSuite.size} test(s): ${testRegressionSuite}`);

testSmokeSuite = updateTestStatus("1", testSmokeSuite, TestStatus.PASSED);
testRegressionSuite = updateTestStatus("2", testRegressionSuite, TestStatus.PASSED);
testSmokeSuite = updateTestStatus("3", testSmokeSuite, TestStatus.FAILED);

let passedSmokeTests = filterByStatus(testSmokeSuite, TestStatus.PASSED);
let failedSmokeTests = filterByStatus(testSmokeSuite, TestStatus.FAILED);

console.log("Passed smoke tests:", JSON.stringify(passedSmokeTests));
console.log("Failed smoke tests:", JSON.stringify(failedSmokeTests));
