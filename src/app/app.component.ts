import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Sample Site Angular 2 - Bootstrap</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a routerLink="/">Home</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    <br/><br/><br/><br/>
    <router-outlet></router-outlet>
`,

})
export class AppComponent {
  constructor(){
    console.log('Inside the AppComponent constructor');
  }
}

