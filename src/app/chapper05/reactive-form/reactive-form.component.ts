import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectItemGroup } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar'

interface City {
  name: string;
  code: string;
}

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
    MultiSelectModule,
    CalendarModule,
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
    selectedCity: [''],
    selectedCitygroup: [''],
    selectedCities:[''],
    calendar: [''],
    calendarWithFormat: [''],
    calendarDateRange: [''],
    calendarLiteralText: ['']
  });

  genders: { name: string; value: string }[] = [
    { name: 'Male', value: 'M' },
    { name: 'Female', value: 'F' },
    { name: 'Other', value: 'O' },
  ];

  cities : City[] = [
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

  groupedCities: SelectItemGroup[] = [
    {
      label: 'Canada',
      value: 'ca',
      items: [
        { label: 'Vancouver', value: 'Vancouver value' },
        { label: 'Toronto', value: 'Toronto value' },
        { label: 'Montreal', value: 'Montreal value' },
        { label: 'Ottawa', value: 'Ottawa value' },
      ],
    },
    {
      label: 'Vietnam',
      value: 'vn',
      items: [
        { label: 'Ho Chi Minh City', value: 'Ho Chi Minh City value' },
        { label: 'Hanoi', value: 'Hanoi value' },
        { label: 'Da Nang', value: 'Da Nang value' },
        { label: 'Nha Trang', value: 'Nha Trang value' },
      ],
    },
  ];

  onCityChange(value: { name: string; code: string }) {
    alert(`You have selected: ${value.name}`);
  }

  onSubmit = () => {
    console.log(this.profileForm.value); // { first: '' }
  };

  onSubmitContact = () => {
    console.log(this.contactForm.value);
  };
}
