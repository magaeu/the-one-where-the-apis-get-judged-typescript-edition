import { request } from '@playwright/test';

export const getDefaultAPIContext = async () => {
  let extraHeaders: Record<string, string> = {
    'Accept': 'application/json',
  };

  return await request.newContext({
    baseURL: process.env.API_URL,
    extraHTTPHeaders: extraHeaders
  });
};