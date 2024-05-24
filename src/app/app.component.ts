import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./shared/header/header.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {






}
