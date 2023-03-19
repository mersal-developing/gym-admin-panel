import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { MaterialModule } from './material.module';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActionButtonsComponent, AddEditComponent, ],
  imports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, ActionButtonsComponent, AddEditComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
