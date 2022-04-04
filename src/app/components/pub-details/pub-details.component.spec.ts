import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubDetailsComponent } from './pub-details.component';

describe('PubDetailsComponent', () => {
  let component: PubDetailsComponent;
  let fixture: ComponentFixture<PubDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
