import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Plano } from 'src/app/interfaces/plano';
import { Plataforma } from 'src/app/interfaces/plataforma';
import { User } from 'src/app/interfaces/user';
import { ApiAlliedService } from 'src/app/services/api-allied.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  providers: [MessageService]
})
export class UserFormComponent implements OnInit {

  users!: User[];
  user!: User;
  plataforma: any;
  selectedPlano: any
  checkValidEmail: any;
  disableBtn!: boolean;
  formulario!: FormGroup;
  disabled!: boolean;


  constructor(public apiAlliedService: ApiAlliedService,
    public router: Router,
    private messageService: MessageService,
    public formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.plataforma = (this.apiAlliedService.getToPlataforma() ? this.apiAlliedService.getToPlataforma() : new Plataforma());
    this.selectedPlano = (this.apiAlliedService.getToPlano() ? this.apiAlliedService.getToPlano() : new Plano());
    this.user.plano = this.selectedPlano.franquia;
    this.user.plataform = this.plataforma.nome;
    this.formulario = this.formbuilder.group({
      plataform: [this.user.plataform],
      plano: [this.user.plano],
      nome: [null],
      email: [null],
      nascimento: [null],
      cpf: [null],
      telefone: [null]
    })
  }


  onSubmit() {

    this.salvar(this.formulario.value);
  }

  salvar(formulario: any) {
    this.user = { ...this.user };
    this.selectedPlano = { ...this.selectedPlano};
    this.apiAlliedService.sendForm(formulario);
    this.router.navigate(["/finish-page"]);
  }

}


