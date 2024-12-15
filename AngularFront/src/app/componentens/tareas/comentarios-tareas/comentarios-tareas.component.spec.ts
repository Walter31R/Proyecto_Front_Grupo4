import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosTareasComponent } from './comentarios-tareas.component';

describe('ComentariosTareasComponent', () => {
  let component: ComentariosTareasComponent;
  let fixture: ComponentFixture<ComentariosTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentariosTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
