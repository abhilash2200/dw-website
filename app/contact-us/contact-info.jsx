"use client"
import React, { useState } from "react";
import SubHeading from "../common/sub-heading";
import { Button, CircularProgress, MenuItem, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useMyContext } from "../context/MyContext";
import { usePathname, useSearchParams } from "next/navigation";

function ContactInfo() {
    const {api} = useMyContext() 
    const initialData = {
        name: '',
        phone: '',
        email: '',
        location: '',
        service: '',
        message:'',
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
            "Query": formData.message,
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

    const style = {
        "& .MuiInputBase-input": {
            color: "white", // Text color inside the input
          },
        "& .MuiInputLabel-root": {
            color: "white",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Label color when focused
        },
        "& .MuiInputLabel-root.Mui-error": {
            color: "red", // Label color when there's an error
        },
        "& .MuiOutlinedInput-root": {
            color:"#FFF"
        },
        "& .MuiInputLabel-outlined": {
            color:'#FFF'
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white", // Default border color
            },
            "&:hover fieldset": {
                borderColor: "gray", // Border color on hover
            },
            "&.Mui-focused fieldset": {
                borderColor: "white", // Border color when focused
            },
        }
    }

    return (
        <div className="container mx-auto px-5 my-20">
            <SubHeading text="Contact Us" />
            <div className="pt-6">
                <div className="flex flex-wrap justify-between gap-y-5">
                    <div className="w-[100%] lg:w-[45%]">
                        <div className="flex justify-center flex-col h-full">
                            <div>
                                <p className="border-b-[2px] border-black w-20 font-semibold">
                                    Address
                                </p>
                                <div className="flex justify-start items-start my-4 gap-3">
                                    <LocationOnIcon className="text-[#11009E]" />
                                    <p className="">
                                        22/263, Jodhpur Park, Tagore Park Road,<br className="hidden lg:block"/> Kolkata, West Bengal
                                        700045
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="border-b-[2px] border-black w-20 font-semibold">
                                    Call
                                </p>
                                <div className="flex justify-start items-center my-4 gap-3">
                                    <CallIcon className="text-[#11009E]" />
                                    <Link href="tel:+917003659978">+91 7003659978</Link>
                                </div>
                            </div>
                            <div>
                                <p className="border-b-[2px] border-black w-20 font-semibold">
                                    Mail
                                </p>
                                <div className="flex justify-start items-center my-4 gap-3">
                                    <EmailIcon className="text-[#11009E]" />
                                    <Link href="mailto:marketing@digitalwolf.co.in">
                                        marketing@digitalwolf.co.in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[5%]">
                        <div className="h-full w-[1px] bg-black hidden lg:block"></div>
                    </div>
                    <div className="w-[100%] lg:w-[45%]">
                        <div className='bg-[#5A53F4] pb-5 rounded-lg'>
                            <div className='mb-3 bg-[#CBC9FF] py-3 clipPath rounded-tl-lg rounded-tr-lg'>
                                <p className='font-semibold text-[23px] text-center'>Enquiry Now</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap gap-y-5">
                                    <div className="w-[100%] px-3">
                                        <TextField
                                            fullWidth
                                            className="rounded-lg text-white"
                                            id="name" 
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            label="Name"
                                            variant="outlined"
                                            required
                                            sx={style}
                                        />
                                    </div>
                                    <div className="w-[100%] lg:w-[50%] px-3">
                                        <TextField
                                            className="rounded-lg"
                                            fullWidth
                                            id="outlined-basic"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            label="Email Address"
                                            variant="outlined"
                                            required
                                            sx={style}
                                        />
                                    </div>
                                    <div className="w-[100%] lg:w-[50%] px-3">
                                        <TextField
                                            className="rounded-lg"
                                            fullWidth
                                            id="outlined-basic"
                                            name="phone"
                                            type="text"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            label="Phone Number"
                                            variant="outlined"
                                            required
                                            sx={style}
                                        />
                                    </div>
                                    <div className="w-[100%] px-3">
                                        <TextField
                                            fullWidth
                                            className="rounded-lg text-white"
                                            id="location" 
                                            name="location"
                                            type="text"
                                            value={formData.location}
                                            onChange={handleChange}
                                            label="Location"
                                            variant="outlined"
                                            required
                                            sx={style}
                                        />
                                    </div>
                                    <div className="w-[100%] lg:w-[100%] px-3">
                                        <TextField
                                            fullWidth
                                            className="rounded-lg"
                                            id="outlined-select-currency"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            select
                                            label="Services"
                                            sx={style}
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
                                    <div className="w-[100%] px-3">
                                        <TextField
                                            className="rounded-lg"
                                            fullWidth
                                            id="outlined-multiline-flexible"
                                            name="message"
                                            type="text"
                                            value={formData.message}
                                            onChange={handleChange}
                                            label="Write a message"
                                            rows={3}
                                            multiline
                                            sx={style}
                                        />
                                    </div>
                                    <div className="w-[100%] flex justify-center">
                                        <button type="submit" className="bg-[#11009E] text-[#fff] hover:bg-[#513eff] transition duration-500 px-10 py-3" disabled={isSubmitting}>
                                            {
                                                isSubmitting ? 
                                                <>
                                                    <span className='flex items-center justify-center gap-2'>
                                                        <CircularProgress size='1rem' />
                                                        <span className="text-[#FFFFFF]">submiting...</span>
                                                    </span>
                                                </> 
                                                :
                                                "Submit"
                                            }
                                        </button>
                                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
