export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  location: string;
  photo: string;
  shortBio: string;
  education: string[];
  internship: string;
  primaryInstruments: string[];
  specialties: string[];
  fullBioParagraphs: string[];
  quote?: string;
}

export interface PartnerFacility {
  name: string;
  department?: string;
  address?: string;
  city: string;
  description: string;
  type: 'Hospital' | 'Autism Centre' | 'Long-Term Care' | 'Mental Health' | 'Senior Living';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  audience: string;
  pageSlug: string;
}

export interface ClinicalDomain {
  name: string;
  description: string;
  goals: string[];
  icon: string;
}

export interface InterventionTechnique {
  title: string;
  description: string;
  clinicalImpact: string;
}

export const SITE_METADATA = {
  brandName: 'Arpeggio Music Therapy',
  tagline: 'A New Direction in Health Care',
  foundedYear: '2008',
  founder: 'Elizabeth Eldridge, BMT, MTA, RMT',
  phone: '+01 (506) 754-6298',
  phoneNote: 'Confidential voicemail',
  email: 'elizabeth@arpeggiomusictherapy.com',
  originLocation: 'St. George, Charlotte County, New Brunswick',
  serviceAreas: [
    'Saint John & Greater Saint John Area',
    'Fredericton & Capital Region',
    'Charlotte County (St. George, St. Stephen, St. Andrews)',
    'Southern & Central New Brunswick'
  ],
  logoBanner: '/assets/logo_banner.png',
  logoColour: '/assets/logo_colour.png',
  colors: {
    purple: '#5E4E8C',
    blue: '#2E8CB8',
    green: '#4E9A68',
    lightBlue: '#E8F5FC',
    lightGreen: '#EDF8F1',
    lightPurple: '#F5F3F9',
    darkSlate: '#1E1B2E',
    mutedGray: '#64748B'
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'elizabeth-eldridge',
    name: 'Elizabeth Eldridge',
    credentials: 'BMT, MTA, RMT',
    role: 'Founder & Director, Certified Music Therapist',
    location: 'Charlotte County & Southern New Brunswick',
    photo: '/assets/elizabeth_photo.png',
    shortBio: 'Certified Music Therapist, Professional Speaker, and Psychological Health & Safety Consultant. Founded Arpeggio Music Therapy in 2008.',
    education: [
      'Bachelor of Music Therapy (BMT) — Acadia University',
      'Clinical Internship in Mental Health Recovery Services — St. Joseph\'s Hospital, Hamilton, Ontario',
      'Certified Psychological Health & Safety Advisor'
    ],
    internship: "Mental Health Recovery Services at St. Joseph's Hospital in Hamilton, Ontario (outpatient, inpatient, and forensic psychiatric settings).",
    primaryInstruments: ['Piano', 'Voice', 'Guitar'],
    specialties: [
      'Adult & Geriatric Mental Health',
      'Forensic & Inpatient Psychiatry',
      'Psychological Health & Safety in the Workplace',
      'Professional Keynote Speaking & Training',
      'Clinical Internship Supervision (CAMT)'
    ],
    fullBioParagraphs: [
      'Elizabeth Eldridge is a Certified Music Therapist, Professional Speaker, and Psychological Health & Safety Consultant. Following her Bachelor degree at Acadia University, Elizabeth completed her clinical music therapy internship in Mental Health Recovery Services at St. Joseph\'s Hospital in Hamilton, Ontario. In this role, she gained invaluable experience working on an interdisciplinary team supporting clients diagnosed with various psychiatric conditions in outpatient, inpatient, and forensic settings.',
      'She returned home to Charlotte County, New Brunswick in 2008 and established her music therapy practice, which has expanded to include internship and subcontracting positions. Arpeggio Music Therapy\'s team of Certified Music Therapists provides consultations, educational opportunities, and clinical music therapy services throughout the province.',
      'In addition to managing day-to-day operations for her music therapy practice, Elizabeth provides training and consulting services across Eastern Canada through Arpeggio Health Services, which she founded in 2012. As a Certified Psychological Health & Safety Advisor, Elizabeth provides training and consultation services working with companies large and small that are striving to optimize workplace mental health to boost productivity, decrease absenteeism, and improve employee satisfaction and morale.',
      'Elizabeth has trained over 4,000 members of the public in the Mental Health Commission of Canada\'s Mental Health First Aid program and facilitates several other standardized and original workshops on mental health stigma and awareness, suicide, and related topics.',
      'As a keynote speaker, Elizabeth has taken the stage for conferences and events hosted by WorkSafe NB, Workers Compensation Board of PEI, J.D. Irving Ltd., Canadian Mental Health Association of Alberta, New Brunswick Construction Safety Association, and the Atlantic Institute on Aging among many others. Elizabeth\'s poignant message, interactive approach, and ability to deliver even the most sensitive subject matter in an accessible, non-threatening manner is consistently well-received by audiences across North America.',
      'Elizabeth presently serves in the Vice President role on the Board of Directors for both the Alzheimer Society of New Brunswick and the Eastern Charlotte Chamber of Commerce. She volunteered on the Board and various committees for the Atlantic Association for Music Therapy for several years and completed a two-year term as President of the Canadian Association of Music Therapists in 2019. She is also an active member of the Canadian Association of Professional Speakers.',
      'Elizabeth considers her busy but rewarding work schedule to be a true source of joy in her life, but she makes sure to take a regular dose of her own medicine in the form of self-care—which she cites in her presentations as a core element of resiliency and maintaining positive mental health. She identifies the three essential components of her personal "happy place" as a hot cup of coffee, a good book, and her best gal pal: her Weimaraner pup, Ruby.'
    ],
    quote: 'Music provides a profound, non-verbal pathway to dignity, emotional clarity, and human connection when words alone are not enough.'
  },
  {
    id: 'catherine-kennedy',
    name: 'Catherine Kennedy',
    credentials: 'BMT',
    role: 'Certified Music Therapist & Service Provider for Saint John',
    location: 'Saint John, New Brunswick',
    photo: '/assets/catherine_photo.jpg',
    shortBio: 'Saint John native and Acadia University graduate. Clinical provider across special needs, seniors care, perinatal health, and local singer-songwriter.',
    education: [
      'Bachelor of Music Therapy (BMT) — Acadia University (2019)',
      'Clinical Internship — Arpeggio Music Therapy'
    ],
    internship: 'Arpeggio Music Therapy (working with infants, individuals living with mental illness, and young expecting and parenting women).',
    primaryInstruments: ['Acoustic Guitar', 'Voice', 'Songwriting'],
    specialties: [
      'Person-Centred Collaborative Therapy',
      'Adolescents & Adults with Special Needs',
      'Older Adults & Long-Term Care',
      'Perinatal & Maternal Mental Health',
      'Songwriting & Improvisation'
    ],
    fullBioParagraphs: [
      'Catherine was born and raised in Saint John, New Brunswick, with a lifelong connection to music. She achieved her Bachelor degree in Music Therapy at Acadia University in 2019 and while there had the privilege of working with adolescents and adults with special needs, older adults in long-term care, and children who had experienced grief and loss.',
      'Catherine then moved back home to complete her clinical internship with Arpeggio Music Therapy, which furthered her experience, giving her the opportunity to work with infants, individuals living with mental illness, as well as young expecting and parenting women.',
      'With a person-centred therapy approach, Catherine aims to support the collaborative process of creativity, self-expression, and self-empowerment through music. As a singer-songwriter herself, she is passionate about helping people find their own unique voice through improvisation and songwriting.',
      'Outside the world of music therapy, Catherine enjoys performing, seeking out the nearest coffee shop, going on outdoor adventures, and hanging out with her friends at L\'Arche.'
    ],
    quote: 'Everyone carries a voice that deserves to be heard. Music gives people the safe space to explore who they are and celebrate their strengths.'
  },
  {
    id: 'jasmine-michel',
    name: 'Jasmine Michel',
    credentials: 'BMT, MTA',
    role: 'Certified Music Therapist & Service Provider for Fredericton',
    location: 'Fredericton, New Brunswick',
    photo: '/assets/jasmine_photo.jpg',
    shortBio: 'Wilfrid Laurier graduate with 20+ years on violin. Specializes in neurodiversity-affirmation, capacity building, and community song.',
    education: [
      'Bachelor of Music Therapy (BMT) — Wilfrid Laurier University (2017)',
      'Clinical Internship — Catholic Family Services Bureau of PEI'
    ],
    internship: 'Catholic Family Services Bureau of PEI (intellectual disabilities, dementia, childhood grief/anxiety, inpatient mental health).',
    primaryInstruments: ['Violin (20+ years)', 'Guitar', 'Ukulele', 'Voice'],
    specialties: [
      'Neurodiversity-Affirming Clinical Care',
      'Critical Disability Studies & Capacity Building',
      'Violin & String Explorations',
      'Childhood Grief & Anxiety Interventions',
      'Community Song & Group Vocal Work'
    ],
    fullBioParagraphs: [
      'Jasmine received her music therapy training at Wilfrid Laurier University, completing a Bachelor of Music Therapy in 2017. At Laurier, Jasmine studied her main instrument, the violin, and also had the opportunity to delve into improvisation and critical disability studies.',
      'She moved to the East Coast to complete an internship through the Catholic Family Services Bureau of PEI where she served a diverse clientele, including youth and adults labelled with an intellectual disability, individuals living with dementia, early childhood groups, children dealing with grief and anxiety, and adults in an inpatient mental health setting. Following her accreditation, Jasmine worked with children and young adults in Prince Edward Island in educational and community settings with Singing Sands Music Therapy.',
      'Jasmine has over 20 years of experience on the violin, which she uses in her music therapy practice along with guitar, ukulele, voice, and a variety of instruments based on the client’s interest. Jasmine’s music therapy practice is informed by philosophies of empowerment and capacity-building, and through her work she aims to celebrate and affirm neurodiversity and foster an inclusive community.',
      'Beyond the music therapy realm, Jasmine performs as a songwriter and improviser, frequently collaborating with other musicians, dancers, and theatre artists. She has taught violin and ukulele to children and adults, and frequently leads community groups in song.'
    ],
    quote: 'Therapy should celebrate individual difference and strengthen autonomy through music, creating inclusive spaces where every person belongs.'
  }
];

export const PARTNER_FACILITIES: PartnerFacility[] = [
  {
    name: 'Saint John Regional Hospital',
    department: 'Inpatient Acute Psychiatry (Unit 4D-North)',
    address: '400 University Avenue',
    city: 'Saint John, NB',
    type: 'Hospital',
    description: 'Providing clinical music therapy interventions for acute psychiatric patients, facilitating emotional stability, cognitive grounding, and therapeutic expression.'
  },
  {
    name: 'Dragonfly Centre for Autism',
    department: 'Pediatric & Youth Specialized Services',
    address: '445 Prince of Wales Street',
    city: 'Saint John, NB',
    type: 'Autism Centre',
    description: 'Supporting communication, sensory regulation, social engagement, and neurodiversity-affirming growth for children and youth on the autism spectrum.'
  },
  {
    name: 'Rocmaura Nursing Home',
    department: 'Memory & Long-Term Care Units',
    city: 'Saint John, NB',
    type: 'Long-Term Care',
    description: 'Enhancing reality orientation, cognitive recall, mood elevation, and quality of life for residents in long-term elder care.'
  },
  {
    name: 'York Care Centre',
    department: 'Mental Health Recovery Services & Geriatrics',
    address: '100 Sunset Blvd',
    city: 'Fredericton, NB',
    type: 'Mental Health',
    description: 'Facilitating mental health recovery, community connection, and cognitive stimulation through tailored clinical music interventions.'
  },
  {
    name: 'Loch Lomond Villa & The Village',
    department: 'Dementia & Psychogeriatric Care',
    address: '185 Loch Lomond Road',
    city: 'Saint John, NB',
    type: 'Long-Term Care',
    description: 'Utilizing receptive and active music techniques to reduce agitation, maintain fine motor mobility, and reawaken cherished musical memories.'
  },
  {
    name: 'Wauklehegan Manor',
    department: 'Residential Elder Care',
    city: 'McAdam / Southern NB',
    type: 'Long-Term Care',
    description: 'Bringing joyful communal music-making, vocal engagement, and individualized bedside sessions to older adults.'
  },
  {
    name: "Parkland in the Valley (Shannex, Inc.)",
    department: 'Retirement Living & Enhanced Care',
    address: '70 Swanson Drive',
    city: 'Quispamsis / Saint John, NB',
    type: 'Senior Living',
    description: 'Providing weekly structured music therapy groups and individual sessions fostering vitality, fellowship, and emotional wellness.'
  }
];

export const CLINICAL_DOMAINS: ClinicalDomain[] = [
  {
    name: 'Cognitive Domain',
    description: 'Stimulating neural pathways, improving reality orientation, and supporting memory recall through structured melodic and rhythmic cues.',
    goals: [
      'Improve reality orientation and temporal grounding',
      'Provide targeted intellectual stimulation',
      'Strengthen short-term and long-term memory retrieval',
      'Stimulate concentration, auditory processing, and sustained focus'
    ],
    icon: 'Brain'
  },
  {
    name: 'Emotional Domain',
    description: 'Offering a secure, non-threatening medium to express complex feelings, decrease anxiety, and build authentic self-worth.',
    goals: [
      'Decrease acute stress, physiological agitation, and anxiety',
      'Increase self-esteem, autonomy, and personal agency',
      'Encourage general emotional stability and mood regulation',
      'Provide a healthy, positive outlet for non-verbal emotional expression'
    ],
    icon: 'Heart'
  },
  {
    name: 'Physical Domain',
    description: 'Utilizing rhythm-driven movement (auditory-motor entrainment) to rehabilitate motor coordination, range of motion, and physical ease.',
    goals: [
      'Increase active and passive joint range of motion',
      'Improve gait stability, stride cadence, and physical mobility',
      'Decrease subjective perception of acute and chronic pain',
      'Enhance fine and gross motor dexterity and breath regulation'
    ],
    icon: 'Activity'
  },
  {
    name: 'Social & Interpersonal Domain',
    description: 'Fostering collaborative group music-making that dissolves social isolation and nurtures healthy communicative bonds.',
    goals: [
      'Improve social interactions and interpersonal cooperation',
      'Decrease feelings of loneliness and chronic social isolation',
      'Enhance both verbal and non-verbal communication skills',
      'Foster inclusive community cohesion and mutual peer support'
    ],
    icon: 'Users'
  },
  {
    name: 'Spiritual & Holistic Domain',
    description: 'Supporting existential peace, comforting spiritual needs, and nurturing an enduring sense of inner serenity across life transitions.',
    goals: [
      'Meet personal religious, philosophical, and spiritual needs',
      'Encourage a deep, sustained sense of wholeness and well-being',
      'Support peaceful transition and comfort during palliative care',
      'Celebrate life stories through legacy songs and cherished melodies'
    ],
    icon: 'Sparkles'
  }
];

export const INTERVENTION_TECHNIQUES: InterventionTechnique[] = [
  {
    title: 'Structured & Spontaneous Music-Making',
    description: 'Structured and spontaneous instrument play provides a non-threatening means for expressing positive and negative emotions while fostering collaborative communication.',
    clinicalImpact: 'Builds self-confidence, encourages sensory motor integration, and creates spontaneous joy without requiring prior musical training.'
  },
  {
    title: 'Receptive Music Listening',
    description: 'Carefully curated receptive listening can be relaxing (slowing heart rate, regulating respiration, easing muscle tension) or invigorating (stimulating positive energy and elevating mood).',
    clinicalImpact: 'Clinically proven to modulate the autonomic nervous system, decrease cortisol, and alleviate depressive rumination.'
  },
  {
    title: 'Songwriting & Lyric Analysis',
    description: 'Composing original melodies and writing or analyzing lyrics gives clients a socially appropriate vehicle to organize intricate thoughts and emotions.',
    clinicalImpact: 'Results in tangible creative agency, processing trauma or transition, and building lasting emotional resolution.'
  },
  {
    title: 'Movement to Music & Motor Entrainment',
    description: 'Music motivates movement. Certified Music Therapists use rhythmic auditory stimulation (RAS) to advance gross and fine motor skills and enhance balance.',
    clinicalImpact: 'Restores gait cadence following strokes or ABI and improves physical mobility in Parkinson’s disease and geriatric care.'
  },
  {
    title: 'Music and Imagery (Guided Relaxation)',
    description: 'Pairing tailored acoustic resonance with evocative imagery in the client’s mind encourages profound self-exploration and non-pharmaceutical stress release.',
    clinicalImpact: 'Incorporates progressive muscle relaxation (PMR) to diminish somatic tension and chronic pain perception.'
  },
  {
    title: 'Instrumental Exploration & Vocal Instruction',
    description: 'Exploring instruments (ukulele, piano, guitar, violin, djembe, percussion) and vocalizing gives clients the freedom to express what cannot be said with words.',
    clinicalImpact: 'Strengthens speech articulation following neurological trauma, affirms identity, and promotes genuine self-fulfillment.'
  }
];

export const WHO_WE_SERVE_POPULATIONS = [
  {
    title: 'Autism Spectrum Disorder & Special Needs',
    desc: 'Children, adolescents, and adults developing communication pathways, sensory integration, and self-advocacy through non-verbal musical dialogues.',
    context: 'Schools, community centres, clinical practices, and private home sessions.'
  },
  {
    title: 'Adolescents & Adults Living with Mental Illness',
    desc: 'Support for individuals navigating acute anxiety, depression, trauma/PTSD, bipolar disorder, and psychiatric rehabilitation.',
    context: 'Hospital acute psychiatry units, mental health recovery services, and outpatient care.'
  },
  {
    title: 'Older Adults & Alzheimer’s / Dementia Care',
    desc: 'Stimulating long-term musical memory, decreasing sundowning agitation, uplifting mood, and validating the person behind the diagnosis.',
    context: 'Long-term care facilities, nursing homes, and adult day centers across NB.'
  },
  {
    title: 'Neurological Challenges (Stroke & ABI)',
    desc: 'Rehabilitating expressive speech through Melodic Intonation Therapy (MIT) and restoring motor gait using rhythmic auditory stimulation.',
    context: 'Hospital rehabilitation wards, clinical contracts, and home health care.'
  },
  {
    title: 'At-Risk Youth & Children in Grief',
    desc: 'Providing healthy, creative emotional outlets for processing loss, trauma, social isolation, and family disruption through songwriting and beat-making.',
    context: 'Community programs, youth organizations, and therapeutic groups.'
  },
  {
    title: 'Palliative & End-of-Life Care',
    desc: 'Offering gentle auditory comfort, non-narcotic pain easing, existential peace, and musical legacy creation for individuals and their loved ones.',
    context: 'Hospice units, palliative hospital care, and family residences.'
  },
  {
    title: 'Speech & Language Impairments',
    desc: 'Harnessing the brain’s right hemisphere musical pathways to bridge language gaps, rebuild fluency, and reinforce verbal confidence.',
    context: 'Pediatric care and neuro-rehabilitation therapy.'
  },
  {
    title: 'Obstetrics, Neonatal & Perinatal Health',
    desc: 'Supporting expecting mothers, young parenting women, and infants with soothing melodic resonance that reduces stress and strengthens parent-child bonding.',
    context: 'Community health centres and perinatal support programs.'
  }
];

export const CERTIFICATION_REQUIREMENTS = [
  {
    title: 'Bachelor of Music Therapy (BMT)',
    detail: 'Completion of a four-year university degree combining musicology, human anatomy, psychology, neuroscience, and clinical coursework.'
  },
  {
    title: '1,000-Hour Supervised Clinical Internship',
    detail: 'Rigorous supervised clinical internship under an accredited MTA mentor across diverse hospital, school, and community populations.'
  },
  {
    title: 'Standardized Board Certification Exam',
    detail: 'Successful completion of the comprehensive standardized Board Certification exam administered by the CBMT.'
  },
  {
    title: 'MTA Credential & CAMT Membership',
    detail: 'Good standing with the Canadian Association of Music Therapists, mandatory continuing education units, and adherence to the CAMT Code of Ethics.'
  },
  {
    title: 'Professional Liability Insurance',
    detail: 'Active comprehensive clinical liability insurance carried by every therapist at all times.'
  }
];

export const INTERNSHIP_DETAILS = {
  hoursRequired: 1000,
  supervisor: 'Elizabeth Eldridge (BMT, MTA, RMT)',
  eligibility: 'Fourth-year Bachelor of Music Therapy (BMT) students currently studying at accredited Canadian universities.',
  location: 'Saint John, New Brunswick and surrounding regional clinical sites.',
  flexibility: 'Positions are highly flexible and can be tailored to meet the needs of the intern with regards to preferred client population, timeline, and specific areas to be targeted for academic, clinical, and professional growth.',
  populations: [
    'Children and adults with special needs, including Autism Spectrum Disorder',
    'Adolescents and adults with mental illness (inpatient and recovery services)',
    'Geriatrics, including Alzheimer’s disease, dementia, and psychogeriatrics',
    'Infants and young expecting or parenting women in community programs'
  ],
  applicationRequirements: [
    'Comprehensive resume / CV detailing musical background and clinical practicum experience',
    'Formal Letter of Intent outlining personal clinical philosophies, learning objectives, and population interests',
    'Official academic transcripts from accredited BMT program',
    'Three professional or academic references (including clinical practicum supervisor)'
  ],
  contactEmail: 'elizabeth@arpeggiomusictherapy.com'
};
