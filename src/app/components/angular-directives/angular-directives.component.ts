import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FallbackImageDirective } from 'src/app/shared/directives/fallback-image.directive';

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [
    CommonModule, FallbackImageDirective
  ],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.scss',
})
export class AngularDirectivesComponent {
  showMessage = true
 }
