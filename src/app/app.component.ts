import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularDirectivesComponent } from "./components/angular-directives/angular-directives.component";
import { AngularPipesComponent } from "./components/angular-pipes/angular-pipes.component";
import { AngularSignalsComponent } from "./components/angular-signals/angular-signals.component";
import { AngularServicesComponent } from "./components/angular-services/angular-services.component";
import { AngularControlFlowComponent } from "./components/angular-control-flow/angular-control-flow.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularDirectivesComponent, AngularPipesComponent, AngularSignalsComponent, AngularServicesComponent, AngularControlFlowComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-demo';
}
