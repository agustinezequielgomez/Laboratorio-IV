import { Injectable } from '@angular/core';
import { Hero } from '../Classes/hero';
import { HEROES } from '../Classes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>
  // tslint:disable-next-line: one-line
  {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>
  {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor(private messageService: MessageService) { }
}
