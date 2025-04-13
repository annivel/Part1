// Implement Open/Closed Principle to allow extending reporting functionality

interface ReportGeneratorService {
    generateTestReport(testResults: any[]): void;
}

class TestCoverageReportGenerator implements ReportGeneratorService {
    generateTestReport(testResults: any[]): void {
        console.log('Test coverage report generator is executing...');
    }
}

class TestSummaryReportGenerator implements ReportGeneratorService {
    generateTestReport(testResults: any[]): void {
        console.log('Test summary report generator is executing...');
    }
}

class DefectReportGenerator implements ReportGeneratorService {
    generateTestReport(testResults: any[]): void {
        console.log('Defect report generator is executing...');
    }
}

class ReportGenerator {
    generateTestReport(reportType: ReportGeneratorService, testResults: any[]): void {
        reportType.generateTestReport(testResults);
    }
}

const testReport = new ReportGenerator();
testReport.generateTestReport(new DefectReportGenerator, [1, 2, 3]);
testReport.generateTestReport(new TestCoverageReportGenerator, [4, 5, 6]);