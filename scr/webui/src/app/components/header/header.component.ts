import { Component, OnInit,  DoCheck } from '@angular/core';
import { Router} from '@angular/router';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  loginValidate: boolean = true;
  dashboard: boolean = true;
  MenusList: any = [];
  menus: any = [];
  currentTab: string = "";
  userName: string;
  userdata: any;
  loggedUser: any;
  rolePermission: boolean = true;
  constructor(
    private commonService: CommonService) {

  }
  ngOnInit() {
    
  }
  ngDoCheck() {
    if (!!localStorage.getItem('userData')) {
      this.userdata = JSON.parse(localStorage.getItem('userData'));
      this.userName = !!this.userdata && !!this.userdata.username && this.userdata.username;
    }
    const path = window.location.pathname;
    this.dashboard = path == '/dashboard' ? false : true;   
    if (!!localStorage.getItem("loggedUser")) {
      //this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      this.rolePermission = this.commonService.rolePermission();   
    }

    this.MenusList = [
      { 
        ID: 1,
        menuName: 'Dashboard',
        menuUrl: 'dashboard',
        icon: "fa fa-home", 
        color: "", 
        isSelected: true,
        currentTab: !!path && path.includes("dashboard") ? "open" : "" 
      },
      { 
        ID: 2,
        menuName: 'Reports', 
        menuUrl: 'daily-progress-reports', 
        icon: "fa fa-area-chart",
        color: "#6212EE", 
        isSelected: false, 
        //currentTab: !!path && path.includes("reports") ? "open" : "", 
        currentTab: !!path && (path.includes("reports") || path.includes("daily-progress-reports") || path.includes("asset-reports") || path.includes("asset-master-reports")) ? "open" : "", 
        subMenus: [
          
          { 
            subMenuName: "Daily Progress Reports", 
            subMenuURL: "daily-progress-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("daily-progress-reports") ? "active-item" : "",
          },
          { 
            subMenuName: "Asset Reports", 
            subMenuURL: "asset-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("asset-reports") ? "active-item" : "",
          },
          { 
            subMenuName: "Asset Master Reports", 
            subMenuURL: "asset-master-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("asset-master-reports") ? "active-item" : "",
          },
          { 
            subMenuName: "Inventory Reports", 
            subMenuURL: "inventory-reports",
            color: "#1285EE", 
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("inventory-reports") ? "active-item" : "",
          },
          { 
        subMenuName:"PSI Reports",
        subMenuURL:"psi-reports",
        color:"#1285EE",
        subMenuIcon:"fa fa-file",
        rolePermission:true,
        currentSubMenu:!!path && path.includes("psi-reports") ? "active-item":"",
          },
          {
            subMenuName:"Zonal Reports",
            subMenuURL:"zonal-reports",
            color:"#1285EE",
            subMenuIcon:"fa fa-file",
            rolePermission:true,
            currentSubMenu:!!path && path.includes("zonal-reports") ? "active-item":"",

          },
        ] 
      },
      { 
        ID: 3, 
        menuName: 'Schedule Settings', 
        menuUrl: 'settings', 
        icon: "fa fa-cogs", 
        color: "#1285EE", 
        isSelected: false, 
        currentTab: !!path && (path.includes("settings") || path.includes("repository") || path.includes("jobType") || path.includes("timeInterval")) ? "open admin-view" : "admin-view", 
        subMenus: [
          { 
            subMenuName: "Schedule", 
            subMenuURL: "settings", 
            subMenuIcon: "fa fa-cogs",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("settings") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Repository", 
            subMenuURL: "repository", 
            subMenuIcon: "fa fa-bars",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("repository") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Job Type", 
            subMenuURL: "jobType", 
            subMenuIcon: "fa fa-align-left",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("jobType") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Time Interval", 
            subMenuURL: "timeInterval", 
            subMenuIcon: "fa fa-align-left",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("timeInterval") ? "active-item" : "",
          }
        ] 
      },
      { 
        ID: 4, 
        menuName: 'Schedule Tracking', 
        menuUrl: 'schedule', 
        icon: "fa fa-briefcase", 
        color: "#6212EE",
        isSelected: false, 
        class: "chandra",
        currentTab: !!path && path.includes("schedule") || path.includes("jobs") || path.includes("divisions") ? "open admin-view" : " admin-view", 
        subMenus: [
          { 
            subMenuName: "Tracking Info", 
            subMenuIcon: "fa fa-briefcase",
            subMenuURL: "schedule",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("schedule") ? "active-item" : "",
          },
          { 
            subMenuName: "Jobs Info", 
            subMenuIcon: "fa fa-briefcase",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("jobs") ? "active-item" : "",
          },
          { 
            subMenuName: "Divisions Info", 
            subMenuIcon: "fa fa-briefcase",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("divisions") ? "active-item" : "",
          }
        ] 
      },
      { 
        ID: 5, 
        menuName: 'Masters', 
        menuUrl: 'masters', 
        icon: "fa fa-wrench", 
        color: "#85929E", 
        isSelected: false, 
        currentTab: !!path && (path.includes("masters") || path.includes("roles") || path.includes("rolePermissions") || path.includes("users") || path.includes("department")) ? "open" : "", 
        subMenus: [
          { 
            subMenuName: "Roles", 
            subMenuURL: "roles", 
            subMenuIcon: "fa fa-lock",
            rolePermission:this.rolePermission,
            currentSubMenu: !!path && (path.includes("masters") || path.includes("roles")) ? "active-item" : "",
          }, 
          { 
            subMenuName: "Roles Permission", 
            subMenuURL: "rolePermissions",
            subMenuIcon: "fa fa-lock",
            rolePermission:this.rolePermission ,
            currentSubMenu: !!path && path.includes("rolePermissions") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Department", 
            subMenuURL: "department", 
            subMenuIcon: "fa fa-lock",
            rolePermission:this.rolePermission,
            currentSubMenu: !!path && path.includes("department") ? "active-item" : "",
          }, 
          { 
            subMenuName: "Users", 
            subMenuURL: "users", 
            subMenuIcon: "fa fa-users",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("users") ? "active-item" : "",
          }
        ] 
      },
      { 
        ID: 6,
        menuName: 'Energy Bill Payment', 
        menuUrl: 'energyBillPayment', 
        icon: "fa fa-paypal",
        color: "#12E1EE", 
        isSelected: true, 
        currentTab: !!path && path.includes("energyBillPayment") ? "open" : "",  
        subMenus: [
          {
            subMenuName: "Guidence Item",
            subMenuURL: "guidenceItem",
            subMenuIcon: "",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("guidenceItem") ? "active-item" : "",
          },
          {
            subMenuName: "work",
            subMenuURL: "work",
            subMenuIcon: "",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("work") ? "active-item" : "",
          },
        ]
      },
      { 
        ID: 7,
        menuName: 'Content Management', 
        menuUrl: 'contentManagement', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        currentTab: !!path && path.includes("contentManagement") ? "open" : "",  
        subMenus: [
          {
            subMenuName: "Content Management",
            subMenuURL: "contentManagement",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("contentManagement") ? "active-item" : "",
          }
        ]
      },
      { 
        ID: 8,
        menuName: 'Drives', 
        menuUrl: 'drives', 
        icon: "fa fa-file",
        color: "#12E1EE", 
        isSelected: true, 
        currentTab: !!path && path.includes("drives") || path.includes("drive-checklist") ||
        path.includes("drive-target") || path.includes("drive-progress-record") || 
        path.includes("drive-failure-analysis") || path.includes("drive-electrification-targets") ||
        path.includes("drive-inspection") || path.includes("drive-stipulation")  ? "open" : "",  
        subMenus: [
          {
            subMenuName: "Drives",
            subMenuURL: "drives",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drives") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Checklist",
            subMenuURL: "drive-checklist",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-checklist") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Target",
            subMenuURL: "drive-target",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-target") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Progress Record",
            subMenuURL: "drive-progress-record",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-progress-record") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Failure Analysis",
            subMenuURL: "drive-failure-analysis",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-failure-analysis") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Electrification Targets",
            subMenuURL: "drive-electrification-targets",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-electrification-targets") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Inspection",
            subMenuURL: "drive-inspection",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-inspection") ? "active-item" : "",
          },
          {
            subMenuName: "Drive Stipulation",
            subMenuURL: "drive-stipulation",
            subMenuIcon: "fa fa-file",
            rolePermission:true,
            currentSubMenu: !!path && path.includes("drive-stipulation") ? "active-item" : "",
          }
        ]
      }
    ];

    this.loginValidate = this.commonService.loginValidate(window.location.pathname);
  }
}
