import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
    this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any) => {
      console.warn("result", result)
      this.x = result
      console.warn(this.x.response)
      if (this.x.response == "no") {

        (<any>this.router).navigate(["/admin"])
        alert("enter valid credentials");
      }
      else {
        (<any>this.router).navigate(["/train"])


      }
    })
  }
}