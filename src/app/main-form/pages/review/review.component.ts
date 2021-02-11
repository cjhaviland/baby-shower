import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  forms$: Observable<any> | undefined

  constructor(private readonly databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.forms$ = this.databaseService.getForms()
  }

}
