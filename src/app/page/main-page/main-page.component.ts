import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/model/plano';
import { Plataforma } from 'src/app/model/plataforma';
import { PlanoService } from 'src/app/service/plano.service';
import { PlataformaService } from 'src/app/service/plataforma.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  plataformas!: Plataforma[];
  planos!: Plano[];
  planosCPT: any;
  planosTBT: any;
  planosWF: any;

  constructor(private plataformaService: PlataformaService,
    private planosList: PlanoService) { }

  ngOnInit(): void {
    this.getPlataformas;
  }

  getPlataformas() {
    this.plataformaService.getPlataformas().subscribe(
      data => {
        this.plataformas = data;

      },
      error => {
        console.log(error)
      });
  }

  getPlanosCPT() {
    this.planosList.getPlanoCPT().subscribe(
      data => {
        this.planosCPT = data;

      },
      error => {
        console.log(error)
      });
  }
  getPlanosTBT() {
    this.planosList.getPlanoTBT().subscribe(
      data => {
        this.planosTBT = data;

      },
      error => {
        console.log(error)
      });
  }
  getPlanosWF() {
    this.planosList.getPlanoWF().subscribe(
      data => {
        this.planosWF = data;

      },
      error => {
        console.log(error)
      });
  }

}
