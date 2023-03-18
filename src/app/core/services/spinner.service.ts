import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setLoading(loading: boolean) {
    this.loading$.next(loading);
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
