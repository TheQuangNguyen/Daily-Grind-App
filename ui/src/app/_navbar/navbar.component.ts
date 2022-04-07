import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCalendarDays, faInbox, faGear } from '@fortawesome/free-solid-svg-icons';
import { CalendarService } from '../_services/calendar.service';
import { format } from 'date-fns';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  navIcons = [faCalendarDays, faInbox, faGear];
  selectedMonth: string;
  selectedYear: string;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarService.selectedDateSubject.subscribe((date: Date) => {
      this.selectedMonth = format(date, "MMMM");
      this.selectedYear = format(date, "yyyy");
    })
  }

  ngOnDestroy(): void {
    this.calendarService.selectedDateSubject.unsubscribe();
  }
}
