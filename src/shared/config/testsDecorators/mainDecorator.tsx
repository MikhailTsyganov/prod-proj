import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18nForTests';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { type IStateSchema, StoreProvider } from 'app/providers/store';

export interface IMainDecoratorOptions {
  route?: string
  initialState?: DeepPartial<IStateSchema>
}

export function MainDecorator(component: ReactNode, options: IMainDecoratorOptions = {}) {
  const { route = '/', initialState } = options;

  return render(

    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as IStateSchema}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>

  )
}
