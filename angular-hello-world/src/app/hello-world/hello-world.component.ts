import { Component, OnInit } from '@angular/core';

//Dichiarazione del componente
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
