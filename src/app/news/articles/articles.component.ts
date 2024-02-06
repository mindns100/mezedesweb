import {Component, OnInit} from '@angular/core';
import {RouterLink, ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articleId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = +params['articleId'];
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }



}
