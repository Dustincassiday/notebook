import { TestBed } from '@angular/core/testing';

import { NotebookService } from './notebook.service';

describe('NotebookService', () => {
  let service: NotebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotebookService);

    spyOn(window.sessionStorage, 'getItem').and.callFake((key) =>
      key in sessionStorage ? sessionStorage[key] : null
    );
    spyOn(window.sessionStorage, 'setItem').and.callFake(
      (key, value) => (sessionStorage[key] = value + '')
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('saveNotebookEntry', () => {
    it('should call _updateStoredNotebook', () => {
      spyOn<any>(service, '_updateStoredNotebook');
      service.saveNotebookEntry(1, '');
      expect(service['_updateStoredNotebook']).toHaveBeenCalled();
    });

    it('should call _getNotebookFromStorage', () => {
      spyOn<any>(service, '_getNotebookFromStorage').and.returnValue([]);
      service.saveNotebookEntry(1, '');
      expect(service['_getNotebookFromStorage']).toHaveBeenCalled();
    });
  });
  describe('resetNotebook', () => {
    it('should call _updateStoredNotebook', () => {
      spyOn<any>(service, '_updateStoredNotebook');
      service.resetNotebook();
      expect(service['_updateStoredNotebook']).toHaveBeenCalled();
    });
  });
});
