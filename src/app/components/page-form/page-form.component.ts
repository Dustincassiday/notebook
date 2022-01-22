import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageFormComponent implements OnChanges {
  @Input() public entry!: string;
  @Output() public entryUpdate = new EventEmitter<string>();

  public form!: FormGroup;

  public ngOnChanges(): void {
    this.form = this._buildForm(this.entry);
  }

  private _buildForm(entry: string): FormGroup {
    return new FormGroup({
      entry: new FormControl(entry, []),
    });
  }
}
