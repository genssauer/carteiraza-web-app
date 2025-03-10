import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { SupportPage } from './support.page';

describe('SupportPage', () => {
  let spectator: Spectator<SupportPage>;
  const createComponent = createComponentFactory(SupportPage);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
