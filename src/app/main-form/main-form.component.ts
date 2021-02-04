import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  gameForm = this.fb.group({
    babyPotion: this.fb.group({
      mamaScoop: [''],
      papaScoop: [''],
      ollieScoop: [''],
      yield: this.fb.group({
        weight: [''],
        length: ['']
      })
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('')
  }
}
