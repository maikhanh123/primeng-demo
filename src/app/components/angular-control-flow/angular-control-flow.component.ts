import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './angular-control-flow.component.html',
  styleUrl: './angular-control-flow.component.scss',
})
export class AngularControlFlowComponent { 
  products = []
}
