import test, { APIResponse, APIRequestContext } from "@playwright/test";
import { APIRoutes } from "../../utils/constants/routes";
import { APIClient } from "../../types/api.client.types";
import { getDefaultAPIContext } from "../default.context";
import { Pet } from "../../types/pet.types";

export class PetAPIClient implements APIClient {
    
    constructor(public context: APIRequestContext) {
    }

    async getPetById(petId: number): Promise<APIResponse> {
        const stepName = `Get pet with ID ${petId}`;

        return await test.step(stepName, async () => {
            return await this.context.get(`${APIRoutes.Pet}/${petId}`);
        });
    }

    async createPet(petData: object): Promise<APIResponse> {
        const stepName = `Create a new pet with data: ${JSON.stringify(petData)}`;

        return await test.step(stepName, async () => {
            return await this.context.post(APIRoutes.Pet, {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(petData),
            });
        });
    }
}

export const getPetClient = async (): Promise<PetAPIClient> => {
  const defaultContext = await getDefaultAPIContext();
  return new PetAPIClient(defaultContext);
};
