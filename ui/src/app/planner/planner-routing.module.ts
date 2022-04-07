import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';

const routes: Routes = [
  {path: '', component: PlannerComponent},
  {path: 'planner', component: PlannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PlannerRoutingModule {}
