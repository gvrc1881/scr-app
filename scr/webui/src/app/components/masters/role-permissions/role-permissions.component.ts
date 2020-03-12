import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { RoleTypeService } from '../../../services/roletype.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CommonService } from '../../../common/common.service';
import { RoleTypeModel } from 'src/app/models/role-type.model';
import { RolePermissionService } from 'src/app/services/role-permission.service';
import { RolePermissionModel } from 'src/app/models/role-permissions.model';
import { RolePermissionPayload } from 'src/app/payloads/role-permission.payload';
@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.scss']
})
export class RolePermissionsComponent implements OnInit {
  editPermission:boolean=true;
  addPermission:boolean=true;
  deletePermission:boolean=true;
  id: number = 0;
  saveRole: boolean = false;
  selected:string;
  editRole: boolean = true;
  displayedColumns = ['sno', 'roleName', 'permission', 'id'];
  dataSource: MatTableDataSource<RolePermissionModel>;
  roleTypeData:MatTableDataSource<RolePermissionModel>;
  rolepermissions: any;
  rolesList: any;
  PermissionId: string;
  roleType: string;
  permissionId: number;
  selectedRow: Number;
  permisssionList: any;
  status: boolean;
  public permissionname;
  permission: RolePermissionModel[] = [];
  permissionRole: boolean = true;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  userdata: any = JSON.parse(localStorage.getItem('userData'));
  permissionType = false;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  constructor(
      private _roleTypemaster: RoleTypeService, 
      private route: ActivatedRoute, 
      private _router: Router,
      private spinnerService: Ng4LoadingSpinnerService,
      public dialog: MatDialog,
      private commonService: CommonService,
      private rolePermissionService: RolePermissionService
     ) { }

  ngOnInit() {   
    this.addPermission = this.commonService.getPermission("Add");
    this.editPermission = this.commonService.getPermission("Edit");
    this.deletePermission = this.commonService.getPermission("Delete"); 

    this.getRoleTypedata();    
  }
  getRoleTypedata() {
    this.spinnerService.show();
    const roles: RolePermissionModel[] = [];
    this.rolePermissionService.findAllRolesWithPermissions().subscribe((data) => {
      this.rolesList = data;
      for (let i = 0; i < this.rolesList.length; i++) {
        this.rolesList[i].sno = i + 1;
        roles.push(this.rolesList[i]);
      }
      this.roleTypeData = new MatTableDataSource(roles);      
          
      this.dataSource = new MatTableDataSource(roles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     this.id = this.rolesList[0].permissionId;
     this.selected = this.rolesList[0].permission;
     
      this.loadRolePermissionDataById(this.id);
      this.spinnerService.hide();
    }, error => {
      this.spinnerService.hide();
    });
  }
  loadRolePermissionDataById(id){    

   this.spinnerService.show();
    this.permisssionList = [];
    this.id = id;//+this.route.snapshot.params['id'];
    //this.editRoleTypePermission(this.id);
    this._roleTypemaster.getPermissions().subscribe(resp => {      
      this.permisssionList = resp;
    });
  }

  editRoleTypePermission(id) {
    this.permissionType = false
    //this.rolesList = [];
    this.rolepermissions = [];
    this.permission = [];
    this._roleTypemaster.getRoleTypePermissons(this.id).subscribe((data) => {
    //  this.rolesList = data;
      this.rolepermissions = (data["#result-set-1"]);      
      for (let i = 0; i < this.rolepermissions.length; i++) {
        this.rolepermissions[i].sno = i + 1;
        this.rolepermissions[i].editMode = false;
        this.permission.push(this.rolepermissions[i]);
      }
      this.dataSource = new MatTableDataSource<RolePermissionModel>();
      this.dataSource = new MatTableDataSource(this.permission);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
      this.spinnerService.hide();
    })
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  permissiontypeList() {
    this._roleTypemaster.getPermissions().subscribe(resp => {     
      this.permisssionList = resp;
    })
  }
  editPermissions(row) {
    row.editMode = true;        
    if (row.roleId) {
      this._roleTypemaster.getPermissions().subscribe(resp => {    
         
        this.permisssionList = resp;
      });
    }
  }
  cancelRoleTypePermission(row) {  
    row.editMode = false;
    this.permissionType = false;
  }
  onChange(event): void {   
    
    this.permissionname = event.value;
  }


  saveRoleTypePermission(row) {    
    this.spinnerService.show();
    let roleId = row.roleId;
    let permissionId = this.permissionname.id;
    let roleName = row.roleName;
    let permission = this.permissionname.permission;
    let modifiedBy = this.userdata.id;
      
      RolePermissionPayload.UPDATE_PAYLOAD.modifiedBy = modifiedBy;
      RolePermissionPayload.UPDATE_PAYLOAD.roleId = roleId;
      RolePermissionPayload.UPDATE_PAYLOAD.permissionId = permissionId
      RolePermissionPayload.UPDATE_PAYLOAD.roleName = roleName
      RolePermissionPayload.UPDATE_PAYLOAD.permission = permission
      
    this.rolePermissionService.updateRolePermission(RolePermissionPayload.UPDATE_PAYLOAD).subscribe(response =>{
      this.spinnerService.hide();      
      this.loadRolePermissionDataById(this.id);
      this.getRoleTypedata()
      this.commonService.showAlertMessage('Permission Updated Successfully.');
      row.editMode = false;
      this.permissionType = false;     
      
      if (response) {
        this.status = false;
      }          
      setTimeout(() => { this.status = false }, 4000)
    }, error => {
      this.spinnerService.hide();      
      this.commonService.showAlertMessage(error);
    });
 
  }
  onGoBack() {
    this._router.navigate(['../'], { relativeTo: this.route });
  }
  deleteRolepermission(id) {

    this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the selected user?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinnerService.show();
        this._roleTypemaster.deleteRolePermission(id)
          .subscribe((data) => {           
            this.editRoleTypePermission(this.id);            
          });
      }
      this.confirmDialogRef = null;
    });
    this.spinnerService.hide();
  }
}
export interface PermissionModel {
  MenuName: String,
  SubMenuName: String,
  PermissionName: String,
  id: number,
  sno: number,
}