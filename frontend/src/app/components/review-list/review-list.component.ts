import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MongodbApiService } from 'src/app/service/mongodb-api.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit{
  reviews:any = [];

  constructor(private _mongodbApiService:MongodbApiService) {}

  ngOnInit() {
    this.readReviews();
  }

  readReviews(){
    this._mongodbApiService.getReviews().subscribe((data) => {
      this.reviews = data;
    })
  }
}
