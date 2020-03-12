import { Component, OnInit, Input } from '@angular/core';
import { ReportService  } from "src/app/services/report.service";
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder} from '@angular/forms';
import {ReportParameterModel} from 'src/app/models/reportParameter.model';
import { ReportPayload } from 'src/app/payloads/report.payload';
import { ReportModel } from 'src/app/models/report.model';
import { FacilityModel } from 'src/app/models/facility.model';
import {FailuresTableModel}from 'src/app/models/failures-table.model';
import { ProductModel } from 'src/app/models/product.model';
import { ScheduleModel } from 'src/app/models/schedule.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
    selector: 'app-reportParameterDisplay',
    templateUrl: 'reportParameterDisplay.component.html',
    styleUrls: ['./reportParameterDisplay.component.css']
})

export class ReportParameterDisplayComponent implements OnInit {
    
     towerCarAssetType:any;
     oheAssetTypeData:any;
     oheAssetIdDate:any;
     elementarySectionCode:any;
     oheScheduleDateData:any;
     department:any;
     pbSwitchType:any;
     pbSwitchCode:any;
     observationCategories:any;
     parameterData:any;
     facilityData:FacilityModel;
     failuresModel:FailuresTableModel;
     productModel:ProductModel;
     scheduleData:ScheduleModel;
     submitedForm:any;
     facilityId:any;
     sendData: any = [{name:"SUBSECTORS",
     zone:"kHG",division:"hyd",
     reportHeader:"REport",FacilityId:"12"}]
     reportModel: ReportModel;
     formValuses: any;
     sub;/*It defines to store router map of subscribe*/
     id;  /* Its used to store the getting name on the report page  */
     otyp=["Adobe portable Document Format(pdf)","Comma Separated Value Text","HTML Text","Microsoft Excel","Plain Text","XML Text"]
    constructor(private reportService: ReportService,private Activatedroute:ActivatedRoute,
        private router:Router,private formBuilder: FormBuilder ) { }
     
    ngOnInit() {
        this.reportModel = new ReportModel();
        this.submitedForm=this.formBuilder.group({});
        this.facilityNames();
        this.powerBlocks();
        this.towerCarAssetTypes();
        this.pbSwitchControl();
        this.oheAssetTypes();
        this.oheAssetId();
        this.oheScheduleDate();
        this.scheduleCode();
        this.elementarySections();
        this.sub=this.Activatedroute.paramMap.subscribe(params => { 
            console.log(params);
             this.id = params.get('id'); 
             console.log("this is Getting Report Name :::"+this.id);   
         });
         
   
         this.reportParameterNames();
         
      ReportPayload.GET.reportId = this.id;
        // ReportPayload.GET.zone = "kHG";
        //ReportPayload.GET.division = "hyd";
        // ReportPayload.GET.reportHeader = "REport";
         //ReportPayload.GET.facilityId = "30017";
         //ReportPayload.GET.permission="View";
       
    }
   reportParameterNames()
         {
                const parameterData : FacilityModel[] = [];
                console.log('facilityModel');
                this.reportService. reportParameterNames().subscribe((data) => {
                  this.parameterData = data;
                  
                  console.log('parameter Data '+JSON.stringify(data))
         }
                );

        }
        facilityNames()
        {
               const facilityData : ReportParameterModel[] = [];
               console.log('facilityData27-12-19');
               this.reportService. facilityNames().subscribe((data) => {
                 this.facilityData = data;
                 console.log('facility27-19-19'+this.facilityData);
                 console.log('facilityData '+JSON.stringify(data))
        }
               );

       }
       powerBlocks()
        {
               const failuresModel : FailuresTableModel[] = [];
               console.log('failuresModel');
               this.reportService. powerBlocks().subscribe((data) => {
                 this.failuresModel = data;
                 console.log('failuresModel'+this.facilityData);
                 
        }
               );

       }
       
      
      towerCarAssetTypes(){
       this.reportService.towerCarAssetTypes().subscribe((data)=>{
       this.towerCarAssetType = data;
       console.log('towerCarData'+this.towerCarAssetType);
       })
      }
      oheAssetTypes(){
       this.reportService.oheAssetTypes().subscribe((data)=>{
       this.oheAssetTypeData = data;
       console.log('oheAssetTypeData'+this.oheAssetTypeData);
       })
      }
      oheAssetId(){
       this.reportService.oheAssetId().subscribe((data)=>{
       this.oheAssetIdDate = data;
       console.log('oheAssetIdDate'+this.oheAssetIdDate);
       })
      }
      oheScheduleDate(){
       this.reportService.oheScheduleDate().subscribe((data)=>{
       this.oheScheduleDateData = data;
       console.log('oheAssetIdDate'+this.oheAssetIdDate);
       })
      }
      elementarySections()
       {
              this.reportService. elementarySections().subscribe((data) => {
              this.elementarySectionCode = data;
              console.log('elementarySectionCode '+JSON.stringify(data))
       }
              );

      }
      pbSwitchControl(){
       this.reportService. pbSwitchControl().subscribe((data) => {
        this.pbSwitchCode=data;    
        console.log('pbSwitchCode' + JSON.stringify(data))  
       this.pbSwitchType =  ['REMOTE', 'MANUAL'];
       console.log('pbSwitchType'+this.pbSwitchType);
}
       );
      }
      scheduleCode()
       {
              const scheduleData : ScheduleModel[] = [];
              console.log('scheduleData');
              this.reportService. scheduleCode().subscribe((data) => {
              this.scheduleData = data;
              console.log('scheduleData21-1-2020'+this.scheduleData);
                 console.log('scheduleData '+JSON.stringify(data))
                
       }
              );

      }
       submitForm()
       {   

          this.reportModel.reportId=this.id;
          console.log("facilityId6-1-2020:::"+JSON.stringify(this.reportModel));
          //this.reportModel.productId=this.id;
          console.log("this.productId--9-1-2020"+this.reportModel.productId)
          this.submitedForm = "";
          console.log("Report Model::2-1-2020:::"+this.reportModel);
          this.reportService.submitForm(this.reportModel).subscribe((response) => {
          this.submitedForm = response;
          let pdfWindow = window.open("download","");
          let content = encodeURIComponent(this.submitedForm.outputData);
                    // let content=JSON.stringify(ReportPayload.GET.outputData);
          let iframeStart = "<\iframe width='100%' height='100%' src='data:application/pdf;base64, ";
          let iframeEnd= "'><\/iframe>";
          pdfWindow.document.write(iframeStart + content + iframeEnd);
          },
          error => error => {        
          console.log(' >>> ERROR ' + error);
            }) 
        }

       }
        
