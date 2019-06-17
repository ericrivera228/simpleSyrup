//Angular imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

//Rxjs imports
import { Subscription } from 'rxjs';

//Service module imports
import { AppBarService } from '../../serviceModule/service.module';

//Library imports
import { Transitions } from '../../lib/animations/transitions';

@Component({
  selector: 'ssAppBar',
  templateUrl: './appBar.component.html',
  styleUrls: ['./appBar.component.scss'],
  animations: [
    Transitions.fadeInOut
  ]
})
export class AppBarComponent implements OnInit {

	private navbarTitleUpdateSubscription: Subscription;
	private showLoaderUpdateSubscription: Subscription;

	//property backing variables
	private _title: string;
	private _showMenuButton: boolean = true;
	private _showLoader: boolean = false;


	/************
	* Properties
	*************/

	//Indicates if the hamburger menu button should be displayed. If false, a left arrow is displayed
	get showMenuButton(): boolean{
		return this._showMenuButton;
	}

	get title(): string{
		return this._title;
	}

	get showLoader(): boolean{
		return this._showLoader;
	}

	get showBackButton(): boolean{
		return this.router.url !== '/events/1' && this.router.url !== '/'
	}

	constructor(private navbarService: AppBarService, private location: Location, private router: Router) { }

	/****************
	* ng Events
	****************/
	ngOnInit() {

		this.navbarTitleUpdateSubscription = this.navbarService.titleSource.subscribe((title: string) => {
			this._title = title;
		});

		this.showLoaderUpdateSubscription  = this.navbarService.showLoaderSource.subscribe((showLoader: boolean) => {
			this._showLoader = showLoader;
		});

	}

	ngOnDestroy(){
		this.navbarTitleUpdateSubscription.unsubscribe();
	}

	/****************
	* Event handlers
	****************/
	onBackButtonClick(evt: Event){
		this.location.back();
	}

}
