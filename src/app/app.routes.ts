import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//登录
import { LoginComponent } from './login/login.component';
//workspace
import { WorkspaceComponent } from './workspace/workspace.component';
//菜单配置
import { MenuConfigurationComponent } from './configuration/menu-configuration/menu-configuration.component';
//权限配置
import { AuthorityConfigurationComponent } from './configuration/authority-configuration/authority-configuration.component'
//角色配置
import { RoleConfigurationComponent } from './configuration/role-configuration/role-configuration.component';
//用户配置
import { UserConfigurationComponent } from './configuration/user-configuration/user-configuration.component';
//货币配置
import { CurrencyConfigurationComponent } from './configuration/currency-configuration/currency-configuration.component';
//市场配置
import { MarketConfigurationComponent } from './configuration/market-configuration/market-configuration.component';
//后台用户管理
import { ManagerUserConfigurationComponent } from './configuration/manager-user-configuration/manager-user-configuration.component';
//部门管理
import { DepartmentConfigurationComponent } from './configuration/department-configuration/department-configuration.component';

//管理中心
//后台充值
import { RechargeComponent } from './management-center/recharge/recharge.component';
//系统消息
import { SystemMessageComponent } from './management-center/system-message/system-message.component';
//用户资产管理
import { AssestManagerComponent } from './management-center/assest-manager/assest-manager.component';

//业务处理
//身份验证
import { VerificationComponent } from './business/verification/verification.component';
//用户提现
import { WithdrawComponent } from './business/withdraw/withdraw.component';

//查询中心
//用户提现记录
import { WithdrawHistoryComponent } from './query-center/withdraw-history/withdraw-history.component';
const adminChildRoutes: Routes = [
    { path: '', component: VerificationComponent },// 身份验证
    { path: 'verification', component: VerificationComponent },// 身份验证
    { path: 'menuconfig', component: MenuConfigurationComponent },//菜单配置
    { path: 'authorityconfig', component: AuthorityConfigurationComponent },//权限配置
    { path: 'roleconfig', component: RoleConfigurationComponent },//角色配置
    { path: 'userconfig', component: UserConfigurationComponent },//用户配置
    { path: 'currencyconfig', component: CurrencyConfigurationComponent },//货币配置
    { path: 'marketconfig', component: MarketConfigurationComponent },//市场配置
    { path: 'recharge', component: RechargeComponent },//后台充值
    { path: 'systemmessage', component: SystemMessageComponent },//系统消息
    { path: 'assestmanager', component: AssestManagerComponent },//用户资产管理
    { path: 'withdraw', component: WithdrawComponent },//用户资产管理
    { path: 'withdrawhistory', component: WithdrawHistoryComponent },//用户提现记录
    { path: 'musermanager', component: ManagerUserConfigurationComponent },//后台用户管理
    { path: 'depmanager', component: DepartmentConfigurationComponent },//部门管理
    
];

// 定义常量 路由
const appRoutes: Routes = [
    {
        path: 'workspace',
        component: WorkspaceComponent,
        children: adminChildRoutes
    },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },

];


// export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);