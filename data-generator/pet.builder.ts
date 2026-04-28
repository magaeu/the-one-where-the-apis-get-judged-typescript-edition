import { Category, Pet, Tag } from "../types/pet.types";
import { faker } from '@faker-js/faker';

export class PetBuilder {
    private pet: Pet;

    public constructor() {
        this.pet = {
            id: this.generateId(),
            category: this.generateCategory(),
            name: this.generateName(),
            photoUrls: this.generatePhotoUrls(),
            tags: this.generateTags(),
            status: this.generateStatus()
        }
    }

    build(): Pet{
        return this.pet;
    }

    private generateId(): number {
        return faker.number.int({ min: 1, max: 50 });
    }

    private generateCategory(): Category {
        const id = faker.number.int({ min: 1, max: 50 });
        const name = faker.string.alpha({ length: { min: 3, max: 10 } });

        const category: Category = {
            id: id,
            name: name
        }

        return category;
    }

    private generateName(): string {
        return faker.string.alpha({ length: { min: 3, max: 10 } });
    }

    private generatePhotoUrls(): string[] {
        const photoUrl = faker.image.url();
        const photos: string[] = [photoUrl];

        return photos;
    }

    private generateTags(): Tag[] {
        const id = faker.number.int({ min: 1, max: 50 });
        const name = faker.string.alpha({ length: { min: 3, max: 10 } });
        const tags: Tag[] = [{
            id: id,
            name: name
        }];

        return tags;
    }


    private generateStatus() {
        const numberChoice = faker.number.int({ min: 1, max: 3 });

        return getStatus(numberChoice);
    }
}

function getStatus(status: number) {
    switch (status) {
        case 1:
            return 'available';
        case 2:
            return 'pending';
        case 3:
            return 'sold'; 
    }
}