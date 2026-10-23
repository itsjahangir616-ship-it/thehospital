import drHumayunImg from '@/src/assets/images/dr_humayun_studio_crop.jpg';
import drHumayunKeynoteImg from '@/src/assets/images/dr_humayun_aams_keynote.jpeg';
import drShazmaImg from '@/src/assets/images/dr_shazma_portrait_1792647937358.jpg';
import hospitalInteriorImg from '@/src/assets/images/hospital_facade_interior_1792647937873.jpg';
import operatingTheatreImg from '@/src/assets/images/operating_theatre_suite_1792647937961.jpg';
import facialSuiteImg from '@/src/assets/images/facial_surgery_suite_1792647938056.jpg';
import recoveryRoomImg from '@/src/assets/images/recovery_room_suite_1792647938610.jpg';
import bodyContouringImg from '@/src/assets/images/body_contouring_aesthetic_1792647967989.jpg';
import laserProcedureImg from '@/src/assets/images/aesthetic_procedure_suite_1792647967391.jpg';

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  role: 'Primary Surgeon' | 'Associate Surgeon';
  photo: string;
  keynotePhoto?: string;
  shortBio: string;
  fullBio: string[];
  specialties: string[];
  education: string[];
  clinicHours: string;
  roomNumber: string;
}

export interface Service {
  id: string;
  category: 'facial' | 'body' | 'breast' | 'reconstructive' | 'non-surgical';
  title: string;
  shortDesc: string;
  badge: string;
  image: string;
  overview: string;
  candidates: string[];
  procedureSteps: string[];
  recoveryDuration: string;
  consultationNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'theatres' | 'consultation' | 'recovery' | 'academic';
  image: string;
  description: string;
}

export const HOSPITAL_CONTACT = {
  name: 'The Hospital',
  tagline: 'Plastic & Cosmetic Surgery',
  address: 'Plot No 40, I & T Center, Jehlum Rd G-8/4, Islamabad, Pakistan',
  landline: '051-8441444',
  cell: '0321-5000242',
  whatsapp: '0321-5000242',
  whatsappLink: 'https://wa.me/923215000242',
  email: 'info@thehospital.com.pk',
  hours: 'Monday – Saturday: 9:00 AM – 6:00 PM',
  mapQuery: 'https://maps.google.com/?q=Plot+No+40+I+%26+T+Center+Jehlum+Rd+G-8%2F4+Islamabad',
};

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-humayun',
    name: 'Dr. Humayun Mohmand',
    title: 'Consultant Plastic, Reconstructive & Cosmetic Surgeon',
    qualifications: 'FRCS (Fellow of Royal College of Surgeons), MBBS',
    role: 'Primary Surgeon',
    photo: drHumayunImg,
    keynotePhoto: drHumayunKeynoteImg,
    shortBio:
      'With prestigious FRCS credentials and extensive surgical experience, Dr. Humayun Mohmand leads The Hospital with an uncompromising emphasis on natural anatomical balance, patient safety, and precision surgical execution.',
    fullBio: [
      'Dr. Humayun Mohmand is an internationally recognized consultant plastic and cosmetic surgeon with decades of specialized surgical practice.',
      'Holding the prestigious Fellowship of the Royal College of Surgeons (FRCS), Dr. Humayun has pioneered advanced techniques in facial aesthetic rejuvenation, high-definition body sculpting, and complex reconstructive procedures.',
      'His clinical philosophy is grounded in conservative intervention and anatomical harmony—delivering refined, authentic enhancements without exaggerated artificial changes.',
      'At The Hospital in Islamabad, Dr. Humayun personally oversees every consultation, pre-operative plan, and operative procedure within fully accredited surgical theatre environments.'
    ],
    specialties: [
      'Precision Rhinoplasty & Septorhinoplasty',
      'Deep Plane Facelift & Neck Rejuvenation',
      'Blepharoplasty (Upper & Lower Eyelid Surgery)',
      'High-Definition Liposculpture & Abdominoplasty',
      'Complex Secondary & Revision Plastic Surgery'
    ],
    education: [
      'Fellow of Royal College of Surgeons (FRCS)',
      'Specialist Registration in Plastic Surgery',
      'Member of Prestigious International Aesthetic Societies',
      'Senior Clinical Consultant & Surgical Trainer'
    ],
    clinicHours: 'Mon, Wed, Fri: 10:00 AM – 4:00 PM (By Appointment)',
    roomNumber: 'Executive Consultation Suite 101'
  },
  {
    id: 'dr-shazma',
    name: 'Dr. Shazma',
    title: 'Consultant Aesthetic, Plastic & Reconstructive Surgeon',
    qualifications: 'FCPS (Plastic Surgery), MBBS',
    role: 'Associate Surgeon',
    photo: drShazmaImg,
    shortBio:
      'Specializing in feminine aesthetic surgery, delicate body contouring, and advanced scar revision, Dr. Shazma provides compassionate, detail-oriented clinical care with exemplary aesthetic sensibility.',
    fullBio: [
      'Dr. Shazma is a distinguished consultant plastic and cosmetic surgeon renowned for her meticulous technical finesse and empathetic patient communication.',
      'With rigorous clinical training in aesthetic and reconstructive surgery, she specializes in aesthetic breast procedures, postpartum body contouring, facial micro-refinements, and advanced scar corrective therapies.',
      'Her patient-centric approach ensures a serene, confidential consultation where individual concerns, realistic outcomes, and safety parameters are thoroughly explored.',
      'Practicing in The Hospital’s modern G-8/4 Islamabad suites, Dr. Shazma combines delicate artistic proportion with clinical rigor.'
    ],
    specialties: [
      'Aesthetic Breast Augmentation, Mastopexy & Reduction',
      'Post-Pregnancy Mommy Makeover & Body Contouring',
      'Mini-Abdominoplasty & Liposuction',
      'Surgical Scar Excision & Tissue Resurfacing',
      'Doctor-Administered Facial Biostimulators & Injectables'
    ],
    education: [
      'FCPS (Plastic & Reconstructive Surgery)',
      'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
      'Certified Clinical Specialist in Aesthetic Procedures',
      'Member of National Surgical Regulatory Bodies'
    ],
    clinicHours: 'Tue, Thu, Sat: 11:00 AM – 5:00 PM (By Appointment)',
    roomNumber: 'Consultation Suite 102'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'facial-plastic-surgery',
    category: 'facial',
    title: 'Facial Plastic Surgery',
    shortDesc:
      'Precision rhinoplasty, structural blepharoplasty, and deep-plane facial rejuvenation tailored to harmonious natural anatomy.',
    badge: 'Specialized Facial Aesthetics',
    image: facialSuiteImg,
    overview:
      'Facial plastic surgery at The Hospital is performed with a deep reverence for individual facial architecture. Our surgeons avoid the "operated" appearance, focusing instead on structural harmony, discrete hidden incision lines, and restored natural vitality.',
    candidates: [
      'Individuals seeking structural nasal proportion (cosmetic or breathing improvement)',
      'Patients experiencing eyelid hooding, lax skin, or lower eye puffiness',
      'Those desiring refined jawline definition and mid-face structural elevation'
    ],
    procedureSteps: [
      '3D Facial Proportion & Airway Clinical Evaluation',
      'Detailed Discussion of Incision Placements & Anesthetic Protocols',
      'Surgery in Hospital Sterile Theatre with Monitored Anesthesia',
      'Dedicated Post-Operative Splinting, Cooling & Dressing Protocol'
    ],
    recoveryDuration: '10 to 14 days for visible social return; full tissue maturation over 6 to 12 months',
    consultationNote: 'All facial procedures include high-resolution photographic mapping and airway evaluation.'
  },
  {
    id: 'body-contouring',
    category: 'body',
    title: 'Body Contouring & Liposculpture',
    shortDesc:
      'High-definition liposuction, abdominoplasty, and body contour remodeling with microscopic incision techniques.',
    badge: 'Sculptural Precision',
    image: bodyContouringImg,
    overview:
      'Body contouring at The Hospital reshapes anatomical silhouettes through selective fat removal, muscle tone framing, and redundant skin excision. We combine advanced cannula technology with hospital-level post-anesthetic monitoring.',
    candidates: [
      'Patients with localized stubborn adipose deposits resistant to diet and fitness',
      'Individuals with abdominal muscle diastasis or lax skin following childbearing or weight loss',
      'Candidates maintaining stable baseline weight with realistic expectations'
    ],
    procedureSteps: [
      'Skin Elasticity & Subcutaneous Adipose Vector Mapping',
      'Precise Tumescent Infiltration for Minimal Bruising and Blood Loss',
      'Micro-Cannula Contouring and Tightening',
      'Application of Medical Grade Compression Garments'
    ],
    recoveryDuration: '1 to 2 weeks for light daily activity; 4 to 6 weeks for strenuous exercise',
    consultationNote: 'Pre-operative blood chemistry and cardiovascular clearance are mandatory.'
  },
  {
    id: 'aesthetic-breast-surgery',
    category: 'breast',
    title: 'Aesthetic Breast Surgery',
    shortDesc:
      'Sub-fascial augmentation, structural mastopexy, and breast reduction focusing on balanced symmetry and comfort.',
    badge: 'Balanced Symmetry',
    image: hospitalInteriorImg,
    overview:
      'Every breast procedure is customized to chest wall width, tissue envelope elasticity, and personal physical proportions. Dr. Humayun Mohmand and Dr. Shazma focus on long-term stability, minimal scarring, and natural tissue feel.',
    candidates: [
      'Women seeking volumetric restoration post-pregnancy or weight fluctuations',
      'Patients experiencing physical discomfort or postural strain due to excessive tissue',
      'Individuals with congenital breast asymmetry or developmental differences'
    ],
    procedureSteps: [
      'Sternal Notch, Areolar & Submammary Fold Measurement',
      'Selection of Anatomical Profile or Cohesive Gel Implant Size (if applicable)',
      'Sub-Fascial or Dual-Plane Precise Pocket Dissection',
      'Multi-Layer Monofilament Subcuticular Closure'
    ],
    recoveryDuration: '7 to 10 days for desk work; gentle return to full activity within 4 to 6 weeks',
    consultationNote: 'Pre-operative mammography or ultrasound clearance required based on age.'
  },
  {
    id: 'reconstructive-surgery',
    category: 'reconstructive',
    title: 'Reconstructive Surgery',
    shortDesc:
      'Microsurgical tissue transfers, post-trauma reconstruction, and congenital defect refinement adhering to strict hospital safety.',
    badge: 'Complex Restorative',
    image: operatingTheatreImg,
    overview:
      'Reconstructive surgery restores both form and function following trauma, tumor resection, or congenital conditions. Our surgeons leverage microsurgical mastery to ensure structural integrity and aesthetic refinement.',
    candidates: [
      'Patients recovering from traumatic soft-tissue injuries or complex lacerations',
      'Individuals requiring oncologic reconstruction or defect coverage',
      'Patients needing functional revision of prior surgical outcomes'
    ],
    procedureSteps: [
      'Detailed Anatomical Defect & Functional Deficit Analysis',
      'Surgical Flap / Graft Architecture Planning',
      'Telescopic Microscopic Tissue Coaptation & Vascular Re-anastomosis',
      'Specialized Post-Operative Splinting & Tissue Perfusion Monitoring'
    ],
    recoveryDuration: 'Individualized depending on complexity (2 to 6 weeks)',
    consultationNote: 'Interdisciplinary coordination with pathology and imaging specialists when indicated.'
  },
  {
    id: 'scar-revision-care',
    category: 'facial',
    title: 'Scar Revision & Skin Resurfacing',
    shortDesc:
      'Multi-modality surgical scar excision, geometric broken-line repair, and clinical corrective fractional therapies.',
    badge: 'Clinical Refinement',
    image: laserProcedureImg,
    overview:
      'Unfavorable scars resulting from trauma, surgery, or burns can be dramatically softened and reoriented. We employ geometric scar re-alignment, micro-fat grafting, and medical-grade fractional resurfacing to blend scars with natural skin relaxed tension lines.',
    candidates: [
      'Individuals with widened, hypertrophic, or contracture scars',
      'Patients with facial scars that disrupt aesthetic landmarks or expression',
      'Post-acne textural scarring or localized tissue depressions'
    ],
    procedureSteps: [
      'Scar Vector, Thickness & Surrounding Skin Laxity Assessment',
      'Sub-Millimeter Surgical Excision or Z-Plasty / W-Plasty Realignment',
      'Atraumatic Layered Subdermal Suture Placement',
      'Post-Operative Silicone Gel & Sun-Protection Guidance'
    ],
    recoveryDuration: '5 to 7 days for initial epithelial closure; continuous maturation over 9 to 12 months',
    consultationNote: 'Comprehensive assessment to identify scar maturity before surgical intervention.'
  },
  {
    id: 'non-surgical-aesthetics',
    category: 'non-surgical',
    title: 'Doctor-Administered Non-Surgical Care',
    shortDesc:
      'Physician-administered neuromodulators, dermal volumizers, and biostimulators adhering to hospital sterile standards.',
    badge: 'Precision Injectables',
    image: recoveryRoomImg,
    overview:
      'All non-surgical treatments at The Hospital are administered exclusively by our consultant surgeons—never auxiliary staff. We believe injectables demand the exact same anatomical precision and sterile hospital rigor as operative procedures.',
    candidates: [
      'Dynamic expression lines on forehead, glabella, or crow’s feet',
      'Mid-face volumetric deflation or hollow tear troughs',
      'Patients seeking subtle non-surgical profile harmonization without downtime'
    ],
    procedureSteps: [
      'Detailed Muscular Movement & Dynamic Facial Analysis',
      'Skin Cleansing with Hospital-Grade Antiseptic Preparation',
      'Micro-Targeted Injection Using Ultra-Fine Needles or Blunt Cannulas',
      'Post-Treatment Soothing & Aftercare Evaluation'
    ],
    recoveryDuration: 'Zero to minimal downtime; immediate return to daily activities',
    consultationNote: 'We strictly utilize internationally authenticated, temperature-controlled products.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'suite-1',
    title: 'Executive Reception & Consultation Lounge',
    category: 'consultation',
    image: hospitalInteriorImg,
    description: 'Serene, light-filled patient arrival lounge designed with warm travertine and acoustic privacy.'
  },
  {
    id: 'suite-2',
    title: 'Surgical Operating Theatre Suite',
    category: 'theatres',
    image: operatingTheatreImg,
    description: 'Hospital-grade sterile surgical suite with advanced overhead LED surgical lamps and monitoring.'
  },
  {
    id: 'suite-3',
    title: 'Facial Plastic Diagnostic Room',
    category: 'consultation',
    image: facialSuiteImg,
    description: 'Private consultation suite equipped for 3D facial analysis and confidential physician evaluation.'
  },
  {
    id: 'suite-4',
    title: 'Post-Operative Recovery Suite',
    category: 'recovery',
    image: recoveryRoomImg,
    description: 'Tranquil recovery room offering dedicated nursing care and ergonomic comfort following surgery.'
  },
  {
    id: 'suite-5',
    title: 'Body Contouring Consultation Studio',
    category: 'consultation',
    image: bodyContouringImg,
    description: 'Dedicated consultation room for comprehensive body assessment and procedural planning.'
  },
  {
    id: 'suite-6',
    title: 'Clinical Laser & Minor Procedure Suite',
    category: 'theatres',
    image: laserProcedureImg,
    description: 'Clean medical environment for scar therapies, biostimulator treatments, and outpatient minor care.'
  },
  {
    id: 'keynote-1',
    title: 'Dr. Humayun at AAMS 2024 International Congress',
    category: 'academic',
    image: drHumayunKeynoteImg,
    description: 'Dr. Humayun Mohmand delivering a keynote presentation at the Academy of Aesthetic Medicine & Surgery (AAMS 2024).'
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote:
      'The honesty and clarity during my consultation with Dr. Humayun Mohmand set The Hospital apart from any clinic I visited. He carefully explained what would look natural and advised me against unnecessary procedures. The surgical results and aftercare in Islamabad were world-class.',
    patient: 'Patient A. K.',
    procedure: 'Facial Aesthetic Procedure',
    location: 'Islamabad'
  },
  {
    quote:
      'Dr. Shazma took the time to answer every single question about my recovery timeline with utmost gentleness. The hospital nursing staff and operating theatre team treated me with true clinical empathy and discretion.',
    patient: 'Patient M. S.',
    procedure: 'Body Contouring & Scar Refinement',
    location: 'Rawalpindi'
  },
  {
    quote:
      'Quiet, immaculate, and profoundly professional. The Hospital feels like an exclusive clinic yet provides the complete safety infrastructure of a major surgical hospital. You feel completely secure in their hands.',
    patient: 'Patient F. R.',
    procedure: 'Aesthetic Breast Surgery',
    location: 'Islamabad'
  }
];

export const FAQS_DATA = [
  {
    q: 'How can I book a confidential consultation at The Hospital in Islamabad?',
    a: 'You can book directly by calling 051-8441444, messaging our official WhatsApp at 0321-5000242, or filling out our online appointment scheduler. Our patient coordinator will coordinate a dedicated time slot with either Dr. Humayun Mohmand or Dr. Shazma.'
  },
  {
    q: 'Where is The Hospital located in Islamabad?',
    a: 'The Hospital is located at Plot No 40, I & T Center, Jehlum Rd G-8/4, Islamabad. Our facility provides private patient parking, quiet consultation suites, and fully accredited surgical suites.'
  },
  {
    q: 'What should I expect during my initial consultation?',
    a: 'Your chosen surgeon personally conducts an in-depth clinical evaluation. They review your medical history, listen carefully to your goals, examine anatomical parameters, and present clear, honest treatment pathways with realistic outcomes and safety profiles.'
  },
  {
    q: 'Are all procedures performed in certified surgical theatres?',
    a: 'Yes. All surgical procedures take place within our sterile, hospital-grade operating theatres in Islamabad, supported by licensed anesthesiologists and specialized post-anesthesia recovery nurses.'
  },
  {
    q: 'How are post-operative follow-up visits managed?',
    a: 'Aftercare is an integral part of your surgical journey. Scheduled dressing changes, clinical wound checks, and surgeon follow-ups are arranged before you leave the facility, with direct phone support available.'
  }
];
