import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18nForTests';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { type IStateSchema, StoreProvider } from '@/app/providers/store';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { ETheme } from '@/shared/const/theme';
import ThemeProvider from '@/app/providers/theme/ui/ThemeProvider';
import '@/app/styles/index.scss'

export interface IMainDecoratorOptions {
  route?: string
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  theme?: ETheme
}

interface ITestProvider {
  children: ReactNode
  options?: IMainDecoratorOptions
}

export function TestProvider(props: ITestProvider) {
  const { children, options = {} } = props;

  const { route = '/', initialState, asyncReducers, theme = ETheme.LIGHT } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as IStateSchema} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export function MainDecorator(component: ReactNode, options: IMainDecoratorOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
