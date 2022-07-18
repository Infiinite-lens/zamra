import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("Clicked");
  }

  isShown: boolean = false; // hidden by default

  toggleShow() {
    this.isShown = !this.isShown;
  }
}
