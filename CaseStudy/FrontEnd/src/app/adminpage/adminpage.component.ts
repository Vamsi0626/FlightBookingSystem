import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flights, HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  trains: flights[] = [];
  updates: flights[]= [];

  constructor(private httpClientService: HttpclientService,private router:Router) { }

  ngOnInit(): void {
    this.httpClientService.getTrains().subscribe((result)=>{
      console.warn(result)
      this.trains=result
  })
  }
  addFlight(){
    (<any>this.router).navigate(["/addFlight"]) 
  }

  updateFlight(){
    (<any>this.router).navigate(["/updateFlight"]) 
  }
  
  deleteflight(trai:any){
    this.httpClientService.deleteflight(trai).subscribe((result)=>{
      this.trains.splice(trai-1,1)
      console.warn("result",result)
      this.trains=result
      console.warn(this.trains)
      
    });
    (<any>this.router).navigate(["/adminpage"])
    alert("deleted succesfully")
}
}