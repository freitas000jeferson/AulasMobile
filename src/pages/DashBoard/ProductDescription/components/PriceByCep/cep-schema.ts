import { z } from "zod";

export const CepSchema = z.object({
  cep: z.string(),
});

export type CepForm = z.infer<typeof CepSchema>;
