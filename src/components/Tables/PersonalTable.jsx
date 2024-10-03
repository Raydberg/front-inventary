import { SquarePen, Trash2 } from "lucide-react";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import { usePersonnel } from "@/hooks/usePersonnel";

export const TableInformation = ({ personal, setEditData }) => {
  const { deletePersonal } = usePersonnel();
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow className='text-center'>
            <TableHead>Nombre</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Telefono</TableHead>
            <TableHead >Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {personal.map((person) => (
            <TableRow key={person.id}>
              <TableCell >{person.name}</TableCell>
              <TableCell >{person.dni}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.phone}</TableCell>
              <TableCell className="text-center">
                <Button
                  className=""
                  variant="outline"
                  onClick={() => setEditData(person)}
                >
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => deletePersonal(person.id)}
                >
                  <Trash2 color="red" />
                  <span className="hidden sm:inline">Eliminar</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};