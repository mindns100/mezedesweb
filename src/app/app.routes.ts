import { Routes, RouterModule } from '@angular/router';
import { NgModule} from "@angular/core";
import { GalleryComponent} from "./gallery/gallery.component";

import {HomeComponent} from "./home/home.component";
import {NewsComponent} from "./news/news.component";
import {HoneyComponent} from "./honey/honey.component";
import {ContactComponent} from "./contact/contact.component";
import {ArticlesComponent} from "./news/articles/articles.component";

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'honey', component: HoneyComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'articles', component: ArticlesComponent },
  { path: 'news/articles/:articleId', component: ArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
