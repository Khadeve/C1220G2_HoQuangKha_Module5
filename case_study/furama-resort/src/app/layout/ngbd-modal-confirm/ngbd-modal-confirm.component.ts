import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-confirm',
  templateUrl: './ngbd-modal-confirm.component.html',
  styleUrls: ['./ngbd-modal-confirm.component.css']
})
export class NgbdModalConfirmComponent implements OnInit, DoCheck {

  @Input() doOpen: string = '';

  constructor(public modal: NgbActiveModal, private _modalService: NgbModal) { }
  ngDoCheck(): void {
    if (this.doOpen === "yes") {
      this.doOpen = 'no';
      this.open();
    }
  }

  ngOnInit(): void {
  }

  open() {
    this._modalService.open(NgbdModalConfirmComponent);
  }

}
