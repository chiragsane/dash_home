import { Component } from '@angular/core';
declare var $: JQueryStatic;

@Component({
	moduleId: module.id,
	selector: 'my-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	constructor() {
		var selectedType: string = 'All';
		var selectedStatus: string = 'All';
		$(document).ready(function () {
			$('.projectType .statsCard').click(function () {
				$(this).siblings().addClass('faded');
				$(this).removeClass('faded');
				selectedType = $(this).last()[0].children[2].innerHTML;
				console.log(selectedStatus + ' Projects under ' + selectedType);
			});
			$('.projectStatus .statsCard').click(function () {
				$(this).siblings().addClass('faded');
				$(this).removeClass('faded');
				selectedStatus = $(this).last()[0].children[1].innerHTML;
				console.log(selectedStatus + ' Projects under ' + selectedType);
			});
			$('.statsCard.shake').click(function () {
				$(this).removeClass('shake');
			});
		});
	}
}