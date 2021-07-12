import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/interfaces/plano';
import { Plataforma } from 'src/app/interfaces/plataforma';
import { User } from 'src/app/interfaces/user';
import { ApiAlliedService } from 'src/app/services/api-allied.service';

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.scss']
})
export class FinishPageComponent implements OnInit {
  user!: User;
  plataforma!: Plataforma;
  selectedPlano!: Plano;

  constructor(public apiAlliedService: ApiAlliedService) { }

  ngOnInit(): void {
    this.user = (this.apiAlliedService.getForm() ? this.apiAlliedService.getForm() : new User());
    this.plataforma = (this.apiAlliedService.getToPlataforma() ? this.apiAlliedService.getToPlataforma() : new Plataforma());
    this.selectedPlano = (this.apiAlliedService.getToPlano() ? this.apiAlliedService.getToPlano() : new Plano());
  }

}
