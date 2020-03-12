/**
 * 
 */
package com.scr.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.scr.message.response.LoggedUserResponse;
import com.scr.model.Permissions;
import com.scr.model.RolePermissions;
import com.scr.model.RoleType;
import com.scr.model.User;
import com.scr.util.PredicateUtil;

/**
 * @author vt1056
 *
 */
@Component
public class UserMapper {

	public LoggedUserResponse prepareLoggedUserData(User userData, List<Permissions> permissionsList, List<RoleType> rolesList,
			List<RolePermissions> rolePermissionsList) {
		LoggedUserResponse response = new LoggedUserResponse();
		try {
			if(userData != null && permissionsList != null) {				
				response.setDepartment(userData.getDepartment());				
				response.setRoleTypeId(userData.getRoleTypeId());				
				if(rolesList != null && rolesList.size() > 0 && rolePermissionsList != null && rolePermissionsList.size() > 0) {
					Integer permissionId = PredicateUtil.getPermissionIdByRoleType(response.getRoleTypeId(), rolePermissionsList);
					if(permissionId  == null || permissionId == 0)
						response.setPermission("No Permission");
					else
						response.setPermission(PredicateUtil.getPermissionName(permissionId, permissionsList));
					System.out.println(permissionId);
				}
				response.setEmail(userData.getEmail());
				response.setUserName(userData.getUsername());				
				response.setUserId(userData.getUser_id());
				//response.setMenus(getMenus());
				System.out.println("scr app");
				response.setRoleName(PredicateUtil.getRoleName(response.getRoleTypeId(), rolesList));
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		return response;
	}
	String getMenus() {
	return	"{ ID: 1, menuName: 'Dashboard', menuUrl: 'dashboard',icon:'fa fa-home',color:'', isSelected: true, currentTab: !!path && path.includes('dashboard') ? 'open' : '' }," + 
		"    { ID: 2, menuName: 'Reports', menuUrl: 'reports',icon:'fa fa-area-chart',color:'#12E1EE', isSelected: true,currentTab: !!path && path.includes('reports') ? 'open' : '',  subMenus:[{subMenuName:'Reports',subMenuURL:'reports', subMenuIcon:'fa fa-area-chart'}]}," + 
		"    { ID: 3, menuName: 'Schedule Settings', menuUrl: 'settings',icon:'fa fa-cogs',color:'#1285EE', isSelected: false, currentTab: !!path && (path.includes('settings') || path.includes('repository') || path.includes('jobType') || path.includes('timeInterval')) ? 'open' : '', subMenus:[{subMenuName:'Schedule', subMenuURL:'settings', subMenuIcon:'fa fa-cogs'},{subMenuName:'Repository',subMenuURL:'repository', subMenuIcon:'fa fa-bars'},{subMenuName:'JobType',subMenuURL:'jobType', subMenuIcon:'fa fa-align-left'},{subMenuName:'TimeInterval',subMenuURL:'timeInterval', subMenuIcon:'fa fa-align-left'}] }, " + 
		"    { ID: 4, menuName: 'Schedule Tracking', menuUrl: 'schedule',icon:'fa fa-briefcase',color:'#6212EE', isSelected: false,currentTab: !!path && path.includes('schedule') ? 'open' : '', subMenus:[{subMenuName:'Tracking Info', subMenuIcon:'fa fa-briefcase'}]}," + 
		"    { ID: 5, menuName: 'Masters', menuUrl: 'masters',icon:'fa fa-wrench',color:'#85929E', isSelected: false,currentTab: !!path && (path.includes('masters') || path.includes('roles') || path.includes('rolePermissions') || path.includes('users') || path.includes('department'))? 'open' : '',subMenus:[{subMenuName:'Roles', subMenuURL:'roles', subMenuIcon:'fa fa-lock'},{subMenuName:'Roles Permission',subMenuURL:'rolePermissions', subMenuIcon:'fa fa-lock'},{subMenuName:'Department',subMenuURL:'department', subMenuIcon:'fa fa-lock'},{subMenuName:'Users',subMenuURL:'users', subMenuIcon:'fa fa-users'}] }";
	}
}
