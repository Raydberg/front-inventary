import { schema } from "@/lib/zod-validations/dataFormSchema";
import { usePersonnelStore } from "@/stores/usePersonnelStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const usePersonnel = (editData, setEditData) => {
  const personal = usePersonnelStore((state) => state.personal);
  const addPersonal = usePersonnelStore((state) => state.addPersonal);
  const editPersonal = usePersonnelStore((state) => state.editPersonal);
  const deletePersonal = usePersonnelStore((state) => state.deletePersonal);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const { setValue, handleSubmit, reset } = methods;

  useEffect(() => {
    if (editData) {
      setValue("name", editData.name);
      setValue("dni", editData.dni);
      setValue("email", editData.email);
      setValue("phone", editData.phone);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

  const onSubmit = (data) => {
    if (editData) {
      editPersonal({ ...data, id: editData.id });
      setEditData(null);
    } else {
      addPersonal({ ...data, id: Date.now() });
    }
    reset();
    setIsDialogOpen(false);
  };
  return {
    addPersonal,
    editPersonal,
    personal,
    deletePersonal,
    onSubmit,
    isDialogOpen,
    setIsDialogOpen,
    methods,
    handleSubmit: handleSubmit(onSubmit),
  };
};