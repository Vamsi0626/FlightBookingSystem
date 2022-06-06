import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  adminlog = new FormGroup({
    flightId: new FormControl('', Validators.required),
    flightName: new FormControl('', Validators.required),
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    fare: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),

  })
  success: string | undefined;
  err: string | undefined;
  data: any;

  constructor(private service: HttpclientService, private router: Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {

    console.warn(this.rout.snapshot.params.id)
    this.service.getUpdate(this.rout.snapshot.params.id).subscribe((result: any) => {
      console.warn("result", result)

      this.adminlog.patchValue({
        flightId: result.flightId,
        flightName: result.flightName,
        from: result.from,
        to: result.to,
        fare: result.fare,
        date: result.date
      })
    }

    )
  }


  validate() {
    /*this.service.addflight(this.addflights.value).subscribe((result: any)=>{
      console.warn("result",result)   */
    this.service.Updateflight(this.rout.snapshot.params.id, this.adminlog.value).subscribe((result: any) => {
      console.warn(result)
    })




    alert("flight updated");
    (<any>this.router).navigate(["/train"])
  }


}
