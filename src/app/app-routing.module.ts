import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./src/components/pages/home/home.component";
import { ClinicalTrialsComponent } from "./src/components/pages/clinical-trials/clinical-trials.component";
import { RegisteredProductsComponent } from "./src/components/pages/registered-products/registered-products.component";
import { ProductRecallsandAlertsComponent } from "./src/components/pages/product-recallsand-alerts/product-recallsand-alerts.component";
import { RegisteredPremisesComponent } from "./src/components/pages/registered-premises/registered-premises.component";
import { GmpCompliantFacilitiesComponent } from "./src/components/pages/gmp-compliant-facilities/gmp-compliant-facilities.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "clinical-trials", component: ClinicalTrialsComponent },
  { path: "registered-premises", component: RegisteredPremisesComponent },
  { path: "registered-products", component: RegisteredProductsComponent },
  {
    path: "product-recalls-and-alerts",
    component: ProductRecallsandAlertsComponent,
  },
  {
    path: "gmp-compliant-facilities",
    component: GmpCompliantFacilitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  ClinicalTrialsComponent,
  RegisteredPremisesComponent,
  RegisteredProductsComponent,
  ProductRecallsandAlertsComponent,
  GmpCompliantFacilitiesComponent,
];
