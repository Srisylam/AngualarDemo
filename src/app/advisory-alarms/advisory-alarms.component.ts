import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advisory-alarms',
  templateUrl: './advisory-alarms.component.html',
  styleUrls: ['./advisory-alarms.component.css']
})
export class AdvisoryAlarmsComponent implements OnInit {
showHide: boolean;

 constructor() {
    this.showHide = true;
  }

  ngOnInit() {
	  
  }
	myFunc(){
    console.log("function called");
  }
	
	
}
