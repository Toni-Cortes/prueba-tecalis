import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-container-mobile',
  imports: [],
  templateUrl: './tabs-container-mobile.html',
  styleUrl: './tabs-container-mobile.scss'
})
export class TabsContainerMobile {
  @Input() tabTitles: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  
  activeTabIndex: number = 0;

  onTabClick(index: number): void {
    if (this.activeTabIndex === index) {
      this.activeTabIndex = -1;
    } else {
      this.activeTabIndex = index;
    }
  }
}