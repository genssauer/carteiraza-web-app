import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let spectator: SpectatorService<LoadingService>;
  const createService = createServiceFactory(LoadingService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
