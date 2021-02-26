import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major + Date.now();

  ngOnChanges() {
    console.log("APP = 1 ngOnChanges");
  }

  ngOnInit() {
    console.log("APP = 2 ngOnInit");
  }

  ngDoCheck() {
    console.log("APP = 3 ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("APP = 4 ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("APP = 5 ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("APP = 6 ngAfterViewInit");
    this.name = "Angular " + VERSION.major + Date.now();
  }

  ngAfterViewChecked() {
    console.log("APP = 7 ngAfterViewChecked");
  }
}
