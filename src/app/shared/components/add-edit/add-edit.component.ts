import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent {
  title!: string;
  form!: FormGroup;
  formElements: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddEditComponent>,
    private fb: FormBuilder
  ) {
    this.title = data.title;
    this.formElements = data.formElements;
    this.form = fb.group(data.form);
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.valid && this.dialogRef.close(this.form.value);
  }
}
