import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  updateForm(event: string) {
    const value = event;
  }

  public nameFormControl = new FormControl('');
  public emailFormControl = new FormControl('');

}