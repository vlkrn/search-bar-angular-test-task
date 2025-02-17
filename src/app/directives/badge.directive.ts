import { Directive, ElementRef, inject, input, InputSignal, OnChanges, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBadge]',
})
export class BadgeDirective implements OnChanges {
    private readonly el: ElementRef = inject(ElementRef);
    private readonly renderer: Renderer2 = inject(Renderer2);

    readonly appBadge: InputSignal<string | number | null> = input<string | number | null>(null);
    readonly badgeColor: InputSignal<string> = input<string>('rgb(204, 25, 16)');

    ngOnChanges(): void {
        const parent = this.el.nativeElement;
        const existingBadge = parent.querySelector('.badge');
        if (existingBadge) {
            this.renderer.removeChild(parent, existingBadge);
        }

        if (this.appBadge() !== null && this.appBadge() !== undefined) {
            const badge = this.renderer.createElement('span');
            this.renderer.addClass(badge, 'badge');
            this.renderer.setStyle(badge, 'position', 'absolute');
            this.renderer.setStyle(badge, 'top', '0px');
            this.renderer.setStyle(badge, 'right', '0px');
            this.renderer.setStyle(badge, 'background-color', this.badgeColor());
            this.renderer.setStyle(badge, 'color', 'rgb(255, 255, 255)');
            this.renderer.setStyle(badge, 'border-radius', '100px');
            this.renderer.setStyle(badge, 'padding', '0px 4px');
            this.renderer.setStyle(badge, 'font-size', '11px');
            this.renderer.setStyle(badge, 'font-weight', '500');
            this.renderer.setStyle(badge, 'line-height', '14px');
            this.renderer.setStyle(badge, 'letter-spacing', '0.001em');
            this.renderer.setStyle(badge, 'border', '1px solid rgb(16, 116, 204)');


            const badgeText = this.appBadge();
            if (badgeText !== null) {
            const text = this.renderer.createText(badgeText.toString());
            this.renderer.appendChild(badge, text);

            this.renderer.setStyle(parent, 'position', 'relative');
            this.renderer.appendChild(parent, badge);
            }
        }
    }
}