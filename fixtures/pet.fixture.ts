import { test as base } from '@playwright/test';
import { getPetClient, PetAPIClient } from '../api/pet/pet.api';

export type PetFixture = {
  petClient: PetAPIClient;
};

export const test = base.extend<PetFixture>({
  petClient: async ({ }, use) => {
    const defaultContext = await getPetClient();
    const petClient = new PetAPIClient(defaultContext.context);

    await use(petClient);
    await defaultContext.context.dispose();
  }
});

export { expect } from '@playwright/test';