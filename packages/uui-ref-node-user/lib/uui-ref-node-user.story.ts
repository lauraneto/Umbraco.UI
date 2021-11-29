import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { ArrayOfUmbracoWords } from '../../../src/helper/UmbracoWordGenerator';
import './index';

export default {
  id: 'uui-ref-node-user',
  title: 'Displays/References/User',
  component: 'uui-ref-node-user',
};

const Template: Story = props => html`
  <div style="max-width: 420px;">
    <uui-ref-node-user
      name="${props.name}"
      icon="${props.icon}"
      group-name="${props.groupName}"
      ?selectable=${props.selectable}
      ?error=${props.error}
      ?disabled=${props.disabled}>
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-user>
  </div>
`;

export const AAAOverview = Template.bind({});
AAAOverview.args = {
  name: 'Arnold Edits',
  icon: 'bug',
  groupName: 'Editor, Translator',
};
AAAOverview.storyName = 'Overview';
AAAOverview.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-user
  name="Arnold Edits"
  icon="bug"
  group-name="Editor, Translator">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-user>
    `,
    },
  },
};

export const Border: Story = () => html`
  <div style="max-width: 420px;">
    <uui-ref-node-user
      border
      name="Arnold Edits"
      icon="bug"
      group-name="Editor, Translator">
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-user>
  </div>
`;

Border.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-user
  border
  name="Arnold Edits"
  icon="bug"
  group-name="Editor, Translator">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-user>
    `,
    },
  },
};

export const Selectable: Story = props => html`
  <div style="max-width: 420px;">
    <uui-ref-node-user
      ?selectable="${props.selectable}"
      name="Arnold Edits"
      icon="bug"
      group-name="Editor, Translator">
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-user>
  </div>
`;

Selectable.args = {
  selectable: true,
};

Selectable.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-user
  selectable
  name="Arnold Edits"
  icon="bug"
  group-name="Editor, Translator">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-user>
    `,
    },
  },
};

export const Disabled: Story = props => html`
  <div style="max-width: 420px;">
    <uui-ref-node-user
      ?disabled="${props.disabled}"
      name="Arnold Edits"
      icon="bug"
      group-name="Editor, Translator">
      <uui-action-bar slot="actions">
        <uui-button label="Remove">Remove</uui-button>
      </uui-action-bar>
    </uui-ref-node-user>
  </div>
`;

Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-node-user
  disabled
  name="Arnold Edits"
  icon="bug"
  group-name="Editor, Translator">
  <uui-action-bar slot="actions">
    <uui-button label="Remove">Remove</uui-button>
  </uui-action-bar>
</uui-ref-node-user>
    `,
    },
  },
};

const listOfNodeNames: string[] = ArrayOfUmbracoWords(10);
export const Listed: Story = () => html`
  <uui-ref-list style="max-width: 420px;">
    ${listOfNodeNames.map(
      name => html`<uui-ref-node-user
        name=${name}
        icon="bug"
        group-name="Group name">
        <uui-action-bar slot="actions">
          <uui-button label="Remove">Remove</uui-button>
        </uui-action-bar>
      </uui-ref-node-user>`
    )}
  </uui-ref-list>
`;

Listed.parameters = {
  docs: {
    source: {
      code: `
<uui-ref-list>
  
  <uui-ref-node-user name="User 1" icon="bug" group-name="Group name">
    <uui-action-bar slot="actions">
      <uui-button label="Remove">Remove</uui-button>
    </uui-action-bar>
  </uui-ref-node-user>

  <uui-ref-node-user name="User 2" icon="bug" group-name="Group name">
    <uui-action-bar slot="actions">
      <uui-button label="Remove">Remove</uui-button>
    </uui-action-bar>
  </uui-ref-node-user>

  <uui-ref-node-user name="User 3" icon="bug" group-name="Group name">
    <uui-action-bar slot="actions">
      <uui-button label="Remove">Remove</uui-button>
    </uui-action-bar>
  </uui-ref-node-user>

</uui-ref-list>
    `,
    },
  },
};
