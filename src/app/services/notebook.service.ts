import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  private _storage = sessionStorage;
  private _storageKey = 'NOTEBOOK';
  private _notebook$ = new BehaviorSubject<string[]>([]);
  private _initialValue = [''];
  public get notebook$(): Observable<string[]> {
    return this._notebook$;
  }

  constructor() {
    this._updateStoredNotebook(
      this._getNotebookFromStorage() || this._initialValue
    );
  }

  private _getNotebookFromStorage(): string[] {
    return JSON.parse(this._storage.getItem(this._storageKey) ?? '""');
  }

  private _updateStoredNotebook(notebook: string[]): void {
    this._storage.setItem(this._storageKey, JSON.stringify(notebook));
    this._notebook$.next(notebook);
  }

  public saveNotebookEntry(page: number, entry: string): void {
    const notebook = this._getNotebookFromStorage();
    notebook[page - 1] = entry;
    this._updateStoredNotebook(notebook);
  }

  public resetNotebook() {
    this._updateStoredNotebook(this._initialValue);
  }
}
