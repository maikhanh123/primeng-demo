import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown'

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    InputMaskModule,
    RadioButtonModule,
    DropdownModule,
    NgIf
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private formBuilder = inject(FormBuilder);

  profileForm = new FormGroup({
    first: new FormControl(''),
  });

  contactForm = this.formBuilder.group({
    name: [''],
    phone: [''],
    subscribe: [false],
    gender: [''],
    cities: [{ name: '', code: '' }],
    groupedCities: []
  });

  genders: { name: string; value: string }[] = [
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' },
    { name: 'Other', value: 'O' },
  ];

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
  ]

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
  ]

  onCityChange(value: { name: string; code: string }) {
    alert(`You have selected: ${value.name}`)
  }

  onSubmit = () => {
    console.log(this.profileForm.value); // { first: '' }
  };

  onSubmitContact = () => {
    console.log(this.contactForm.value);
  };
}
