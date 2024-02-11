import { Component, OnInit } from '@angular/core';
import { Iplayers } from './shared/model/interface';
import { cricketers } from './shared/const/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice';
  searchValue: string = '';
  selectValue: string = '';
  playersArray: Iplayers[] = cricketers;

  onSelect(ele: HTMLSelectElement) {
    console.log(ele.value);
    this.selectValue = ele.value;
  }

  constructor() { }

  ngOnInit() {
    
  }

}
