import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SevenSegmentComponent } from './components/seven-segment/seven-segment.component';

const routes: Routes = [
  { path: '', component: SevenSegmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
