import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui";
import { Plus } from "lucide-react";
import { useCategory } from "@/hooks/useCategory";
import { FormProvider } from "react-hook-form";
import { CategoryForm } from "./Forms/CategoryForm";

export const ButtonCategoriesForm = ({ editData, setEditData }) => {
  const { isDialogOpen, setIsDialogOpen, methods, handleSubmit } = useCategory(
    editData,
    setEditData
  );

  return (
    <div className="flex justify-end mb-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
            <Plus /> Añadir Categoria
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editData ? "Editar Categoria" : "Agregar Nueva Categoria"}
            </DialogTitle>
          </DialogHeader>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit}>
              <CategoryForm />
              <DialogFooter>
                <Button type="submit">Guardar Cambios</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};