import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { Route, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Chapitre1Component } from './cours/chapitre1/chapitre1.component';
import { Chapitre2Component } from './cours/chapitre2/chapitre2.component';

// My array ROUTE
const APP_ROUTE: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'chapitre/1', component: Chapitre1Component },
  { path: 'chapitre/2', component: Chapitre2Component }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Chapitre1Component,
    Chapitre2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
