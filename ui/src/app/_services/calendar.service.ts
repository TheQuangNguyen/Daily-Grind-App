import { Injectable } from '@angular/core';
import { getDay, getDate, subDays, addDays } from 'date-fns';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  daysOfWeek: readonly string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedDateSubject: BehaviorSubject<Date>;

  constructor() {
    this.selectedDateSubject = new BehaviorSubject<Date>(new Date());
  }

  get getSelectedDate(): Date {
    return this.selectedDateSubject.value;
  }

  set setSelectedDate(value: Date) {
    this.selectedDateSubject.next(value);
  }

  getDaysInWeek(selectedDate: Date): number[] {
    let selectedDayInWeek = getDay(this.selectedDateSubject.value);
    let daysInWeek = [];
    for (let i = 0; i < this.daysOfWeek.length; i++) {
      let diff = i - selectedDayInWeek;
      let date: Date;
      if (diff < 0) {
        date = subDays(selectedDate, Math.abs(diff));
      } else {
        date = addDays(selectedDate, diff);
      }
      daysInWeek.push(getDate(date));
    }
    return daysInWeek
  }
}
