import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TemplateDrivenFormComponent {
  onSubmit(form: NgForm) {
    console.log(form.value); // { first: '' }
  }
}
