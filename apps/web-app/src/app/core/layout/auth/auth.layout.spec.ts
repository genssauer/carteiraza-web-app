import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AuthLayout } from './auth.layout';

describe('AuthLayout', () => {
  let spectator: Spectator<AuthLayout>;
  const createComponent = createComponentFactory(AuthLayout);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
