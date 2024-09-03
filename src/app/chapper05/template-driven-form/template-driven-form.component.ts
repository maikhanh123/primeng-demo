import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './template-driven-form.component.html',
  styles: `
    .form-group {
        margin: 2rem 0;
      }

      span {
        margin-right: 1rem;
      }
  `,
})
export class TemplateDrivenFormComponent {
  cities = [
    { name: 'Toronto', code: 'TOR' },
    { name: 'Montreal', code: 'MTL' },
    { name: 'Vancouver', code: 'VAN' },
    { name: 'Calgary', code: 'CGY' },
    { name: 'Ottawa', code: 'OTT' },
    { name: 'Edmonton', code: 'EDM' },
    { name: 'Quebec City', code: 'QUE' },
    { name: 'Winnipeg', code: 'WIN' },
    { name: 'Hamilton', code: 'HAM' },
    { name: 'Kitchener', code: 'KIT' },
  ];

  groupedCities = [
    {
      label: 'Canada',
      value: 'ca',
      items: [
        { label: 'Vancouver', value: 'Vancouver' },
        { label: 'Toronto', value: 'Toronto' },
        { label: 'Montreal', value: 'Montreal' },
        { label: 'Ottawa', value: 'Ottawa' },
      ],
    },
    {
      label: 'Vietnam',
      value: 'vn',
      items: [
        { label: 'Ho Chi Minh City', value: 'Ho Chi Minh City' },
        { label: 'Hanoi', value: 'Hanoi' },
        { label: 'Da Nang', value: 'Da Nang' },
        { label: 'Nha Trang', value: 'Nha Trang' },
      ],
    },
  ];

  onSubmit(form: NgForm) {
    console.log(form.value); // { first: '' }
  }

  onCityChange(value: { name: string; code: string }) {
    alert(`You have selected: ${value.name}`);
  }
}
