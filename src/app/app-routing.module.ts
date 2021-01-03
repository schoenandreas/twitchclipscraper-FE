import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { ControlPageComponent } from './pages/control-page/control-page.component';

const routes: Routes = [
  { path: '', component: StatsPageComponent },
  { path: 'control', component: ControlPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
