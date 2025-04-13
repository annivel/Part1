interface ReportStategy {
    generateReport(): void;
}

class TestResultReport implements ReportStategy {
    generateReport(): void {
        console.log("TestResultReport is generated");
    }
}

class TestCoverageReport implements ReportStategy {
    generateReport(): void {
        console.log("TestCoverageReport is generated");
    }
}

class TestReportGenerator {
    generateTestReport(stategy: ReportStategy): void {
        stategy.generateReport()
    }
}

const reportGenerator = new TestReportGenerator();
reportGenerator.generateTestReport(new TestResultReport());
reportGenerator.generateTestReport(new TestCoverageReport());