import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { provideRoutes} from '@angular/router';


import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsComponent } from './forms/forms.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightsideComponent } from './rightside/rightside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
//import { ContactsComponent } from './contacts/contacts.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllWellDashboardComponent } from './all-well-dashboard/all-well-dashboard.component';

import { AdvisoryTrendzComponent } from './advisory-trendz/advisory-trendz.component';
import { AdvisoryAlarmsComponent } from './advisory-alarms/advisory-alarms.component';
import { AdvisoryEventsComponent } from './advisory-events/advisory-events.component';
import { ContractKpiComponent } from './contract-kpi/contract-kpi.component';
import { WellDetailsComponent } from './well-details/well-details.component';
import { EspManagementComponent } from './esp-management/esp-management.component';
import { WellLocationComponent } from './well-location/well-location.component';
//import { AppRoutingModule } from './/app-routing.module';
import {DataTableModule} from "angular2-datatable";
import { IndexMapComponent } from './index-map/index-map.component';
import { KnowledgeHubComponent } from './knowledge-hub/knowledge-hub.component';
import { ExpertAdviceComponent } from './expert-advice/expert-advice.component';
import { FluidsDataComponent } from './fluids-data/fluids-data.component';
import { ReservoirDataComponent } from './reservoir-data/reservoir-data.component';
import { WellboreDataComponent } from './wellbore-data/wellbore-data.component';
import { WellAnalysisComponent } from './well-analysis/well-analysis.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WorkOrderScheduleComponent } from './work-order-schedule/work-order-schedule.component';
import { EspTroubleshootComponent } from './esp-troubleshoot/esp-troubleshoot.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { ReportCenterComponent } from './report-center/report-center.component';
import { CalenderComponent } from './calender/calender.component';
////import { Demo1Component } from './demo1/demo1.component';

const appRoutes: Routes = [ 
  { path: '', redirectTo: 'Index', pathMatch: 'full'},
  { path: 'AllWellDashboard', component: AllWellDashboardComponent },
  { path: 'AdvisoryTrendz', component: AdvisoryTrendzComponent },
  { path: 'AdvisoryAlarms', component: AdvisoryAlarmsComponent },
  { path: 'AdvisoryEvents', component: AdvisoryEventsComponent },
  { path: 'ContractKpi', component: ContractKpiComponent },
  { path: 'WellDetails', component: WellDetailsComponent },
  { path: 'EspManagement', component: EspManagementComponent },
  { path: 'WellLocation', component: WellLocationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Index', component: IndexMapComponent },
  { path: 'KnowledgeHub', component: KnowledgeHubComponent },
  { path: 'ExpertAdvice', component: ExpertAdviceComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'WorkOrderSchedule', component: WorkOrderScheduleComponent },
  { path: 'EspTroubleshoot', component: EspTroubleshootComponent },
  { path: 'Alarms', component: AlarmsComponent }, 
  { path: 'ReportCenter', component: ReportCenterComponent },
  { path: 'Calender', component: CalenderComponent },
	
];

@NgModule({
   declarations: [
    AppComponent,
    EmployeeComponent,
    FormsComponent,
    LeftsideComponent,
    RightsideComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    ServiceComponent,
    LoginComponent,
    RegistrationComponent,
    AllWellDashboardComponent,
    AdvisoryTrendzComponent,
    AdvisoryAlarmsComponent,
    AdvisoryEventsComponent,
    ContractKpiComponent,
    WellDetailsComponent,
    EspManagementComponent,
    WellLocationComponent,
    IndexMapComponent,
    KnowledgeHubComponent,
    ExpertAdviceComponent,
    FluidsDataComponent,
    ReservoirDataComponent,
    WellboreDataComponent,
    WellAnalysisComponent,
    ForgotPasswordComponent,
    WorkOrderScheduleComponent,
    EspTroubleshootComponent,
    AlarmsComponent,
    ReportCenterComponent,
    CalenderComponent,
    //Demo1Component
  ],
  imports: [
    BrowserModule,
	  DataTableModule,
	   RouterModule.forRoot(
       appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
	   //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
