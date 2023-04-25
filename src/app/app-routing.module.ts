import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'material', component: MaterialFormComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
];
const routeOptions: ExtraOptions = {enableTracing: true};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
