import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { BaseLayout } from './base.layout';

describe('BaseLayout', () => {
  let spectator: Spectator<BaseLayout>;
  const createComponent = createComponentFactory(BaseLayout);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
