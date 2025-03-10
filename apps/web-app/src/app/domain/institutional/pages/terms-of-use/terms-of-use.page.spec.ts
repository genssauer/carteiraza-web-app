import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { TermsOfUsePage } from './terms-of-use.page';

describe('TermsOfUsePage', () => {
  let spectator: Spectator<TermsOfUsePage>;
  const createComponent = createComponentFactory(TermsOfUsePage);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
