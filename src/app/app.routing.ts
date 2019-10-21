import {Routes,RouterModule} from '@angular/router'
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';



const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'org',component:OrganizationComponent},
  {path:'abt',component:AboutComponent},
  {path:'src',component:ServicesComponent},
  {path:'con',component:ContactComponent},
  {path:'set',component:SettingsComponent},
  {path:'pro',component:ProfileComponent},
  {path:'det',component:DetailsComponent},
  {path:'check',component:CheckboxComponent},
  {path:'sel',component:SelectComponent}



  // {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
