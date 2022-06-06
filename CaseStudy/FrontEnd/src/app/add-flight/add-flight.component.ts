import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  adminlog=new FormGroup({

    flightId : new FormControl('',Validators.required),
    flightName : new FormControl('',Validators.required),
    from : new FormControl('',Validators.required),
    to : new FormControl('',Validators.required),
    fare : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),

  })
  /*success: string | undefined;
  err: string | undefined;
  data: any;*/
  

  constructor(private service:HttpclientService,private router:Router) { }

  ngOnInit(): void {
  }
  validate(){
    /*this.service.addflight(this.adminlog.value).subscribe((result: any)=>{
      console.warn("result",result)   */
      this.service.addflight(this.adminlog.value).subscribe((result: any) => {
      console.warn(result)
      })
      alert("flight added successfully");
        (<any>this.router).navigate(["/train"])
    }
}