import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { timer, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserValidators {
  constructor(private db: AngularFirestore) { }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.getRecords()
        .pipe(
          map(res => {

            const result = res.find((item) => item.userName === control.value);

            if (result?.userName) {
              return { testTaken: result.score };
            }
          })
        );
    };
  }

  getRecords(): Observable<any> {

    const quiz = this.db.collection('quiz');

    return quiz.get()
      .pipe(
        map(quizz => {
          const items = [];
          quizz.docs.map(a => {
            const data = a.data();
            const id = a.id;
            items.push({ userName: (data as any).userName, score: (data as any).score });
          });
          return items;
        }),
      );

  }

}
