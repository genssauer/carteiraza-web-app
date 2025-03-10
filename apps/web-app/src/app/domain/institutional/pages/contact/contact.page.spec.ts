import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { ContactPage } from './contact.page';

describe('ContactPage', () => {
  let spectator: Spectator<ContactPage>;
  const createComponent = createComponentFactory(ContactPage);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
