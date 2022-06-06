import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class flights {
  constructor(
    public flightId: String,
    public flightName: String,
    public from: String,
    public to: String,
    public fare: number,
    public date: String,
  ) {
  }
}

export class Book {
  constructor(
    public id: string,
    public fullName: string,
    public phoneNumber: number,
    public email: string,
    public flightId: String,
    public flightName: String,
    public from: String,
    public to: String,
    public fare: number,
    public date: String,

  ) { }
}
export class login {
  constructor(
    public username: String,
    public password: String,
  ) {
  }
}

export class loginExistingUser {
  constructor(
    public username: String,
    public password: String,
  ) {
  }
}

export class loginNewUser {
  constructor(
    public username: String,
    public password: String,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class HttpclientService {

  constructor(private http: HttpClient) { }

  getTrains() {
    console.log('Test Call');
    return this.http.get<flights[]>('http://localhost:8089/adminpage/allFlights');
  }

  //admin
  saveResto(data: any) {
    return this.http.post<login[]>('http://localhost:8088/auth', data)
  }

  addflight(data: any) {
    return this.http.post<flights[]>('http://localhost:8089/adminpage/addFlight', data);
  }

  deleteflight(flightId: any) {
    return this.http.delete<flights[]>(`${'http://localhost:8089/adminpage/delete'}/${flightId}`)
  }

  getUpdate(id: any) {
    return this.http.get<flights[]>(`${"http://localhost:8089/adminpage/flights"}/${id}`)
  }

  Updateflight(id: any, data: any) {
    return this.http.put<flights[]>(`${'http://localhost:8089/adminpage/update'}/${id}`, data)
  }
  //User
  ExistingUser(data: any) {
    return this.http.post<loginExistingUser[]>('http://localhost:8683/auth', data)
  }
  NewUser(data: any) {
    return this.http.post<loginNewUser[]>('http://localhost:8683/subs', data)
  }

  //Searching
  search(from: any, to: any) {
    return this.http.get<flights[]>(`${'http://localhost:8080/search/details'}/${from}/${to}`)
  }

  //Booking
  book(data: any) {
    return this.http.post<Book[]>('http://localhost:8087/book/bookTicket', data);
  }

  getorders() {
    return this.http.get<Book[]>('http://localhost:8087/book/orders')
  }

  //CheckIn
  getcheckIn(id: any) {
    return this.http.get<Book[]>(`${'http://localhost:8087/book/checkIn'}/${id}`)
  }
}