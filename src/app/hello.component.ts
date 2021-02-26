import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  ngOnChanges() {
    console.log("HELLO = 1 ngOnChanges");
  }

  ngOnInit() {
    console.log("HELLO = 2 ngOnInit");
  }

  ngDoCheck() {
    console.log("HELLO = 3 ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("HELLO = 4 ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("HELLO = 5 ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("HELLO = 6 ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("HELLO = 7 ngAfterViewChecked");
  }
}
