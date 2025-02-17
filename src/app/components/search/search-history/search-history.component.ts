import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-search-history',
    imports: [],
    templateUrl: './search-history.component.html',
    styleUrl: './search-history.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHistoryComponent {
    readonly list: InputSignal<string[]> = input.required<string[]>();
}
