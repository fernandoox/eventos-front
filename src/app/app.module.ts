import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './components/principal/principal.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { OrganizadoresComponent } from './components/organizadores/organizadores.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContainerComponent,
    OrganizadoresComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
