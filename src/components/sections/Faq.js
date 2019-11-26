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
        Hon. Carl Ashley - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Ana Berrios-Schroeder - Family Court Commissioner</li>

        <li>
        Hon. Ellen Brostrom - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Louis Butler - Former Wisconsin Supreme Court Justice</li>

        <li>
        Hon. Jane Carroll - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Cedric Cornwall - Milwaukee Court Commissioner</li>

        <li>
        Hon. Laura Crivello - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Cynthia Davis - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Christopher Dee - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. M. Joseph
        Donald - District 1 Court of Appeals Judge</li>

        <li>
        Hon. Maria Dorsey - Milwaukee Court Commissioner</li>

        <li>
        Hon. Grace Flynn - Milwaukee Court Commissioner</li>

        <li>
        Hon. Christopher Foley - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. James Gramling - Retired Milwaukee Municipal Court Judge</li>

        <li>
        Hon. Laura Gramling-Perez - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. David Hansher - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Michelle Havas - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Shelia Hill-Roberts - Assistant Family Court Commissioner</li>

        <li>
        Hon. Jeffrey Kremers - Retired Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Alexis Liggins - Milwaukee Court Commissioner</li>

        <li>
        Hon. Kevin Martens - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Dewey Martin - Milwaukee Court Commissioner</li>

        <li>
        Hon. Thomas McAdams - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Marshall Murray - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Barry Phillips - Milwaukee Court Commissioner</li>

        <li>
        Hon. William Pocan - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Frederick Rosa - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Mark Sanders - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Audrey Skwiewarski - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. David Swanson - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Julia Vosper - Milwaukee Court Commissioner</li>

        <li> Hon.	Joseph Wall - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. JD Watts - Milwaukee Circuit Court Judge</li>

        <li>
        Hon. Timothy
        Witkowiak - Milwaukee Circuit Court Judge</li>

        <li>Hon. Glenn	Yamahiro -	Milwaukee Circuit Court Judge</li>
      </>
    ),
  },
  {
    title: 'Attorneys',
    content: () => (
      <>
        <li>
        Munjed Ahmad</li>

        <li>
        Joseph Alioto</li>

        <li>
        Jeffrey Altenburg</li>

        <li>
        Kori Ashley</li>

        <li>
        Christopher August</li>

        <li>
        Christina Balistreri</li>

        <li>
        Jennifer Baumler</li>

        <li>
        Laura Bautista</li>

        <li>
        Alejandro Bautista</li>

        <li>
        Jessica Behling</li>

        <li>
        Stephanie Benske</li>

        <li>
        Peter Bockhorst</li>

        <li>
        Russell Bohach</li>

        <li>
        David Bordow</li>

        <li>
        Tawny Brooks</li>

        <li>
        Allysa Brown</li>

        <li>
        Marvin Bynum
        </li>

        <li>
        Nicole Cameli</li>

        <li>
        Mark Cameli</li>

        <li>
        Lacey Coonen</li>

        <li>
        Alexander Cossi</li>

        <li>
        Pamela Crawford</li>

        <li>
        Frank Crivello II</li>

        <li>
        William Crowley</li>

        <li>
        Angela Cunningham</li>

        <li>
        Margaret Daun</li>

        <li>
        Steven DeVougas</li>

        <li>
        Dorothy Dey</li>

        <li>
        Joshua Dryak</li>

        <li>
        Barbara Due</li>

        <li>
        Marcia Facey Drame</li>

        <li>
        Rick Falk</li>

        <li>
        Catherine Flaherty</li>

        <li>
        Debra Fohr</li>

        <li>
        Laurie Frey</li>

        <li>
        Heidi Galvan</li>

        <li>
        Yolanda Gauna</li>

        <li>
        Stephen Hall</li>

        <li>
        Kelly Hedge</li>

        <li>
        Lovell Johnson</li>

        <li>
        Rochelle Johnson-Bent</li>

        <li>
        Christle Jones</li>

        <li>
        G. Steven Kaminski</li>

        <li>
        Tanner Kilander</li>

        <li>
        Carl Knepel</li>

        <li>
        Latrice Knighton</li>

        <li>
        Michael Knoeller</li>

        <li>
        Jon Lamendola</li>

        <li>
        Duke Lehto</li>

        <li>
        Lynne Levihn</li>

        <li>
        Porchia Lewand</li>

        <li>
        Steven Licata</li>

        <li>
        Eric Lowenberg</li>

        <li>
        David Malone</li>

        <li>
        Calvin Malone</li>

        <li>
        Robb Marcus</li>

        <li>
        Pamela Mehta</li>

        <li>
        Kathryn Mertz</li>

        <li>
        Justin Mertz</li>

        <li>
        Tom Miller</li>

        <li>
        Felicia Miller-Watson</li>

        <li>
        Mary Moore</li>

        <li>
        Elisabeth Mueller</li>

        <li>
        Daniel Narvey</li>

        <li>
        Sammi-Jo Nevin</li>

        <li>
        Stephan Nolten</li>

        <li>
        Caitlin Noonan</li>

        <li>
        Odalo Ohiku</li>

        <li>
        Scott Phillips</li>

        <li>
        Jennifer
        Pickett</li>

        <li>
        Kimberly Prescott</li>

        <li>
        Lisa Procaccio</li>

        <li>
        Matthew Puthukulam</li>

        <li>
        Christine Quinn</li>

        <li>
        Amber Raffeet August</li>

        <li>
        Erica Reib</li>

        <li>
        Gregory  Renden</li>

        <li>
        Michael Reyes</li>

        <li>
        Rosemary Reyes Cuevas</li>

        <li>
        Nicole Robbins</li>

        <li>
        Courtney Roelandts</li>

        <li>
        Ryan Sanson</li>

        <li>
        Kathryn Sarner</li>

        <li>
        Michael Schindhelm</li>

        <li>
        Molly Schmidt</li>

        <li>
        Claire Starling</li>

        <li>
        Dainey Thomas</li>

        <li>
        Michael Thurston</li>

        <li>
        Chris Velnetske</li>

        <li>
        Cheryl Ward</li>

        <li>
        Deanna Weiss</li>

        <li>
        S. Danielle  White</li>

        <li>
        Steven Wiechmann</li>

        <li>
        Nicole Willette</li>

        <li>
        Beth Zirgibel</li>

        <li>
        Edward Zlotocha</li>


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
