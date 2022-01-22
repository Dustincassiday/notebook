import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MAX_PAGES } from 'src/app/constants';
import { NotebookViewModel } from 'src/app/models/notebook.viewmodel';
import { NotebookService } from 'src/app/services/notebook.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotebookComponent {
  public maxPages = MAX_PAGES;

  public get vm$(): Observable<NotebookViewModel> {
    return combineLatest([this._route.params, this._service.notebook$]).pipe(
      map(([params, notebook]) => {
        const currentPage = +params.page;
        const currentIndex = currentPage - 1;
        return { currentPage, currentIndex, notebook };
      })
    );
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: NotebookService
  ) {}

  public saveNotebookEntry(page: number, entry: string = ''): void {
    this._service.saveNotebookEntry(page, entry);
    this._router.navigate(['', page]);
  }

  public resetNotebook(): void {
    this._service.resetNotebook();
    this._router.navigate(['', 1]);
  }
}
