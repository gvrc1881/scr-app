import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsInfoComponent } from './jobs-info.component';
import { MatMenuModule, MatGridListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { RepositoryService } from 'src/app/services/repository.service';
import { MaterialModule } from 'src/app/modules/material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulerTrackingService } from 'src/app/services/scheduler-tracking.service';

const routes: Routes = [
    {
        path     : '',
        component: JobsInfoComponent,
       
    }
];

@NgModule({
    imports     : [     
        RouterModule.forChild(routes),
        Ng4LoadingSpinnerModule.forRoot(),
        MatMenuModule,
        MatGridListModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        JobsInfoComponent
    ],
    providers   : [
        RepositoryService,
        SchedulerTrackingService
    ],
    exports     : [
        JobsInfoComponent
    ]
})
export class JobsInfoModule
{
}

