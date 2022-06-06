import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './book/booking.component';
import { CheckInComponent } from './checkin/check-in.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './notfound/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';
import { SuccessfulCheckInComponent } from './successfulcheckin/successful-check-in.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { TrainComponent } from './train/train.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    AdminComponent,
    BookingComponent,
    CheckInComponent,
    ExistingUserComponent,
    FlightSearchComponent,
    HomeComponent,
    PageNotFoundComponent,
    PaymentComponent,
    RegistrationPageComponent,
    SuccessfulRegistrationComponent,
    SuccessfulCheckInComponent,
    UpdateFlightComponent,
    UserComponent,
    TrainComponent,
    AdminpageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
