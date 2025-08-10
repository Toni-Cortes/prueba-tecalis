import { Component, signal } from '@angular/core';
import { UiButton } from './shared/ui-button/ui-button';

import { TabsContainer } from "./shared/tabs-container/tabs-container";
import { TabsContainerMobile } from "./shared/tabs-container-mobile/tabs-container-mobile";  



@Component({
  selector: 'app-root',
  imports: [UiButton, TabsContainer, TabsContainerMobile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-maqueta');
  myTabs: string[] = ['Lorem Ipsum 1', 'Lorem Ipsum 2', 'Lorem Ipsum 3']; //array que se usa para llamar al componente de las pestanas
}
