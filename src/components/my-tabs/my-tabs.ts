import { Component, EventEmitter, Output } from '@angular/core';
import { TabChoice } from '../../types';

@Component({
  selector: 'app-my-tabs',
  imports: [],
  templateUrl: './my-tabs.html',
  styleUrl: './my-tabs.css',
})
export class MyTabs {
  TabChoice = TabChoice;
  @Output() SendTabChoiceToList = new EventEmitter<TabChoice>();

  SwitchTab(tab: TabChoice) {
    this.SendTabChoiceToList.emit(tab);
  }
}
