import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { PlannerRoutingModule } from './planner-routing.module';
import { PlannerComponent } from './planner/planner.component';
import { WeekCalendarComponent } from './week-calendar/week-calendar.component';


@NgModule({
  declarations: [
    TimelineComponent,
    PlannerComponent,
    WeekCalendarComponent
  ],
  imports: [
    CommonModule,
    PlannerRoutingModule,
  ],
})
export class PlannerModule { }
