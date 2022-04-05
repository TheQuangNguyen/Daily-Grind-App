import { Component, OnInit } from '@angular/core';
import { getDay } from 'date-fns';

@Component({
  selector: 'app-week-calendar',
  templateUrl: './week-calendar.component.html',
  styleUrls: ['./week-calendar.component.scss']
})
export class WeekCalendarComponent implements OnInit {
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  selectedDay = 0;


  constructor() {
    let today = new Date();
    if (!this.selectedDay) {
      this.selectedDay = getDay(today);
    }
  }

  ngOnInit(): void {

  }

}


