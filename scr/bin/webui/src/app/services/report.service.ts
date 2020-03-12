import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ReportParameterModel } from '../models/reportParameter.model';
import {FacilityModel} from '../models/facility.model';
import { ReportModel } from '../models/report.model';
import {FailuresTableModel} from '../models/failures-table.model';
import { ProductModel } from '../models/product.model';
import { ScheduleModel } from '../models/schedule.model';
@Injectable()
export class ReportService {
    url: string = environment.apiUrl;
    header: any;
    accessToken: any = JSON.parse(localStorage.getItem('accessToken'));
    constructor(private http: HttpClient) {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json;charset=UTF-8',
            'accept': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`
        });
    }

    makeReport(model) {
        return this.http.post(this.url + '/makeReport' ,model,  { headers: this.header });
    }
   

reportParameterNames() {
    
    return this.http.get<ReportParameterModel>(environment.apiUrl + '/reportParameterNames' , { headers: this.header });
}

dailyProgressReports(reportType:string) {
    
    return this.http.get(this.url + '/dailyProgressReports/'+reportType,{ headers: this.header });
}
facilityNames(){
    console.log('facilityNames::')
    return this.http.get<FacilityModel>(environment.apiUrl + '/facilityNames' , { headers: this.header });
}
failuresTable(){
    console.log('failuresTable::')
    return this.http.get<FailuresTableModel>(environment.apiUrl + '/failuresTable' , { headers: this.header });
}
powerBlocks(){
    console.log('powerBlocks::')
    return this.http.get<FailuresTableModel>(environment.apiUrl + '/powerBlocks' , { headers: this.header });
}
oheProductData(){
    console.log('productTable-8-1-2020::')
    return this.http.get<ProductModel>(environment.apiUrl + '/oheProductData' , { headers: this.header });
}
towerCarAssetTypes(){
    console.log('towerCarReport::')
    return this.http.get(this.url+'/towerCarAssetTypes',{headers:this.header});
}
oheAssetTypes(){
    console.log('oheAssetTypes::')
    return this.http.get(this.url+'/oheAssetTypes',{headers:this.header});
}
oheAssetId(){
    console.log('oheAssetIdScheduleDate::')
    return this.http.get(this.url+'/oheAssetId',{headers:this.header});
}
oheScheduleDate(){
    console.log('oheAssetIdScheduleDate::')
    return this.http.get(this.url+'/oheScheduleDate',{headers:this.header});
}
scheduleCode(){
    console.log('scheduleCode Services::')
    return this.http.get<ScheduleModel>(environment.apiUrl + '/scheduleCode' , { headers: this.header });
}
pbSwitchControl(){
    return this.http.get(this.url + '/pbSwitchControl',{ headers: this.header });
}
elementarySections(){
    return this.http.get(this.url + '/elementarySections',{ headers: this.header });
}

submitForm(reportModel: ReportModel) {
    console.log("model2-1-2020"+JSON.stringify(reportModel.reportId));
    return this.http.post(this.url + '/submitForm' ,reportModel,  { headers: this.header });
}

}
    
    
