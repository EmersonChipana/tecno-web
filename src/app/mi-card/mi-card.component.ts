import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mi-card',
  templateUrl: './mi-card.component.html',
  styleUrls: ['./mi-card.component.css']
})
export class MiCardComponent implements OnInit {
    
  @Input() t: String | undefined;
  @Input() imgen: String | undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }    

}
