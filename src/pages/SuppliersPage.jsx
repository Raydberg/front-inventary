import { ButtonSupplierForm } from "@/components/ButtonSupplierForm";
import { InputSearch } from "@/components/common/InputSearch";
import { SuppliersTable } from "@/components/Tables/SuppliersTable";
import { TableSkeleton } from "@/components/common/TableSkeleton";
import { useSupplier } from "@/hooks/useSupplier";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";

export const SuppliersPage = () => {
  const { suppliers, isLoading } = useSupplier();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(suppliers)
  // const { itemFilter } = getFilter(suppliers, searchTerm);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between ">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonSupplierForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <SuppliersTable
          suppliers={suppliers }
          setEditData={setEditData}
        />
      )}
    </div>
  );
};
