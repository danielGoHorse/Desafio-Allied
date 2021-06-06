import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    {id: 1, linkName: 'Home'},
    {id: 2, linkName: 'Planos'},
    {id: 3, linkName: 'Formulário'},
  ]

  navbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }


  toogleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }


}
