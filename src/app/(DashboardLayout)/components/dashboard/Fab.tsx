import { useState } from "react";
import cn from "classnames";
// import { MdAdd } from "react-icons/md";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import "./styles.scss";
import DashboardCard from "../shared/DashboardCard";
import { Box, Card, CardActions, CardHeader, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "@/utils/theme";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconBellQuestion, IconBellRinging, IconMenu } from "@tabler/icons-react";
import Link from "next/link";


const actions = [
    { label: 1, value: "Biology chapter 2 quiz evaluation is completed. Please check your results", pbg: "#e0faf7", },
    { label: 2, value: " Rahul has scored 50 marks out of 50 in Maths chapter 1 Quiz. Congratualtions" },
    { label: 3, value: "Biology Teacher has set a new Quiz on Chapter 1. Please check it out" },
    { label: 4, value: "Checkout out new content section for more information", pbg: "#fff", },
    { label: 5, value: "New questions raised from Physics chapter 1", pbg: "#e0faf7" },
    { label: 6, value: "Checkout new open quizzes", pbg: "#fff", },
    { label: 7, value: "10 new answers from your peers on Biology chapter1", pbg: "#e0faf7" },
    { label: 8, value: "Checkout new open quizzes", pbg: "#fff", },
]
// const actions = [
//     { label: "About", ques: '2 question raised from physics 2 question raised from physics 2 question raised from physics 2 question raised from physics', bg: '#F3C790' },
//     { label: "Profile", ques: '3 question raised from maths', bg: '#fff' },
//     { label: "Picture", ques: '1 question raised from chemistry', bg: '#ccffff' },
//     { label: "Trash", ques: '3 question raised from biology', bg: '#fff' },
//     { label: "About", ques: '2 question raised from physics', bg: '#ccffff' },
//     { label: "Profile", ques: '3 question raised from maths', bg: '#fff' },
//     { label: "Picture", ques: '1 question raised from chemistry', bg: '#ccffff' },
//     { label: "Profile", ques: '3 question raised from maths', bg: '#fff' },
//     { label: "Picture", ques: '1 question raised from chemistry', bg: '#F3C790' },
//     { label: "Trash", ques: '3 question raised from biology', bg: '#fff' },
//     { label: "About", ques: '2 question raised from physics', bg: '#F3C790' },
//     { label: "Profile", ques: '3 question raised from maths', bg: '#fff' },
//     { label: "Picture", ques: '1 question raised from chemistry', bg: '#F3C790' },
//     { label: "Profile", ques: '3 question raised from maths', bg: '#fff' },
//     { label: "Picture", ques: '1 question raised from chemistry', bg: '#F3C790' },
//     { label: "Trash", ques: '3 question raised from biology', bg: '#fff' },
//     { label: "About", ques: '2 question raised from physics', bg: '#F3C790' },
//     { label: "Profile", ques: '3 question raised from maths', bg: '#fff' },
//     { label: "Picture", ques: '1 question raised from chemistry', bg: '#F3C790' },
//     { label: "Trash", ques: '3 question raised from biology', bg: '#fff' },
// ];
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} style={{ padding: 0 }} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: "#f7c974",
//     },
//     '&:nth-of-type(even)': {
//         backgroundColor: "white",
//     },
// }));
const FAB = () => {
    const [open, setOpen] = useState(false);
    const [rotate, setRotate] = useState(false)



    const mouseEnter = () => {
        setOpen(true);
        setRotate(true)
    }

    const mouseLeave = () => {
        setOpen(false)
        setRotate(false)
    };

    return (
        <ul
            className={cn("fab-container", { open })}
        // onClick={mouseEnter}
        // onMouseOut={mouseLeave}
        >

            <CardActions style={{ padding: 10, backgroundColor: "#faa917", borderRadius: '5px' }}>
                <Typography sx={{
                    ":hover": {
                        color: "#ddd",
                    }, display: 'inline-flex',
                    fontSize: 14,
                    alignItems: 'center',
                    color: "#ffffff",
                    textAlign: 'center',
                    // borderRight: '1px solid #ddd'
                }}>
                    <IconBellQuestion stroke="1.5" style={{ height: 21, alignItems: 'center', textAlign: 'center' }} />
                </Typography>
                {/* <span style={{ padding: 7, display: 'flex', fontSize: 13 }}><IconBellRinging size={15} />18 Question raised from the course you entrolled</span> */}
                {rotate === true ? (
                    <>  <span style={{ color: "#fff", fontWeight: 'bold' }}>New Announcements</span>
                        <ExpandLessIcon style={{ color: "#fff", width: 20, height: 20, justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'end' }} onClick={mouseLeave} />
                    </>
                ) : <>
                    <span style={{ color: "#fff" }}>18</span>
                    <ExpandMoreIcon style={{ color: "#fff", width: 20, height: 20, justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'end' }} onClick={mouseEnter} />
                </>
                }

            </CardActions>

            {open === true ? (
                <Box sx={{
                    overflow: "auto", border: '1px solid #faa917', backgroundColor: ' #f2f2ff',
                    maxHeight: '340px', maxWidth: '397px', scrollbarwidth: 'thin', borderRadius: '4px',
                }}>
                    {actions.map((product, i) => {
                        return (
                            <div key={i} style={{ padding: 5 }}>
                                <Box style={{ borderRadius: '4px', padding: 5, backgroundColor: product.pbg, }}>
                                    <Link href={'/notifications'}>
                                        <Typography sx={{
                                            ":hover": {
                                                color: "#107869",
                                                fontWeight: 'bold',
                                            }, display: 'inline-flex',
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                        }}>{product.value}</Typography>
                                    </Link>
                                </Box>
                            </div>
                        )
                    })}
                </Box>
            ) : ""
            }
        </ul >
    );
};

export default FAB;

