import { Component, Input, OnInit, NgZone } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit{
  googleId: string | null = null;;

  authors = "";
  description = "";
  googleLink = "";
  imageLink = "";
  title = "";

  shortDescription = true;

  constructor(
    public modalRef: MdbModalRef<ReviewCreateComponent>,
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.getBookDetails();
  }

  async getBookDetails() {
    let thumbnailLink = "";

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${this.googleId}`
    );
    const data = await response.json();
    this.authors = data.volumeInfo.authors;
    this.description = (data.volumeInfo.description);
    this.googleLink = data.volumeInfo.canonicalVolumeLink;
    this.title = data.volumeInfo.title;

    thumbnailLink = data.volumeInfo.imageLinks;
    if(thumbnailLink) {
      this.imageLink = data.volumeInfo.imageLinks.smallThumbnail;
    } else {
      this.imageLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif";
    }
  }

  onDescriptionSizeChange(): void {
    this.shortDescription = !this.shortDescription;
  }
}

