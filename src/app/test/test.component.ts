import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
              Inline Template
              <h2>{{2+2}}</h2>
              <h2>{{"Welcome " + name}}</h2>
              <h2>{{name.length}}</h2>
              <h2>{{name.toUpperCase()}}</h2>
              <h2>{{name.toLowerCase()}}</h2>
              <h2>{{greetUser()}}</h2>
              <br>
              <h2 [class.text-danger]="hasError">{{"Welcome " + name}}</h2>
              <h2 [class.text-special]="isSpecial">{{"Welcome " + name}}</h2>
              <h2 [ngClass]="messageClasses">{{"Welcome " + name}}</h2>
              <br>
              <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
              <h2 [ngStyle]="titleStyles">Style Binding 2</h2>
            </div>
            <div>
              <input [id]="myId" type="text" value="{{name}}">
              <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="{{name}}">
            </div> `,
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
  
  public name = "Paulo";
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

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
