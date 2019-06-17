import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

//Ui module imports
import { DialogService } from '../../../../uiModule/ui.module'

@Component({
  selector: 'ssDateTimeCard',
  templateUrl: './dateTimeCard.component.html',
  styleUrls: ['./dateTimeCard.component.scss']
})
export class DateTimeCardComponent implements OnInit {

  proposedTimes: ProposedTime[] = [];

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

  constructor(private dialogService: DialogService, private router: Router) {

    this.proposedTimes.push({
      date: 'Thursday, 7/4/2018',
      time: '6:00pm',
      acceptVotes: 10,
      declineVotes: 0,
      userVote: 'accept'
    });

    this.proposedTimes.push({
      date: 'Monday, 1/1/2018',
      time: '5:40pm',
      acceptVotes: 5,
      declineVotes: 2,
      userVote: 'decline'
    });

    this.proposedTimes.push({
      date: 'Sunday, 6/30/2018',
      time: '2:30pm',
      acceptVotes: 2,
      declineVotes: 6,
      userVote: null
    });


  }

  ngOnInit() {
  }

  onAcceptClick(evt: Event, proposedTime: ProposedTime){

    evt.stopPropagation();
    evt.stopImmediatePropagation();

    if(proposedTime.userVote == null){
      proposedTime.userVote = 'accept';
      proposedTime.acceptVotes++;
    }
    else if(proposedTime.userVote == 'decline'){
      proposedTime.userVote = 'accept';
      proposedTime.declineVotes--;
      proposedTime.acceptVotes++;
    }
    else{
      proposedTime.userVote = null;
      proposedTime.acceptVotes--;
    }

  }

  onDeclineClick(evt: Event, proposedTime: ProposedTime){

    evt.stopPropagation();
    evt.stopImmediatePropagation();

    if(proposedTime.userVote == null){
      proposedTime.userVote = 'decline';
      proposedTime.declineVotes++;
    }
    else if(proposedTime.userVote == 'accept'){
      proposedTime.userVote = 'decline';
      proposedTime.acceptVotes--;
      proposedTime.declineVotes++;
    }
    else{
      proposedTime.userVote = null;
      proposedTime.declineVotes--;
    }

  }

  onRowClick(evt: Event){
    this.router.navigateByUrl(this.router.url + '/DateTimeDetails');
  }

}

class ProposedTime{
  date: string;
  time: string;
  acceptVotes: number;
  declineVotes: number;
  userVote: string;
}
