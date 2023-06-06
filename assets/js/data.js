// =========================================
// Website data, modify following the format

/**
 * Social links format:
 * - type: one of instagram, twitter, facebook, linkedin, skype, gmail, discord
 * - link: url to social profile
 */
const socials = [
  { type: 'instagram', link: 'https://www.instagram.com/valerimations' },
  { type: 'linkedin', link: 'https://www.linkedin.com/in/valeria-gestro-741049158/' },
  { type: 'gmail', link: 'mailto:gestro.valeria@gmail.com' },
  { type: 'discord', link: 'https://discord.com/users/ValGe#4167' },
];

/**
 * Used in the hero section after the "I'm" label
 * NOTE: a 3D Animator, Enthusiastic, Passionate, a Hard Worker, Diligent, Friendly, Trustworthy, Reliable
 */
const adjectives = ['a 3D Animator', 'Entusiastic', 'Passionate', 'a Hard Worker', 'Diligent', 'Friendly', 'Trustworthy', 'Reliable'];


/**
 * Video description: Check out my latest Showreel!
*/

/**
 * About paragraph
 */
const aboutParagraph = "I'm a keen 3D animator with a strong eye for detail, excellent problem solving skills and always eager to improve my craft. My enthusiasm for animation has helped me become a highly motivated team player with great communication skills across departments. I welcome new challenges and would be more than happy to relocate if required."
const bulletPoints = [
  { label: 'Birthday', value: '10th January 1996' },
  { label: 'Degree', value: 'Batchelor' },
  { label: 'Email', value: 'gestro.valeria@gmail.com' },
  { label: 'City', value: 'Genoa, ITA' },
]


/**
 * Skills => softwares
 * list icons
 * * list icons. Name of the file you want to show in forlder /assets/img/software-logos
*/
const softwareLogos = [
  '1512977157_TVPaint-logo.png',
  'Adobe_After_Effects-Logo.wine.png',
  'ArnoldRendere.jpg',
  'Blender (1).png',
  'Maya.webp',
  'MicrosoftOffice.png',
  'Mudbox.jpg',
  'PremierPro.png',
  'Renderman.png',
  'Shotgun_Software_Logo.png',
  'clickup-logo-gradient.png',
  'procreate-icon-search-display.png',
  'unreal_engine_logo_icon_144771.png',
]

/**
 * Curricolum
 * Current occupation
From January 2023  Part time animator at Untold Games.
Work experience
2022.                Freelance 3D character animator on a game for Make Animation/Giacomo Mora Srl.2020-2022.      Substitute Kindergarten teacher (multiple short contracts).2021.                Produced singlehandedly the animated introduction to “RED: three months with the                         rebels” temporary exhibition.2020-2021.      Shop Assistant at Bottega dei Fratelli Caruzzo.2019-2020.      Freelance designer for Chuggington tv show.2019-2020.      Employ at Equipage Srl. travel agency.2019.                Students carer in a two weeks study trip to Scotland.2019.                VR Technician at the festival Futura in Genoa, Terni and l’Aquila.2019.                Animator and entrepreneur at the start up Estro.2015-2018.      Student Ambassador at Falmouth University.
Education
2021-2023.      Animation Mentor graduate.2015-2018.      First class graduate in Animation and VFX at Falmouth University.2015.                British School. Genoa. Passed the International English Language Testing System exam (IELTS).2010-2015.      ITIS Italo Calvino. Genoa. Diploma di Maturità in Applied Sciences.
Volunteering, Training and Awards
2022-2023.      Women in Animation for Animation Mentor student club coordinator.2019.                Lego Storytelling for Business class.2017-2018.      Pre-intermediate French classes.2017 and 2018. Falmouth University. Won “Cecil Award” for excellence in 3D animation.2014.                European Driving Licence.2013.                European Computer Driving Licence (ECDL).2013.                Scuola di Robotica. Arduino programming and basic Robotics course.2004-2021.      Part of the Italian Scout movement.

*/

/**
 * Contacts paragraph
 */
const contactsParagraph = "Interested in having a conversation to knowing me better? Feel free to reach out to me!";

// =========================================

// Logic to make stuff work - DO NOT UPDATE

const socialLinks = document.getElementById('social-links');
if (socialLinks) {
  socialLinks.innerHTML = socials
    .map((item) => `<a href="${item.link}" target="_blank" class="${item.type}"><i class="bx bxl-${item.type}"></i></a>`)
    .join('')
}
const socialLinksContacts = document.getElementById('social-links-contacts');
if (socialLinksContacts) {
  socialLinksContacts.innerHTML = socials
    .map((item) => `<a href="${item.link}" target="_blank" class="${item.type}"><i class="bx bxl-${item.type}"></i></a>`)
    .join('')
}

const typed = new Typed("#hero-adjectives", {
  strings: adjectives,
  loop: true,
  typeSpeed: 90,
  backSpeed: 50,
  backDelay: 2000
});


const aboutSectionParagraph = document.getElementById('about-paragraph');
if (aboutParagraph) {
  aboutSectionParagraph.innerText = aboutParagraph;
}

const softwaresSection = document.getElementById('softwares');
if (softwareLogos.length > 0) {
  softwaresSection.innerHTML = softwareLogos.map((logo) => `<span><img src="./assets/img/software-logos/${logo}" /></span>`).join('');
}

const contactSectionParagraph = document.getElementById('contact-paragraph');
if (contactsParagraph) {
  contactSectionParagraph.innerText = contactsParagraph;
}
