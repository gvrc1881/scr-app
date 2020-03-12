import { Component, OnInit, Input, Output } from '@angular/core';
import { ReportService  } from "src/app/services/report.service";
import { Router } from '@angular/router';
//import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-progress-reports.component',
  templateUrl: './daily-progress-reports.component.html',
  styleUrls: ['./daily-progress-reports.component.css']
})
export class DailyProgressReportsComponent implements OnInit {

  dailyReportData: any;
  
  constructor(
    private reportService: ReportService,   
    private router: Router, 
  ) { }

  ngOnInit() {   
    console.log(this.router.url);
    let reportType = '';
    if(this.router.url == '/daily-progress-reports'){
      reportType = 'DailyProgress';      
    }
    else if(this.router.url == '/asset-reports') {
      reportType = 'AssetReports';      
    }
    else if(this.router.url == '/inventory-reports') {
      reportType = 'WHRS_WAREHOUSE';
    }
    else if(this.router.url == '/psi-reports'){
     reportType = 'PSIReports'
    }
    else if(this.router.url == '/zonal-reports'){
      reportType = 'zonal';
    }
    else if(this.router.url == '/asset-master-reports'){
      reportType = 'Asset_Master_Reports';
    }
    this.reportService.dailyProgressReports(reportType).subscribe((data)=>{
      this.dailyReportData =data;
     // console.log(reportType+' = '+JSON.stringify(data))
  })
}
  
  }
