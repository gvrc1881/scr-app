import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/services/work.service';

@Component({
    selector: 'works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {


    constructor(
        private _workService: WorksService
    ){

    }

    ngOnInit() {

    }

    getAllWorks() {
        this._workService.findAllWorks().subscribe((data) => {},error => {} );
    }

}