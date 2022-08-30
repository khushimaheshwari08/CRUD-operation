import { useState, useEffect } from "react";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";

import { Link } from "react-router-dom";

import { getUsers, deleteUser } from "./service/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
          await deleteUser(id); 
          getAllUsers();
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users &&
          users.map((data) => {
            return (
              <TRow>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.username}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    component={Link}
                    to={`/edit/${data.id}`}
                  >
                    Edit
                  </Button>
                  <Button color="secondary" variant="contained" onClick={() => deleteUserData(data.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TRow>
            );
          })}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
