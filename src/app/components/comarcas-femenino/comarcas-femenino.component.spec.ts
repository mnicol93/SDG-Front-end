import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarcasFemeninoComponent } from './comarcas-femenino.component';

describe('ComarcasFemeninoComponent', () => {
  let component: ComarcasFemeninoComponent;
  let fixture: ComponentFixture<ComarcasFemeninoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComarcasFemeninoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComarcasFemeninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
