import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriveModel } from '../models/drive.model';

@Injectable()
export class DrivesService {
    myAppUrl: string = environment.apiUrl;
    header:any;
    accessToken:any = JSON.parse(localStorage.getItem('accessToken'));
    
    constructor(private http: HttpClient) {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`
        });         
    }
    getDrivesData() {
        return this.http.get<DriveModel[]>(environment.apiUrl + '/drives', { headers: this.header });            
    }

    getDrivesCheckListData() {
        return this.http.get<DriveModel[]>(environment.apiUrl + '/checklist', { headers: this.header });            
    }
}