import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService, PrimeNGConfig, SelectItem } from "primeng/api"
import { Router } from '@angular/router';
import { ApiAlliedService } from 'src/app/services/api-allied.service';
import { Plano } from 'src/app/interfaces/plano';
import { Plataforma } from 'src/app/interfaces/plataforma';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  providers: [MessageService]
})
export class MainScreenComponent implements OnInit {

  plataforma = new Plataforma();
  plataformas!: Plataforma[];
  selectedPlataforma: any = "";
  plano = new Plano();
  selectedPlano!: Plano;
  formulario!: FormGroup;
  console: any;
  planosList!: Plano[];
  items!: SelectItem[];
  item!: string;


  constructor(
    private primengConfig: PrimeNGConfig,
    public router: Router,
    public apiAlliedService: ApiAlliedService,
    private messageService: MessageService
  ) {


  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.ListarPlataformas();
    this.dropChange();
  }


  dropChange() {
    console.log(this.selectedPlataforma.nome);
    // this.console = this.formulario.value;
    if (this.selectedPlataforma.sku == "TBT01") {
      this.getPlanoTBT();
    } else if (this.selectedPlataforma.sku == "CPT02") {
      this.getPlanoCPT();
    } else if (this.selectedPlataforma.sku == "WF03") {
      this.getPlanoWF();
    };

  }



  ListarPlataformas() {
    this.apiAlliedService.listarPlataformas().subscribe(
      data => {
        this.plataformas = data.plataformas;

      },
      err => {
        console.log('Erro ao listar Plataformas')
      }
    )
  }

  getPlanoWF() {
    this.planosList = [];
    this.apiAlliedService.getPlanoWF().subscribe(
      data => {
        this.planosList = data.planos;


      },
      err => {
        console.log('Erro ao listar Planos')
      }
    )
  }
  getPlanoCPT() {
    this.planosList = [];
    this.apiAlliedService.getPlanoCPT().subscribe(
      data => {
        this.planosList = data.planos

      },
      err => {
        console.log('Erro ao listar Planos')
      }
    )
  }
  getPlanoTBT() {
    this.planosList = [];
    this.apiAlliedService.getPlanoTBT().subscribe(
      data => {
        this.planosList = data.planos;

      },
      err => {
        console.log('Erro ao listar Planos')
      }
    )
  }


  selectProduct( planoList: Plano) {

    this.messageService.add({ severity: 'success', summary: 'Plano Selecionado', detail: planoList.franquia });

  }

  onRowSelect(selectedPlataforma: Plataforma, selectPlano: Plano,event: any) {
    this.messageService.add({ severity: 'success', summary: 'Plano Selecionado', detail: event.data.sku });

    setTimeout (() => {
    this.selectedPlano = {...this.selectedPlano}
    this.selectedPlataforma = { ...this.selectedPlataforma };
    this.apiAlliedService.selectPlano(selectPlano);
    this.apiAlliedService.selectPlataforma(selectedPlataforma);
    this.router.navigate(["/user-form"]);
   }, 3000);


  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'warn', summary: 'Plano Desmarcado', detail: event.data.sku });
  }

}
