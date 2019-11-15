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
        <li>Evan Goyke -	State Representative</li>
        <li>Khalif Rainey - Alderman</li>
      </>
    ),
  },
  {
    title: 'Court Officials',
    content: () => (
      <>
        <li>
        Hon. M. Joseph Donald - District 1 Court of Appeals Judge</li>

        <li>
        Hon. Cynthia Davis - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Christopher Foley - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Laura Gramling-Perez - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Jane Carroll - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Carl Ashley - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Christopher Dee - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. David Hansher - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Michelle Havas - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Thomas McAdams - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Marshall Murray - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. William Pocan - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Frederick Rosa - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Mark Sanders - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Audrey Skwiewarski - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. JD Watts - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. David Swanson - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Timothy Witkowiak - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Kevin Martens - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Ellen Brostrom - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Laura Crivello - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Maria Dorsey - Milwaukee Court Commissioner</li>

        <li>
        Hon. Julia Vosper - Milwaukee Court Commissioner</li>

        <li>
        Hon. Barry Phillips - Milwaukee Court Commissioner</li>

        <li>
        Hon. Grace Flynn - Milwaukee Court Commissioner</li>

        <li>
        Hon. Cedric Cornwall - Milwaukee Court Commissioner</li>

        <li>
        Hon. Dewey Martin - Milwaukee Court Commissioner</li>

        <li>
        Hon. Ana Berrios-Schroeder - Family Court Commissioner</li>

        <li>
        Hon. Sheila Hill-Roberts - Assistant Family Court Commissioner</li>

        <li>
        Hon. Louis Butler - Former Wisconsin Supreme Court Justice</li>

        <li>
        Hon. Jeffrey Kremers - Retired Milwaukee Circuit Court Judge</li>

        <li>
        Hon. James Gramling - Retired Milwaukee Municipal Court Judge</li>

      </>
    ),
  },
  {
    title: 'Attorneys',
    content: () => (
      <>
        <li>Margaret Daun -	Milwaukee Corporation Counsel</li>
                <li>
        Ryan Sanson</li>

        <li>
        Tanner Kilander</li>

        <li>
        Rosemary Reyes Cuevas</li>

        <li>
        Michael Reyes</li>

        <li>
        Stephan Nolten</li>

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
        John Chisholm</li>

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

        <li>
        Dorothy Dey</li>

        <li>
        Catherine Flaherty</li>

        <li>
        Tawny Brooks</li>

        <li>
        Robb Marcus</li>

        <li>
        Alexander Cossi</li>

        <li>
        Heidi Galvan</li>

        <li>
        Ed Zlotocha</li>

        <li>
        Steve Wiechmann</li>

        <li>
        Jon Lamendola</li>

        <li>
        Chris Velnetske</li>

        <li>
        Peter Bockhorst</li>

        <li>
        Steve Licata</li>

        <li>
        Mary Moore</li>

        <li>
        Duke Lehto</li>

        <li>
        Cheryl Ward</li>

        <li>
        Jennifer Baumler</li>

        <li>
        Tom Miller</li>

        <li>
        Russell Bohach</li>

        <li>
        Pam Mehta</li>

        <li>
        Eric Lowenberg</li>

        <li>
        Mary Mountin</li>

        <li>
        Steve Kaminski</li>

        <li>
        Scott Phillips</li>

        <li>
        Pamela Crawford</li>

        <li>
        Stephanie Benske</li>

        <li>
        David Bordow</li>

        <li>
        Isa Yamahiro</li>

        <li>
        Jodi Sanfelippo</li>

        <li>
        Lynn Levihn</li>

        <li>
        Rick Falk</li>

        <li>
        Frank T. Crivello II</li>

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
