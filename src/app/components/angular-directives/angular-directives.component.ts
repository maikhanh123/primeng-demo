import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.scss',
})
export class AngularDirectivesComponent {
  showMessage = true
 }
