import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {NesComponent} from './nes/nes.component'
import {SnesComponent} from './snes/snes.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxTypedJsModule,NesComponent,SnesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'probas';
  currentpage = ''
}