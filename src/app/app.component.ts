import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
    selectedHero?: Hero;
    onSelect(hero: Hero): void {
    this.selectedHero = hero;

}
}
