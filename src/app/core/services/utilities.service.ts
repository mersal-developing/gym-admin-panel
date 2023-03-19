import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../components/mat-dialog/mat-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  openSnackBar(message: string, action: string, panelClass: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 700,
      panelClass
    });
  }


  openDialog(data: any, panelClass:string) {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '300px',
      data,
      panelClass
    })


    return dialogRef
  }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
