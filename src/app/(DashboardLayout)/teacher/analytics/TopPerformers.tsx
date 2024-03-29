'use client';
import { Card, CardHeader, Divider, Grid, Typography, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";

// var data: [85, 97, 90, 98, 56, 89, 45, 75, 56, 65, 84, 79, 78, 56]
const TopPerformers = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        data: [75, 47, 40, 68, 56, 84, 45, 72, 56, 65, 84, 79, 78, 56],

    }]
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',
            height: 450,
            // strokeColor: '#C23829',
            toolbar: {
                show: true
            },
            // sparkline: {
            //     enabled: true
            // },
        }, legend: {
            position: 'top'
        },
        colors: '#CD5C5C',
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        }, stroke: {
            width: 20
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: ['Raj', 'Vicki', 'You', 'Ned', 'Rahul', 'Nirmal', 'Deva', 'Frankie', 'Rahim', 'Karim', 'Kala', 'Farah', 'Leha', 'Mala'],
        }
    }

    return (
        <Card>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding:'10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Top Performers by Score</Typography>
            {/* <Box sx={{ overflow: 'auto', maxHeight:310, maxWidth: 500 }}> */}
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar" height={310} width={500}
                // type="bar" height={170} width={"100%"}

                />
            {/* </Box> */}
        </Card>
    )

};

export default TopPerformers;

