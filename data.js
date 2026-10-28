// All content comes from "NOVA Engineering – Presentation 2026" and www.nova-egi.com.
// To update the app's text, edit this file only.
window.NOVA = {
  company: {
    name: "NOVA Engineering",
    tagline: "Your right partner for comprehensive industrial solutions.",
    about: [
      "NOVA Engineering is a service-providing company that delivers a comprehensive range of industrial solutions for the pharmaceutical, chemical, and cosmetics industries. We support our customers in shaping the future of industrial automation through precision engineering, innovative solutions, and deep customer understanding.",
      "Our expertise spans from individual machines to fully integrated production lines and turnkey projects, supported by partnerships with leading technology providers in the market.",
      "Our sales and technical service teams work closely with customers to deliver solutions tailored to specific operational requirements and production environments.",
      "Guided by passion, commitment, and a relentless pursuit of excellence, we act as problem solvers and trusted partners, dedicated to long-term success."
    ],
    mission: "To deliver reliable and innovative engineering solutions that help pharmaceutical, chemical, and cosmetics manufacturers optimize production through precision engineering, industry expertise, and close customer collaboration.",
    vision: "To be a trusted global partner in industrial automation, recognized for shaping the future of manufacturing through innovation, excellence, and long-term customer value — driving smarter, safer, and more sustainable production environments.",
    teamIntro: "With years of pharmaceutical industry experience and 24/7 technical support, we stand beside our customers as trusted partners in their success.",
    stats: [
      { n: "29+", l: "Global technology partners" },
      { n: "150+", l: "Machines installed" },
      { n: "60+", l: "Jobs worldwide" },
      { n: "4", l: "Offices: Egypt, KSA, UAE, Italy" }
    ],
    team: [
      { t: "Partners", items: ["29+ global technology leaders", "Turnkey projects", "MEP projects", "Spare parts"] },
      { t: "Sales Force", items: ["15+ salespersons", "4 offices in Egypt, KSA, UAE, Italy"] },
      { t: "Technical Team", items: ["25+ engineers, operators & technicians", "60+ jobs worldwide", "150+ machines installed"] }
    ],
    sorgente: [
      "NOVA Engineering & SORGENTE SRL have established a strategic partnership to deliver high-quality services in Egypt and international markets.",
      "This collaboration ensures a 360° service approach aligned with the highest international standards.",
      "The presence of SORGENTE SRL in Milan provides a strong strategic advantage, strengthening our European footprint and enabling close coordination with key partners across Italy and Europe."
    ],
    services: [
      { t: "Installation", d: "Machines and lines set up on site by our own engineers." },
      { t: "Start-up & Commissioning", d: "Bringing equipment into production, on schedule." },
      { t: "Training", d: "Hands-on training for your operators and maintenance staff." },
      { t: "Qualification", d: "Support for qualification and GMP documentation." },
      { t: "After-Sales", d: "Our after-sales team works around the clock for every project." },
      { t: "Maintenance & Revamping", d: "Preventive maintenance, upgrades and revamping of existing lines." },
      { t: "Spare Parts", d: "Original parts from Italy through our sister company SORGENTE SRL." }
    ],
    markets: ["Egypt", "GCC Area", "AMU Market (North Africa)", "Europe via Milan"]
  },

  contact: {
    address: "Plot No.19, 1st Services Zone, Fifth Settlement, New Cairo, Egypt",
    phone: "+20225657775",
    phoneLabel: "+202 2565 7775",
    mobile: "+201113615667",
    mobileLabel: "+20 111 361 5667",
    sales: "sales@nova-egi.com",
    support: "support@nova-egi.com",
    website: "https://www.nova-egi.com",
    linkedin: "https://www.linkedin.com/company/nova-engineering-egypt",
    map: "https://www.google.com/maps/search/?api=1&query=NOVA+Engineering+Fifth+Settlement+New+Cairo"
  },

  categories: [
    { id: "sterile",   name: "Sterile Solutions",                     short: "Sterile",       icon: "drop" },
    { id: "nonsterile",name: "Non-Sterile Solutions",                 short: "Non-Sterile",   icon: "pill" },
    { id: "packaging", name: "Packaging, Process Control & T&T",      short: "Packaging",     icon: "box" },
    { id: "utilities", name: "Utilities, Facility & Spare Parts",     short: "Utilities",     icon: "wind" },
    { id: "cleanroom", name: "Engineering & Cleanrooms",              short: "Cleanrooms",    icon: "building" },
    { id: "ems",       name: "EMS, Containment & Isolation",          short: "Containment",   icon: "shield" },
    { id: "glass",     name: "Glassware Manufacturing",               short: "Glassware",     icon: "flask" }
  ],

  partners: [
    // ---------- STERILE ----------
    { id: "adam", name: "Adam Fabriwerk", cat: "sterile", country: "India", since: "1982",
      url: "https://adamfabriwerk.com/",
      about: ["Established in 1982 — over 35 years designing customised process systems for pharmaceutical and biopharmaceutical plants.",
              "Turnkey solutions for aseptic mixing and blending, ointment and cream manufacturing, and liquid oral plants.",
              "8,000 m² manufacturing, assembly and testing facility in Nashik, India, with a dedicated FAT area and 200+ employees.",
              "Designed to US FDA, EU GMP, cGMP, ASME BPE and PED, with S88 / GAMP 5 automation compliant with 21 CFR Part 11.",
              "Full support: design, engineering, manufacturing, FAT, installation, commissioning, validation, training and service."],
      groups: [
        { t: "Process skids", items: ["Mobile skids, 5–500 L", "Integrated skids, 5–30,000 L", "Super skids — complete plants shipped assembled", "CIP modules"] },
        { t: "Processing systems", items: ["Sterile & biopharma (SVP, IV fluids, vaccines, insulin, mAb)", "Ointment & cream systems, 5–20,000 kg", "Liquid oral systems, 50–30,000 L"] },
        { t: "Services", items: ["Intelligent automation (PLC-SCADA, EBR)", "Project management, quality & validation (DQ–PQ)"] }
      ] },

    { id: "steriline", name: "Steriline", cat: "sterile", country: "Italy", since: "1989",
      url: "https://www.steriline.it/en/home/",
      about: ["Founded in 1989 near Lake Como, Italy — a specialist in complete lines for the aseptic processing of injectable products.",
              "Single-source supplier from washing and depyrogenation to filling, capping, external decontamination and barrier systems.",
              "Pioneer of robotics in aseptic processing since 2014, with VHP-resistant Stäubli robots and zero-loss, format-free machines.",
              "Over 1,300 machines installed in Europe, Asia and the USA; active in more than 50 countries with about 90% export.",
              "Handles vials, ampoules, cartridges and syringes — liquid, lyophilised or powder, toxic or non-toxic — all cGMP, GAMP and 21 CFR Part 11 compliant."],
      groups: [
        { t: "Standard range", items: ["Rotary washing machine RA-RC (24,000 pcs/h)", "Depyrogenation tunnel ST (STC25–ST20)", "Filling machine VFM (24,000 pcs/h)", "Ampoule filling machine AFM", "Capping machine VCM", "External decontamination EDM (48,000 pcs/h)", "Ancillary equipment"] },
        { t: "Robotic range", items: ["Vial filling RVFM", "Vial capping RVCM", "Nest filling RNFM (RTU syringes, vials, cartridges)", "Tray loader RTL", "Tub decontamination RTDS2", "External decontamination EDM-RHP"] },
        { t: "Containment & isolation", items: ["LAF and oRABS", "In-line cRABS and isolator (OEB 5)", "Stand-alone isolator"] },
        { t: "Other", items: ["Intelligent compounding system (ICS)", "SaniCO room sanitisation", "After-sales & laboratory services"] }
      ] },

    { id: "zirbus", name: "Zirbus Technology", cat: "sterile", country: "Germany", since: "1984",
      url: "https://www.zirbus.com",
      about: ["German manufacturer of autoclaves and freeze dryers since 1984, in Bad Grund (Harz) — all construction, welding, assembly, programming and testing in house.",
              "Certified quality: DIN EN ISO 9001 with risk management, ASME and PED Module H.",
              "From bench-top lab units to GMP production autoclaves up to 18,000 L and freeze dryers up to 65 m² / 1,200 kg ice.",
              "Installed in Egypt at MEVAC Pharma (vaccines), Cairo, Alexandria, Benha and Fayoum universities, and CMRDI.",
              "Production freeze dryers running at Farmhispania, Samyang Biopharma, Contipro, Lactina and others worldwide."],
      groups: [
        { t: "Laboratory", items: ["LabStar table-top autoclaves 25–200 L", "LVSA vertical autoclaves 80–153 L", "VaCo freeze dryers 2–15 kg/24 h"] },
        { t: "Pilot & production freeze dryers", items: ["Sublimator pilot 5–40 kg", "Production freeze dryers to 65 m² / 1,200 kg", "EKS / EKS-R bulk and food dryers", "Special dryers and isolators"] },
        { t: "Production autoclaves", items: ["HST floor-standing 150–1,033 L", "Large standing 568–5,060 L", "Production autoclaves to 18,000 L", "High-pressure autoclaves to 20 bar"] },
        { t: "Thermal systems & service", items: ["Steamboy steam generators", "Vacuum and tray dryers", "Media preparator, waste-water sterilisers", "ServTec service and validation"] }
      ] },

    { id: "tm", name: "TM – Fluid Dispensing Technology", cat: "sterile", country: "Italy", since: "Early 2000s",
      url: "https://www.tm-italia.it/",
      about: ["Dynamic Italian manufacturer combining founder experience with a young, professional team.",
              "A center of excellence in fluid application and dosing technologies.",
              "Holds multiple international patents and develops proprietary machines in-house."],
      products: ["Filling & Sealing of Uni-Dose Strips (semi-automatic / automatic)", "High-Capacity Filling & Sealing for Uni-Dose, OEB 5", "Blistering Machine for Double Sterile in ALU-ALU, for surgical sterile products", "Cutting Machine for Double Sterile Blisters", "Stand-alone Tightness Control for Uni-Dose Strips"] },

    { id: "pluemat", name: "Plümat", cat: "sterile", country: "Germany", since: "1975",
      url: "https://www.pluemat.info/en",
      about: ["Founded in 1975 in Espelkamp, Germany — a family-owned company now run by the second generation, with about 250 employees and ~90% export.",
              "More than 2,700 filling and bag-making lines delivered worldwide; the leader in polyolefin (PP) IV-bag technology.",
              "Pioneer of form-fill-seal for IV bags since 1996, now in its third generation (FFS 991 / 992).",
              "Group includes Colpitt (HF-welding for IV and blood bags, since 2011) and Plümat Packaging Systems (bags, ports and components).",
              "Applications: standard IV solutions, nutrition (TPN), antibiotics, plasma and blood products, contrast media, amino acids and dialysis."],
      groups: [
        { t: "Form Fill Seal lines", items: ["FFS 991 / 992 SFC-Port (2,300 / 4,200 bags/h)", "FFS 3000 / 6000 Port", "FFS 3000 / 6000 Tube"] },
        { t: "Filling & sealing", items: ["BFM 007 modular bag filler (50–5,000 ml)", "PLÜMATEX-F 014 CF canister filler", "Bag making, overwrapping and aseptic machines"] },
        { t: "Bottles, inspection & components", items: ["Bottle filling and sealing (plastic and glass)", "Isolators, leak detection, customised machines", "SFC / MFC ports, empty bags, packaging consulting"] }
      ] },

    { id: "mpa", name: "MPA Technical Devices", cat: "sterile", country: "Italy", since: "1998",
      url: "https://mpaitaly.com/en/",
      about: ["Italian specialist since 1998 in high-precision dosing components for pharmaceutical filling machines, based in Tuscany's pharma packaging district.",
              "OEM-equivalent pumps, needles and parts for the leading filling-machine brands — 16 of the world's top 20 pharma companies are customers.",
              "Part of the Arventia Group since 2023; about 45 people and a new production facility under development.",
              "Works in 316L, titanium, Hastelloy C-22, ceramics and FDA plastics (PEEK, PVDF, Delrin); internal finish down to Ra < 0.2 µm.",
              "Full traceability (EN 10204 3.1), GMP / FDA / EU compliant, with repair and refurbishing of existing parts."],
      groups: [
        { t: "Dosing pumps", items: ["Stainless steel volumetric pumps (CIP/SIP, differential, micro)", "Ceramic pumps (alumina / zirconia)", "DLC-AM chrome-free coating", "Peristaltic pump head and stand-alone filler"] },
        { t: "Filling needles", items: ["Filling, washing, nitrogen and gassing needles (316L / PEEK)", "Single-use 3D-printed needles"] },
        { t: "Format & machine parts", items: ["Manifolds, tanks and connections", "Stopper guide tubes, screw conveyors", "Star wheels, grippers, custom parts", "Autoclave and storage cases"] }
      ] },

    { id: "am", name: "AM Instruments", cat: "sterile", country: "Italy", since: "1990",
      url: "https://www.aminstruments.com/en/",
      about: ["Italian company founded in 1990 in Limbiate (Milan), specialised in contamination control for cleanrooms — ISO 9001 certified by DNV.",
              "Pharmaclean® consumables made and packed in its own Grade C cleanroom (EU GMP Annex 1).",
              "Zherox® HPE bio-decontamination: 7.8% ionised hydrogen peroxide — portable, mobile, fixed and pass-box systems.",
              "AM Tech designs and builds LAF modules, transfer trolleys, pass-boxes, air showers and RABS in house.",
              "Environmental monitoring systems, SmartProbe®, MyFog® smoke studies and PAMAS liquid particle counters."],
      groups: [
        { t: "Pharmaclean® consumables", items: ["Tyvek® bags, covers and needle bags", "Peelable bags and reels", "Integra® bags, MyWipe® wipes, mats, cleaning tools"] },
        { t: "Zherox® HPE bio-decontamination", items: ["Zherox® b-pack (portable)", "Zherox® Light (up to 300 m³)", "Zherox® Fixed System (27 nozzles)", "MyBox® HPE pass-box"] },
        { t: "Laminar flow & transfer", items: ["LAFSPC custom and Multiplo® LAF modules", "LAF cabinets, LAF trolleys, CART2COUNT", "Air showers, dynamic pass-boxes, RABS"] },
        { t: "Monitoring", items: ["Particle and microbiological monitoring systems", "SmartProbe®, MyFog®, PAMAS"] }
      ] },

    // ---------- NON-STERILE ----------
    { id: "freund", name: "Freund", cat: "nonsterile", country: "Japan / USA / Italy", since: "1964",
      url: "https://www.freundglobal.com/",
      about: ["World-class coating and granulation equipment and service provider, serving clients since 1964 (60th anniversary in 2024).",
              "Supplies equipment, system engineering, process support, training, servicing and spare parts — with lifetime support.",
              "Process laboratories in Marion (USA), Villasanta (Italy), Hamamatsu and Kanagawa (Japan) and Shanghai (China) for trials, scale-up and contract manufacturing.",
              "All systems available with Smart-Safe™ containment down to 10 ng/m³ and EcoClean™ CIP."],
      groups: [
        { t: "Granulation & coating", items: ["FLO-COATER® fluid beds 200 mL – 1,900 L (top spray, Wurster, GRANUREX®)", "GRANUMEIST® high shear mixers 1 – 2,000 L", "Granulation suites, vertical or horizontal", "HI-COATER® tablet coaters 0.05 – 1,800 L"] },
        { t: "Dry granulation & drying", items: ["GRANUFORCE™ roll compactors up to 700 kg/h", "GENESIS™ spray dryers 0.5 – 50 kg/h evaporation"] },
        { t: "Powder handling", items: ["IBCs, drums and washing", "Bin, V and double-cone blenders", "Lifts, mills, sifters and vacuum conveyors"] },
        { t: "Process support", items: ["PAT (NIR, particle probes)", "Containment and CIP", "Process labs and Full Circle Service™"] }
      ] },

    { id: "omag", name: "OMAG", cat: "nonsterile", country: "Italy", since: "1973",
      url: "https://www.omag-pack.com/en/",
      about: ["Italian specialist in sachet and stick-pack packaging since 1973 — every machine designed and built at its headquarters in Italy.",
              "Designed its first pharmaceutical machine in the early 2000s; pharma is now its main focus.",
              "Two production plants making and assembling each component, with in-house mechanical, electronic and PLC engineering teams.",
              "Clean, simple design, easy access and operator-friendly solutions; remote assistance 24/7."],
      groups: [
        { t: "Sachet & stick-pack machines", items: ["C3 continuous and CP intermittent sachet machines", "CS and CSJ stick-pack machines", "CO horizontal sachet and doy-pack machine"] },
        { t: "Complete lines", items: ["Robotic counting and stacking", "Horizontal cartoners, carton former & closer"] },
        { t: "Components", items: ["Auger, cup, pump, tablet and vial dosing", "Ink-jet, laser, thermal, embossing coding", "21 CFR Part 11 controls and 100 % check-weighing"] }
      ] },

    { id: "tgm", name: "TGM", cat: "nonsterile", country: "Italy", since: "40+ years",
      url: "https://tgm.it/ENG/",
      about: ["Italian manufacturer of automatic packaging and filling machinery with 40+ years of experience.",
              "Designs and builds complete packaging lines for pharmaceuticals, cosmetics, food, and chemicals.",
              "Customized solutions, high-quality Italian engineering, flexible production."],
      products: ["Tube Filling Machines, Cartoning Machines", "Wrapping Machines, Case Packers", "Mascara Machines", "Cartridge, Dispenser & Syringe Filling", "Mono-dose Strip Filling", "Turbo Emulsifiers"] },

    { id: "kikusui", name: "Kikusui", cat: "nonsterile", country: "Japan / Italy", since: "1910",
      url: "https://kikusui.com/en/Home",
      about: ["Kikusui Seisakusho Ltd. — leaders in high-speed, technologically advanced pharmaceutical and industrial tablet presses since 1910.",
              "Privately held; about 210 employees; turnover about JPY 6,000 million (USD 60 million).",
              "Office and plant in Kyoto, branch in Tokyo; subsidiaries Kikusui USA (Lakewood, NJ) and Kikusui Europe Srl plant (Muggio, Italy).",
              "Firsts include high-speed RTM presses (1957), automatic weight control (1981), the water-washable AQUARIUS (1990) and the high-containment AQUARIUS C (2001).",
              "Serves pharma, nutraceutical, electronic, powder-metal and chemical industries."],
      groups: [
        { t: "Production presses", items: ["AQUARIUS G-J / G-K", "NEW GEMINI 1545 high tonnage", "AQUARIUS C high containment"] },
        { t: "Multi-layer & dry-coated", items: ["Bi-layer and dry-coating modules", "LIBRA2-3L and NEW GEMINI-3L tri-layer", "CLEANPRESS Correct series"] },
        { t: "Lab & control", items: ["VELA G and AQUARIUS LD lab presses", "PCD-2 automatic weight control", "TAS-2 monitoring (21 CFR Part 11), PTOLEMY"] }
      ] },

    { id: "pharmagel", name: "Pharmagel", cat: "nonsterile", country: "Italy", since: "1962",
      url: "https://www.phartech.it/",
      about: ["Pharmagel Technology S.r.l. (Italy) — complete softgel technology, from gel and fill preparation to encapsulation, drying, inspection and printing.",
              "GK and HT encapsulation lines from lab (HT30) and pilot (HT50) to large-scale production (HT120, up to about 564,000 softgels/h).",
              "Own R&D division focused on softgel quality — Pharmavisiomatic camera inspection and ink-free UV laser printing.",
              "Equipment built to FDA 21 CFR Part 11, CE and GMP requirements."],
      groups: [
        { t: "Encapsulation", items: ["GK72 / GK76 lines", "HT76 / HT83 / HT100 / HT120 lines", "HT50 pilot and HT30 lab lines", "Service trolleys and lift"] },
        { t: "Preparation", items: ["Speedygel gel mass 250 – 2,000 L", "Speedymix fill 250 – 2,000 L", "Mixing heads 60 – 300 L, R&D 15 – 100 L"] },
        { t: "Drying", items: ["Single, double-deck and twin tumble dryers", "Drying tunnels and sub-batch cabins", "Basket and tray washing"] },
        { t: "Inspection & printing", items: ["Pharmasort diameter sorters", "Pharmavisiomatic visual inspection", "UV laser printer"] }
      ] },

    { id: "cadmach", name: "Cadmach", cat: "nonsterile", country: "India", since: "50+ years",
      url: "https://cadmach.com/",
      about: ["Indian tablet press specialist for more than 53 years — over 14,000 installations in 35+ countries on five continents.",
              "Market share of over 70% in India and about 15% in the USA; found in almost every pharmaceutical plant in India.",
              "Complete range from R&D presses to torque-driven i-series presses up to 948,000 tablets/h, plus roller compactors, mills and tooling.",
              "Also serves veterinary, Ayurvedic, nutraceutical, food, chemical, API, silica, ferrite and defence industries.",
              "Cadmach Technology Center in Ahmedabad with mechatronics-qualified service engineers."],
      groups: [
        { t: "Tablet presses", items: ["i-series torque-driven: C 300i, C 200i, C 100i", "C-series: C 300, C 200, C 100", "CTX A, CTX, CTX IIA, CTX IIIA", "Cadpress V, IV, IIA and CADPRO (double-sided)"] },
        { t: "Classic & special presses", items: ["CMB5, CMB4, CMD4, CMD3, CMB3, CU", "CPC-20 press coat (tablet-in-tablet)", "CRPP heavy-duty bolus press"] },
        { t: "Granulation & milling", items: ["Roll compactors 50 – 1,000 kg/h", "Oscillating granulator, Cizermill, Cadmill"] },
        { t: "Allied", items: ["Colloid mill", "Punches & dies", "Service and technology center"] }
      ] },

    // ---------- PACKAGING / T&T ----------
    { id: "famartec", name: "FamarTec (Curti Group)", cat: "packaging", country: "Italy", since: "1969",
      url: "https://www.famartecsrl.com/?lang=en",
      about: ["Italian manufacturer of automatic packaging machines since 1969.",
              "Part of Curti Industries Group since 2015.",
              "ISO 9001:2015 certified, with a strong engineering and quality focus."],
      products: ["Blistering Machines", "Cartoning Machines", "Case Packers", "Thermoforming Machines", "Complete Packaging Lines"] },

    { id: "prisma", name: "Prisma Industriale", cat: "packaging", country: "Italy", since: "1984",
      url: "https://www.prismaindustriale.com/en/",
      about: ["Italian maker of industrial inspection systems since 1984.",
              "Serves food, beverage, and pharmaceutical industries with Italian-built equipment and global support.",
              "Check-weigher accuracy from 0.1 g up to 5 g; 60 to 1000 ppm."],
      products: ["Check Weighers", "Metal Detectors", "X-ray Inspection", "Integrated Systems"] },

    { id: "antares", name: "Antares Vision Group", cat: "packaging", country: "Italy",
      url: "https://antaresvisiongroup.com/",
      about: ["Italian leader in inspection, serialization, aggregation and track & trace software for the pharmaceutical industry.",
              "Print & Check serialization machines up to 400 pcs/min, built from printer, laser, camera, checkweigher, tamper-evident and labelling modules.",
              "Aggregation from manual stations to fully automatic print & apply for bundles, cases and pallets.",
              "DIAMIND software ecosystem from line (L2) to plant, warehouse, enterprise and regulator (L5) — ready for Egypt's track & trace requirements.",
              "Visual inspection and container closure integrity testing for vials, ampoules, syringes, cartridges and bottles."],
      groups: [
        { t: "Serialization – Print & Check", items: ["SP, EVO, Advanced, CW, 3T S, AIO XS, FLEX", "Flat Carton off-line serialization", "Up to 400 pcs/min"] },
        { t: "Aggregation", items: ["Omnivision bottle station", "Semi-automatic case packer", "Print & Apply for bundle and case", "Sentinel, Matrix and manual stations"] },
        { t: "DIAMIND software", items: ["DIAMIND Line (L2)", "Factory, Warehouse and Enterprise (L3–L5)", "Smart Clearance"] },
        { t: "Inspection", items: ["Vials, ampoules, cartridges, syringes, bottles, BFS", "Visual inspection and leak testing"] }
      ] },

    { id: "siempharma", name: "Siempharma", cat: "packaging", country: "Italy",
      url: "https://www.siempharma.com/",
      about: ["Italian designer and manufacturer of packaging machines for the pharmaceutical and nutraceutical industries.",
              "Covers primary, secondary and end-of-line packaging, inspection of whole lines, PLC software, vision systems and robotics.",
              "Machines built to GMP, CE, 21 CFR Part 11 and Industry 4.0, with SIEMPHARMA software and OPC UA connectivity."],
      groups: [
        { t: "Primary packaging", items: ["FS-4 and LFRC-8 liquid filling-capping", "CM-50 counting-capping", "RCM-200 MT / DT rotary cappers", "BC-135 SR blister machine"] },
        { t: "Labelling & cartoning", items: ["ETF-150, ETF-300, ETFR-150 labellers", "P&A-30 print & apply, ETFS-300 syringe labeller", "C-100, C-140, C-260 / C-400, C-70, VC-40 cartoners", "FA-38 bundler"] },
        { t: "End of line", items: ["INC-6 SA / 6A / 10A / 6 AF / 10 AF case packers", "PB cobot palletisers"] },
        { t: "Ancillary", items: ["TS-1200 bottle cleaner, DPI-120 desiccant inserter", "AD-300 / AR-300 syringe denester and renester", "TI-250 inspection"] }
      ] },

    { id: "cora", name: "CO.RA.", cat: "packaging", country: "Italy", since: "1985",
      url: "https://coraitaly.net/en/",
      about: ["Italian specialist (Altopascio, Lucca) in connection and interface systems \"between machine A and machine B\" for pharmaceutical and chemical solid handling.",
              "Inventor of the SOLE VALVE® (patented 1992), TABLET VALVE and STERI LIFT®; about 50 staff.",
              "Elastomer parts made in its own clean room; full material traceability; ATEX 2014/34/UE and PED 2014/68/UE.",
              "Exports 75% of production (36% EU, 39% outside EU); Technology Center for product tests and training; after-sales response within 30 minutes."],
      groups: [
        { t: "Valves", items: ["SOLE VALVE®, TABLET VALVE, ROTARY VALVE (+ Tablet)", "DOUBLE VALVE®, VR8V®, sanitary rotary valve", "HR CRUSHER"] },
        { t: "Systems", items: ["STERI LIFT® and DUK lifting", "Dosing systems, TIP containment (OEL 1 µg/m³)", "SANI FLOW, tablet recovery, bag emptiers"] },
        { t: "Components & services", items: ["Actuators, AQR / AFSB, MF clamps", "SIL COMP, SIL HOSE, SIL CAP", "Revamping, re-polishing, tests"] }
      ] },

    { id: "andock", name: "Andocksysteme", cat: "packaging", country: "Germany", since: "2000s",
      url: "https://andocksysteme.de/en/",
      about: ["German leader since the 2000s and global expert in high-containment interfaces and safe powder handling.",
              "Complete consultancy, customized engineering, modular technologies and lifecycle support including service, retrofit, and validation assistance.",
              "Containment down to OEB 5 (below 1 µg/m³) with single-use, stainless steel and hybrid valves that dock to each other.",
              "Every ball segment valve is built individually — ideal for new plants and for revamping existing dryers, blenders and reactors."],
      groups: [
        { t: "Single-use containment", items: ["AVAX single-use split butterfly valve (OEB 5)", "ACUBE® containment bag system, 10–400 L", "ACUBE-PRO FIBC blending", "ACLAMP single-use clamp", "ACLIP TC-clip seal"] },
        { t: "Split valves & process valves", items: ["ASBV split butterfly valve (< 1 µg/m³)", "ASBV with PTFE seals (SIP, powders & liquids)", "AVAX stainless steel valve", "APORT hybrid process valve (vacuum to 20 barg)", "BSV ball segment valve (to 10 bar)", "Compensators & bellows DN 100–300"] },
        { t: "Sampling valves", items: ["BSS sampling valve – vacuum & pressure", "BSS sampling valve – atmospheric"] }
      ] },

    // ---------- UTILITIES ----------
    { id: "elettracqua", name: "Elettracqua", cat: "utilities", country: "Italy", since: "1966",
      url: "https://www.elettracqua.com/",
      about: ["Italian company specializing in water treatment systems, founded in 1966.",
              "Focus on pure and ultrapure water for pharmaceutical and industrial use.",
              "Full service from design to commissioning.",
              "Market share: 65% in Italy, 45% in Europe."],
      products: ["Pure Steam Generators", "Storage & Distribution Loops", "Purified Water", "Water for Injection"] },

    { id: "cdz", name: "CDZ Air Handling Units", cat: "utilities", country: "Italy", since: "1974",
      url: "https://www.cdzsrl.net/",
      about: ["Designs and builds air handling units and related air treatment equipment since 1974.",
              "Tailored systems from about 500 to 270,000 m³/h — bespoke engineering rather than standard modular units.",
              "Serves civil, industrial, automotive, food, pharmaceutical/bio-medical, and naval sectors.",
              "20,000+ installations in 50+ countries."],
      products: ["Custom Air Handling Units", "Air Treatment Equipment"] },

    { id: "generalfilter", name: "General Filter Italia", cat: "utilities", country: "Italy", since: "1965",
      url: "https://www.generalfilter.com/en/",
      about: ["Italian leader since 1965 in improving air quality for industrial, commercial, civil, hospital, and clean-room environments.",
              "Filters from basic ventilation to high-efficiency HEPA/ULPA classes, for HVAC, pharma, food & beverage, and biotech.",
              "Products meet international standards with emphasis on durability, energy efficiency, and performance."],
      products: ["HEPA Absolute Filters (H13–H14)", "Laminar Flow Absolute Filters", "Filtering Terminals", "Activated Carbon Cells", "Pocket & Pleated Filters (G3–F9)", "Safety & Modular Filtering Boxes"] },

    { id: "ipm", name: "IPM Italia", cat: "utilities", country: "Italy", since: "1981",
      url: "https://www.ipmitalia.it/en/",
      about: ["Founded in 1981 — a leading producer and installer of resin and natural-grit flooring.",
              "One single partner for design, production, and installation.",
              "High-performance, eco-friendly systems: 487+ projects and 265,000+ m² installed in one year."],
      products: ["Pharma Terrazzo", "Pharmcryl (Acrylic)", "Multicrete"] },

    { id: "hfiltration", name: "H Filtration Group", cat: "utilities", country: "Italy", since: "1990",
      url: "https://en.hfiltration.com/",
      about: ["Industrial air filtration expert since 1990 — removing dust, fumes, oil mist, and VOCs from industrial environments.",
              "Design, installation, maintenance, and solutions that improve air quality and workplace safety."],
      products: ["Industrial Dust & Dry Fume Filtration", "Oil Mist Extraction", "VOC Abatement"] },

    { id: "inexport", name: "Inexport Light", cat: "utilities", country: "Italy",
      url: "https://www.inexportlight.com/en/",
      about: ["Italian technical lighting company specializing in recessed and technical LED lighting for professional environments.",
              "Built to CE, IMQ and ATEX standards with IP55–IP65 protection — for sterile rooms, healthcare, industrial and hazardous areas."],
      products: ["Lighting for Sterilized & Aseptic Rooms", "Lighting for Chemical Agents & Gas (Ex)", "Operating Theater Lighting"] },

    { id: "sorgente", name: "Sorgente SRL", cat: "utilities", country: "Italy", since: "2015",
      url: "https://sorgente-pharma.com/",
      about: ["Our sister company — founded in 2015 in Milan, specializing in pharmaceutical spare parts.",
              "Original spare parts with EUR.1 certification.",
              "Direct supply with 0 customs fees and 0% VAT for the pharmaceutical sector.",
              "Fast delivery, cost-efficiency, and competitive pricing."],
      products: ["Repair Services", "Active Product Lines", "Discounted Product Lines", "Service Exchange Options", "oRABS Upgrades"] },

    // ---------- CLEANROOMS ----------
    { id: "techniconsult", name: "Techniconsult Group", cat: "cleanroom", country: "Italy", since: "1987",
      url: "https://tcfirenze.com/en/",
      about: ["Florence-based engineering and construction group working only in life sciences for over 35 years — from engineering to construction, from maintenance to excellence.",
              "Group: Techniconsult (engineering, C&Q), TECMA (general contracting, construction, maintenance) and AQE (automation engineering and validation).",
              "200+ clients, 1,600+ projects, 50+ turnkey projects, about 150 staff; 2023 group production € 24.8 M.",
              "ISO 9001 and ISO 45001; Benefit Corporation since 2022; EcoVadis Bronze; FOYA 2020 award (GSK project, EPCM contractor).",
              "Projects across Europe, the Middle East and beyond; local partner with MoU in Egypt. Part of a strategic federation with PQE Group."],
      groups: [
        { t: "Engineering", items: ["Consultancy, design & BIM", "Process engineering and safety", "Automation & CSV, energy & sustainability"] },
        { t: "Construction & C&Q", items: ["TECMA general contracting (turnkey)", "Commissioning & qualification", "Containment testing, maintenance"] },
        { t: "Digital tools", items: ["BIM, laser scanning, CDE", "Process simulation and CFD", "AR / VR, modular solutions, AI"] },
        { t: "References", items: ["Menarini, GSK, Chiesi, Merck, Novartis, BMS, Helsinn"] }
      ] },

    { id: "delta", name: "Delta 2000", cat: "cleanroom", country: "Italy",
      url: "https://www.delta-2000.com/en/",
      about: ["Italian leader in cleanroom solutions — design, production, and installation of controlled-contamination environments.",
              "Decades of experience and international know-how.",
              "Serving pharmaceutical, medical, chemical, electronics, food, and cosmetics sectors."],
      products: ["Modular Walls, Doors, Flooring", "Suspended Ceilings", "Profiles & Finishes", "Furniture & Accessories"] },

    // ---------- EMS / CONTAINMENT ----------
    { id: "tema", name: "Tema Sinergie", cat: "ems", country: "Italy", since: "1985",
      url: "https://www.temasinergie.com",
      about: ["Italian company established in 1985 and a world leader in shielded isolators for nuclear medicine.",
              "Barrier Isolation Technology unit: customized AISI 316L isolators and RABS for aseptic and containment processes in pharma and chemicals.",
              "Full engineering from concept to P&ID, Siemens PLC control, cGMP / FDA, 21 CFR Part 11 and GAMP 5 software.",
              "Complete validation packages (FAT, SAT, IQ/OQ/PQ); 24/7 online support and VPN remote service.",
              "Quality system certified ISO 9001 (since 2000) and ISO 13485 (since 2013)."],
      groups: [
        { t: "Aseptic isolators", items: ["AP-IS aseptic processing", "ST-IS sterility testing", "CLF-IS hospital pharmacy", "Cell therapy isolators"] },
        { t: "Containment", items: ["HC-IS ≤ 50 ng/m³", "AC-IS aseptic containment", "Multi-stage isolators, downflow booths"] },
        { t: "RABS, transfer & filling", items: ["Open / closed RABS", "AB-PTC bio-decon pass box", "AseptiFill filling & capping"] },
        { t: "Testing & radiopharma", items: ["AGLTS automatic glove tester", "Hot cells and radiopharma lines"] }
      ] },

    { id: "rigel", name: "Rigel Life Sciences", cat: "ems", country: "Italy", since: "2008",
      url: "https://www.rigellifesciences.com/",
      about: ["\"Contamination Control Specialists\" — Italian company founded in 2008 for contamination monitoring and validation solutions.",
              "Key product IEMS Next: real-time environmental monitoring of viable and total particles, compliant with EU GMP Annex 1, 21 CFR Part 11 and Annex 11.",
              "Exclusive CLiMET Instruments dealer for Italy, North Africa, the Middle East and Eastern Europe; partnership with Biolog.",
              "Accredited calibration laboratory (ACCREDIA LAT 305T) to ISO 21501-4:2018.",
              "Offices in Milan, Rome, Montecatini, Lyon, Budapest, Istanbul and Dubai."],
      groups: [
        { t: "Monitoring systems", items: ["IEMS Next / EMS Next", "Dual Sampler, inertial impactor", "PLC control center (S7-1500)"] },
        { t: "Portable instruments", items: ["CLiMET particle counters CI-170 to CI-1070", "CLiMET CI-97 air sampler"] },
        { t: "Leak testing & services", items: ["RI7001 photometer, aerosol generators", "Accredited calibration, customer support team"] }
      ] },

    { id: "abc", name: "ABC Transfer", cat: "ems", country: "France", since: "2019",
      url: "https://abctransfer.fr/",
      about: ["French maker (Chambray-lès-Tours) of ultraclean sterile transfer solutions — Rapid Transfer Systems for the global biopharmaceutical industry.",
              "Founded by Thierry Girard and Jean-Luc Schneider, formerly of the transfer-technology market leader, and co-developed with pharma and isolator companies.",
              "A feasibility study found 70+ improvement opportunities in RTPs: GMP, sterility, cleaning, ergonomics, maintenance and lifecycle cost.",
              "Products compatible with conventional RTP brands; Annex 1 gloveless solutions; 50% less plastic, 30% less steel, 100% recyclable, carbon offset with Reforest'Action.",
              "Nova Engineering is ABC Transfer's agent in Egypt."],
      groups: [
        { t: "Alpha Ports", items: ["Alpha Port (internal opening)", "Gloveless Alpha Port (external opening)", "Double-wall isolator assembly"] },
        { t: "Beta Containers", items: ["Beta Container 190 / 270", "Container and bag trolleys"] },
        { t: "Single-use & gloveless", items: ["Betacleanbag™ ported bags", "ABC Transfer® Ultra™ gloveless system"] }
      ] },

    // ---------- GLASS ----------
    { id: "ocmi", name: "OCMI Group", cat: "glass", country: "Italy", since: "1921",
      url: "https://www.ocmigroup.com/",
      about: ["Italian industrial company since 1921, specializing in machinery for pharmaceutical glass packaging.",
              "Also operates in precision gears and mechanical solutions through its OTG division.",
              "Serves customers worldwide with a long-standing presence in pharma."],
      products: ["Continuous Ampoule Lines", "Continuous Vial & Cartridge Lines", "Intermittent Vial & Cartridge Lines"] }
  ]
};

/* Events — NOVA at exhibitions, and upcoming industry events.
   status: 'past' (NOVA took part) or 'upcoming'. Dates as YYYY-MM-DD. Add new events at the top. */
window.NOVA.events = [
  { id:'cphime26', status:'upcoming', kind:'Industry event', t:'CPHI Middle East 2026', start:'2026-12-14', end:'2026-12-16',
    city:'Riyadh, Saudi Arabia', venue:'Riyadh International Exhibition Centre',
    summary:'The region\'s leading pharma event returns to Riyadh. NOVA works with manufacturers across KSA — book a meeting with our team during the show.',
    highlights:['Pharma ingredients, machinery, packaging and services','Buyers and manufacturers from across the Gulf and MENA','Meet NOVA to discuss projects in KSA'] },
  { id:'pharmaconex27', status:'upcoming', kind:'Industry event', t:'Pharmaconex 2027', start:'2027-09-06', end:'2027-09-08',
    city:'Cairo, Egypt', venue:'Egypt International Exhibition Center (EIEC), New Cairo',
    summary:'Egypt\'s and Africa\'s largest pharma manufacturing show, where NOVA exhibits every year with its European partners. Save the date.',
    highlights:['Annual show organised by Informa Markets with CPHI','Machinery, packaging, cleanroom and utilities suppliers','Free admission and CPD-certified conference programme'] },
  { id:'pharmaconex26', status:'past', kind:'Exhibitor', t:'Pharmaconex 2026', start:'2026-09-01', end:'2026-09-03',
    city:'Cairo, Egypt', venue:'Egypt International Exhibition Center (EIEC), New Cairo', booth:'Hall 4 · Stand H10',
    partners:['tema','omag'],
    summary:'NOVA welcomed visitors at its stand in Hall 4 with partners including Tema Sinergie and OMAG.',
    highlights:['Tema Sinergie showed integrity testing solutions for isolators and RABS (AGLTS 2 glove leak tester)','OMAG presented its sachet and stick-pack packaging technology','360 exhibitors across two halls, with conferences on cleanrooms, contamination control and qualification'] },
  { id:'cphime25', status:'past', kind:'Visit', t:'CPHI Middle East 2025', start:'2025-12-09', end:'2025-12-11',
    city:'Riyadh, Saudi Arabia', venue:'Riyadh Exhibition & Convention Center (Malham)', img:'expo3.jpg',
    summary:'The NOVA team attended CPHI Middle East in Riyadh, meeting customers and partners from Saudi Arabia and the Gulf.',
    highlights:['Meetings with KSA manufacturers and partners','Supporting NOVA\'s growing presence in Saudi Arabia'] },
  { id:'pharmaconex25', status:'past', kind:'Exhibitor', t:'Pharmaconex 2025', start:'2025-09-01', end:'2025-09-03',
    city:'Cairo, Egypt', venue:'Egypt International Exhibition Center (EIEC), New Cairo', img:'about.jpg', gallery:['expo2.jpg'],
    partners:['cora','omag','steriline'],
    summary:'NOVA exhibited at the 12th edition of Pharmaconex and hosted partners at its stand, including CO.RA., which thanked NOVA for the visit.',
    highlights:['More than 350 exhibitors from 40 countries','Over 5,000 professionals on the opening day','CO.RA. powder-handling solutions presented at the NOVA stand'] }
];
