import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpclientService } from '../Service/httpclient.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  x: any;
  x1: any;

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
    this.httpClientService.ExistingUser(this.adminlog.value).subscribe((result1: any) => {
      console.warn("result", result1)
      this.x1 = result1
    })
    if (this.x1.response == "no") {
      this.httpClientService.NewUser(this.adminlog.value).subscribe((result: any) => {
        console.warn("result", result)
        this.x = result
        console.warn(this.x.response)

        if (this.x.response == "Successful") {

          (<any>this.router).navigate(["/registrationPage"])
          alert("successfully registered");
        }
        else {
          alert("existing user");
          (<any>this.router).navigate(["/user"])
        }

      })
    }
    else {
      alert("existing user");


    }
  }
}
