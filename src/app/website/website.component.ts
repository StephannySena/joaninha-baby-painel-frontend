import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements AfterViewInit{

  @ViewChild('newsletterModal') newsletterModal: any;

  constructor(public modalService: NgbModal) { }

  ngAfterViewInit() {
    this.modalService.open(this.newsletterModal,  { centered: true });
  }

}
