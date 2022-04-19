import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usernavigation',
  templateUrl: './usernavigation.component.html',
  styleUrls: ['./usernavigation.component.css']
})
export class UsernavigationComponent implements OnInit {

  constructor() { }
  cheackTokenHtml(){
    return false;
  }
  SignOut(){
    
  }

  ngOnInit(): void {
  }

}
