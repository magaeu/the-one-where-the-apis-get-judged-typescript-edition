import { test, expect } from '../../fixtures/pet.fixture';
import { getPetByIdSchema, petNotFoundSchema } from '../../schemas/pet.schema';
import { Category, Pet, Tag } from '../../types/pet.types';
import { toMatchSchema } from '../../utils/helpers/schema.matcher';

test.describe('Get Pet', {
    tag: '@pet'
}, () => {
    test('the response contains pet data for a valid pet ID', {
        tag: ['@smoke', '@valid-id ']
    }, async ({ petClient }) => {
        const petTestData: Pet = await getPetTestData();

        const createResponse = await petClient.createPet(petTestData);

        const response = await petClient.getPetById(petTestData.id);
        expect(response.status()).toBe(200);
        expect((await toMatchSchema(response, getPetByIdSchema)).pass).toBeTruthy();

        const petJsonResponse = await response.json();
        expect(petJsonResponse.id).toBe(petTestData.id);
    });

    test('the response returns 404 for an invalid pet ID', {
        tag: ['@sanity', '@invalid-id']
    }, async ({ petClient }) => {
        const invalidPetId = "invalid-id"; // Replace with an ID that does not exist
        const response = await petClient.getPetById(invalidPetId as unknown as number);
        
        expect(response.status()).toBe(404);
        expect((await toMatchSchema(response, petNotFoundSchema)).pass).toBeTruthy();
    });
});

async function getPetTestData(): Promise<Pet> {
  const category: Category = {
    id: 1,
    name: 'Dogs'
  };

  const tags: Tag[] = [
    {
      id: 1,
      name: 'tag1'
    },
    {
      id: 2,
      name: 'tag2'
    }
  ];

  const petTestData: Pet = {
    id: 2,
    category: category,
    name: 'doggie',
    photoUrls: ['https://example.com/photo1.jpg'],
    tags: tags,
    status: 'available'
  };

  return petTestData;
}
