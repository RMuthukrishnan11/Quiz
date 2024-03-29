
'use client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styles.css';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Button, Card, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import SmsIcon from '@mui/icons-material/Sms';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link';
import { useEffect, useState } from 'react';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface page {
    pathname: string;
    query: any;
}

interface question {
    Qid: number,
    question: string,
    startDate: string,
    endDate: string,
    acount: number,
    answers: []
}

interface main {
    Sid: number,
    subject: string,
    qcount: number,
    questions: [{
        Qid: number,
        question: string,
        startDate: string,
        endDate: string,
        acount: number,
        answers: [{
            aid: number,
            author: string,
            postedDate: string,
            answer: string
        }]
    }]

}

export default function Announcements() {
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: "white",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "grey",
        },
    }));

    const questionsMain = [
        {
            "Sid": 0,
            "subject": "Physics",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "Checkout new open quizzes",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "Chapter2:  Electrostatic Potential and Capacitance- content section open now",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },

            ]
        },
        {
            "Sid": 1,
            "subject": "Maths",
            "qcount": 2,
            "questions": [
                {
                    "Qid": 0,
                    "question": "Solutions of Chapter 2:Algebra Quiz out now. Please check your answers",
                    "startDate": "21/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Nina",
                            "postedDate": "13-04-2023",
                            "answer": "All real numbers"
                        },
                        {
                            "aid": 1,
                            "author": "Banu",
                            "postedDate": "05-04-2022",
                            "answer": "all real numbers"
                        },
                        {
                            "aid": 2,
                            "author": "Lola",
                            "postedDate": "18-04-2023",
                            "answer": "No Solution"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "Chapter 1- Sets and Functions- Quiz results out. Check your score now",
                    "startDate": "12/2/2024",
                    "endDate": "12/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Lola",
                            "postedDate": "10-04-2023",
                            "answer": "154 ft^2"
                        },
                        {
                            "aid": 1,
                            "author": "Daran",
                            "postedDate": "05-04-2023",
                            "answer": "150 ft^2"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2021",
                            "answer": "154 ft^2"
                        }
                    ]
                },

            ]
        },
        {
            "Sid": 2,
            "subject": "Biology",
            "qcount": 3,
            "questions": [
                {
                    "Qid": 0,
                    "question": "Quiz results of Chapter 1: Reproduction declared. Rohit secured first mark with 98%",
                    "startDate": "24/2/2024",
                    "endDate": "26/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Prince",
                            "postedDate": "23-04-2023",
                            "answer": "insects"
                        },
                        {
                            "aid": 1,
                            "author": "Kali",
                            "postedDate": "23-04-2023",
                            "answer": "insects"
                        },
                        {
                            "aid": 2,
                            "author": "Naina",
                            "postedDate": "16-04-2023",
                            "answer": "insects"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "Chapter 2:Genetics & Evolution- content out now",
                    "startDate": "28/3/2024",
                    "endDate": "1/1/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Darun",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 1,
                            "author": "Frank",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 2,
                            "author": "Deepa",
                            "postedDate": "23-04-2023",
                            "answer": "egg, integument, embryo sac, nucellus"
                        }
                    ]
                },

                {
                    "Qid": 2,
                    "question": "Results of Quiz 1: 80% cleared Quiz 1",
                    "startDate": "12/2/2024",
                    "endDate": "12/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Darun",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 1,
                            "author": "Frank",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 2,
                            "author": "Deepa",
                            "postedDate": "23-04-2023",
                            "answer": "egg, integument, embryo sac, nucellus"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Student-Teacher doubt solving sessions will be conducted on 2nd and Saturdays of every month",
                    "startDate": "12/2/2024",
                    "endDate": "12/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Darun",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 1,
                            "author": "Frank",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 2,
                            "author": "Deepa",
                            "postedDate": "23-04-2023",
                            "answer": "egg, integument, embryo sac, nucellus"
                        }
                    ]
                }
            ]
        },
        {
            "Sid": 3,
            "subject": "Chemistry",
            "qcount": 4,
            "questions": [
                {
                    "Qid": 0,
                    "question": "Chapter 1: Solutions - Quiz results out ",
                    "startDate": "12/2/2024",
                    "endDate": "22/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Narain",
                            "postedDate": "23-04-2023",
                            "answer": "Benzaldehyde"
                        },
                        {
                            "aid": 1,
                            "author": "Suja",
                            "postedDate": "23-04-2023",
                            "answer": "Benzaldehyde"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "19-05-2023",
                            "answer": "No Answer"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "Chapter 2: Electrochemistry- Content on the contents page. Check it out now.",
                    "startDate": "2/2/2024",
                    "endDate": "2/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "Chapter 3: Chemical Kinetics- Doubt solving session on 2nd Saturday of Febrauary. Please join",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Chapter 2: Electrochemistry- Solutions out now",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        }
    ]
    const questionsMainPhysics = [
        {
            "Sid": 0,
            "subject": "Physics",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "Chapter1: Electric Charges and Fields- Quiz results out now: Rahul scored first mark with 97%",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "Chapter1: Electric Charges and Fields- Results out now",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Chapter2: Electrostatic Potential and Capacitance - Content on contents Page. ",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 4,
                    "question": "Doubt solving Sessions: Every Sunday 2pm to 4pm. Come solve your doubts.",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        },
    ]
   
    const questionsMainMaths = [
        {
            "Sid": 0,
            "subject": "Maths",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "Chapter 2: Algebra- Class on Sunday. Mark it in your Calendar",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "Sample questions of Chapter 2 Algebra on Contents Page, Solve it now",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Result of Chapter1: Sets and Functions- Rahul secured the top rank with 100%",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 4,
                    "question": "There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        },
    ]
    const questionsMainChemistry = [
        {
            "Sid": 0,
            "subject": "Chemistry",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "A radioactive nucleus emits a beta particle, then the parent and daughter nuclei are",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Quiz 1 Results out now",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 4,
                    "question": "Rampal Secured top score of 90% in Quiz 1",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        },
    ]
    const questionsMainBiology = [
        {
            "Sid": 0,
            "subject": "Biology",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "A radioactive nucleus emits a beta particle, then the parent and daughter nuclei are",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Two girls were born to the same mother, at the same time, on the same day, in the same month and the same year and yet somehow they’re not twins. Why not?",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 4,
                    "question": "There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        },
    ]
    const questionsMainCommunication = [
        {
            "Sid": 0,
            "subject": "Communication",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "A radioactive nucleus emits a beta particle, then the parent and daughter nuclei are",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Two girls were born to the same mother, at the same time, on the same day, in the same month and the same year and yet somehow they’re not twins. Why not?",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 4,
                    "question": "There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        },
    ]
    const questionsMainSocial = [
        {
            "Sid": 0,
            "subject": "SocialWelfare",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "startDate": "11/1/2024",
                    "endDate": "21/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "A radioactive nucleus emits a beta particle, then the parent and daughter nuclei are",
                    "startDate": "12/1/2024",
                    "endDate": "11/2/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
                        }
                    ]
                },
                {
                    "Qid": 3,
                    "question": "Two girls were born to the same mother, at the same time, on the same day, in the same month and the same year and yet somehow they’re not twins. Why not?",
                    "startDate": "7/2/2024",
                    "endDate": "7/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                },
                {
                    "Qid": 4,
                    "question": "There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",
                    "startDate": "9/2/2024",
                    "endDate": "5/3/2024",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        },
    ]
    const [main, setMain] = useState(
        [{
        Sid: 0,
        subject: "",
        qcount: 0,
        questions: [{
            Qid: 0,
            question: "",
            startDate: "",
            endDate: "",
            acount: 0,
            answers: [{
                aid: 0,
                author: "",
                postedDate: "",
                answer: ""
            }]
        }]

    }]
    );

    useEffect(() => {
        setMain(questionsMain)
    }, [])

    // const handleClickanswers = (e:any) =>{

    // router.push({'/notifications/answers', query: { userid:e}});
    // }
    const onChangeSearch = (e: any) => {
        questionsMain.map((value: any, index) => {
            if (e.target.value==="Physics") {
                setMain(questionsMainPhysics)
            }
            else if (e.target.value==="Maths") {
                setMain(questionsMainMaths)
            }
            else if (e.target.value==="Chemistry") {
                setMain(questionsMainChemistry)
            }
            else if (e.target.value==="Biology") {
                setMain(questionsMainBiology)
            }
            else if (e.target.value==="Communication") {
                setMain(questionsMainCommunication)
            }
            else if (e.target.value==="Social") {
                setMain(questionsMainSocial)
            }
            else if (e.target.value==="All") {
                setMain(questionsMain)
            } 
        })
    }

    return (
        <Card sx={{ p: 1  }} className='scrollcontent'>
            <div className="rowhead" style={{ padding: 5 }}>
                <div className="columnhead1" style={{ textAlign: "end" }} >
                    {/* <Typography >Questions</Typography> */}
                    <b style={{ fontSize: "15px" }}>
                        Announcements</b>
                </div>
                <div className="columnhead2" style={{ display: "flex" }}>
                    {/* <Button style={{backgroundColor:'#b9b0b0',color:"white",borderRadius:"5px"}}>Filter features here:</Button>&nbsp; */}
                    <Typography style={{ marginTop: 8 }} ><b>Filters</b></Typography>&emsp;
                    <div className="form">
                        <button>
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <select className='input' name="cars" id="cars" style={{ border: '1px solid white', width: 200 }} onChange={onChangeSearch}>
                        <option value="All">All Subject</option>
                            <option value="Biology">Biology</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Physics">Physics</option>
                            <option value="Communication">Communication</option>
                            {/* <option value="chemistry">Chemistry</option> */}
                            <option value="Maths">Maths</option>
                            <option value="Social">Social Welfare</option>
                        </select>
                    </div>
                </div>
            </div>
            <Table aria-label="purchases" >
                <TableHead >
                    <TableRow>
                        <TableCell align="left" style={{ padding: 10, width: '10%', fontWeight: 'bold', color: 'black', backgroundColor: "#f6f0f6" }}>Subject</TableCell>
                        <TableCell align="left" style={{ padding: 10, width: '70%', fontWeight: 'bold', color: 'black', backgroundColor: "#f6f0f6" }}>Description</TableCell>
                        <TableCell align="left" style={{ padding: 10, width: '10%', fontWeight: 'bold', color: 'black', backgroundColor: "#f6f0f6" }}>Publish Date</TableCell>
                        {/* <TableCell align="left" style={{ padding: 10, width: '10%', fontWeight: 'bold', color: 'black', backgroundColor: "#f6f0f6" }}>To Date</TableCell> */}
                    </TableRow>
                </TableHead>
                {main.map((question: any, index) => {
                    return (
                        <TableBody key={index}>
                            {question.questions.map((qus: any, index: number) => {
                                return (
                                    <TableRow className='row' key={index}>
                                        <TableCell scope="row" align="left" style={{ width: "10%", padding: 10 }}>
                                            {question.subject === "Physics" ?
                                                <span className="label" style={{ textAlign: "center", color: 'white', backgroundColor: "rgb(0, 227, 150)", borderRadius: "7px", padding: 5 }}><b style={{ padding: 10 }}>Physics</b></span>
                                                :
                                                question.subject === "Maths" ?
                                                    <span className="label" style={{ textAlign: "center", color: 'white', backgroundColor: "rgb(0, 143, 251)", borderRadius: "7px", padding: 5 }}><b style={{ padding: 10 }}>Maths</b></span>
                                                    : question.subject === "Biology" ?
                                                        <span className="label" style={{ textAlign: "center", color: 'white', backgroundColor: "rgb(254, 176, 25)", borderRadius: "7px", padding: 5 }}><b style={{ padding: 10 }}>Biology</b></span>
                                                        : question.subject === "Chemistry" ?
                                                            <span className="label" style={{ textAlign: "center", color: 'white', backgroundColor: "rgb(255, 69, 96)", borderRadius: "7px", padding: 5 }}><b style={{ padding: 10 }}>Chemistry</b></span>
                                                            : question.subject === "Communication" ?
                                                                <span className="label" style={{ textAlign: "center", color: 'white', backgroundColor: "rgb(119, 93, 208) ", borderRadius: "7px", padding: 5 }}><b style={{ padding: 10 }}>Communication</b></span>
                                                                : question.subject === "SocialWelfare" ?
                                                                    <span className="label" style={{ textAlign: "center", color: 'white', backgroundColor: "rgb(0, 143, 251) ", borderRadius: "7px", padding: 5 }}><b style={{ padding: 10 }}>SocialWelfare</b></span>
                                                                    : ""}
                                        </TableCell>
                                        <TableCell align="left" style={{ width: "65%", padding: 10 }} >
                                            {qus.question}
                                        </TableCell>
                                        <TableCell align="left" style={{ width: "20%", padding: 10 }} >
                                            {qus.startDate}
                                        </TableCell>
                                        {/* <TableCell align="left" style={{ width: "1%", padding: 10 }} >
                                            {qus.endDate}
                                        </TableCell> */}
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    )
                })}
            </Table>

        </Card >

    )
}




