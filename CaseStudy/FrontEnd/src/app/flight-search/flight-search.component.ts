import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { flights, HttpclientService } from '../Service/httpclient.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  
  [x: string]: any;
  fList: flights[] = [];
  adminlog = new FormGroup(
    {
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
     // date: new FormControl('', Validators.required)

    })

  from1: any[] = [];
  uniqueFrom: any[] = [];

  to1: any[] = [];
  uniqueTo: any[] = [];




  constructor(private httpClientService: HttpclientService, private router: Router) { }


  ngOnInit(): void {
    this.httpClientService.getTrains().subscribe((result: any[]) => {
      console.warn(result)
      this.fList = result
      //------- from get the From
      result.forEach((element: { from: any; }) => {
        this.from1.push(element.from)
      });
      this.uniqueFrom = [...new Set(this.from1)]
      console.warn("from", this.uniqueFrom)


      //------- to get the Destination
      result.forEach((element: { to: any; }) => {
        this.to1.push(element.to)
      });
      this.uniqueTo = [...new Set(this.to1)]
      console.warn("to", this.uniqueTo)
    })
  }


  searchFlight() {
    this.httpClientService.search(this.from, this.to).subscribe((result: any) => {
      console.warn("result", result)
      this.fList = result
      console.warn(this.fList)

    })

  }
  book() {
    (<any>this.router).navigate(["/book"])
  }

}

/*[x: string]: any;

  fList: flights[] = [];

  constructor(private httpClientService: HttpclientService,private router:Router) { }

  ngOnInit(): void {
    this.httpClientService.getTrains().subscribe((result)=>{
      console.warn(result)
      this.fList=result
    })
  }


searchFrom1()
{
 // console.warn(this.editResto.value);
  this.httpClientService.searchFrom(this.text).subscribe((result: any)=>{
    console.warn(result)
    this.fList=result
  })
}

searchTo1()
{
 // console.warn(this.editResto.value);
  this.httpClientService.searchTo(this.text1).subscribe((result: any)=>{
    console.warn(result)
    this.fList=result
  })
}

searchDate1()
{
 // console.warn(this.editResto.value);
  this.httpClientService.searchDate(this.text2).subscribe((result: any)=>{
    console.warn(result)
    this.fList=result
  })
}
book(){
  (<any>this.router).navigate(["/book"]) 
}

}*/