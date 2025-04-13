// create a factory method for creating different types of test runners (UI, API, Performance)
interface TestRunner { //Product
    runTest(): void;
}

// Concrete Products
class UiTestRunner implements TestRunner {
    runTest(): void {
        console.log("Running test in UiTestRunner");
    }
}

class ApiTestRunner implements TestRunner {
    runTest(): void {
        console.log("Running test in ApiTestRunner");
    }

}

class PerformanceTestRunner implements TestRunner {
    runTest(): void {
        console.log("Running test in PerformanceTestRunner");
    }
}

// Creator interface/abstract class
abstract class TestFactory { //Creator
    abstract createTestRunner(): TestRunner;

    runTest(){
        const executor = this.createTestRunner();
        executor.runTest();
    }
}

// Concrete Creator
class UiTestFactory extends TestFactory {
    createTestRunner(): TestRunner {
        return new UiTestRunner();
    }
}

// Concrete Creator
class ApiTestFactory extends TestFactory {
    createTestRunner(): TestRunner {
        return new ApiTestRunner();
    }
}

// Concrete Creator
class PerformanceTestFactory extends TestFactory {
    createTestRunner(): TestRunner {
        return new PerformanceTestRunner();
    }
}


const uiTestRunner = new UiTestFactory();
uiTestRunner.runTest();

const apiTestRunner = new ApiTestFactory();
apiTestRunner.runTest();
