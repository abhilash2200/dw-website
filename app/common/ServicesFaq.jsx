'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubHeading from './sub-heading';
/* import { digitalMarketingFaq } from '../data/faq'; */

function ServicesFaq(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='container mx-auto px-5'>
            <SubHeading text='FAQ'/>
            <div className='flex flex-wrap gap-y-5 pt-5'>
                {
                     props.servicesFaqData.map((ele,i)=>{
                        return(
                            <div key={i} className='w-full lg:w-[50%] px-2'>
                                <Accordion  sx={{marginBottom:'10px'}} expanded={expanded === `${ele.panel}`} onChange={handleChange(`${ele.panel}`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={ele.panel}
                                        id={ele.panel}
                                    >
                                        <Typography>
                                            {ele.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{ color: 'text.secondary' }}>
                                            {ele.desc}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServicesFaq