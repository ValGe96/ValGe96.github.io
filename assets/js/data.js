// =========================================
// Website data, modify following the format

/**
 * Social links format:
 * - type: one of instagram, twitter, facebook, linkedin, skype
 * - link: url to social profile
 */
const socials = [
  { type: 'twitter', link: 'https://google.com' },
  { type: 'facebook', link: 'https://google.com' },
  { type: 'instagram', link: 'https://google.com' },
  { type: 'skype', link: 'https://google.com' },
  { type: 'linkedin', link: 'https://google.com' },
];

/**
 * Used in the hero section after the "I'm" label
 */
const adjectives = ['3D Animator', 'Entusiastic', 'Veramente Euforica'];

/**
 * Contacts paragraph
 */
const contactsParagraph = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";


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

const contactSectionParagraph = document.getElementById('contact-paragraph');
if (socialLinksContacts) {
  contactSectionParagraph.innerText = contactsParagraph;
}
