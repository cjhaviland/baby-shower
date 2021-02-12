import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faBaby, faHeart } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService, GameForm } from '../database.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft' && this.activeSection !== 6) {
      this.onPrev();
    } else if (event.key === 'ArrowRight' && this.activeSection !== 5) {
      this.onNext();
    }
  }
  activeSection = 0
  sectionCount = 7

  faHeart = faHeart
  farHeart = farHeart
  faBaby = faBaby

  loading = false
  success = false

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
    name: ['', [Validators.required]],
    babyPotion: this.fb.group({
      mamaScoop: [''],
      papaScoop: [''],
      ollieScoop: [''],
      yield: this.fb.group({
        weight: [''],
        length: ['']
      })
    }),
    birthDate: [''],
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
    }),
    phoneNumber: ['']
  })

  constructor(private fb: FormBuilder, private db: DatabaseService, private loader: LoaderService) {
    this.loader.isLoading.subscribe((v) => {
      this.loading = v
    })

    this.loader.isSuccess.subscribe((s) => {
      this.success = s

      if (s) {
        this.onNext()
      }
    })
   }

  ngOnInit(): void {
    console.log('EXCUSE ME! But what are you doing in here? You should be filling out that form!')
  }

  get name() {
    return this.gameForm.controls.name
  }

  onSubmit() {
    let formBody: GameForm = this.gameForm.value
    this.db.postForm(formBody).subscribe()
  }

  onPrev() {
    if (this.activeSection > 0) {
      this.activeSection--
    }
  }

  onNext() {
    if (this.activeSection + 1 < this.sectionCount){
      if (this.activeSection > 0 && this.name.invalid) {
        this.name.markAsTouched()
        return
      }
      this.activeSection++
    }
  }
}
