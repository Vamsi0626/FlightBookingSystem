import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-successful-check-in',
  templateUrl: './successful-check-in.component.html',
  styleUrls: ['./successful-check-in.component.css']
})
export class SuccessfulCheckInComponent implements OnInit {
  
  
  fList: Book[] = [];
  adminlog!: FormGroup;

  constructor(private http: HttpclientService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.getcheckIn(this.adminlog.value).subscribe((result: any) => {
      console.warn(result)
      this.fList = result

    this.adminlog.value({
      TicketId:result.TicketId,
      PassengerName:result.PassengerName,
      PhoneNumber:result.PhoneNumber,
      Email:result.Email,
      flightId:result.flightId,
      flightName:result.flightName,
      from:result.from,
      to:result.to,
      fare: result.fare,
      date: result.date
    })
  })
  this.getTickets();
  }
  getTickets() {
    this.http.getcheckIn(this.adminlog.value).subscribe((result: Book[]) => {
      console.warn(result)
      this.fList = result
      console.warn(this.fList)
    })
}
}
