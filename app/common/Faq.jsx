'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image'
import SubHeading from './sub-heading'
import homeFaq from '../data/faq';


function Faq() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='container mx-auto px-5'>
            <SubHeading text='Frequently Asked Questions' />
            {/* <div className='flex flex-wrap py-8'>
                <div className='w-[100%] lg:w-[50%]'>
                    <p className='text-[30px]'>Beside Your Answers, Your Way Explore Our Help Center Today</p>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <p>We recognize that starting a new project or placing your faith in a team can make you feel sceptical and curious. For this reason, we have gathered responses to the frequently asked questions from our clients. Explore to learn about our processes, the services we provide, and how we can assist in making your ideas a reality!</p>
                </div>
            </div> */}
            <div className='flex flex-wrap gap-y-5 mb-10 mt-6'>
                <div className='w-[100%] lg:w-[40%]'>
                    <Image className='mx-auto' src='/img/home/faq.png' alt='' width={400} height={600} />
                </div>
                <div className='w-[100%] lg:w-[60%] flex justify-center flex-col'>
                    <div className='pb-3'>
                        <p className='text-[25px]'>Popular Questions</p>
                    </div>
                    <div>
                        {
                            homeFaq.map((ele,i)=>{
                                return(
                                    <Accordion key={i} sx={{marginBottom:'10px'}} expanded={expanded === `${ele.panel}`} onChange={handleChange(`${ele.panel}`)}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={ele.panel}
                                            id={ele.panel}
                                        >
                                            <Typography component="h2">
                                                {ele.title}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography sx={{ color: 'text.secondary' }}>
                                                {ele.desc}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq