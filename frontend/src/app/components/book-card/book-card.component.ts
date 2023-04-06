import { Component } from '@angular/core';
import { ReviewCreateComponent } from '../review-create/review-create.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  modalRef: MdbModalRef<ReviewCreateComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ReviewCreateComponent)
  }
}
