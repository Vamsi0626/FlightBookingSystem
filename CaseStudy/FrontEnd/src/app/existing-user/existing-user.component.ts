import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-existing-user',
  templateUrl: './existing-user.component.html',
  styleUrls: ['./existing-user.component.css']
})
export class ExistingUserComponent implements OnInit {

  x: any;

  adminlog = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    })

  constructor(private httpClientService: HttpclientService, private router: Router) { }

  ngOnInit(): void {

  }
  validate() {
    //console.warn(this.addResto.value)
    this.httpClientService.ExistingUser(this.adminlog.value).subscribe((result: any) => {
      console.warn("result", result)
      this.x = result
      console.warn(this.x.response)
      if (this.x.response == "no") {

        (<any>this.router).navigate(["/existing"])
        alert("enter valid credentials");
      }
      else {
        (<any>this.router).navigate(["/flightSearch"])


      }
    })
  }
}