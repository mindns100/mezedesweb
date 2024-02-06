import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {

}
