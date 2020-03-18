import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: ['./add-drive.component.css']
})
export class AddDriveComponent implements OnInit {
  saveUser:boolean=true;
  updateUser:boolean=false;

  addDriveFormGroup:FormGroup;
  pattern = "[a-zA-Z][a-zA-Z ]*";
  rolesList=[];
  depoTypeList=[];
  assetTypeList=[];
  equipmentIdsList = [];
  ChecklistsList = [];
  statusList = [];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.addDriveFormGroup = this.formBuilder.group({
      id: 0,
      'name': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.-]+$')])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(this.pattern)])],
      'fromDate': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(this.pattern)])],
      'toDate': [null, Validators.required],
      'depoType': [null, Validators.compose([Validators.required])],
      'assetType': [null, Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      'assetDescription': [null, Validators.required],
      'criteria': [null, Validators.required],
      'targetQuantity': [null, Validators.required],
      'equipmentId': [null, Validators.required],
      'functionalUnit': [null, Validators.required],
      'checklist': [null, Validators.required],
      'status': [null, Validators.required]
  });
  }

}
