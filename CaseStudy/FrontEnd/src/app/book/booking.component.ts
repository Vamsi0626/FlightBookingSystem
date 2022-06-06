import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  adminlog = new FormGroup(
    {
      fullName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      flightId: new FormControl('', Validators.required),
      flightName: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      fare: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),

    })

  constructor(private http: HttpclientService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.rout.snapshot.params['id'])
    this.http.getUpdate(this.rout.snapshot.params['id']).subscribe((result: any) => {
      console.warn("result", result)

      this.adminlog.patchValue({
        flightId: result.flightId,
        flightName: result.flightName,
        from: result.from,
        to: result.to,
        fare: result.fare,
        date: result.date
      })
    })
  }
  bookFlight() {
    this.http.book(this.adminlog.value).subscribe((result: any) => {
      console.warn("result", result)
    })
    alert("Ticket Booked successfully");

    (<any>this.router).navigate(["/payment"])
  }

}