import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Classes/hero';
import { HeroService } from '../../Services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero)
  {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }

  getHeroes(): void
  {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
