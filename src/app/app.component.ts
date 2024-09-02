import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularDirectivesComponent } from "./components/angular-directives/angular-directives.component";
import { AngularPipesComponent } from "./components/angular-pipes/angular-pipes.component";
import { AngularSignalsComponent } from "./components/angular-signals/angular-signals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularDirectivesComponent, AngularPipesComponent, AngularSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-demo';
}
