import {
  ButtonTextColor,
  ColorAliasPrimary7,
  ColorAliasSuccess,
  ColorAliasNeutral,
  ColorAliasWarning,
  ColorAliasDanger,
} from '@woolf1717/design-tokens';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('pp-alert')
export class Alert extends LitElement {
  static override styles = css`
    :host {
      --sl-color-primary-600: ${unsafeCSS(ColorAliasPrimary7)};
      --sl-color-neutral-700: ${unsafeCSS(ButtonTextColor)};
      --sl-color-success-600: ${unsafeCSS(ColorAliasSuccess)};
      --sl-color-neutral-600: ${unsafeCSS(ColorAliasNeutral)};
      --sl-color-warning-600: ${unsafeCSS(ColorAliasWarning)};
      --sl-color-danger-600: ${unsafeCSS(ColorAliasDanger)};
    }
  `;

  @property({ reflect: true }) variant:
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger'
    | 'text' = 'primary';

  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: Boolean, reflect: true }) closable = false;

  override render() {
    return html`<sl-alert
      variant=${ifDefined(this.variant)}
      ?open=${this.open}
      ?closable=${this.closable}
    >
      <slot></slot>
    </sl-alert> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pp-alert': Alert;
  }
}
