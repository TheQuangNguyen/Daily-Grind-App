import { Component, OnInit, OnDestroy } from '@angular/core';
import { getDay } from 'date-fns';
import { CalendarService } from '../../_services/calendar.service'

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit, OnDestroy {
  // CSS styles
  spacing = "d-flex justify-content-around";

  daysOfWeek: readonly string[] = this.calendarService.daysOfWeek;
  daysInWeek: number[] = [];
  selectedDayInWeek = 0;   // 0 = Sunday, 6 = Saturday

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.selectedDateSubject.subscribe((date: Date) => {
      this.selectedDayInWeek = getDay(date);
      this.daysInWeek = this.calendarService.getDaysInWeek(date);
    });
  }

  ngOnDestroy(): void {
    this.calendarService.selectedDateSubject.unsubscribe();
  }
}


