import { UUIRefNodeElement } from '@umbraco-ui/uui-ref-node/lib';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

/**
 *  @element uui-ref-node-user
 *  @fires {UUIRefEvent} open - fires when the ref title is clicked
 *  @fires {UUIRefEvent} selected - fires when the ref is selected
 *  @fires {UUIRefEvent} unselected - fires when the ref is unselected
 *  @description - Component for displaying a reference to a user node.
 */

export class UUIRefNodeUserElement extends UUIRefNodeElement {
  static styles = [...UUIRefNodeElement.styles];

  protected fallbackIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.135 98.375c3.677 14.798 4.045 16.031 3.702 31.225-.138 5.855-3.5 32.936-2.586 41.242.751 6.851 2.46 7.395 5.162 13.041 4.705 9.824 3.13 23.376 1.325 33.282-.988 5.42-3.076 13.136-6.248 17.561-3.497 4.876-10.498 4.913-13.592 10.602-4.459 8.195-1.941 19.692-4.752 28.54-3.193 10.033-11.325 10.738-11.938 23.867 3.986.562 7.962 1.134 11.938 1.703 3.99 8.484 11.297 25.552 18.759 30.688 6.25 1.705 12.505 3.411 18.752 5.113 21.907 8.982 46.251 19.732 68.204 28.987 19.991 8.434 43.927 11.439 51.151 32.396 0 14.229 1.343 47.849.976 66.497H36.514c-.367-18.648.974-52.268.974-66.497 7.226-20.957 31.16-23.963 51.151-32.396 21.953-9.255 46.297-20.005 68.201-28.987 6.25-1.702 12.506-3.408 18.754-5.113 7.461-5.136 14.77-22.203 18.76-30.688l8.877-2.158c-2.017-11.206-8.954-12.078-11.845-20.01a91882.59 91882.59 0 00-3.408-35.806c.055.563-8.163-1.497-9.238-2.171-11.58-7.256-11.816-36.723-12.931-48.978-.508-5.603 7.283-10.193 5.118-20.465-12.69-60.138 5.486-88.282 34.229-97.614 19.95-8.083 57.198-23.074 91.941-1.703l8.621 7.991 13.952 2.405c7 4.041 11.465 17.446 11.465 17.446z"></path></svg>';

  /**
   * Group name
   * @type {string}
   * @attr
   * @default ''
   */
  @property({ type: String, attribute: 'group-name' })
  groupName = '';

  protected renderDetail() {
    const details: string[] = [];
    if (this.detail !== '') {
      details.push(this.detail);
    }
    if (this.groupName !== '') {
      details.push(this.groupName);
    }
    return html`<small id="detail"
      >${details.join(' | ')}<slot name="detail"></slot
    ></small>`;
  }
}
