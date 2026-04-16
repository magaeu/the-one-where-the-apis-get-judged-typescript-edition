import test, { APIResponse, APIRequestContext } from "@playwright/test";
import { APIRoutes } from "../../utils/constants/routes";
import { APIClient } from "../../types/api.client.types";
import { getDefaultAPIContext } from "../default.context";

export class PetAPIClient implements APIClient {
    
    constructor(public context: APIRequestContext) {
    }

    async getPetById(petId: number): Promise<APIResponse> {
        const stepName = `Get pet with ID ${petId}`;

        return await test.step(stepName, async () => {
            return await this.context.get(`${APIRoutes.Pet}/${petId}`);
        });
    }
}

export const getPetClient = async (): Promise<PetAPIClient> => {
  const defaultContext = await getDefaultAPIContext();
  return new PetAPIClient(defaultContext);
};
