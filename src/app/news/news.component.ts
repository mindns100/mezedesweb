import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {


}
