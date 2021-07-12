import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishPageComponent } from './view/finish-page/finish-page.component';
import { MainScreenComponent } from './view/main-screen/main-screen.component';
import { UserFormComponent } from './view/user-form/user-form.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'main-screen', component: MainScreenComponent },
  { path: 'user-form', component: UserFormComponent},
  { path: 'finish-page', component: FinishPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
