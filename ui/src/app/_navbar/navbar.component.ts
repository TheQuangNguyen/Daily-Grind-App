import { Component, OnInit } from '@angular/core';
import { faHome, faCalendarDays, faClock, faUser, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faCalendarDays = faCalendarDays;
  faClock = faClock;
  faUser = faUser;
  faGear = faGear;

  constructor() { }

  ngOnInit(): void {
  }

}
