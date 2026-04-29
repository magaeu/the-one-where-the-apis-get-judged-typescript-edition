import { PetBuilder } from '@data-generator/pet.builder';
import { test, expect } from '@fixtures/pet.fixture';
import { createdPetSchema } from '@schemas/pet.schema';
import { toMatchSchema } from '@utils/helpers/schema.matcher';

test.describe(
    'Create Pet',
    {
        tag: '@pet',
    },
    () => {
        test(
            'the response contains pet data for a valid pet data',
            {
                tag: ['@smoke', '@valid-data '],
            },
            async ({ petClient }) => {
                const petTestData = new PetBuilder().build();
                const response = await petClient.createPet(petTestData);

                expect(response.status()).toBe(200);
                expect(
                    (await toMatchSchema(response, createdPetSchema)).pass
                ).toBeTruthy();

                const petJsonResponse = await response.json();
                expect(petJsonResponse.id).toBe(petTestData.id);
            }
        );
    }
);
