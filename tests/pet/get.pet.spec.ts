import { test, expect } from "@playwright/test";


test.describe('Get Pet', () => {
    test('the response contains pet data for a valid pet ID', async ({ request }) => {
        const petId = 1; // Replace with a valid pet ID
        const response = await request.get(`/pet/${petId}`);
        expect(response.status()).toBe(200);
        const pet = await response.json();
        expect(pet.id).toBe(petId);
    });

    test('the response returns 400 for an invalid pet ID', async ({ request }) => {
        const invalidPetId = 'invalid-id'; // Replace with an invalid pet ID
        const response = await request.get(`/pet/${invalidPetId}`);
        expect(response.status()).toBe(400);
    });

    test('the response returns 404 for a non-existent pet', async ({ request }) => {
        const nonExistentPetId = 9999; // Replace with an ID that does not exist
        const response = await request.get(`/pet/${nonExistentPetId}`);
        expect(response.status()).toBe(404);
    });
});