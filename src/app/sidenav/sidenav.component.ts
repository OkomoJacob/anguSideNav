import { navBarData } from './nav-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  collapsed = false;
  navbarData = navBarData
  constructor() {}

  ngOnInit(): void {}
}
