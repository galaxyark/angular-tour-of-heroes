import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './heroes.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[];

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5);
  }

}