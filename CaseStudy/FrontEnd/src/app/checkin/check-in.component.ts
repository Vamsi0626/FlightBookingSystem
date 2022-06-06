import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book, HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  adminlog = new FormGroup(
    {
      val: new FormControl('', Validators.required)

    })
  fList: Book[] = [];

  constructor(private http: HttpclientService, private router: Router) { }

  ngOnInit(): void {
  }
  val: Book[] = [];
  checkin() {
    this.http.getcheckIn(this.adminlog.value.val).subscribe((result) => {
      console.warn("result", result)
      this.fList = result;

      if (result != null) {


        (<any>this.router.navigate(["/successfulcheckin"]))
      }
      else {
        alert("No Ticket with Booking Id");
        (<any>this.router.navigate(["/checkin"]))

      }
    });
  }
}
