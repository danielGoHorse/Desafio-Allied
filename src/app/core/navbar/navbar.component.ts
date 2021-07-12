import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor(
    public app: AppComponent,
    private router: Router
) {

}

  ngOnInit() {
      this.items = [
          {
              label:'Plataformas',
              icon:'pi pi-fw pi-file',
              routerLink: ['/main-screen'],

          },

      ];
  }

}
