import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUser } from "../../redux/admin/reducers/UserReducer";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  getOrderHistoryByAdminAction,
  getUserAction,
  UpdateUserStatusAction,
} from "../../redux/admin/actions/UserAction";
import { Box, Button, Grid, Switch, TextField } from "@mui/material";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";





export default function UserInfo() {
  const { adminUsers, toggle, UserOrderByAdmin } = useSelector(getAdminUser);

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getUserAction())
  }, [toggle]);


  const [inp, setinp] = React.useState("")

  const feetUsers = async e =>{
    try {
      const {data} = await axios.get("http://localhost:5000/api/employee/serch-user" , {
        params : {
          term : inp
        }
      })
      console.log(data)
    } catch (error) {
      
    }
  }

  const debouncevalue = useDebounce(inp , 2000)

  React.useEffect(() => {
        feetUsers()
  }, [debouncevalue])
  
  return (
    <>  

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <TableContainer>
            <TextField  onChange={e=> setinp(e.target.value)}  id="outlined-basic" label="serch User" variant="outlined" />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User _Id</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>User Email</TableCell>
                  <TableCell>User Contact</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>Order History</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminUsers.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>
                      <Switch
                        checked={row.active}
                        onChange={(e) =>
                          dispatch(
                            UpdateUserStatusAction({
                              ...row,
                              active: e.target.checked,
                            })
                          )
                        }
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        onClick={(e) =>
                          dispatch(getOrderHistoryByAdminAction(row._id))
                        }
                        endIcon={<SendIcon />}
                      >
                        Show
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6} md={4}>
          {UserOrderByAdmin &&
             UserOrderByAdmin.map((item) => (
              <>
                
                  <Box >
                  <CardContent > 
                    <p>{item.userId}</p>
                  <Typography gutterBottom variant="h6">
                    Order Id : {item.orderId}{" "}
                    <hr />
                    Order Status : {item.orderStatus}
                    <hr />
                    Payment Status : {item.paymentStatus}
                    <hr />
                    {/* Product name : {item[1].products} */}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button color="error" size="small">
                    {" "}
                    <DeleteForeverIcon />
                    cancele
                  </Button>
                  <Button size="small">xxx</Button>
                </CardActions>
                  </Box>
              </>
            ))}
        </Grid>
      </Grid>

      
    </>
  );
}
