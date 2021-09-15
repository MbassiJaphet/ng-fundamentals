import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-page',
  template: `
    <p>
      error-page works!
    </p>
  `,
  styles: [
  ]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
