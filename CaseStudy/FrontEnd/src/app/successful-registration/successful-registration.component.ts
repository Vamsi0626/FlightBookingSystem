import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successful-registration',
  templateUrl: './successful-registration.component.html',
  styleUrls: ['./successful-registration.component.css']
})
export class SuccessfulRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  success() {
    (<any>this.router).navigate(["/existing"])
  }
}
