import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent { 
  username = 'John Doe'

  handleClick() {
    alert(`Welcome, ${this.username}`)
  }
}
