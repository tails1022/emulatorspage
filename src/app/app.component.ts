import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {NesComponent} from './nes/nes.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxTypedJsModule,NesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'probas';
  currentpage = ''
}