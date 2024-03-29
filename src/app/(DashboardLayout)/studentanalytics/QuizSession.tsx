'use client';
import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";

import { IconArrowUpLeft } from "@tabler/icons-react";


const QuizSession = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;
    const colors = ['red', 'blue', 'green', 'orange']

    const seriescolumnchart: any = [{
        name: 'Sessions',
        data: [20, 40, 30, 50, 30, 10],
        // fillColor: '#EB8C87',
    }]
    const optionscolumnchart: any = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        colors: '#4B0082',
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '12px',

            }
        },

        xaxis: {
            categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
            position: 'Bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            // crosshairs: {
            //     fill: {
            //         color: '#DC143C'
            //     }
            // },
        },
        yaxis: {
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true,
            },
            labels: {
                show: true,

            }

        }
    }

    return (
        <Card>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: '10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Quiz Session Count by Week</Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                width={500}
                height={230}
            />

        </Card >
    )

};

export default QuizSession;

