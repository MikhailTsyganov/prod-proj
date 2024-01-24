import { Story } from "@storybook/react";
import { ETheme } from "app/providers/theme";

export const ThemeDecorator = (theme: ETheme) => (Story: Story) => {
  return (
    <div className={`app ${theme}`}><Story/></div>
  )
}