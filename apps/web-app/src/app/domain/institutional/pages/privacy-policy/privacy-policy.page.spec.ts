import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { PrivacyPolicyPage } from './privacy-policy.page';

describe('PrivacyPolicyPage', () => {
  let spectator: Spectator<PrivacyPolicyPage>;
  const createComponent = createComponentFactory(PrivacyPolicyPage);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
