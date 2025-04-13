// Implementation of SRP (Single responsibility for single method/class)

class LoginService {

    loginToApplication(username: string, password: string): void {
        console.log(`Logging in with ${username}`);
        // Login logic
    }
}

class TestExecutionService {
    testSearchFunctionality(searchTerm: string): void {
        console.log(`Testing search with term: ${searchTerm}`);
        // Search testing logic
    }

    testCheckoutProcess(items: string[]): void {
        console.log(`Testing checkout with ${items.length} items`);
        // Checkout testing logic
    }
}

class ReportGeneratorService {
    generateTestReport(testResults: any[]): void {
        console.log(`Generating HTML report`);
        // HTML report generation
    }
}

class DbService {
    saveReportToDatabase(testResults: any[]): void {
        console.log(`Saving report to MySQL database`);
        // Database saving logic.....
    }
}

class EmailNotificationService {
    sendTestResultEmail(recipients: string[]): void {
        console.log(`Sending email to ${recipients.join(', ')}`);
        // Email sending logic
    }
}

class TestAutomationManager {
    private loginService = new LoginService();
    private testExecutionService = new TestExecutionService();
    private reportGeneratorService = new ReportGeneratorService();
    private dbService = new DbService();
    private notificationService = new EmailNotificationService();


    loginToTheApp(username: string, password: string): void {
        this.loginService.loginToApplication(username, password);
    }

    verifySearchFuntionality(searchTerm: string): void {
        this.testExecutionService.testSearchFunctionality(searchTerm);
    }

    verifyCheckoutFunctionality(items: string[]): void {
        this.testExecutionService.testCheckoutProcess(items);
    }

    generateTestReport(testResults: any[]): void {
        this.reportGeneratorService.generateTestReport(testResults)
    }
}

const manager = new TestAutomationManager();
manager.loginToTheApp("test", "test");
manager.verifySearchFuntionality("search");
manager.verifyCheckoutFunctionality(["test1", "test2"]);
