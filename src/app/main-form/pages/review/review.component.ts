import { Component, OnInit } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  forms$: Observable<any> | undefined

  faCheckSquare = faCheckSquare
  activeName = ''

  constructor(private readonly databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.forms$ = this.databaseService.getForms()
  }

  setActive(name: string) {
    if (this.activeName === name) {
      this.activeName = ''
    }
    else {
      this.activeName = name
    }
  }

}
