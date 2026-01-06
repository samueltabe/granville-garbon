document.addEventListener('DOMContentLoaded', () => {
    
    // FAQ Accordion Logic
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const item = acc.parentElement;
            const icon = acc.querySelector('i');
            
            // Close other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if(otherItem !== item) {
                    otherItem.classList.remove('active');
                    // Reset icon of others
                    const otherIcon = otherItem.querySelector('.accordion-header i');
                    if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Mobile Menu Toggle logic
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(menuBtn){
        menuBtn.addEventListener('click', () => {
            if(mobileNav.style.display === 'none') {
                mobileNav.style.display = 'block';
            } else {
                mobileNav.style.display = 'none';
            }
        });
    }

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
        });
    });

    // Translations and Language Switching
    const translations = {
        en: {
            'nav.about': 'About',
            'nav.who': "Who It's For",
            'nav.topics': 'Topics',
            'nav.venue': 'Venue',
            'nav.programme': 'Programme',
            'nav.faq': 'FAQ',
            'nav.register': 'Register Now',

            'hero.title': 'Workshop on Energy Self-Production in Gabon',
            'hero.subheading': 'Launch of the National Programme for Energy Self-Supply (Auto-alimentation energetique)',
            'hero.chip.date': '<i class="fa-regular fa-calendar"></i> Wed, 15 Jan 2026',
            'hero.chip.time': '<i class="fa-regular fa-clock"></i> 09:30 – 18:00',
            'hero.chip.location': '<i class="fa-solid fa-location-dot"></i> Radisson Blu, Libreville',
            'hero.cta.register': 'Register for Workshop',
            'hero.cta.download': 'Download Invitation',
            'hero.hosted': 'Hosted by: <strong>Ministry of Universal Access to Water & Energy</strong> + <strong>Granville Energy</strong>',

            'about.title': 'Setting a New Standard',
            'about.lead': 'Protocol of Agreement signed 06 October 2025 with the Ministry to support a national solar self-production programme.',
            'about.body': 'This workshop serves as a vital information and exchange session for organisations with rooftop space to learn about solar + storage options, eligibility, and participation steps.',

            'objectives.title': 'Core Objectives',
            'objectives.obj1.title': 'Launch Programme',
            'objectives.obj1.text': 'Officially launch and promote the national programme for energy self-supply in Gabon.',
            'objectives.obj2.title': 'Educate & Explain',
            'objectives.obj2.text': 'Detail solar/battery solutions, eligibility criteria, and the evaluation process.',
            'objectives.obj3.title': 'Actionable Steps',
            'objectives.obj3.text': 'Pre-screen participants for energy audits, MoUs, and future solar deployments.',

            'who.title': 'Who Should Attend?',
            'who.p': 'If you manage a facility with rooftop space and recurring electricity costs, this event is for you.',
            'who.li1': 'Government ministries and agencies',
            'who.li2': 'Hospitals, health facilities, universities',
            'who.li3': 'Local authorities (municipalities, councils)',
            'who.li4': 'Public and semi-public institutions',
            'who.li5': 'Industrial, mining, and commercial companies',

            'topics.title': 'Workshop Topics',
            'topics.main.title': '<i class="fa-solid fa-layer-group" style="color:var(--primary);"></i> Main Topics',
            'topics.main.li1': 'Key challenges and opportunities in Gabon',
            'topics.main.li2': 'Technical solar & storage solutions',
            'topics.main.li3': 'Financing mechanisms',
            'topics.main.li4': 'Administrative procedures',
            'topics.special.title': '<i class="fa-solid fa-star" style="color:var(--primary);"></i> Special Attention',
            'topics.special.li1': 'Optimising available rooftop space',
            'topics.special.li2': 'Reducing electricity drawn from the national grid',
            'topics.special.li3': 'Understanding the "Auto-alimentation" framework',

            'venue.title': 'Venue & Logistics',
            'venue.hotel': 'Radisson Blu Hotel',
            'venue.city': 'Libreville, Gabon',
            'venue.arrival': '<strong><i class="fa-regular fa-clock" style="color:var(--primary); margin-right:5px;"></i> Arrival:</strong> Please arrive by 09:15 for check-in.',
            'venue.what.title': '<strong><i class="fa-solid fa-briefcase" style="color:var(--primary); margin-right:5px;"></i> What to bring:</strong>',
            'venue.what.li1': 'Recent electricity bill(s)',
            'venue.what.li2': 'Site/facility address(es)',
            'venue.what.li3': 'Approximate rooftop availability',

            'programme.title': 'Programme Snapshot',
            'programme.item1.title': 'Institutional Opening',
            'programme.item1.text': 'Ministry of Universal Access to Water & Energy + Granville Energy.',
            'programme.item2.title': 'Presentations & Case Studies',
            'programme.item2.text': 'Granville Industries Gabon, flagship projects, and installation examples.',
            'programme.item3.title': 'National Programme Overview',
            'programme.item3.text': 'Eligibility, financing models, and timelines.',
            'programme.item4.title': 'Interactive Session',
            'programme.item4.text': 'Registration, energy needs forms, Q&A, and next steps.',
            'programme.cta': 'Secure Your Spot',

            'faq.title': 'Frequently Asked Questions',
            'faq.q1': 'Who should attend this workshop?',
            'faq.a1': 'Representatives from government ministries, hospitals, universities, local authorities, and commercial/industrial companies with rooftop space.',
            'faq.q2': 'Is attendance free?',
            'faq.a2': 'Yes, attendance is free for qualified organisations, but registration is mandatory as seats are limited.',
            'faq.q3': 'What language will be used?',
            'faq.a3': 'The workshop will primarily be conducted in French, with English support available.',
            'faq.q4': 'What information should we prepare?',
            'faq.a4': "It is highly recommended to bring recent electricity bills and basic details about your facility's rooftop space.",

            'register.title': 'Ready to participate?',
            'register.p': 'Seats are limited. Register now to confirm your attendance and receive the full agenda.',
            'register.cta': 'Register / Sign Up',
            'register.micro': "You'll receive a confirmation email with event details immediately.",

            'footer.contact.title': 'Contact Support',
            'footer.contact.p': 'For registration and participation queries:',
            'footer.contact.email': 'events@granville.com',
            'footer.contact.phone': '+241 00 00 00 00',
            'footer.orgs.title': 'Organisers',
            'footer.copy': '© 2026 Granville Energy. Registration data used for event administration.'
        },
        fr: {
            'nav.about': 'A propos',
            'nav.who': 'Pour qui',
            'nav.topics': 'Themes',
            'nav.venue': 'Lieu',
            'nav.programme': 'Programme',
            'nav.faq': 'FAQ',
            'nav.register': "S'inscrire",

            'hero.title': "Atelier sur l'auto-production d'energie au Gabon",
            'hero.subheading': "Lancement du Programme National d'Auto-alimentation energetique",
            'hero.chip.date': '<i class="fa-regular fa-calendar"></i> Mer, 15 Jan 2026',
            'hero.chip.time': '<i class="fa-regular fa-clock"></i> 09:30 – 18:00',
            'hero.chip.location': '<i class="fa-solid fa-location-dot"></i> Radisson Blu, Libreville',
            'hero.cta.register': "S'inscrire a l'atelier",
            'hero.cta.download': "Telecharger l'invitation",
            'hero.hosted': 'Organise par : <strong>Ministry of Universal Access to Water & Energy</strong> + <strong>Granville Energy</strong>',

            'about.title': 'Poser une nouvelle reference',
            'about.lead': "Protocole d'accord signe le 06 octobre 2025 avec le Ministere pour soutenir un programme national de production solaire.",
            'about.body': "Cet atelier est une session d'information et d'echange pour les organisations disposant d'espaces de toiture afin d'apprendre les options solaire + stockage, l'eligibilite et les etapes de participation.",

            'objectives.title': 'Objectifs principaux',
            'objectives.obj1.title': 'Lancer le programme',
            'objectives.obj1.text': "Lancer et promouvoir officiellement le programme national d'auto-alimentation energetique au Gabon.",
            'objectives.obj2.title': 'Informer & Expliquer',
            'objectives.obj2.text': "Detailler les solutions solaire/batterie, les criteres d'eligibilite et le processus d'evaluation.",
            'objectives.obj3.title': 'Actions concretes',
            'objectives.obj3.text': "Pre-selectionner les participants pour audits energetiques, protocoles d'accord et deploiements futurs.",

            'who.title': 'Qui doit assister ?',
            'who.p': "Si vous gerez une installation avec un espace de toiture et des couts d'electricite recurrents, cet evenement est pour vous.",
            'who.li1': 'Ministeres et agences gouvernementales',
            'who.li2': 'Hopitaux, centres de sante, universites',
            'who.li3': 'Autorites locales (municipalites, conseils)',
            'who.li4': 'Institutions publiques et semi-publiques',
            'who.li5': 'Entreprises industrielles, minieres et commerciales',

            'topics.title': "Sujets de l'atelier",
            'topics.main.title': '<i class="fa-solid fa-layer-group" style="color:var(--primary);"></i> Sujets principaux',
            'topics.main.li1': 'Principaux defis et opportunites au Gabon',
            'topics.main.li2': 'Solutions techniques solaire & stockage',
            'topics.main.li3': 'Mecanismes de financement',
            'topics.main.li4': 'Procedures administratives',
            'topics.special.title': '<i class="fa-solid fa-star" style="color:var(--primary);"></i> Attention speciale',
            'topics.special.li1': "Optimiser l'espace de toiture disponible",
            'topics.special.li2': "Reduire la consommation sur le reseau national",
            'topics.special.li3': "Comprendre le cadre d'Auto-alimentation",

            'venue.title': 'Lieu & Logistique',
            'venue.hotel': 'Radisson Blu Hotel',
            'venue.city': 'Libreville, Gabon',
            'venue.arrival': '<strong><i class="fa-regular fa-clock" style="color:var(--primary); margin-right:5px;"></i> Arrivee :</strong> Veuillez arriver avant 09:15 pour l enregistrement.',
            'venue.what.title': '<strong><i class="fa-solid fa-briefcase" style="color:var(--primary); margin-right:5px;"></i> A apporter :</strong>',
            'venue.what.li1': "Facture(s) d'electricite recentes",
            'venue.what.li2': "Adresse(s) du site/de l'installation",
            'venue.what.li3': "Disponibilite approximative de la toiture",

            'programme.title': 'Apercu du programme',
            'programme.item1.title': 'Ouverture institutionnelle',
            'programme.item1.text': "Ministere de l'acces universel a l'eau et a l'energie + Granville Energy.",
            'programme.item2.title': 'Presentations & etudes de cas',
            'programme.item2.text': "Granville Industries Gabon, projets phares et exemples d'installation.",
            'programme.item3.title': 'Vue d\'ensemble du programme national',
            'programme.item3.text': "Eligibilite, modeles de financement et calendriers.",
            'programme.item4.title': 'Session interactive',
            'programme.item4.text': "Inscription, formulaires de besoins energetiques, Q&A et prochaines etapes.",
            'programme.cta': 'Reservez votre place',

            'faq.title': 'Questions frequemment posees',
            'faq.q1': "Qui doit assister a cet atelier ?",
            'faq.a1': "Representants des ministeres, hopitaux, universites, autorites locales et entreprises disposant d'espaces de toiture.",
            'faq.q2': "L'assistance est-elle gratuite ?",
            'faq.a2': "Oui, la participation est gratuite pour les organisations qualifiees, mais l'inscription est obligatoire car les places sont limitees.",
            'faq.q3': "Quelle langue sera utilisee ?",
            'faq.a3': "L'atelier se deroulera principalement en francais, avec un support en anglais.",
            'faq.q4': "Quelles informations devons-nous preparer ?",
            'faq.a4': "Il est recommande d'apporter des factures d'electricite recentes et des informations de base sur l'espace de toiture.",

            'register.title': 'Pret a participer ?',
            'register.p': "Les places sont limitees. Inscrivez-vous maintenant pour confirmer votre participation et recevoir l'agenda complet.",
            'register.cta': "S'inscrire / S'inscrire",
            'register.micro': "Vous recevrez immediatement un e-mail de confirmation avec les details de l'evenement.",

            'footer.contact.title': 'Assistance',
            'footer.contact.p': "Pour les questions d'inscription et de participation :",
            'footer.contact.email': 'events@granville.com',
            'footer.contact.phone': '+241 00 00 00 00',
            'footer.orgs.title': 'Organisateurs',
            'footer.copy': "© 2026 Granville Energy. Donnees d'inscription utilisees pour l'administration de l'evenement."
        }
    };

    // Apply translations when language changes
    function applyLanguage(lang) {
        document.documentElement.lang = (lang === 'fr') ? 'fr' : 'en';

        // Translate plain text nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (!key) return;
            const val = translations[lang] && translations[lang][key];
            if (val !== undefined) el.textContent = val;
        });

        // Translate HTML content (preserves icons/formatting)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            if (!key) return;
            const val = translations[lang] && translations[lang][key];
            if (val !== undefined) el.innerHTML = val;
        });

        // Update active lang button
        document.querySelectorAll('.lang-toggle span').forEach(s => {
            s.classList.toggle('active', s.dataset.lang === lang);
        });

        // Save language preference
        localStorage.setItem('site_lang', lang);
    }

    // Initialize with saved language or default to English
    const savedLang = localStorage.getItem('site_lang') || 'en';
    applyLanguage(savedLang);

    // Wire language toggle clicks
    document.querySelectorAll('.lang-toggle span').forEach(span => {
        span.addEventListener('click', () => {
            const lang = span.dataset.lang;
            if (!lang) return;
            applyLanguage(lang);
        });
    });

});

