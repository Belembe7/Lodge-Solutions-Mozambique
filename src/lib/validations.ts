import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(80, "Nome demasiado longo"),
  email: z.string().email("Indique um email válido"),
  phone: z
    .string()
    .min(8, "Indique um telefone válido")
    .max(20, "Telefone demasiado longo"),
  subject: z
    .string()
    .min(3, "O assunto deve ter pelo menos 3 caracteres")
    .max(120, "Assunto demasiado longo"),
  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem demasiado longa"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
