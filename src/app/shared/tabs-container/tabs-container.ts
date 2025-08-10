import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-tabs-container',
  imports: [],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.scss'
})
export class TabsContainer {
  @Input() tabTitles: string[] = ['Tab 1', 'Tab 2', 'Tab 3']; //para pasar arrays al componente de las pestañas
  activeTabIndex: number = 0; //controla la pestaña activa

  onTabClick(index: number): void { // cambia la pestaña activa al hacer click
    this.activeTabIndex = index; 
  }
}
