import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Class } from 'src/app/modules/classes/classes.model';
import {
  TableButtonAction,
  TableConsts,
} from '../../models/tableButtonActions';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent {
  @Input() value!: Class;
  @Input() isAddButton: boolean = false;

  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  constructor() {}

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    });
  }

  onDeleteClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.delete,
      value: this.value,
    });
  }

  onViewClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.view,
      value: this.value,
    });
  }

  onAddClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.add,
    });
  }
}
