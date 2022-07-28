import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarcasTotalComponent } from './comarcas-total.component';

describe('ComarcasTotalComponent', () => {
  let component: ComarcasTotalComponent;
  let fixture: ComponentFixture<ComarcasTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComarcasTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComarcasTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
