import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PockemonService } from 'src/app/services/pockemon.service';
import { Pockemon } from './pockemon.model';

@Component({
  selector: 'app-pockemon-details',
  templateUrl: './pockemon-details.component.html',
  styleUrls: ['./pockemon-details.component.scss'],
})
export class PockemonDetailsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() url: string;

  pockemon: Pockemon;

  subscription1 = new Subscription();

  constructor(private pockemonService: PockemonService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.url) {
      this.getPockemon();
    }
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

  getPockemon(): void {
    this.subscription1.add(this.pockemonService.getPockemonDetails(this.url).subscribe((pockemon) => {
      this.pockemon = pockemon;
      console.log(pockemon);
    }));
  }
}
