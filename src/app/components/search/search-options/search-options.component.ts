import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { SearchOptionForm, SearchOptionFormValues } from './search-options.types';
import {
    takeUntilDestroyed,
} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-search-options',
    imports: [ReactiveFormsModule],
    templateUrl: './search-options.component.html',
    styleUrl: './search-options.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOptionsComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    readonly optionsChanged = output<SearchOptionFormValues>();

    protected readonly formGroup: FormGroup<SearchOptionForm> = new FormGroup<SearchOptionForm>({
        authorName: new FormControl<string>('', { nonNullable: true }),
        isParticipant: new FormControl<boolean>(false, { nonNullable: true }),
        strictSearch: new FormControl<boolean>(false, { nonNullable: true }),
        inTitles: new FormControl<boolean>(false, { nonNullable: true }),
        tags: new FormControl<boolean>(false, { nonNullable: true }),
        requests: new FormControl<boolean>(false, { nonNullable: true }),
        contacts: new FormControl<boolean>(false, { nonNullable: true }),
    });

    ngOnInit(): void {
        this.formGroup.valueChanges.pipe(
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((value) => {
            this.optionsChanged.emit(value);
        });
    }
}
