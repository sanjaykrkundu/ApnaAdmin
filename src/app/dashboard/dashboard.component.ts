import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data : any;

  constructor(private route:  ActivatedRoute) {
    console.log("dashboard constructor ===");
  
   }

  ngOnInit() {
    console.log("dashboard init ===")
    this.route.data.subscribe(
      data => {
        this.data = data.details;
      }
    );

    
  }

}
