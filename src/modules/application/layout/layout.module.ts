import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    MainLayoutComponent,
  ],
})
export class LayoutModule { }
