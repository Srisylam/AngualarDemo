import { Component, OnInit } from '@angular/core';
//import {DataTablefModule} from "angular2-datatable";

@Component({
  selector: 'app-all-well-dashboard',
  templateUrl: './all-well-dashboard.component.html',
  styleUrls: ['./all-well-dashboard.component.css']
})
export class AllWellDashboardComponent implements OnInit {
	
	empDetails_list: d= [
  {
		id: 1,
		name: 'Windstorm',
		email:'srisylam.garige@kelltontech.com',
		phone:'8106377451',		
  },
  {
		id: 2,
		name: 'GSM',
		email:'srisylam.garige@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 3,
		name: 'Praveen Kumar Reddy',
		email:'praveen.reddy@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 4,
		name: 'SaiKumar',
		email:'saikumar@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 5,
		name: 'Windstorm',
		email:'srisylam.garige@kelltontech.com',
		phone:'8106377451',		
  },
  {
		id: 6,
		name: 'GSM',
		email:'srisylam.garige@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 7,
		name: 'Praveen Kumar Reddy',
		email:'praveen.reddy@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 8,
		name: 'SaiKumar',
		email:'saikumar@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 9,
		name: 'Windstorm',
		email:'srisylam.garige@kelltontech.com',
		phone:'8106377451',		
  },
  {
		id: 10,
		name: 'GSM',
		email:'srisylam.garige@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 11,
		name: 'Praveen Kumar Reddy',
		email:'praveen.reddy@kelltontech.com',
		phone:'8106377451',		
  },
{
		id: 12,
		name: 'SaiKumar',
		email:'saikumar@kelltontech.com',
		phone:'8106377451',		
  }
];
	
	
	
	
  constructor() { }

  ngOnInit() {
  }

}
