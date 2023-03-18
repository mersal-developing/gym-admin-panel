import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { API_URLS } from './../../core/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { Class } from './classes.model';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private classesList$: BehaviorSubject<Class[]> = new BehaviorSubject<Class[]>(
    []
  );
  private classesApiUrl =
    environment.server_url + API_URLS.AppApi + API_URLS.Classes;

  constructor(private http: HttpClient) {
    this.getClassesList().subscribe((classes) => {
      this.classesList$.next(classes);
    });
  }

  getClassesList(): Observable<Class[]> {
    return this.http.get<Class[]>(this.classesApiUrl);
  }

  getClassesList$(): Observable<Class[]> {
    return this.classesList$.asObservable();
  }

  deleteClass(id: string) {
    this.http.delete(`${this.classesApiUrl}${id}/`).subscribe(() => this.updateClassLists())
  }

  //use this method to update classLists$ after delete or update any class
  updateClassLists() {
    this.getClassesList().subscribe((classes) => {
      this.classesList$.next(classes);
    });
  }
}
