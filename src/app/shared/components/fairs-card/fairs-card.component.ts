import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../model/fairs';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {
  @Input() fairObj !: Ifairs;
  @Output() faircard: EventEmitter<Ifairs> = new EventEmitter<Ifairs>();
  @Input() selectFairId !: string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.selectFairId);
    // let card = Array.from(document.getElementsByClassName('card'))
    // card[0].classList.add('active')
    // console.log(card);

  }

  onAdd() {
    this.faircard.emit(this.fairObj)
  }

}
