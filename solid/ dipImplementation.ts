interface DataBaseService {
    saveReport(testResults: any[]): void;
}

class MySqlReportService implements DataBaseService {
    saveReport(testResults: any[]): void {
        console.log(`Saving report to MySQL database`);
    }
}

class PostgressReportService implements DataBaseService {
    saveReport(testResults: any[]): void {
        console.log(`Saving report to Postgress database`);
    }
}

class ReportDbManager {
    constructor(private dbService: DataBaseService) {
    }

    saveReport(testResults: any[]) {
        this.dbService.saveReport(testResults);
    }
}

const sqlReportManager = new ReportDbManager(new MySqlReportService);
sqlReportManager.saveReport([1, 1, 1])


const postgresReportManager = new ReportDbManager(new PostgressReportService);
postgresReportManager.saveReport([3, 3, 3])