import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss']
})
export class GridPageComponent implements OnInit {
  title  = null;

  constructor(private router: Router,
    private route: ActivatedRoute) {
      this.title = "";
     }

  ngOnInit() {
    this.route.data.subscribe(data => 
      {
        this.title = data.title;
      });
  }

}
