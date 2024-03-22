import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  { field: "login", headerName: "Login", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    login: "Papacita",
    email: "1@mail.ru",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    login: "Psina",
    email: "2@mail.ru",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    login: "Bitum",
    email: "3@mail.ru",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    login: "Kolyan",
    email: "4@mail.ru",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    login: "Mom",
    email: "5@mail.ru",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    login: "Shtanga",
    email: "6@mail.ru",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    login: "Qwerty",
    email: "7@mail.ru",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    login: "Jeep",
    email: "8@mail.ru",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    login: "Pes",
    email: "9@mail.ru",
  },
];

export default function DataTable() {
  return (
    <div className="datatable">
      <DataGrid
        className="data"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
