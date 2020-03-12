import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material';
import { Constants } from './constants';
@Injectable()
export class CommonService  {
	/**
	 * Constructor
	 *
	 * @param {NotifierService} notifier Notifier service
	 */
	public constructor( private snackBar: MatSnackBar) {
	
	}	

    showAlertMessage(message:string){
        this.snackBar.open(message, "x", {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['magenta-snackbar']
          });
    }
    scrollTop(id){
        var elmnt = document.getElementById(id);
        elmnt.scrollLeft = 0;
        elmnt.scrollTop = 0;
    }

    removeSpaceMaoreThanOne(content: string) {        
       return content !== null && !!content && content.replace(/ {2,}/g, ' ').trim()
    }

    loginValidate(url:string){
        return (url === '/' ||
               url === Constants.app_urls.LOGIN || 
               url === Constants.app_urls.REGISTRATION ||
              // url === Constants.app_urls.CHANGE_PASSWORD || 
               url === Constants.app_urls.MAIL_CONFIRMATION || 
               url === Constants.app_urls.RESET_PASSWORD || 
               url === Constants.app_urls.FORGOT_PASSWORD) ? false : true;
    }

    rolePermission(){		
        if (!!localStorage.getItem("loggedUser") && localStorage.getItem("loggedUser") != "[object Object]") {
            let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));            
            return !!loggedUser.roleName && loggedUser.roleName == 'User' ? false : true;                 
          }
        else{
            return false
        }
    }

    getPermission(permissionType){
		//console.log(JSON.stringify(localStorage.getItem("loggedUser")));
        if (!!localStorage.getItem("loggedUser") && localStorage.getItem("loggedUser") != "[object Object]") {
            let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
            let permission = !!loggedUser.roleName && loggedUser.permission;                    
            if(permission != null && !!permission && permission.includes(permissionType)) {
                return true;
            }else{
                return false;
            }            
          }
        else{
            return false
        }
    }
}
