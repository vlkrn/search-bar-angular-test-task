import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'button[icon-button]',
    imports: [],
    templateUrl: './icon-button.component.html',
    styleUrl: './icon-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent { }
