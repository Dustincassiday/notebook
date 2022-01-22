import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NotebookService } from 'src/app/services/notebook.service';
import { NotebookComponent } from './notebook.component';

describe('NotebookComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;

  let serviceSpy = jasmine.createSpyObj('NotebookService', [
    'saveNotebookEntry',
    'resetNotebook',
  ]);

  let router: Router;

  const routes: Routes = [
    {
      path: ':page',
      component: NotebookComponent,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotebookComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{ provide: NotebookService, useValue: serviceSpy }],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('saveNotebookEntry', () => {
    it('should call _service.saveNotebookEntry with specified parameters', () => {
      const page = 1;
      const entry = 'test';
      component.saveNotebookEntry(page, entry);
      expect(serviceSpy.saveNotebookEntry).toHaveBeenCalledWith(page, entry);
    });

    it('should call _router.Navigate page param', () => {
      const page = 3;
      spyOn(router, 'navigate');
      component.saveNotebookEntry(page);
      expect(router.navigate).toHaveBeenCalledWith(['', page]);
    });
  });

  describe('resetNotebookEntry', () => {
    it('should call _service.resetNotebook', () => {
      component.resetNotebook();
      expect(serviceSpy.resetNotebook).toHaveBeenCalled();
    });

    it('should call _router.Navigate with default params', () => {
      spyOn(router, 'navigate');
      component.resetNotebook();
      expect(router.navigate).toHaveBeenCalledWith(['', 1]);
    });
  });
});
