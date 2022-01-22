import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotebookViewModel } from 'src/app/models/notebook.viewmodel';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() public vm!: NotebookViewModel;
}
