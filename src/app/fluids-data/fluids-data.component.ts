import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluids-data',
  templateUrl: './fluids-data.component.html',
  styleUrls: ['./fluids-data.component.css']
})
export class FluidsDataComponent implements OnInit {

 showSelected : boolean;
    constructor(){
        this.showSelected = false;     
    }
    ShowButton(){
        this.showSelected = true;
    }
    HideButton(){
        this.showSelected = false;
    }

  ngOnInit() {
  }

}
