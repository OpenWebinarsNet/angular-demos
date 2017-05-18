import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-talk',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">

      <input type="text" name="title" required [formControl]="nameControl" minlength="10">

      <input type="text" name="date" required [formControl]="form.controls.date">

      <button [disabled]="!form.valid">Add talk</button>

    </form>

  `,
  styleUrls: ['./add-talk.component.css']
})
export class AddTalkComponent implements OnInit {

  form;
  nameControl;

  constructor(private fb: FormBuilder) {

    this.nameControl = new FormControl('', Validators.required);

    this.form = fb.group({
      title: this.nameControl,
      date: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }

}