import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent
  ],
  exports:[ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent],
  imports: 
  [ 
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    ChartsModule
  
  ]
})
export class PagesModule { }
