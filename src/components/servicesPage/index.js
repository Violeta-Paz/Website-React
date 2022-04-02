
import React from 'react'
import Icon1 from '../../images/recipes.jpg'
import Icon2 from '../../images/recipes2.jpg'
import Icon3 from '../../images/recipes3.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './servicesElement'

const ServicesPage = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>

          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP> We help reduce your fess and increase your
                          overall revenue.
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP> We help reduce your fess and increase your
                          overall revenue.
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP> We help reduce your fess and increase your
                          overall revenue.
              </ServicesP>
          </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default ServicesPage
