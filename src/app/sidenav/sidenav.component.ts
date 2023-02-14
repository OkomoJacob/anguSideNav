import { navBarData } from './nav-data';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  collapsed = true;
  navbarData = navBarData
  constructor() {}

  @Output() 
  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  closeSideNav(): void{
    this.collapsed = false;
  }
}
