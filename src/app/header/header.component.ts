import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showMenu : boolean = false;
  constructor() { }

  ngOnInit() {
  }


  toggleMenu(){
    console.log("Toggle MEnu");
    
    this.showMenu = !this.showMenu;
  }

}
