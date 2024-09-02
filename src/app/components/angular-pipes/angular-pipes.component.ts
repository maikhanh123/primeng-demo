import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from 'src/app/shared/pipes/reverse.pipe';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    CommonModule, ReversePipe
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent { 
  today = new Date()
  price = 10.99
  greeting = 'John Doe'
}
