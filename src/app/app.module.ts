import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./src/components/navbar/navbar.component";
import { CardComponent } from "./src/ui/cards/card/card.component";
import { FooterComponent } from "./src/components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    routingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
