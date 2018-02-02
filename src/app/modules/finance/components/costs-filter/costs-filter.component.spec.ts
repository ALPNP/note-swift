import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsFilterComponent } from './costs-filter.component';

describe('CostsFilterComponent', () => {
  let component: CostsFilterComponent;
  let fixture: ComponentFixture<CostsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
