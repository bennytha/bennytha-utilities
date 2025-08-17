import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationHome } from './application-home';

describe('ApplicationHome', () => {
  let component: ApplicationHome;
  let fixture: ComponentFixture<ApplicationHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
