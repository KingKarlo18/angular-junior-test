import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducFilterComponent } from './produc-filter.component';

describe('ProducFilterComponent', () => {
  let component: ProducFilterComponent;
  let fixture: ComponentFixture<ProducFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducFilterComponent]
    });
    fixture = TestBed.createComponent(ProducFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
