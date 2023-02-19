import { Component, ViewChild } from '@angular/core';
import { Tabs } from '../interface/tabs.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public cadastroTab: Tabs = {
    class: 'active',
    on: false
  };

  public emailTab: Tabs = {
    class: '',
    on: false
  };

  public tabsOnClick(activeTab: Tabs, inactiveTab: Tabs) {
    activeTab.class = 'active';
    activeTab.on = true;

    inactiveTab.class = '';
    inactiveTab.on = false;
  }
}
