import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'Elected Officials',
    content: () => (
      <>
        <li>Tony Evers - Governor</li>
        <li>Mandela Barnes - Lt. Governor</li>
        <li>John Chisholm - Milwaukee District Attorney</li>
      </>
    ),
  },
  {
    title: 'Court Officials',
    content: () => (
      <>
        <li>Hon. Maria Dorsey	Milwaukee Court Commissioner</li>
        <li>Hon. Cynthia Davis	Milwaukee Circuit Court Judge</li>
        <li>Hon. Christopher Foley	Milwaukee Circuit Court Judge</li>
        <li>Hon. Laura Gramling-Perez	Milwaukee Circuit Court Judge</li>
        <li>Hon. Jane Carroll	Milwaukee Circuit Court Judge</li>
        <li>Hon. Carl Ashley	Milwaukee Circuit Court Judge</li>
      </>
    ),
  },
  {
    title: 'Attorneys',
    content: () => (
      <>
        
        <li>
        Ryan Sanson</li>

        <li>
        Tanner Kilander</li>

        <li>
        Rosemary Reyes Cuevas</li>

        <li>
        Michael Reyes</li>

        <li>
        Step Nolten</li>

        <li>
        Kathryn Sarner</li>

        <li>
        Angela Cunningham</li>

        <li>
        Nicole Cameli</li>

        <li>
        Laura Bautista</li>

        <li>
        S. Daneille White</li>

        <li>
        Kori Ashley</li>

        <li>
        Christina Balistreri</li>

        <li>
        Joshua Dryak</li>

        <li>
        Steven DeVougas</li>

        <li>
        Laurie Frey</li>

        <li>
        Lovell Johnson</li>

        <li>
        Latrice Knighton</li>

        <li>
        Amber Raffeet August</li>

        <li>
        Christopher August</li>

        <li>
        Rochelle Johnson-Bent</li>

        <li>
        Sammi-Jo Nevin</li>

        <li>
        Nicole Robbins</li>

        <li>
        Kathryn Mertz</li>

        <li>
        Claire Starling</li>

        <li>
        Michael Schindhelm</li>

        <li>
        Porchia Lewand</li>

        <li>
        Michael Knoeller</li>

        <li>
        Allysa Brown</li>

        <li>
        William Crowley</li>

        <li>
        Odalo Ohiku</li>

        <li>
        Nicole Willette</li>

        <li>
        Molly Schmidt</li>

        <li>
        Stephen Hall</li>

        <li>
        Matthew Puthukulam</li>

        <li>
        Lisa Procaccio</li>

        <li>
        Beth Zirgibel</li>

        <li>
        Michael Thurston</li>

        <li>
        Barbara Due</li>

        <li>
        Caitlin Noonan</li>
      </>
    ),
  },
];

const Endorsements = () => (
  <Section id="endorsements" accent>
    <Container>
      <h1 style={{ color: '#FFFFFF' }}>Endorsements</h1>
      <div >
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Endorsements;
