import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { PockemonService } from 'src/app/services/pockemon.service';
import { Pockemon } from 'src/app/components/pockemon-details/pockemon.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  nextPockemons: string;
  pockemons: Pockemon[];
  pockemonClickedUrl: string;
  ifClicked = false;
  subscription1 = new Subscription();
  subscription2 = new Subscription();
  subscription3 = new Subscription();

  constructor(private pockemonService: PockemonService) {}

  ngOnInit(): void {
    this.getPockemons(`https://pokeapi.co/api/v2/pokemon/?limit=12/`);
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  getPockemons(url: string): void {
    this.subscription1.add(this.pockemonService.getPockemons(url).subscribe((pockemons) => {
      this.pockemons = pockemons.results;
      this.nextPockemons = pockemons.next;
      this.getTypes();
    }));
  }

  getTypes(): void {
    this.pockemons.forEach((pockemon: Pockemon) => {
      this.subscription2.add(this.pockemonService.getPockemonDetails(pockemon.url).subscribe((res) => {
        pockemon.types = res.types;
        pockemon.id = res.id;

      }));
    });
  }

  clickPockemon(url: string): void {
    this.pockemonClickedUrl = url.slice(0, 3) + 's' + url.slice(3);
    this.ifClicked = true;
  }

  loadMoreData(): void {
    this.getPockemons(this.nextPockemons);
  }
}
