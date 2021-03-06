//Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Local imports
import { BigChipComponent } from './complex/bigChip/bigChip.component';
import { CardComponent } from './complex/card/card.component';
import { ChipComponent } from './complex/chip/chip.component';
import { ContentLoadErrorComponent } from './complex/contentLoadError/contentLoadError.component';
import { DateTimePickerComponent } from './complex/dateTimePicker/dateTimePicker.component';
import { DialogComponent } from './complex/dialog/dialog.component';
import { DialogResult } from './complex/dialog/dialogResult';
import { DialogService } from './complex/dialog/dialog.service';
import { FormPageComponent } from './complex/formPage/formPage.component';
import { MaterialDesignModule } from '../uiModule/materialDesign.module';
import { SnackBarComponent } from './complex/snackBar/snackBar.component';
import { SnackBarService } from './complex/snackBar/snackBar.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    RouterModule
  ],
  declarations: [
    BigChipComponent,
    CardComponent,
    ChipComponent,
    ContentLoadErrorComponent,
    DateTimePickerComponent,
    DialogComponent,
    FormPageComponent,
    SnackBarComponent
  ],
  exports: [
    BigChipComponent,
    CardComponent,
    ChipComponent,
    ContentLoadErrorComponent,
    DateTimePickerComponent,
    DialogComponent,
    FormPageComponent,
    SnackBarComponent
  ],
  entryComponents: [
    DialogComponent,
    SnackBarComponent
  ],
  providers: [
    DialogService,
    SnackBarService
  ]
})
export class UiModule { }

export { BigChipComponent } from './complex/bigChip/bigChip.component';
export { ChipComponent } from './complex/chip/chip.component';
export { ContentLoadErrorComponent } from './complex/contentLoadError/contentLoadError.component';
export { DateTimePickerComponent } from './complex/dateTimePicker/dateTimePicker.component';
export { DialogComponent } from './complex/dialog/dialog.component';
export { DialogResult } from './complex/dialog/dialogResult';
export { DialogService } from './complex/dialog/dialog.service';
export { SnackBarComponent } from './complex/snackBar/snackBar.component';
export { SnackBarService } from './complex/snackBar/snackBar.service';