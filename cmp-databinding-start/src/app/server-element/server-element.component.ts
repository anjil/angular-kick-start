import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnIT called');
  }

}
