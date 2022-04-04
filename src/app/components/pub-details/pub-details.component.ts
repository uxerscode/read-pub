import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub-details',
  templateUrl: './pub-details.component.html',
  styleUrls: ['./pub-details.component.scss']
})
export class PubDetailsComponent implements OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
