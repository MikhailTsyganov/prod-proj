import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { ETheme } from 'app/providers/theme';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClick = () => {}

export const Primary: Story = {
  args: {
    items: [
      { id: '1', content: <div>text 1</div>, onClick },
      { id: '2', content: <div>text 2</div>, onClick },
      { id: '3', content: <div>text 3</div>, onClick }
    ],
    trigger: <button>CLICK ME</button>
  }
};


import CommentsWithDocument from "@src/components/universal/CommentsWithDocument/CommentsWithDocument";
import ComponentWithDocumentRefuls from "@src/modules/inbox/creation/registration/edit/components/ModalCommentRefusal/ComponentWithDocumentRefuls";
<<<<<<< HEAD
import { RelatedResolutionTask } from "./components/RelatedResolutionTask/RelatedResolutionTask";
=======
import ComponentWithDocumentRefulsContainer from "@src/modules/inbox/creation/registration/edit/components/ModalCommentRefusal/ComponentWithDocumentRefulsContainer";
import ComponentWithDocumentRefulsContainerOutbox from "@src/modules/inbox/creation/registration/edit/components/ModalCommentRefusal/ComponentWithDocumentRefulsContainerOutbox";
>>>>>>> main

// Исходящие. Регистрация документа
const OutboxRegistrationDocumentEdit = () => {
  const { id } = useParams();