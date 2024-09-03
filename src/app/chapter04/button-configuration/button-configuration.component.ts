import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-button-configuration',
  standalone: true,
  imports: [
    CommonModule, ButtonModule
  ],
  templateUrl: './button-configuration.component.html',
  styleUrl: './button-configuration.component.scss',
})
export class ButtonConfigurationComponent {
  isDisabled = true
  loading = false

  onClickEvent() {
    this.loading = true

    setTimeout(() => {
      this.loading = false
    }, 5000)
  }
}
