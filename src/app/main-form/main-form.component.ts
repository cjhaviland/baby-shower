import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  activeSection = 3
  sectionCount = 4

  faHeart = faHeart
  farHeart = farHeart

  ollieOrBaby = [
    {
      statement: 'Was once frozen in a lab',
      formControlName: 'frozenInLab'
    },
    {
      statement: 'Took over 4 years to conceive',
      formControlName: 'yearsToConceive'
    },
    {
      statement: 'Lost weight in my first trimester',
      formControlName: 'lostWeight'
    },
    {
      statement: 'Threw up the most',
      formControlName: 'threwUp'
    },
    {
      statement: 'Nausea and food aversions lasted longer',
      formControlName: 'nausea'
    },
    {
      statement: `Started showing on the 4th of July`,
      formControlName: 'startedShowing'
    },
    {
      statement: 'Passed glucose screening on the first try',
      formControlName: 'glucoseScreening'
    },
    {
      statement: 'Pregnant during a global pandemic',
      formControlName: 'globalPandemic'
    },
    {
      statement: 'Turned 30 while pregnant',
      formControlName: 'turnedThirty'
    },
    {
      statement: 'Worst acid reflux',
      formControlName: 'acidReflux'
    },
    {
      statement: 'Most ultrasounds',
      formControlName: 'mostUltrasounds'
    },
  ]

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
    }),
    guessingGame: this.fb.group({
      frozenInLab: [''],
      yearsToConceive: [''],
      lostWeight: [''],
      threwUp: [''],
      nausea: [''],
      startedShowing: [''],
      glucoseScreening: [''],
      globalPandemic: [''],
      turnedThirty: [''],
      acidReflux: [''],
      mostUltrasounds: [''],
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
