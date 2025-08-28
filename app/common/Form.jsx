'use client'
import React, { useState } from 'react'
import { Button, CircularProgress, colors, MenuItem, TextField } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useMyContext } from '../context/MyContext';
import { usePathname, useSearchParams } from 'next/navigation';

function Form() {
    const {api} = useMyContext() 
    const initialData = {
      name: '',
      phone:'',
      email: '',
      location:'',
      service:'',
    }

    const [openWarningSnackbar, setOpenWarningSnackbar] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [formData, setFormData] = useState(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const url = usePathname();
    const searchParams = useSearchParams();
    const utmSource = searchParams.get("utm_source");
    
    const handleChange = (e) => {
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

    try{
        const res = await fetch(api, requestOptions);
        const result = await res.json();
        
        if(result.status == 0){
            setOpenSnackbar(true);
            setFormMessage(result.message);
            setFormData(initialData);
        }else{
            setOpenWarningSnackbar(true);
            setFormMessage(result.message);
        }
    }catch(e){
        alert(e.message || 'Somthing went wrong!!!');
    }finally{
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
            color: "#f0f0f0", // Input text color
            },
            "& .MuiFormHelperText-root": {
            color: "#b1b1b1", // Helper text color
            },
            marginBottom:'10px'
    }

    const services = [
        { id:1, name: 'Digital Marketing'},
        { id:2, name: 'SEO Services'},
        { id:3, name: 'SMO Services'},
        { id:4, name: 'Website Development'},
        { id:5, name: 'PPC Marketing'},
        { id:6, name: 'Mobile App Development'},
        { id:7, name: 'Logo & Graphic Design'},
        { id:8, name: 'Facebook Ad Services'},
        { id:9, name: 'Content Writing Services'},
        { id:10, name: 'Software Development'},
        { id:11, name: 'Bulk Message Services'},
    ]
  return (
    <div className='bg-[#5A53F4]'>
        <div className='mb-3 bg-[#CBC9FF] py-3 clipPath'>
            <p className='font-semibold text-[23px] text-center'>Enquiry Form</p>
        </div>
        <div className='px-8 pb-12 pt-4'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap'>
                    <div className='mb-1 w-full px-2'>
                        <TextField 
                            fullWidth 
                            id="name" 
                            label="Name" 
                            type='text' 
                            name='name' 
                            value={formData.name}
                            onChange={handleChange}
                            variant="standard" 
                            sx={style} 
                            required
                        />
                    </div>
                    <div className='mb-1 w-full lg:w-[40%] px-2'>
                        <TextField 
                            fullWidth 
                            id="phone" 
                            label="Phone Number" 
                            type='text' 
                            name='phone' 
                            value={formData.phone}
                            onChange={handleChange}
                            variant="standard" 
                            sx={style} 
                            inputProps={{
                                maxLength: 10,
                            }}
                            required
                        />
                    </div>
                    <div className='mb-1 w-full lg:w-[60%] px-2'>
                        <TextField 
                            fullWidth 
                            id="email" 
                            label="Email Id" 
                            type='email' 
                            name='email' 
                            value={formData.email}
                            onChange={handleChange}
                            variant="standard"
                            sx={style} 
                            required
                        />
                    </div>
                    <div className='mb-1 w-full px-2'>
                        <TextField 
                            fullWidth 
                            id="location" 
                            label="Location" 
                            type='text' 
                            name='location' 
                            value={formData.location}
                            onChange={handleChange}
                            variant="standard"
                            sx={style} 
                            required
                        />
                    </div>
                    <div className='mb-1 w-full px-2'>
                        <TextField
                            id="services"
                            select
                            fullWidth
                            label="Services"
                            name='service'
                            value={formData.service}
                            onChange={handleChange}
                            variant="standard"
                            helperText="Please select interested Service"
                            sx={style}
                            required
                            >
                            {
                                services.map((val,i)=>{
                                    return(
                                        <MenuItem key={i} value={val.name}>
                                            {val.name}
                                        </MenuItem>
                                    )
                                })
                            }
                        </TextField>
                    </div>
                </div>
                <div className='mb-1'>
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
            </form>
        </div>
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
    </div>
  )
}

export default Form