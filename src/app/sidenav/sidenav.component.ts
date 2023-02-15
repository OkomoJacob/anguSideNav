import { navBarData } from './nav-data';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean,
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  navbarData = navBarData
  screenWidth =  0;

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSideNav(): void{
    this.collapsed = false;
  }
}
