import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { RegisterDialog } from './register.dialog';

describe('RegisterDialog', () => {
  let spectator: Spectator<RegisterDialog>;
  const createComponent = createComponentFactory(RegisterDialog);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
