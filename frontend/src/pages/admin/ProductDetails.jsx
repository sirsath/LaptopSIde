import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminGetAllProductAction,
  deleteProductAction,
  updateProductAction,
  updateProductImagesAction,
} from "../../redux/admin/actions/productAction";
import { getAdminProducts } from "../../redux/admin/reducers/productReducer";
import { URL } from "../../redux/api";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ProductDetails() {
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(true);
  const [editData, seteditData] = useState();
  const [editImage, setEditImage] = useState([]);

  const {
    adminProduct,
    loading,
    adminProductsError,
    productUpdated,
    productDeleted,
    toggle,
  } = useSelector(getAdminProducts);

  const dispatch = useDispatch();
  
 



  useEffect(() => {
    dispatch(adminGetAllProductAction());
  }, [productUpdated, productDeleted, toggle]);

  if (adminProduct && adminProduct.length === 0) {
    return `<h1>No Products Found</h1>`;
  }
  if (loading) {
    return <CircularProgress />;
  }
  if (adminProductsError) {
    return <Alert variant="error">{adminProductsError}</Alert>;
  }

  // const handleImage = () => {
  //   const fd = new FormData()

  //   for (let i of editImage) {
  //     fd.append("image", i)
  //   }
  //   for (let i of fd.entries()) {
  //     console.log(i);
  //   }
  //   dispatch(updateProductImagesAction(editData, fd))
  // };

  const handelupdate = () => {
    const fd = new FormData();
    fd.append("name", editData.name);
    fd.append("brand", editData.brand);
    fd.append("category", editData.category);
    fd.append("desc", editData.desc);
    fd.append("price", editData.price);
    fd.append("stock", editData.stock);
    fd.append("publish", editData.publish);

    for (let i of editImage) {
      fd.append("image", i);
    }
    for (let i of fd.entries()) {
      console.log(i, "Update data")
    }
    dispatch(updateProductAction( editData , fd))
  };
  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px", marginLeft: "50px" }}>
      <Grid container spacing={2}>
        {adminProduct &&
          adminProduct.map((item) => (
            <Grid xs={4} key={item._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="194"
                  image={`${URL}/${item.image[0]}`}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="green">
                    ₹{item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
              <Button
                onClick={(e) => {
                  seteditData(item);
                  handleOpen();
                }}
              >
                edit
              </Button>
              <Button onClick={(e) => dispatch(deleteProductAction(item._id))}>
                delete
              </Button>
            </Grid>
          ))}
      </Grid>

      {editData && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container
              sx={{ bgcolor: "secondary" }}
              component="main"
              maxWidth="xs"
            >
              <CssBaseline />
              <Box
                sx={{
                  bgcolor: "danger",
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontFamily: "revert-layer",
                }}
              >
                <Typography component="h1" variant="h4">
                  Add Product
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        color="secondary"
                        fullWidth
                        value={editData.name}
                        onChange={(e) =>
                          seteditData({ ...editData, name: e.target.value })
                        }
                        id="name"
                        label="Product Name"
                        name="name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        color="secondary"
                        fullWidth
                        name="brand"
                        value={editData.brand}
                        onChange={(e) =>
                          seteditData({ ...editData, brand: e.target.value })
                        }
                        label="Name Brand"
                        type="text"
                        id="brand"
                        // autoComplete="family-name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <InputLabel id="demo-simple-select-label">
                        Select Category*
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="category"
                        fullWidth
                        name="category"
                        value={editData.category}
                        onChange={(e) =>
                          seteditData({ ...editData, category: e.target.value })
                        }
                        type="text"
                      >
                        <MenuItem value={"cloths"}>cloths</MenuItem>
                        <MenuItem value={"electronics"}>electronics</MenuItem>
                        <MenuItem value={"gadgets"}>gadgets</MenuItem>
                        <MenuItem value={"footware"}>footware</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        color="success"
                        fullWidth
                        name="desc"
                        value={editData.desc}
                        onChange={(e) =>
                          seteditData({ ...editData, desc: e.target.value })
                        }
                        label="desc"
                        type="text"
                        id="desc"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        color="warning"
                        fullWidth
                        name="price"
                        value={editData.price}
                        onChange={(e) =>
                          seteditData({ ...editData, price: e.target.value })
                        }
                        label="price"
                        type="text"
                        id="price"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        color="secondary"
                        fullWidth
                        name="stock"
                        value={editData.stock}
                        onChange={(e) =>
                          seteditData({ ...editData, stock: e.target.value })
                        }
                        label="stock"
                        type="number"
                        id="stock"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        multiple
                        type="file"
                        class="form-control"
                        id="image"
                        placeholder="Enter Your name"
                        onChange={(e) => setEditImage(e.target.files)}
                      />
                      {/* <Button onClick={(e) => handleImage()}>Edit Image</Button> */}
                    </Grid>
                    <Grid item xs={12}>
                      IsPublish :
                      <Switch
                        checked={editData.publish}
                        onChange={(e) =>
                          seteditData({
                            ...editData,
                            publish: e.target.checked,
                          })
                        }
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={ e => {handelupdate()
                      handleClose()}   
                    }
                  >
                    update Product
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
