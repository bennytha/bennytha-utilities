import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagelayout } from './pagelayout';

describe('Pagelayout', () => {
  let component: Pagelayout;
  let fixture: ComponentFixture<Pagelayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagelayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagelayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
