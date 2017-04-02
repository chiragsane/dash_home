import { Component } from '@angular/core';
declare var $: JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {}
  openNav() {
    document.getElementById("projectsPanel").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.05)";
  }

  closeNav() {
    document.getElementById("projectsPanel").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
  }
  toggleNav() {
    $('#projectsPanel').toggleClass('opened');
  }
}