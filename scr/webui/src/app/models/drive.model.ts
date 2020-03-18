export interface DriveModel {
    sno: number;
    id :number;
    name:string,
    description: string;
    fromDate: string;
    toDate: string;
    depoType: number;  
    assetType:string;
    assetDescription:string;
    criteria:string;
    targetQuantity:number;
    equipmentId:string;
    functionalUnit:string;
    checkList:string;
    active:string;
    
    createdBy: number;
    createdDate: string;
   
    modifiedBy: number;
    modifiedDate: String;
}

export interface DriveChecklistModel{
    sno:number;
    id:number;
    drive:string;
    measureActivityList:string;
    displayOrder:number;
    lowerLimit:number;
    upperLimit:number
    active:string;
    
    createdBy: number;
    createdDate: string;
   
    modifiedBy: number;
    modifiedDate: String;
}
