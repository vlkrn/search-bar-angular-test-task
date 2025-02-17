import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, model, ModelSignal, signal, ViewChild, WritableSignal } from '@angular/core';
import { SearchHistoryComponent } from "./search-history/search-history.component";
import { SearchOptionsComponent } from "./search-options/search-options.component";
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { SearchOptionFormValues } from './search-options/search-options.types';

@Component({
    selector: 'app-search',
    imports: [CommonModule, SearchHistoryComponent, SearchOptionsComponent, IconButtonComponent],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
    @ViewChild('searchBlock') searchBlock!: ElementRef;

    readonly isOpenSearch: ModelSignal<boolean> = model<boolean>(false); 
    protected readonly isOpenSettings: WritableSignal<boolean> = signal<boolean>(false);

    protected readonly options: WritableSignal<SearchOptionFormValues | null> = signal<SearchOptionFormValues | null>(null);

    protected readonly historyList: string[] = ['закрепить теги', 'кнопка', 'приложение', 'форма', 'текстовое поле', 'выпадающий список'];

    protected changeSearchVisibility(isVisible: boolean): void {
        this.isOpenSearch.set(isVisible);
    }

    @HostListener('document:click', ['$event'])
    handleClickOutsideSearch(event: Event): void {
        const targetElement = this.searchBlock?.nativeElement;

        if (targetElement?.contains(event.target)) {
            this.isOpenSettings.set(true);
        } else {
            this.isOpenSettings.set(false);
        }
    }
}
