import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarcasMasculinoComponent } from './comarcas-masculino.component';

describe('ComarcasMasculinoComponent', () => {
  let component: ComarcasMasculinoComponent;
  let fixture: ComponentFixture<ComarcasMasculinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComarcasMasculinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComarcasMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
