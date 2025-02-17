import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal, WritableSignal } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { SearchComponent } from "../search/search.component";
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { BadgeDirective } from '../../directives/badge.directive';

@Component({
    selector: 'app-header',
    imports: [CommonModule, MenuComponent, SearchComponent, IconButtonComponent, BadgeDirective],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    private readonly elementRef: ElementRef = inject(ElementRef);
    protected readonly isSearchOpened: WritableSignal<boolean> = signal<boolean>(false);
    protected readonly isMobileMenuOpen: WritableSignal<boolean> = signal<boolean>(false);

    @HostListener('document:click', ['$event'])
    handleClickOutsideSearch(event: Event): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isSearchOpened.set(false);
        }
    }

    protected toggleSearch(): void {
        this.isSearchOpened.update((prevValue) => !prevValue);
    }
}
