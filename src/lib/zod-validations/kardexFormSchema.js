import { z } from "zod";

export const kardexFormSchema = z.object({
  id: z.number().int(),
  product: z.string().min(1, "Producto es requerido"),
  tipoTransacction: z.enum(["entrada", "salida"]),
  count: z.number().int().positive(),
  description: z.string().min(1, "Descripción es requerida"),
  userId: z.number().int(),
  expirationDate: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Formato de fecha inválido" }
  ),
  supplierId: z.number().int(),
  time: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Formato de fecha inválido" }
  ),
});