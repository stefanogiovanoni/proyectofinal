import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerceComponent } from './acerce.component';

describe('AcerceComponent', () => {
  let component: AcerceComponent;
  let fixture: ComponentFixture<AcerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
