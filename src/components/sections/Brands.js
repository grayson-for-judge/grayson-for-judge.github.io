import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as AirbnbLogo } from '@images/logos/airbnb.svg';
import { ReactComponent as AppleMusicLogo } from '@images/logos/apple-music.svg';
import { ReactComponent as CokeLogo } from '@images/logos/coca-cola.svg';
import { ReactComponent as NodeLogo } from '@images/logos/nodejs.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

const LOGOS = [
  {
    logo: AirbnbLogo,
    link: 'https://airbnb.io',
  },
  {
    logo: AppleMusicLogo,
    link: 'https://www.apple.com/in/music/',
  },
  {
    logo: CokeLogo,
    link: 'https://coca-cola.com',
  },
  {
    logo: NodeLogo,
    link: 'https://nodejs.org',
  },
  {
    logo: NikeLogo,
    link: 'https://nike.com',
  },
  {
    logo: InstagramLogo,
    link: 'https://instagram.com',
  },
];

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "edit-00752" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="background">
        <StyledContainer>
          <div>
            <h1 style={{ color: '#242544' }}>Background</h1>
            <LogoGrid>
              <p class="second" style={{ color: '#242544' }}>
              As a prosecutor, Brittany handled Domestic Violence, CHIPS (Child in Need of Protection or Services), and Early Intervention cases.  While assigned to the Domestic Violence unit, Brittany worked with law enforcement, victim/witness advocates, and community advocates from the Sojourner Family Peace Center to effectively prosecute intimate partner domestic violence cases and connect victims with community resources.  Brittany’s work in the CHIPS unit allowed her to collaborate with the Division of Milwaukee Child Protective Services and its contracted agencies to provide services and permanency to the children and families of Milwaukee County.  Brittany’s most recent assignment in the Early Intervention unit was funded through the John D. and Catherine T. MacArthur Foundation’s Safety and Justice Challenge, and prioritized reducing both the jail population and racial and ethnic disparities within the legal system. In this assignment, Brittany handled diversions and deferred prosecution agreements for general crimes offenses, ensuring that appropriate cases were resolved through untraditional prosecutorial means and streamlined into Milwaukee County’s designated treatment court.  
                </p>
                <br>

                 </br>
                <p style={{ color: '#242544' }}>
                Brittany has been involved in a number of professional and community organizations.  Prior to her appointment to the bench, she served for over two years on the State Bar of Wisconsin’s Board of Governors, first as a Building Bridges Liaison from the Wisconsin Association of African American Lawyers and then as a District 2 (Milwaukee) representative.  Brittany also served as liaison from the Board of Governors to both the Leadership Development Committee and the Children and the Law Section.  Before being appointed, she was selected to serve on the Executive Committee for the 2019-2020 fiscal year.  Brittany served on the board of the Wisconsin Association of African-American Lawyers for several years as treasurer, director, and most recently, parliamentarian.  Brittany sits on the Marquette University Law School Alumni Board and serves on a number of committees, including the Diversity Recruitment Committee, the Diversity Reception Committee, and the Restorative Justice Conference Planning Committee.  She also sits on the board of the Chudnow Museum of Yesteryear, a Milwaukee history museum. 
                </p>
                <br>
                </br>
                <p style={{ color: '#242544' }}>
                Brittany is a member of the Milwaukee County Race, Equity, and Procedural Justice Committee, which is tasked with planning an annual conference for legal system partners to continue an ongoing discussion of the intersection of race within the criminal legal system.  Brittany also serves on the “Just Us” Book Club subcommittee, which provides a platform to engage in more frequent conversations about race and our legal system through thought-provoking literature.
                </p>
                <br>
                </br>
                <p style={{ color: '#242544' }}>
                Brittany earned her B.S. from Marquette University and her J.D. from Marquette University Law School.  She lives in Wauwatosa with her husband, Ryan.  When Brittany is not on the bench, you might find her at a yoga class or having dinner at one of Milwaukee’s newest restaurants. 
                </p>
            </LogoGrid>
          </div>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: block;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  justify-items: left;
  margin-top: 10px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default Background;
