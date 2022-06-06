import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SuccessfulCheckInComponent } from './successfulcheckin/successful-check-in.component';
import { SuccessfulRegistrationComponent } from './successful-registration/successful-registration.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UserComponent } from './user/user.component';
import { TrainComponent } from './train/train.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'existing', component: ExistingUserComponent },
  { path: 'adminpage', component: AdminComponent },
  { path: 'flightSearch', component: FlightSearchComponent },
  { path: 'registrationPage', component: RegistrationPageComponent },
  { path: 'SuccessfulRegistration', component: SuccessfulRegistrationComponent },
  { path: 'book/:id', component: BookingComponent },
  { path: 'addFlight', component: AddFlightComponent },
  { path: 'update/:id', component: UpdateFlightComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'checkin', component: CheckInComponent },
  { path: 'successfulcheckin', component: SuccessfulCheckInComponent },
  { path: '', component: HomeComponent },
  { path: 'train', component: TrainComponent},
  { path: 'About', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
