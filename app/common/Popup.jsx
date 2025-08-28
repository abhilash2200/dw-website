"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useMyContext } from "../context/MyContext";
import {
  Alert,
  CircularProgress,
  MenuItem,
  Slide,
  Snackbar,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { usePathname, useSearchParams } from "next/navigation";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupForm() {
  const { api } = useMyContext()
  const { popup, openPopup } = useMyContext();
  const initialData = {
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
  };
  const [openWarningSnackbar, setOpenWarningSnackbar] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [formData, setFormData] = React.useState(initialData);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const url = usePathname();
  const searchParams = useSearchParams();
  const utmSource = searchParams.get("utm_source");

  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const myHeaders = new Headers();
    const username = 'DwCrmApiUser';
    const password = 'DW_CRMApi@32145@#';
    const token = process.env.API_TOKEN_KEY;
    const credentials = btoa(`${username}:${password}`);
    myHeaders.append("KeyToken", `${token}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Basic ${credentials}`);

    const raw = JSON.stringify({
      "FullName": formData.name,
      "EmailId": formData.email,
      "MobileNo": formData.phone,
      "Remarks": "",
      "EnquirySource": "website",
      "Address": formData.location,
      "PostalCode": "",
      "Query": "",
      "EnquiryType": formData.service,
      "UTMSource": utmSource || url,
      "AlternateNo": "",
      "Education": "",
      "InstituteName": "",
      "Position_Applied_For": "",
      "CurrentLocation": "",
      "Preferred_Location": "",
      "Technical_Score": "",
      "TEST_Status": ""
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const res = await fetch(api, requestOptions);
      const result = await res.json();
      /* console.log(result, 'result'); */

      if (result.status == 0) {
        setOpenSnackbar(true);
        setFormMessage(result.message);
        setFormData(initialData);
      } else {
        setOpenWarningSnackbar(true);
        setFormMessage(result.message);
      }
    } catch (e) {
      alert(e.message || 'Somthing went wrong!!!');
    } finally {
      setIsSubmitting(false);
    }


  };


  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleCloseWarningSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenWarningSnackbar(false);
  };


  const handleOpenPopup = React.useCallback(() => {
    openPopup(true);
  }, [openPopup]);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      handleOpenPopup();
    }, 10000);
    return () => clearTimeout(timerId);
  }, [handleOpenPopup]);

  const handleClose = () => {
    openPopup(false);
  };

  const style = {
    '& label': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomColor: "blue",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#b1b1b1",
    },
    "& .MuiInputBase-input": {
      color: "#f0f0f0",
    },
    "& .MuiFormHelperText-root": {
      color: "#b1b1b1",
    },
  }

  const services = [
    { id: 1, name: "Digital Marketing" },
    { id: 2, name: "SEO Services" },
    { id: 3, name: "SMO Services" },
    { id: 4, name: "Website Development" },
    { id: 5, name: "PPC Marketing" },
    { id: 6, name: "Mobile App Development" },
    { id: 7, name: "Logo & Graphic Design" },
    { id: 8, name: "Facebook Ad Services" },
    { id: 9, name: "Content Writing Services" },
    { id: 10, name: "Software Development" },
    { id: 11, name: "Bulk Message Services" },
  ];

  return (
    <React.Fragment>
      <Dialog
        open={popup}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        className="p-0"
      >
        <DialogContent sx={{ padding: 0 }}>
          <div className="absolute top-0 right-0 px-4 pt-2.5 z-[99]">
            <Button
              onClick={handleClose}
              className="bg-[#0000005f] text-white hover:bg-slate-400 rounded-md min-w-[40px] cursor-pointer"
            >
              <Close />
            </Button>
          </div>
          <div className="">
            <div className="w-full pb-3 bg-[#5A53F4]">
              <div className="lg:flex justify-center flex-col h-full">
                <div className="mb-3 bg-[#CBC9FF] py-3 clipPath">
                  <h2 className="font-semibold text-[22px] px-5">Enquiry Now</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="px-5 pb-4">
                    <div className="mb-1 lg:mb-3">
                      <TextField
                        id="name"
                        name='name'
                        type="text"
                        label="Full Name"
                        variant="standard"
                        onChange={handleChangeFormData}
                        value={formData.name}
                        fullWidth
                        sx={style}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-1 lg:mb-3">
                      <TextField
                        id="email"
                        name='email'
                        type="email"
                        label="Email"
                        variant="standard"
                        onChange={handleChangeFormData}
                        value={formData.email}
                        fullWidth
                        sx={style}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-1 lg:mb-3">
                      <TextField
                        id="phone"
                        name='phone'
                        type="text"
                        label="Phone"
                        variant="standard"
                        onChange={handleChangeFormData}
                        value={formData.phone}
                        fullWidth
                        sx={style}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-1 lg:mb-3">
                      <TextField
                        id="location"
                        name='location'
                        type="text"
                        label="Location"
                        variant="standard"
                        onChange={handleChangeFormData}
                        value={formData.location}
                        fullWidth
                        sx={style}
                        required
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-3 lg:mb-6">
                      <TextField
                        id="service"
                        name='service'
                        onChange={handleChangeFormData}
                        value={formData.service}
                        label="Services"
                        variant="standard"
                        fullWidth
                        select
                        sx={style}
                        required
                      >
                        {services.map((val, i) => {
                          return (
                            <MenuItem key={i} value={val.name}>
                              {val.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </div>
                    <div>
                      <button type="submit" className='bg-[#E3E3FF] text-[#11009E] hover:bg-[#11009E] hover:text-white transition duration-500 px-20 py-3 block mx-auto' disabled={isSubmitting}>
                        {isSubmitting ?
                          <>
                            <span className='flex items-center justify-center gap-2'>
                              <CircularProgress size='1rem' />
                              <span>submiting...</span>
                            </span>
                          </>
                          :
                          "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {formMessage}
        </Alert>
      </Snackbar>
      <Snackbar open={openWarningSnackbar} autoHideDuration={6000} onClose={handleCloseWarningSnackbar}>
        <Alert
          onClose={handleCloseWarningSnackbar}
          severity="warning"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {formMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
