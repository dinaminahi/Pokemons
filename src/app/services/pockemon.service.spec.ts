import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PockemonService } from './pockemon.service';

describe('PockemonService', () => {
  let service: PockemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(PockemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
