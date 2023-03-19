import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogComponent {
  content: any = "";
  heading: any = "";

  constructor(
    private dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.content = data.content;
    this.heading = data.heading;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  process() {
    this.dialogRef.close("yes");
  }
}
