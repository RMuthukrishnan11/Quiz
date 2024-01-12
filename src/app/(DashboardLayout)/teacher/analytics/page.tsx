'use client'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import AvgParticipate from './AvgParticipate';
import Participate from './Participate';
import Performance from './Performance';
import PeertoPeer from './PeertoPeer';
import Avgcorrectans from './Avgcorrectans';
import TopPerformers from './TopPerformers';
import Wrongansfeed from './Wrongansfeed';
import { usePathname, useRouter } from 'next/navigation';
import '../analytics.css'

const TeacherDashboard = () => {


	const router = useRouter();
  const pathname = usePathname();



  
  return (
    <PageContainer title="Analytics" description="this page is about Analytics">
  <div style={{justifyContent:"end",display:"flex"}}>
         <span onClick={()=>router.push("/teacher/content")} className='pillbutton' style={pathname == "/teacher/content" ? {backgroundColor:"#a39c9c",color:"#2f2f2f"}:{backgroundColor:"#cfcdcd",color:"#2f2f2f"}} >Content</span>&emsp;
      <span onClick={()=>router.push("/teacher/analytics")} className='pillbutton' style={pathname == "/teacher/analytics" ? {backgroundColor:"#a39c9c",color:"#2f2f2f"}:{backgroundColor:"#cfcdcd",color:"#2f2f2f"}} >Analytics</span>&emsp;
      <span onClick={()=>router.push("/teacher/manage")} className='pillbutton' style={pathname == "/teacher/manage" ? {backgroundColor:"#a39c9c",color:"#2f2f2f"}:{backgroundColor:"#cfcdcd",color:"#2f2f2f"}} > Manage</span>
			</div>

      <Box>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={4}>
              <AvgParticipate />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Participate />
            </Grid>
            <Grid item xs={12} lg={4} >

              {/* <Grid container item display={'flex'} direction={'row'} spacing={0.25}>
                <Card style={{ width: 155, height: 90 }} >
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10, fontSize: 12, padding: 10 }}> No. of Students: <b>40</b></div> */}

              <Grid  item display={'flex'}>
                <Card style={{ width: 165, height: 90 }} >
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10,fontSize:12 }}> No. of Students: <b>40</b></div>
                </Card>&emsp;
                <Card style={{ width: 155, height: 90 }}>
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10, fontSize: 12, padding: 10 }}>Total number of Quizzes: <b>500</b></div>
                </Card>
              </Grid>&nbsp;
              <TopPerformers />
            </Grid>
            <Grid container item xs={12} spacing={1} >
              <Grid item xs={12} lg={4}>
                <Performance />
              </Grid>

              {/* <Grid container item xs={12} lg={1} spacing={0.1}>
                <Card style={{ width: 75, height: 90, padding: 10, fontSize: 12 }}> */}

              <Grid item xs={12} lg={1} >
                <Card style={{width: 75, height: 90 , padding: 5,fontSize:12  }}>

                  <div > No. of Chapters: <b>56</b></div>
                </Card>&nbsp;
                <Card style={{ width: 75, height: 90, padding: 10, fontSize: 12 }}>
                  <div >No. of Topics: <b>500</b></div>
                </Card>&nbsp;
                <Card style={{ width: 75, height: 90, padding: 10, fontSize: 12 }}>
                  <div >No. of Questions: <b>500</b></div>
                </Card>&nbsp;
              </Grid>

              {/* <Grid container item xs={12} lg={1.5} direction={'row'}>
                <Card style={{ padding: 5, fontSize: 12 }}> */}

              <Grid item xs={12} lg={1.5}>
                <Card style={{ padding: 5,fontSize:12  }}>

                  <div>Total No. of Questions / Queries:<b>556</b></div>
                </Card><br/>
                <PeertoPeer />
              </Grid>
              <Grid item xs={12} lg={1.5}>
                <Card style={{ height: 75, padding: 5, fontSize: 12 }}>
                  <div >Total No. of Answers: <b>200</b></div>
                </Card>&nbsp;
                <Avgcorrectans />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Wrongansfeed />
              </Grid>
            </Grid>

            {/* <Grid item xs={12} lg={4}>
              <Performance />
            </Grid>
            <Grid item xs={12} lg={1.6}>
              <Grid item>
                <Card style={{ width: 75, height: 120 }}>
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10 }}> No. of Chapters: <b>56</b></div>
                </Card>
              </Grid><br />
              <Grid item>
                <Card style={{ width: 75, height: 120 }}>
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10 }}>No. of Topics: <b>500</b></div>
                </Card>
              </Grid><br />
              <Grid item>
                <Card style={{ width: 75, height: 120 }}>
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10 }}>No. of Questions: <b>500</b></div>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={6} lg={1.5}>
              <Grid item>
                <Card style={{ width: 165, height: 120 }}>
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10 }}>Total No. of Questions / Queries:<b>556</b></div>
                </Card>
              </Grid><br />
              <Grid item>
                <PeertoPeer />
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2}>
              <Grid>
                <Card style={{ width: 150, height: 120 }}>
                  <div style={{ marginLeft: 20, marginTop: 20, marginRight: 10 }}>Total No. of Answers: <b>200</b></div>
                </Card>
              </Grid><br />
              <Grid >
                <Avgcorrectans />
              </Grid>
            </Grid> */}
            {/* <Grid item xs={12} lg={4}>
              <Grid >
                <Wrongansfeed />
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </PageContainer >
  )
}

export default TeacherDashboard;