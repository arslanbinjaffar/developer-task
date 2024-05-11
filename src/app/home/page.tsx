import React from 'react'
import Navbar from '@/app/components/Navbar/Index'
import Hero from './components/Hero'
import SignUp from './components/SignUp'
import Brokage from './components/Brokerage'
import TrackYour from './components/Trackyour'
import Automate from './components/Automate'
import InvestReports from './components/InvestReports'
import Security from './components/Security'
import ContactUs from './components/ContactUs'
import Heromobile from './components/Hero/mobile'
import BrokageMobile from './components/Brokerage/mobile'
import TrackyourMobile from './components/Trackyour/mobile'
import AutomateMobile from './components/Automate/mobile'
import InvestReportsMobile from './components/InvestReports/mobile'

const Page = () => {
  return (
      <div>
          <Navbar />
      {/* <Hero /> */}
      <Heromobile />
      
      {/* <SignUp /> */}
      <BrokageMobile />
      
     {/* <Brokage />  */}
      {/* <TrackYour /> */}
      <TrackyourMobile/>
      {/* <Automate /> */}
      <AutomateMobile/>
      {/* <InvestReports /> */}

      <InvestReportsMobile/>
      <Security />
      
      <ContactUs/>
    </div>
  )
}

export default Page