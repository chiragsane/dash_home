import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'
declare var $: JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
	projects: Object[];
    constructor(private appService: AppService){}
    ngOnInit(){
    	this.appService.getProjectsData().subscribe((projects) => this.projects = projects)
    }
}