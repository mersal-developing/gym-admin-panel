import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [ActionButtonsComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [CommonModule, HttpClientModule, ActionButtonsComponent]
})
export class SharedModule {}
