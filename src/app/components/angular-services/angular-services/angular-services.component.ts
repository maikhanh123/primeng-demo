import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-angular-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-services.component.html',
  styleUrl: './angular-services.component.scss',
})
export class AngularServicesComponent {
  private userService = inject(UserService);
  users$ = this.userService.getUsers();
}
