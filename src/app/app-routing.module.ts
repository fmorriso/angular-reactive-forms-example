import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'reactive', component: ReactiveFormComponent, data: {label: 'Reactive'}},
  {path: 'material', component: MaterialFormComponent, data: {label: 'Material'}},
  {path: 'about', component: AboutComponent, data: {label: 'About'}},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
const routeOptions: ExtraOptions = {enableTracing: true};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
