import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
            <div>
              Inline Template
              <h2>{{name*name*name*name*name*name*name*name}}</h2>
              <h2>{{"Welcome " + name}}</h2>
              <h2>{{name}}</h2>
              <h2>{{name.length}}</h2>
              <h2>{{name.toUpperCase()}}</h2>
              <h2>{{name.toLowerCase()}}</h2>
              <h2>{{greetUser()}}</h2>
              <br>
              <h2 [class.text-danger]="hasError">{{name}}</h2>
              <h2 [class.text-special]="isSpecial">{{name}}</h2>
              <h2 [ngClass]="messageClasses">{{name}}</h2>
              <br>
              <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
              <h2 [ngStyle]="titleStyles">Style Binding 2</h2>
            </div>
            <div>
              <input #myInput type="text" value="{{name}}">
              <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="{{name}}">
            </div> 
            <button (click)="logMessage(myInput.value)">Greet</button>
            <button (click)="onClick($event)">Greet</button>
            {{greeting}}
            <input [(ngModel)]="name" type="text">
            {{name}}
            `,

  styles: [`
          .text-success{
            color: green;
          }
          
          .text-danger{
            color: red;
          }
          
          .text-special{
            font-style: italic;
          }`]
})
export class TestComponent implements OnInit {
  
  public name = "";
  public myId = "testID";
  public isDisabled = false;
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log(event);
    this.greeting = event.type;
    this.hasError = this.hasError ? false : true;
  }

  logMessage(value){
    console.log(value);
  }

}
