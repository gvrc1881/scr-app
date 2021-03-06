import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DriveProgressRecordComponent } from './drive-progress-record.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material.modules';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AddDriveProgressRecordComponent } from './add-drive-progress-record/add-drive-progress-record.component';
import { DrivesService } from 'src/app/services/drives.service';

const routes: Routes = [
    {
        path: '',
        component: DriveProgressRecordComponent,
    },   
    {
        path     : ':id',
        component: AddDriveProgressRecordComponent
    },
    {
        path        : 'add-drive-progress-record',
        component:   AddDriveProgressRecordComponent
    },
];

@NgModule({
    declarations: [
        DriveProgressRecordComponent,
        AddDriveProgressRecordComponent,
        
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,      
        Ng4LoadingSpinnerModule.forRoot()
    ],
    providers: [
        DrivesService
    ],
    exports:[
        DriveProgressRecordComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DriveProgressRecordModule {

}