import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ETheme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybookDecorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybookDecorators/StoreDecorator';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import avatar from '@/shared/assets/tests/storybook.jpeg'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  firstname: 'Mike',
  lastname: 'Tsyganov',
  age: 26,
  currency: ECurrency.USD,
  country: ECountry.Belarus,
  city: 'Tbilisi',
  username: 'FFir3',
  avatar
}

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        currentDataForm: data
      }
    })
  ]
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(ETheme.DARK),
    StoreDecorator({
      profile: {
        currentDataForm: data
      }
    })
  ]
};
