import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { LoginDialog } from './login.dialog';

describe('LoginDialog', () => {
  let spectator: Spectator<LoginDialog>;
  const createComponent = createComponentFactory(LoginDialog);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
