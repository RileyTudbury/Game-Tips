import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScMcComponent } from './sc-mc/sc-mc.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'scmc', component: ScMcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
