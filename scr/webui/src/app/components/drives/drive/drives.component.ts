import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CommonService } from 'src/app/common/common.service';
import { DriveModel } from 'src/app/models/drive.model';
import { DrivesService } from 'src/app/services/drives.service';

@Component({
  selector: 'app-drives',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DrivesComponent implements OnInit {
  editPermission: boolean = true;
  addPermission: boolean = true;
  deletePermission: boolean = true;
  userdata: any = JSON.parse(localStorage.getItem('userData'));

  displayedColumns = ['sno', 'name', 'description', 'fromDate', 'toDate', 'depoType', 'assetType',
    'assetDescription', 'criteria', 'targetQuantity', 'equipmentId', 'functionalUnit',
    'checkList', 'active', 'actions'];
  dataSource: MatTableDataSource<DriveModel>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  drivesList:any;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private commonService: CommonService,
    private drivesService: DrivesService,
  ) { }

  ngOnInit() {
    this.addPermission = this.commonService.getPermission("Add");
    this.editPermission = this.commonService.getPermission("Edit");
    this.deletePermission = this.commonService.getPermission("Delete");

    this.spinnerService.show();
    this.getDrivesData();

  }

  getDrivesData() {
    const drive: DriveModel[] = [];
    this.drivesService.getDrivesData().subscribe((data) => {

      this.drivesList = data;
      for (let i = 0; i < this.drivesList.length; i++) {
        this.drivesList[i].sno = i + 1;
        drive.push(this.drivesList[i]);
      }

      this.dataSource = new MatTableDataSource(drive);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;            
      this.spinnerService.hide();
    }, error => {
      this.spinnerService.hide();
    });
  }

}
