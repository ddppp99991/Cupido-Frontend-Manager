import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; // <-- NgModel lives here
import { Routing } from './app.routes';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { MenuComponent } from './workspace/menu/menu.component';
import { VerificationComponent } from './business/verification/verification.component';
import { LoginComponent } from './login/login.component';
import { VerificationInputComponent } from './business/verification/verification-input/verification-input.component';
import { SelfInfoComponent } from './workspace/self-info/self-info.component';
import { MenuConfigurationComponent } from './configuration/menu-configuration/menu-configuration.component';
import { AuthorityConfigurationComponent } from './configuration/authority-configuration/authority-configuration.component';
import { AuthorityInputComponent } from './configuration/authority-configuration/authority-input/authority-input.component';
import { RoleConfigurationComponent } from './configuration/role-configuration/role-configuration.component';
import { RoleInputComponent } from './configuration/role-configuration/role-input/role-input.component';
import { UserConfigurationComponent } from './configuration/user-configuration/user-configuration.component';
import { UserInputComponent } from './configuration/user-configuration/user-input/user-input.component';
import { CurrencyConfigurationComponent } from './configuration/currency-configuration/currency-configuration.component';
import { CurrencyInputComponent } from './configuration/currency-configuration/currency-input/currency-input.component';
import { MarketConfigurationComponent } from './configuration/market-configuration/market-configuration.component';
import { MarketInputComponent } from './configuration/market-configuration/market-input/market-input.component';
import { RechargeComponent } from './management-center/recharge/recharge.component';
import { SystemMessageComponent } from './management-center/system-message/system-message.component';
import { SystemMessageInputComponent } from './management-center/system-message/system-message-input/system-message-input.component';
import { AssestManagerComponent } from './management-center/assest-manager/assest-manager.component';
import { AssestInputComponent } from './management-center/assest-manager/assest-input/assest-input.component';
import { WithdrawComponent } from './business/withdraw/withdraw.component';
import { WithdrawInputComponent } from './business/withdraw/withdraw-input/withdraw-input.component';

// primeng ui tree
import {TreeModule} from 'primeng/tree';
import {EditorModule} from 'primeng/editor';
//element ui
import { ElModule } from 'element-angular'
import 'element-angular/theme/index.css';
import { WithdrawHistoryComponent } from './query-center/withdraw-history/withdraw-history.component';
import { SelectorEmComponent } from './selector/selector-em/selector-em.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    MenuComponent,
    VerificationComponent,
    LoginComponent,
    VerificationInputComponent,
    SelfInfoComponent,
    MenuConfigurationComponent,
    AuthorityConfigurationComponent,
    AuthorityInputComponent,
    RoleConfigurationComponent,
    RoleInputComponent,
    UserConfigurationComponent,
    UserInputComponent,
    CurrencyConfigurationComponent,
    CurrencyInputComponent,
    MarketConfigurationComponent,
    MarketInputComponent,
    RechargeComponent,
    SystemMessageComponent,
    AssestManagerComponent,
    SystemMessageInputComponent,
    WithdrawComponent,
    WithdrawInputComponent,
    AssestInputComponent,
    WithdrawHistoryComponent,
    SelectorEmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Routing,
    TreeModule,
    EditorModule,
    ElModule.forRoot(),
  ],
  providers: [AuthService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
