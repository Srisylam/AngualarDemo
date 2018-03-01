
import { Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { provideRoutes} from '@angular/router';

import { ServiceComponent } from './service/service.component';
import { AboutComponent }   from './about/about.component';
import { ProjectsComponent }  from './projects/projects.component';
import { ContactsComponent }  from './contacts/contacts.component';

const appRoutes: Routes = [
 
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contacts', component: ContactsComponent },
  //{ path: 'services', component: ServiceComponent }
];
export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);