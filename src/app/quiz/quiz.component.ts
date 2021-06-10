import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QUESTIONS } from '../data/questions';
import { USERS } from '../data/users';
import { FormConfig } from '../interfaces/form-config.interface';
import { UserValidators } from '../validators/unique-validator';

const PRIMARY_KEY = 'userName';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  data: FormConfig[];

  userForm: FormGroup;

  usersList = USERS;

  constructor(private cd: ChangeDetectorRef, private valService: UserValidators) {

    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required, this.valService.userValidator())
    });
  }

  ngOnInit(): void {

    this.data = QUESTIONS;

    this.cd.detectChanges();

  }

  computeResults(username: string): void {

    console.log(username);

  }

}
