import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GreenComponent} from './components/green/green.component';
import {RedComponent} from './components/red/red.component';
import {OuterComponent} from './components/outer/outer.component';

const routes: Routes = [
  {path: 'red', component: RedComponent, outlet: 'redOutlet'},
  {path: 'green', component: GreenComponent, outlet: 'greenOutlet'},

  {path: 'outer', component: OuterComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
