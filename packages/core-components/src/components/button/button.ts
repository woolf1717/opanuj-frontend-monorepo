import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('pp-button')
export class Button extends LitElement {
  /** The button's theme variant. */
  @property({ reflect: true }) variant:
    | 'default'
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger'
    | 'text' = 'primary';

  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the button in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Draws an outlined button. */
  @property({ type: Boolean, reflect: true }) outline = false;

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /**
   * Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the
   * default slot.
   */
  @property({ type: Boolean, reflect: true }) circle = false;

  /**
   * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
   * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
   */
  @property() type: 'button' | 'submit' | 'reset' = 'button';

  override render() {
    return html`<sl-button
      variant=${ifDefined(this.variant)}
      size=${ifDefined(this.size)}
      type=${ifDefined(this.type)}
      ?disabled=${this.disabled}
      ?loading=${this.loading}
      ?outline=${this.outline}
      ?pill=${this.pill}
      ?circle=${this.circle}
    >
      <slot></slot>
    </sl-button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pp-button': Button;
  }
}
