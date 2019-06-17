//Angular Imports
import { NgModule } from '@angular/core';
import { 
  MatAutocompleteModule, 
  MatButtonModule, 
  MatCardModule, 
  MatChipsModule,
  MatCheckboxModule, 
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, 
  MatInputModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule, 
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule, 
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatTabsModule
  ]
})
export class MaterialDesignModule { }