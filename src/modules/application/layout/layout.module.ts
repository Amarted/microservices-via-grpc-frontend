import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CenteredLayoutComponent } from './components/centered-layout/centered-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    CenteredLayoutComponent,
  ],
  imports: [
    CommonModule,
  ], exports: [
    MainLayoutComponent,
    CenteredLayoutComponent,
  ],
})
export class LayoutModule { }
