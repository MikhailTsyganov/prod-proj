import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export function mainDecorator(component: ReactNode) {
  return render(
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </BrowserRouter>
  )
}
