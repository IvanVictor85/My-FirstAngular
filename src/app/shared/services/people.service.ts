import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Ivan',
        lastName: 'Oliveira',
        age: 37
      },
      {
        firstName: "Danielle",
        lastName: "Rustice",
        age: 35
      },
      {
        firstName: "Giovanna",
        lastName: "Adai",
        age: 7
      },
      {
        firstName: "Manuella",
        lastName: "Assunção",
        age: 8
      }
    ]

    return of(peopleArray)
  }
}
