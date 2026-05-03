import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient
({ baseURL:"https://vivid-ecommerce-ui9y.vercel.app" });
export const { signIn, signUp, useSession } = authClient;