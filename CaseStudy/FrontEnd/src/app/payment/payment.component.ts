import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  train: Book[] = [];
  constructor(private httpClientService: HttpclientService, private router: Router) { }

  ngOnInit(): void {
    let ord = this.httpClientService.getorders();
    ord.subscribe((data) => this.train = data);
  }

}