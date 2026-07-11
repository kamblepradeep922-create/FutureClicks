export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  iconName: string;
  tagline: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  features: string[];
  portfolio: { title: string; image: string; result: string }[];
  testimonials: { name: string; business: string; text: string; rating: number; image: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const industries: Industry[] = [
  {
    slug: 'interior-design-websites',
    name: 'Interior Designers',
    shortName: 'Interior Design',
    iconName: 'Sofa',
    tagline: 'Showcase your design expertise with a stunning portfolio website',
    overview:
      'Interior designers need websites that are as beautiful as the spaces they create. We build elegant portfolio websites that showcase your projects, attract high-value clients, and make it easy for prospects to book consultations.',
    challenges: [
      { title: 'Visual Portfolio', description: 'Your work is visual, but your current website does not do justice to your projects.' },
      { title: 'Lead Generation', description: 'You rely on referrals and word of mouth, with no steady stream of inbound leads.' },
      { title: 'Project Inquiries', description: 'Potential clients cannot easily understand your services, pricing, or process.' },
    ],
    solutions: [
      { title: 'Stunning Project Galleries', description: 'High-resolution image galleries with before/after sliders that showcase your design skills.' },
      { title: 'SEO for Local Searches', description: 'Rank for "interior designer near me" and capture clients actively searching for your services.' },
      { title: 'Inquiry & Booking Forms', description: 'Streamlined consultation booking forms that qualify leads and capture project details.' },
    ],
    features: [
      'Portfolio gallery with project filtering',
      'Before/after image comparison sliders',
      'Service package display',
      'Consultation booking form',
      'Instagram feed integration',
      'Testimonial showcase',
    ],
    portfolio: [
      { title: 'Modern Apartment Project', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', result: '3x project inquiries' },
      { title: 'Luxury Villa Design', image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800', result: 'Featured in design magazine' },
    ],
    testimonials: [
      { name: 'Priya Sharma', business: 'Urban Interiors', text: 'Our new website has brought in more inquiries in 3 months than we had all of last year. The portfolio gallery is stunning.', rating: 5, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you integrate my Instagram feed?', answer: 'Yes, we can display your latest Instagram posts directly on your website to keep your portfolio fresh and drive social engagement.' },
      { question: 'Do you offer project gallery filtering?', answer: 'Yes, we build filterable galleries by project type (kitchen, bedroom, living room, office) so visitors can find relevant work quickly.' },
    ],
    metaTitle: 'Websites for Interior Designers | FutureClicks',
    metaDescription: 'Stunning portfolio websites for interior designers. Showcase your projects, attract high-value clients, and grow your design business.',
  },
  {
    slug: 'ca-tax-consultant-websites',
    name: 'Chartered Accountants & Tax Consultants',
    shortName: 'CA & Tax',
    iconName: 'Calculator',
    tagline: 'Build trust and attract clients with a professional CA website',
    overview:
      'Chartered Accountants and tax consultants need websites that project trust, expertise, and professionalism. We build secure, informative websites that educate visitors, showcase your services, and make it easy to schedule consultations.',
    challenges: [
      { title: 'Trust & Credibility', description: 'Clients need to trust you with their finances, but your online presence does not reflect your expertise.' },
      { title: 'Service Clarity', description: 'Visitors cannot easily understand the range of services you offer and which ones they need.' },
      { title: 'Document Sharing', description: 'There is no secure way for clients to share documents or schedule appointments online.' },
    ],
    solutions: [
      { title: 'Professional Service Pages', description: 'Clear, detailed service pages for tax filing, audit, GST, and advisory that educate and convert.' },
      { title: 'Secure Client Portal', description: 'Password-protected document upload and client portal for secure file sharing.' },
      { title: 'Appointment Booking', description: 'Online scheduling system for consultations and document submission deadlines.' },
    ],
    features: [
      'Service catalog with detailed descriptions',
      'Secure document upload portal',
      'Appointment scheduling system',
      'Resource library (tax calculators, guides)',
      'Team credentials showcase',
      'Compliance & privacy disclosures',
    ],
    portfolio: [
      { title: 'Sharma & Associates', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', result: 'Top 3 on Google for CA services' },
    ],
    testimonials: [
      { name: 'CA Rajesh Mehta', business: 'Mehta & Co.', text: 'The website looks extremely professional. Our clients compliment it regularly and we now get online inquiries every week.', rating: 5, image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Is the document upload portal secure?', answer: 'Yes, we use SSL encryption and password-protected access to ensure all client documents are handled securely and in compliance with professional standards.' },
      { question: 'Can you add a tax calculator?', answer: 'Yes, we can build custom tax calculators and resource tools that provide value to visitors and generate leads.' },
    ],
    metaTitle: 'Websites for Chartered Accountants | FutureClicks',
    metaDescription: 'Professional websites for CAs and tax consultants. Build trust, showcase services, and attract clients with a secure, professional website.',
  },
  {
    slug: 'electrical-contractor-websites',
    name: 'Electrical Contractors',
    shortName: 'Electrical',
    iconName: 'Zap',
    tagline: 'Get more electrical service calls with a high-converting website',
    overview:
      'Electrical contractors need websites that generate service calls and build trust. We build fast, mobile-friendly websites with clear service areas, instant call buttons, and local SEO that gets you found by customers in your service area.',
    challenges: [
      { title: 'Emergency Service Calls', description: 'Customers need an electrician urgently, but cannot find you quickly online.' },
      { title: 'Service Area Clarity', description: 'Potential customers do not know which areas you serve.' },
      { title: 'Trust & Safety', description: 'Customers are cautious about hiring electricians they do not know.' },
    ],
    solutions: [
      { title: 'Click-to-Call & WhatsApp', description: 'Prominent call and WhatsApp buttons so customers can reach you instantly, especially on mobile.' },
      { title: 'Service Area Pages', description: 'Dedicated pages for each area you serve, optimized for local search rankings.' },
      { title: 'License & Safety Display', description: 'Prominent display of your licenses, certifications, and safety record to build trust.' },
    ],
    features: [
      'Click-to-call and WhatsApp buttons',
      'Service area map and pages',
      'Emergency service highlight',
      'License & certification display',
      'Customer reviews showcase',
      'Instant quote form',
    ],
    portfolio: [
      { title: 'PowerLine Electricals', image: 'https://images.pexels.com/photos/8001102/pexels-photo-8001102.jpeg?auto=compress&cs=tinysrgb&w=800', result: '5x return on ad spend' },
    ],
    testimonials: [
      { name: 'Rajesh Patel', business: 'Patel Electricals', text: 'We went from barely showing up on Google to ranking #1. The leads have not stopped since launch.', rating: 5, image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you add emergency call buttons?', answer: 'Yes, we add prominent click-to-call and WhatsApp buttons that are especially visible on mobile, so customers in urgent need can reach you instantly.' },
      { question: 'Do you optimize for service area searches?', answer: 'Yes, we create dedicated service area pages and optimize your Google Business Profile for each location you serve.' },
    ],
    metaTitle: 'Websites for Electrical Contractors | FutureClicks',
    metaDescription: 'Get more service calls with a high-converting website for electrical contractors. Local SEO, click-to-call, and instant quote forms.',
  },
  {
    slug: 'plumbing-hvac-websites',
    name: 'Plumbers & HVAC Services',
    shortName: 'Plumbing & HVAC',
    iconName: 'Wrench',
    tagline: 'Turn online searches into service bookings for your plumbing or HVAC business',
    overview:
      'Plumbers and HVAC technicians need websites that convert urgent searches into service calls. We build fast, mobile-optimized websites with instant booking, service area SEO, and trust-building features that get you hired.',
    challenges: [
      { title: 'Urgent Service Need', description: 'Customers need plumbing or HVAC help immediately but cannot find or contact you fast enough.' },
      { title: 'Seasonal Demand', description: 'AC service peaks in summer, heating in winter — you need a steady lead flow year-round.' },
      { title: 'Price Transparency', description: 'Customers want to know your pricing and service options before calling.' },
    ],
    solutions: [
      { title: 'Instant Booking System', description: 'Online booking form that captures service details and lets customers request a time slot.' },
      { title: 'Seasonal SEO Campaigns', description: 'Targeted SEO and ads for seasonal services (AC repair in summer, geyser service in winter).' },
      { title: 'Service & Pricing Display', description: 'Clear service menus with transparent pricing tiers to pre-qualify leads.' },
    ],
    features: [
      'Online booking & scheduling',
      'Service area optimization',
      'Emergency service banner',
      'Pricing & package display',
      'Before/after job photos',
      'Review integration',
    ],
    portfolio: [
      { title: 'FlowFix Plumbing', image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800', result: '#1 local rank for plumber' },
    ],
    testimonials: [
      { name: 'Amit Kulkarni', business: 'FlowFix Plumbing', text: 'The local SEO work was a game-changer. We get calls every day from Google Maps. Incredible ROI.', rating: 5, image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you add an online booking system?', answer: 'Yes, we integrate online booking forms that capture service type, urgency, location, and preferred time so you can schedule efficiently.' },
      { question: 'Do you optimize for seasonal services?', answer: 'Yes, we run seasonal SEO and ad campaigns — AC repair in summer, geyser service in winter — to keep leads flowing year-round.' },
    ],
    metaTitle: 'Websites for Plumbers & HVAC | FutureClicks',
    metaDescription: 'Turn online searches into service calls with websites for plumbers and HVAC. Instant booking, local SEO, and emergency service features.',
  },
  {
    slug: 'home-cleaning-websites',
    name: 'Home Cleaning Services',
    shortName: 'Home Cleaning',
    iconName: 'Sparkles',
    tagline: 'Fill your cleaning schedule with online bookings',
    overview:
      'Home cleaning businesses need websites that make booking effortless. We build websites with online scheduling, package display, and WhatsApp integration so customers can book a cleaning in under a minute.',
    challenges: [
      { title: 'Booking Friction', description: 'Customers want to book quickly but phone tag and manual scheduling slow things down.' },
      { title: 'Package Clarity', description: 'Customers do not understand your service packages and pricing.' },
      { title: 'Trust & Reliability', description: 'People are cautious about letting strangers into their homes — trust is essential.' },
    ],
    solutions: [
      { title: 'One-Click Booking', description: 'Simple online booking form with date/time picker and service package selection.' },
      { title: 'Clear Package Display', description: 'Visual service packages (deep clean, sofa cleaning, regular maintenance) with transparent pricing.' },
      { title: 'Trust Building Elements', description: 'Background check badges, customer reviews, and before/after photos that build confidence.' },
    ],
    features: [
      'Online booking calendar',
      'Service package cards',
      'WhatsApp instant booking',
      'Staff verification badges',
      'Before/after gallery',
      'Recurring booking option',
    ],
    portfolio: [
      { title: 'SparkleClean Services', image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800', result: '40% more bookings' },
    ],
    testimonials: [
      { name: 'Reshma Khan', business: 'SparkleClean', text: 'The online booking system has been a game-changer. Customers book directly and we get WhatsApp notifications instantly.', rating: 5, image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can customers book recurring cleanings?', answer: 'Yes, our booking system supports one-time and recurring appointments (weekly, bi-weekly, monthly) with automatic reminders.' },
      { question: 'Can you integrate WhatsApp booking?', answer: 'Yes, we add WhatsApp booking buttons that pre-fill service details so customers can book with a single tap.' },
    ],
    metaTitle: 'Websites for Home Cleaning Services | FutureClicks',
    metaDescription: 'Fill your cleaning schedule with a website that makes booking effortless. Online scheduling, package display, and WhatsApp integration.',
  },
  {
    slug: 'boutique-websites',
    name: 'Boutique Clothing Stores',
    shortName: 'Boutique',
    iconName: 'Shirt',
    tagline: 'Sell online with a beautiful e-commerce boutique website',
    overview:
      'Boutique clothing stores need websites that are as stylish as their collections. We build elegant e-commerce websites with Instagram integration, easy inventory management, and social media marketing that drives sales.',
    challenges: [
      { title: 'Online Sales Channel', description: 'You sell on Instagram but have no dedicated online store to capture sales 24/7.' },
      { title: 'Inventory Management', description: 'Managing stock across Instagram, WhatsApp, and a physical store is chaotic.' },
      { title: 'Visual Merchandising', description: 'Your clothes are beautiful but your online presentation does not do them justice.' },
    ],
    solutions: [
      { title: 'E-commerce Store', description: 'A beautiful online store with product catalog, size guides, and secure checkout.' },
      { title: 'Centralized Inventory', description: 'Unified inventory management so stock updates automatically across all channels.' },
      { title: 'Instagram Shopping', description: 'Instagram product tags and shoppable posts that link directly to your store.' },
    ],
    features: [
      'Product catalog with variants',
      'Secure payment gateway',
      'Instagram shop integration',
      'Size guide & filters',
      'Abandoned cart recovery',
      'Customer reviews',
    ],
    portfolio: [
      { title: 'Bloom Boutique', image: 'https://images.pexels.com/photos/264819/pexels-photo-264819.jpeg?auto=compress&cs=tinysrgb&w=800', result: '2x online sales' },
    ],
    testimonials: [
      { name: 'Neha Gupta', business: 'Bloom Boutique', text: 'Our online sales doubled in three months. The site is gorgeous and so easy to manage. The social media strategy really connected with our audience.', rating: 5, image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you sync inventory with my physical store?', answer: 'Yes, we can integrate your POS system so inventory updates automatically across your online and physical store.' },
      { question: 'Do you set up Instagram Shopping?', answer: 'Yes, we configure Instagram Shopping product tags and shoppable posts that link directly to your online store.' },
    ],
    metaTitle: 'Websites for Boutique Clothing Stores | FutureClicks',
    metaDescription: 'Sell online with a beautiful e-commerce boutique website. Instagram integration, inventory management, and social media marketing.',
  },
  {
    slug: 'salon-spa-websites',
    name: 'Beauty Salons & Spas',
    shortName: 'Salon & Spa',
    iconName: 'Scissors',
    tagline: 'Fill your appointment calendar with online booking',
    overview:
      'Salons and spas need websites that make booking effortless. We build beautiful websites with online appointment scheduling, service menus, and Instagram-worthy galleries that attract and convert beauty clients.',
    challenges: [
      { title: 'Appointment Management', description: 'Phone bookings take time and lead to missed calls and empty slots.' },
      { title: 'Service Menu Clarity', description: 'Customers cannot see your full range of services and pricing online.' },
      { title: 'Visual Appeal', description: 'Beauty businesses need to look beautiful online to attract clients.' },
    ],
    solutions: [
      { title: 'Online Appointment System', description: 'Real-time booking calendar where clients choose service, stylist, and time slot.' },
      { title: 'Digital Service Menu', description: 'Beautifully presented service menu with pricing, duration, and descriptions.' },
      { title: 'Stunning Visual Gallery', description: 'High-quality galleries showcasing your work — hairstyles, treatments, and transformations.' },
    ],
    features: [
      'Online appointment booking',
      'Service menu with pricing',
      'Stylist/therapist profiles',
      'Before/after gallery',
      'Gift card sales',
      'Review & rating display',
    ],
    portfolio: [
      { title: 'Glow Beauty Lounge', image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800', result: '60% more appointments' },
    ],
    testimonials: [
      { name: 'Sneha Desai', business: 'Glow Beauty Lounge', text: 'Our Instagram ads and website have brought in so many new clients. The booking system makes it effortless for customers to schedule.', rating: 5, image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can clients book specific stylists?', answer: 'Yes, the booking system lets clients choose their preferred stylist or therapist and see their available time slots.' },
      { question: 'Can you sell gift cards online?', answer: 'Yes, we integrate online gift card sales with digital delivery and custom amounts.' },
    ],
    metaTitle: 'Websites for Salons & Spas | FutureClicks',
    metaDescription: 'Fill your appointment calendar with online booking. Beautiful websites for beauty salons and spas with scheduling and galleries.',
  },
  {
    slug: 'gym-yoga-websites',
    name: 'Gym Trainers & Yoga Studios',
    shortName: 'Gym & Yoga',
    iconName: 'Dumbbell',
    tagline: 'Get more members and trial signups with a fitness website',
    overview:
      'Gyms and yoga studios need websites that convert visitors into members. We build energetic, motivating websites with class schedules, trial signup forms, and member engagement features that grow your community.',
    challenges: [
      { title: 'Trial Signups', description: 'You struggle to convert website visitors into trial members.' },
      { title: 'Class Schedule Display', description: 'Members cannot easily see upcoming classes and timings.' },
      { title: 'Member Engagement', description: 'Keeping members engaged and reducing churn is a constant challenge.' },
    ],
    solutions: [
      { title: 'Trial Signup Funnel', description: 'Optimized trial signup forms with email follow-up sequences that convert trials to members.' },
      { title: 'Live Class Schedule', description: 'Dynamic class schedule that members can view and book from the website.' },
      { title: 'Member Engagement Tools', description: 'Email newsletters, workout tips, and community features that keep members engaged.' },
    ],
    features: [
      'Class schedule display',
      'Trial signup forms',
      'Membership plans & pricing',
      'Trainer profiles',
      'Email automation sequences',
      'Before/after transformations',
    ],
    portfolio: [
      { title: 'FitCore Studio', image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800', result: '3x trial signups' },
    ],
    testimonials: [
      { name: 'Vikram Singh', business: 'FitCore Studio', text: 'Trial signups tripled in two months. The email sequence they set up converts trials to members automatically.', rating: 5, image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you display a live class schedule?', answer: 'Yes, we integrate a dynamic class schedule that updates automatically and lets members view and book classes from the website.' },
      { question: 'Do you set up email sequences?', answer: 'Yes, we create automated email sequences for trial follow-ups, member onboarding, and re-engagement to reduce churn.' },
    ],
    metaTitle: 'Websites for Gyms & Yoga Studios | FutureClicks',
    metaDescription: 'Get more members and trial signups with a fitness website. Class schedules, trial funnels, and member engagement tools.',
  },
  {
    slug: 'diagnostic-lab-websites',
    name: 'Diagnostic Labs',
    shortName: 'Diagnostic Labs',
    iconName: 'FlaskConical',
    tagline: 'Make test booking effortless with a professional lab website',
    overview:
      'Diagnostic labs need websites that make test booking simple and build trust. We build professional, informative websites with test catalogs, online booking, home collection requests, and AI chatbots for instant customer support.',
    challenges: [
      { title: 'Test Booking Complexity', description: 'Customers find it hard to browse tests, understand packages, and book online.' },
      { title: 'Home Collection Requests', description: 'There is no easy online way to request home sample collection.' },
      { title: 'Trust & Credibility', description: 'Patients need assurance about accuracy, certifications, and turnaround times.' },
    ],
    solutions: [
      { title: 'Test Catalog & Booking', description: 'Searchable test catalog with descriptions, pricing, and online booking.' },
      { title: 'Home Collection Form', description: 'Simple online form to request home sample collection with date and time selection.' },
      { title: 'Trust & Certification Display', description: 'Prominent display of accreditations (NABL, ISO), certifications, and doctor partnerships.' },
    ],
    features: [
      'Searchable test catalog',
      'Online test booking',
      'Home collection request form',
      'Health package display',
      'Accreditation & certification display',
      'AI chatbot for test inquiries',
    ],
    portfolio: [
      { title: 'MediLab Diagnostics', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800', result: '50% more test bookings' },
    ],
    testimonials: [
      { name: 'Dr. Anil Nair', business: 'MediLab', text: 'The AI chatbot handles test inquiries 24/7 and the booking system has increased our online test bookings by 50%.', rating: 5, image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you add an AI chatbot for test inquiries?', answer: 'Yes, we integrate AI chatbots that can answer common test-related questions, guide customers to the right tests, and facilitate bookings 24/7.' },
      { question: 'Can customers request home collection online?', answer: 'Yes, we build a home collection request form where customers can enter their address, preferred time, and required tests.' },
    ],
    metaTitle: 'Websites for Diagnostic Labs | FutureClicks',
    metaDescription: 'Make test booking effortless with a professional diagnostic lab website. Test catalogs, home collection, and AI chatbot support.',
  },
  {
    slug: 'coaching-class-websites',
    name: 'Coaching Classes',
    shortName: 'Coaching Classes',
    iconName: 'GraduationCap',
    tagline: 'Enroll more students with an educational website that builds trust',
    overview:
      'Coaching classes and educational institutes need websites that attract students and parents. We build informative websites with course catalogs, faculty profiles, online admission forms, and results showcases that drive enrollments.',
    challenges: [
      { title: 'Course Information', description: 'Parents and students cannot find clear information about courses, fees, and schedules.' },
      { title: 'Admission Inquiries', description: 'There is no easy way for prospective students to inquire or apply online.' },
      { title: 'Results & Credibility', description: 'Your track record of student results is not visible to build trust with new parents.' },
    ],
    solutions: [
      { title: 'Detailed Course Catalog', description: 'Comprehensive course pages with syllabus, duration, fees, and batch timings.' },
      { title: 'Online Admission Form', description: 'Streamlined inquiry and admission forms that capture student details and course preferences.' },
      { title: 'Results & Faculty Showcase', description: 'Highlight topper results, faculty credentials, and student testimonials to build credibility.' },
    ],
    features: [
      'Course catalog with details',
      'Online admission/inquiry form',
      'Faculty profiles',
      'Results & toppers showcase',
      'Batch schedule display',
      'Parent & student testimonials',
    ],
    portfolio: [
      { title: 'BrightMinds Academy', image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800', result: '2x admission inquiries' },
    ],
    testimonials: [
      { name: 'Prof. Suresh Iyer', business: 'BrightMinds Academy', text: 'Admission inquiries doubled after the new website launched. Parents love the clear course information and easy inquiry process.', rating: 5, image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you display course schedules and fees?', answer: 'Yes, we build detailed course pages with syllabus, duration, fee structure, and batch timings so parents and students have all the information they need.' },
      { question: 'Can students apply for admission online?', answer: 'Yes, we create online admission and inquiry forms that capture student details, course preferences, and contact information for follow-up.' },
    ],
    metaTitle: 'Websites for Coaching Classes | FutureClicks',
    metaDescription: 'Enroll more students with an educational website. Course catalogs, faculty profiles, online admission forms, and results showcases.',
  },
  {
    slug: 'event-decorator-websites',
    name: 'Event Decorators',
    shortName: 'Event Decorators',
    iconName: 'PartyPopper',
    tagline: 'Showcase your event designs and book more celebrations',
    overview:
      'Event decorators need websites that showcase their creativity and capture event inquiries. We build visually stunning portfolio websites with event galleries, package display, and inquiry forms that turn visitors into clients.',
    challenges: [
      { title: 'Visual Portfolio', description: 'Your event setups are stunning, but you have no professional gallery to show prospects.' },
      { title: 'Package Clarity', description: 'Clients do not understand your decoration packages and pricing options.' },
      { title: 'Event Inquiries', description: 'Potential clients cannot easily inquire about availability and pricing for their event date.' },
    ],
    solutions: [
      { title: 'Event Gallery', description: 'Beautiful, filterable galleries showcasing your decorations by event type (weddings, birthdays, corporate).' },
      { title: 'Package Display', description: 'Clear decoration packages with pricing, inclusions, and customization options.' },
      { title: 'Event Inquiry Form', description: 'Detailed inquiry forms capturing event date, venue, type, budget, and decoration preferences.' },
    ],
    features: [
      'Filterable event gallery',
      'Decoration package cards',
      'Event inquiry form',
      'Date availability checker',
      'Instagram integration',
      'Client testimonials',
    ],
    portfolio: [
      { title: 'Royal Wedding Setup', image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800', result: 'Booked 6 months in advance' },
    ],
    testimonials: [
      { name: 'Kavita Bhatt', business: 'Dream Decor Events', text: 'The website gallery is stunning. Clients now come to us having already seen our work and knowing exactly what they want.', rating: 5, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you filter the gallery by event type?', answer: 'Yes, we build filterable galleries so visitors can view decorations by event type — weddings, birthdays, corporate events, and more.' },
      { question: 'Can clients check date availability?', answer: 'Yes, we can add a date availability checker or inquiry form that captures the event date so you can follow up with availability.' },
    ],
    metaTitle: 'Websites for Event Decorators | FutureClicks',
    metaDescription: 'Showcase your event designs and book more celebrations. Stunning portfolio websites for event decorators with galleries and inquiry forms.',
  },
  {
    slug: 'printing-signage-websites',
    name: 'Printing & Signage Businesses',
    shortName: 'Printing & Signage',
    iconName: 'Printer',
    tagline: 'Showcase your printing capabilities and get more orders online',
    overview:
      'Printing and signage businesses need websites that showcase their capabilities and capture orders. We build product catalog websites with quote request forms, portfolio galleries, and service area pages that drive business.',
    challenges: [
      { title: 'Product Catalog', description: 'You offer many printing services but have no organized online catalog for customers to browse.' },
      { title: 'Quote Requests', description: 'Customers cannot easily request quotes with their specifications online.' },
      { title: 'Portfolio Display', description: 'Your past work and capabilities are not visible to build confidence with new clients.' },
    ],
    solutions: [
      { title: 'Product Catalog', description: 'Organized catalog of printing services — business cards, banners, signage, brochures — with specifications.' },
      { title: 'Quote Request System', description: 'Detailed quote request forms that capture product type, quantity, specifications, and delivery timeline.' },
      { title: 'Portfolio Gallery', description: 'Showcase your best printing and signage work to demonstrate quality and range.' },
    ],
    features: [
      'Product/service catalog',
      'Quote request form',
      'Portfolio gallery',
      'Service area pages',
      'File upload for print jobs',
      'Bulk order inquiry',
    ],
    portfolio: [
      { title: 'PrintHub Solutions', image: 'https://images.pexels.com/photos/4794426/pexels-photo-4794426.jpeg?auto=compress&cs=tinysrgb&w=800', result: '3x quote requests' },
    ],
    testimonials: [
      { name: 'Mohan Das', business: 'PrintHub', text: 'The quote request system saves us hours of phone time. Customers submit specs online and we just respond with pricing.', rating: 5, image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can customers upload print files?', answer: 'Yes, we add file upload functionality to the quote request form so customers can upload their artwork or designs directly.' },
      { question: 'Can you display a product catalog?', answer: 'Yes, we build organized product catalogs with specifications, pricing tiers, and images for all your printing and signage services.' },
    ],
    metaTitle: 'Websites for Printing & Signage | FutureClicks',
    metaDescription: 'Showcase your printing capabilities and get more orders. Product catalogs, quote request forms, and portfolio galleries for printing businesses.',
  },
  {
    slug: 'industrial-supplier-websites',
    name: 'Industrial Suppliers',
    shortName: 'Industrial Suppliers',
    iconName: 'Factory',
    tagline: 'Build a B2B website that generates industrial supply inquiries',
    overview:
      'Industrial suppliers need professional B2B websites that showcase their product range and generate inquiries. We build catalog websites with detailed product specifications, RFQ forms, and SEO that reaches procurement managers.',
    challenges: [
      { title: 'Product Catalog Size', description: 'You have hundreds or thousands of products that need to be organized and searchable.' },
      { title: 'B2B Inquiry Process', description: 'Procurement managers need detailed specifications and an easy way to request quotes.' },
      { title: 'Trust & Compliance', description: 'B2B buyers need assurance about quality standards, certifications, and supply capacity.' },
    ],
    solutions: [
      { title: 'Searchable Product Catalog', description: 'Organized, searchable product catalog with categories, specifications, and data sheets.' },
      { title: 'RFQ Form System', description: 'Request for Quote forms that capture product, quantity, specifications, and delivery requirements.' },
      { title: 'Compliance & Certification Display', description: 'Prominent display of ISO, quality standards, and industry certifications to build B2B trust.' },
    ],
    features: [
      'Searchable product catalog',
      'Product specifications & datasheets',
      'RFQ form system',
      'Compliance & certification display',
      'Bulk inquiry forms',
      'Industry-specific SEO',
    ],
    portfolio: [
      { title: 'TechSupply Industries', image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800', result: '4x B2B inquiries' },
    ],
    testimonials: [
      { name: 'Rakesh Jain', business: 'TechSupply', text: 'The product catalog and RFQ system have transformed how we get inquiries. Procurement managers find us on Google and submit quotes directly.', rating: 5, image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200' },
    ],
    faqs: [
      { question: 'Can you handle a large product catalog?', answer: 'Yes, we build searchable, filterable product catalogs that can handle hundreds or thousands of products with categories, specifications, and data sheets.' },
      { question: 'Can buyers request quotes online?', answer: 'Yes, we create RFQ (Request for Quote) forms that capture product, quantity, specifications, and delivery requirements for efficient B2B inquiry management.' },
    ],
    metaTitle: 'Websites for Industrial Suppliers | FutureClicks',
    metaDescription: 'Build a B2B website that generates industrial supply inquiries. Product catalogs, RFQ forms, and industry-specific SEO for suppliers.',
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
