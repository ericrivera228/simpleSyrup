import { Component, OnInit } from '@angular/core';

//Ui module imports
import { DialogService } from '../../../../uiModule/ui.module'

@Component({
  selector: 'ssDateTimeCard',
  templateUrl: './dateTimeCard.component.html',
  styleUrls: ['./dateTimeCard.component.scss']
})
export class DateTimeCardComponent implements OnInit {

  /***********************************
  * Properties, Inputs, and Outputs
  ***********************************/

  get eventHasOfficalDate(): boolean{
    return false;
  }

  /*
  * Indicates if this card component should show it's empty state. This will be true when no times
  * have been suggested for the event.
  */
  get showEmptyState(): boolean{

    //TOOD: Implement this for realsies
    return false;

  }

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  onAddButtonClick(){

    let dialog = this.dialogService.openDialog({ 
        title: "Discard Invites?", 
        message: "You have some invitations waiting to be sent. If you leave without sending them, they will be discarded.",
        affirmativeText: "DISCARD",
        negativeText: "STAY"
      })

  }

}
