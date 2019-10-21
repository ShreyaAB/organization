import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from "./app.routing";
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonToggleModule, MatNativeDateModule, MatButtonModule, MatTableModule, MatMenuModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { OrganizationComponent } from './organization/organization.component';
import {ConfirmationService} from 'primeng/api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import {SidebarModule} from 'primeng/sidebar';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,

    OrganizationComponent,

    SidebarComponent,

    MenuComponent,

    HomeComponent,

    AboutComponent,

    ServicesComponent,

    ContactComponent,

    SettingsComponent,

    ProfileComponent,

    DetailsComponent,

    CheckboxComponent,

    SelectComponent,





  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    SidebarModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatButtonToggleModule

  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
