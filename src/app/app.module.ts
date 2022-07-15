import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./src/components/navbar/navbar.component";
import { HomeComponent } from "./src/components/pages/home/home.component";
import { CardComponent } from './src/ui/cards/card/card.component';
import { FooterComponent } from './src/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CardComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
