import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './service/data.service';
import { NavigationComponent } from './components/navigation/navigation.component';

import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
