//Angular imports
import { Component, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

//Library imports
import { Transitions } from '../../../../lib/animations/transitions';

//Feature imports
import { EventSubPageComponent } from '../../eventSubPage/eventSubPage.component';

//Service module imports
import { UserService } from '../../../../serviceModule/service.module'

//Ui module imports
import { DialogService, SnackBarService } from '../../../../uiModule/ui.module';

const USE_MOCK_DATA = true;

@Component({
  templateUrl: './editDateTime.component.html',
  styleUrls: ['./editDateTime.component.scss'],
  animations: [
    Transitions.fadeInOutOnLoad
  ]
})
export class EditDateTimeComponent extends EventSubPageComponent{  

	constructor(injector: Injector, private router: Router, private dialogService: DialogService, private snackBarService: SnackBarService, private userService: UserService) {
		super(injector);

		// for (let counter = this.eventService.mockParticipantData.length; counter >= this.eventService.mockParticipantData.length-5; counter--) { 
		// 	this.declinedUsers.push(this.eventService.mockParticipantData[counter].user);
		// }

	}

	ngOnInit(){

		//this.thing.open();

		// super.ngOnInit();

		// this.route.parent.paramMap.switchMap((params: ParamMap) => {
		// 	this.eventService.getEventParticipants(+params.get('eventId'), USE_MOCK_DATA)
		// }).subscribe((zippedResults) => {
		// });

	}
}