import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  activeSection = 2
  sectionCount = 3

  gameForm = this.fb.group({
    babyPotion: this.fb.group({
      mamaScoop: [''],
      papaScoop: [''],
      ollieScoop: [''],
      yield: this.fb.group({
        weight: [''],
        length: ['', Validators.required, Validators.pattern("\d+\"")]
      })
    }),
    birthDateGuess: this.fb.group({
      birthMonth: [''],
      birthDate: [''],
      name: ['']
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('')
  }

  onPrev() {
    if (this.activeSection > 0) {
      this.activeSection--
    }
  }

  onNext() {
    if (this.activeSection + 1 < this.sectionCount){
      this.activeSection++
    }
  }
}
