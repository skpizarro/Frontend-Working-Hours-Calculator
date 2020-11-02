import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateComponent } from './components/calculate/calculate.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {path:'calculate',component:CalculateComponent},
  {path:'report',component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
