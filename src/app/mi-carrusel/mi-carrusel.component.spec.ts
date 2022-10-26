import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCarruselComponent } from './mi-carrusel.component';

describe('MiCarruselComponent', () => {
  let component: MiCarruselComponent;
  let fixture: ComponentFixture<MiCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiCarruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
