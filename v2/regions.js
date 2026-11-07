// Regions + the suppliers added for UAE, KSA and Iraq.
// All facts come from each supplier's official website (checked Nov 2026).
// To change which supplier is in which region, edit only the REGION_MAP lists below.
(function(){
  const N = window.NOVA, P = window.NOVA_PRODUCTS = window.NOVA_PRODUCTS || {};

  N.regions = [
    { id:'egypt', name:'Egypt', flag:'🇪🇬' },
    { id:'uae',   name:'UAE',   flag:'🇦🇪' },
    { id:'ksa',   name:'KSA',   flag:'🇸🇦' },
    { id:'iraq',  name:'Iraq',  flag:'🇮🇶' }
  ];

  N.regionMap = {
    egypt:["adam","steriline","zirbus","tm","pluemat","mpa","am","freund","omag","tgm","kikusui","pharmagel","cadmach","famartec","prisma","antares","siempharma","cora","andock","elettracqua","cdz","generalfilter","ipm","hfiltration","inexport","sorgente","techniconsult","delta","tema","rigel","abc","ocmi"],
    uae:["steriline","delama","adam","tm","pluemat","mpa","omag","tgm","kikusui","pharmagel","cadmach","famartec","siempharma","cora","andock","elettracqua","cdz","generalfilter","ipm","hfiltration","inexport","sorgente","techniconsult","delta","rigel","abc","ocmi"],
    ksa:["adam","steriline","zirbus","tm","mpa","am","pharmagel","omag","tgm","kikusui","siempharma","famartec","stevanato","cora","andock","elettracqua","cdz","generalfilter","ipm","hfiltration","inexport","sorgente","techniconsult","delta","rigel","abc","ocmi"],
    iraq:["solme","steriline","zirbus","tm","pluemat","mpa","omas","freund","kikusui","omag","famartec","prisma","metapack","arca","pieri","elettracqua","cdz","hfiltration","generalfilter","ipm","inexport","techniconsult","delta","rigel","abc","fourstars"]
  };


  /* ---------- Hot topics window (shown instead of the Track & Trace tile outside Egypt) ---------- */
  N.hotSupport = 'NOVA stays with you after the sale and on your projects. Our large technical team covers installation, commissioning, maintenance, upgrades and spare parts, and complete projects from URS to turnkey — any job related to pharma.';
  N.hot = {
    uae:[
      { tag:'Industry policy', t:'Operation 300bn puts pharma first', d:'The UAE industrial plan aims to lift industry to AED 300 billion of GDP by 2031 and names healthcare and pharmaceuticals a priority sector.',
        pts:['Reported incentives: subsidised industrial land, streamlined approvals and fast-track registration for locally made essential medicines','Preference for local products in government purchasing','New and expanded plants need process, filling, packaging, cleanroom and utility equipment'],
        src:'Reported by angelindubai.com (figures marked indicative by the author)' },
      { tag:'Event', t:'Duphat Dubai 2027', d:'Dubai International Pharmaceuticals and Technologies Conference and Exhibition.', when:'30 Mar – 1 Apr 2027', where:'Dubai, UAE',
        pts:['Meet the NOVA team and discuss your next machine, line or project','Dates from an event calendar — please confirm with the organiser'],
        src:'expoassist.net exhibitions calendar' } ],
    ksa:[
      { tag:'Industry policy', t:'80% local pharma production by 2030', d:'Vision 2030 sets the goal of localising 80% of pharmaceutical production in Saudi Arabia.',
        pts:['"Made in Saudi" asks for 40% added local value for product approval','Government tenders score local manufacturing (15% in NUPCO tenders)','New plants are being built in Sudair Industrial City, including oncology and high-potency drug facilities'],
        src:'saudihealthcareconsulting.com, May 2026' },
      { tag:'Event', t:'CPHI Middle East, Riyadh', d:'The region\'s pharma supply-chain show, moved to December 2026.', when:'Dec 2026 (14–16 Dec per one calendar)', where:'Riyadh, Saudi Arabia',
        pts:['Machinery & equipment, finished dosage, packaging and contract services tracks','Meet NOVA to plan your localisation project','Exact days to be confirmed with the organiser'],
        src:'cphi.com; mededgemea.com; expoassist.net' } ],
    iraq:[
      { tag:'Event', t:'Health Expo Iraq, Baghdad', d:'International health exhibition at the Baghdad International Fair, organised by Business Ground Group.', when:'2026 edition — dates to be confirmed', where:'Baghdad, Iraq',
        pts:['A general health fair, not a pharma-manufacturing show','Ask NOVA for a meeting during the show'],
        src:'healthexpoiraq.iq; medtube.net' },
      { tag:'Regulation', t:'GMP and fast-track registration', d:'Pharmaceutical facilities in Iraq need a GMP certificate aligned with WHO and ICH standards.',
        pts:['A foreign GMP certificate from a reference agency (US FDA, EMA, WHO) enables fast-track registration — about 30 days to a temporary registration and import licence','Layout, process flow, clean areas, HVAC and equipment qualification must support GMP from the design stage','Sterile injectables and ampoules are a government priority; tablets and capsules are the easiest near-term entry'],
        src:'pharmaaccess.net, Iraq pharma manufacturing guide' } ]
  };


  N.hotTheme = {
    ksa:  { flag:'🇸🇦', pill:'Vision 2030', tile:'Built for 2030', tsub:'Made in Saudi · industry news & events', eyebrow:'Kingdom of Saudi Arabia · Vision 2030', slogan:'Made in Saudi. Built for 2030.', line:'The Kingdom is localising its medicines. NOVA helps you build the plant.', bar:'Vision 2030' },
    uae:  { flag:'🇦🇪', pill:'Operation 300bn', tile:'Made in the Emirates', tsub:'Ready for the world · news & events', eyebrow:'United Arab Emirates · Operation 300bn', slogan:'Made in the Emirates. Ready for the world.', line:'The UAE is building its pharma future. NOVA builds it with you.', bar:'Made in the Emirates' },
    iraq: { flag:'🇮🇶', pill:'Local pharma rising', tile:'The next cradle of pharma', tsub:'Cradle of civilisation · news & events', eyebrow:'Iraq · Local pharma rising', slogan:'Cradle of civilisation. Next cradle of pharma.', line:'Iraq is rebuilding its medicine industry plant by plant. NOVA is on site with you.', bar:'Rebuilding Iraqi pharma' }
  };

  /* ---------- new partners ---------- */
  N.partners.push(
  { id:'delama', name:'De Lama', cat:'sterile', country:'Italy', since:'1949', url:'https://www.delama.it/', nophoto:true,
    about:[
      'Founded in 1949 in San Martino Siccomario (Pavia), Italy — presented as the first Italian manufacturer of sterilizers.',
      'Sterilization, decontamination and washing solutions for pharmaceutical, medical-device, nutraceutical and food industries.',
      'Leader in hydrogen peroxide sterilization under deep vacuum (HyPerPure®), including patented ZeroStop® continuous sterilization.',
      'Designed to cGMP, FDA, GAMP, EN 285 and PED; ICIM-IQNET-CISQ certified.' ],
    groups:[
      { t:'Sterilizers', items:['Saturated steam DLOV','Air/steam mixture DLOAV','Compact vertical DLV-CAB','HyPerPure® H₂O₂ DLVHP/ST','Superheated water DLOS','Ethylene oxide DLOG','Dry-heat ovens DLST-L'] },
      { t:'Combined systems', items:['COMBO HyPerDekont® (H₂O₂ + steam)','DLOV/W sterilizer + washer'] },
      { t:'Washers, dryers & utilities', items:['GLP washer DLWM','Static dryers DLDR / DLDR-V','H₂O₂ pass-boxes DLVHP/DE','Steam generators DLSG','ZeroStop® continuous sterilization'] } ] },

  { id:'solme', name:'So.l.me', cat:'sterile', country:'Italy', since:'1980', url:'https://www.solme.com/en/', nophoto:true,
    about:[
      'Founded in 1980 in San Biagio di Callalta (Treviso), Italy — stainless-steel process equipment for pharmaceutical, chemical and food industries.',
      'Pharma tanks, preparation vessels, reactors, heat exchangers, sterile-filter housings and filter dryers, up to complete plants.',
      'ISO 9001 since 2001; ASME Section VIII Div. 1 "U" stamp since 2016; PED, ATEX and EN 1090 capability.',
      'Built to URS, cGMP and ASME BPE with mirror finishes down to Ra < 0.25 µm.' ],
    groups:[
      { t:'Pharma process equipment', items:['Tanks (PW, WFI, sterile solutions)','Preparation vessels, 2–50,000 L','Syrup & suspension plants','Reactors','Shell-and-tube heat exchangers','Sterile filter housings','Filter dryers'] } ] },

  { id:'omas', name:'OMAS Tecnosistemi', cat:'nonsterile', country:'Italy', since:'1973', url:'https://imagroup.com/brands/omas-tecnosistemi-s-p-a/', nophoto:true,
    about:[
      'Building machines since 1973 in Cerro Maggiore (Milan), Italy; 60% owned by IMA S.p.A. and part of the IMA Group since 2024.',
      'Liquid and cream processing, bottle and jar filling & closing, tube filling and cartoning for personal care, pharmaceutical and chemical industries.',
      'Designs, manufactures and assembles every component in its own facilities.',
      'ISO 9001:2015 and ISO 14001:2015 certified (TÜV Italy).' ],
    groups:[
      { t:'Processing', items:['Dissolver','Mixer','Pre-melter','Turbomix'] },
      { t:'Filling & closing', items:['BTOP-FILL / BTOP-KAP','G-BLOK / G-KAP','GM-BLOK','GRC-BLOK / GRC-KAP','LINE-FILL / LINE-KAP','MINIBLOC','POWD-FILL (powders)'] },
      { t:'Tube filling & cartoning', items:['Tube fillers C945, C1060, C1075, C1290, CD180, CT240 (Comadis)','Cartoner OC100'] } ] },

  { id:'stevanato', name:'Stevanato Group', cat:'packaging', country:'Italy', since:'1949', url:'https://www.stevanatogroup.com/en/', nophoto:true,
    about:[
      'Founded in 1949 near Venice; headquartered in Piombino Dese, Italy. Drug containment and delivery plus the machines that make, assemble and inspect them.',
      'Glass-forming lines (Spami, since 1971) for vials, ampoules, cartridges and syringes.',
      'Assembly platforms for pen injectors, auto-injectors, inhalers and wearables, with secondary packaging and serialization lines.',
      'Visual inspection systems — automatic, semi-automatic and manual — with AI-based inspection technology.' ],
    groups:[
      { t:'Glass converting', items:['Vial forming lines','Ampoule forming line SAM30','Cartridge forming lines','Syringe forming lines','Tube loaders, annealing ovens, inline controls, packing, needle assembly'] },
      { t:'Assembly & packaging', items:['Assembly platforms (Benchtop, Pilot, Linear)','Secondary packaging lines & end-of-line'] },
      { t:'Visual inspection', items:['Automatic, semi-automatic and bench inspection systems','AI inspection & Vision Robot Unit (VRU)'] } ] },

  { id:'metapack', name:'Metapack Engineering', cat:'packaging', country:'Italy', since:'2007', url:'https://www.metapack.it/', nophoto:true,
    about:[
      'Italian maker of print and vision systems for packaging and labelling machines, working on pharma serialization since 2007.',
      'Certified System Integrator for Cognex vision.',
      'Thermal-inkjet (TIJ), laser and drop-on-demand UV printing, each followed by camera verification of print and codes.',
      'Track & Trace systems compliant with 21 CFR Part 11; worldwide on-site assistance.' ],
    groups:[
      { t:'Serialization & print', items:['Vericode TTE Mark & Verify','Print & vision systems','Decoding & print-quality inspection','Track & Trace L1–L2'] },
      { t:'Inspection & handling', items:['LTT-80R labelling machine','MediaCount vial & ampoule counter','Glue & folding inspection','Alu micro-holes inspection'] } ] },

  { id:'arca', name:'Arca Etichette', cat:'packaging', country:'Italy', url:'https://www.arcaetichette.it/en/', nophoto:true,
    about:[
      'Italian converter of labels and sleeves based in Marcallo con Casone (Milan); part of the Arca Group with Arca Sleeves and Etifix.',
      'About 30 printing and converting machines, 146 professionals and ~7,000 orders a year.',
      'Healthcare labels handled and checked in a dedicated facility to reduce mix-up risk.',
      'B Corp certified; FSC®, BRCGS Packaging and ISCC PLUS certifications.' ],
    groups:[
      { t:'Pharmaceutical labels & seals', items:['Bottle, jar and tube labels','Flebo-Label (hanging)','Wrap labels for small vials','Multipage information labels','Multilayer traceability labels','Tamper-evident Wipe Out & Void seals','Child-resistant closure labels','Shrink sleeves','Anti-counterfeiting labels','Scratch-off labels','Braille hazard labels'] } ] },

  { id:'pieri', name:'Pieri', cat:'packaging', country:'Italy', since:'1973', url:'https://pieri.it/en/', nophoto:true,
    about:[
      'Established in 1973 in Cesena, Italy — wrapping machines, conveying systems and customised end-of-line systems for palletised loads.',
      'Machines built in its own Cesena factory; FAT with the customer\'s product and film, then SAT on site.',
      'Over 4,000 customers, including food and beverage, logistics and pharmaceutical companies.' ],
    groups:[
      { t:'Wrapping machines', items:['UNICA / UNICA XP / UNICA XF (rotating arm)','SILVER ONE and SILVER TWIN (arm)','AVR 400 XP, TWIN, TWIN-S, FLEXA (rotating ring)','EASY ROUND (turntable)'] },
      { t:'End-of-line', items:['ROBO-LINK','TABLE-LINK','Conveying systems'] } ] },

  { id:'fourstars', name:'Cangzhou Four Stars Glass', cat:'glass', country:'China', since:'1992', url:'https://www.fs50glass.com/', nophoto:true,
    about:[
      'Founded in 1992 in Cangzhou, Hebei, China — neutral borosilicate glass tubes and pharmaceutical glass containers.',
      'USP Type I borosilicate (FS50, COE 5.0) in clear and amber.',
      'FDA DMF registered; tested by SGS and the Shanghai Institute for Drug Packaging Materials; meets YBB, ISO, Ph. Eur. and USP standards.' ],
    groups:[
      { t:'Glass tubes', items:['Vial glass tubes','Pharmaceutical glass tubes'] },
      { t:'Vials & ampoules', items:['Injection vials','Screw-neck vials','Oral liquid vials','Pharmaceutical ampoules'] } ] }
  );

  /* ---------- product catalogues ---------- */
  const S = (o,f,s,a) => ({o,f,s,a});

  P.delama = [
   ['Sterilizers',[
    ['DLOV saturated steam sterilizers','Pharmaceutical steam autoclaves from laboratory to production size.','https://www.delama.it/product/saturated-steam-sterilizer-pharmaceutical-industry-dlov/',
      S('Saturated-steam sterilizers for pharmaceutical use, built to cGMP/GAMP, FDA guidance, EN 285 and PED. They sterilize glassware, stoppers, stainless-steel equipment, filters and textiles.',
        ['PC/PLC-based process control, with Siemens S7 options','Full documentation package','FAT/SAT support and operator training','Standard and customised sizes'],
        [['Max pressure','3.5 bar abs (350 kPa)'],['Max temperature','139 °C'],['Chamber volume','≈ 116 – 6,820 L'],['Typical cycles','121 °C and 134 °C']],
        ['Glassware','Stoppers','Filters','Stainless-steel parts'])],
    ['DLOAV air/steam mixture sterilizers','For heat-sensitive loads — plastic containers, blisters, pre-filled syringes.','https://www.delama.it/product/dloav-series/',
      S('Sterilizers using an air and steam mixture so containers do not burst or deform. Suited to plastic containers, blister packs and pre-filled syringes.',
        ['Air/steam mixture overpressure control','Same cGMP / GAMP / EN 285 design basis as the DLOV range'],
        [['Max working pressure','4.5 bar abs']],
        ['Plastic containers','Blister packs','Pre-filled syringes'])],
    ['DLV-CAB compact vertical sterilizer','Cabin-type steam sterilizer with vertical loading for labs and R&D.','https://www.delama.it/product/compact-saturated-steam-sterilizer-vertical-loading-dlov-cab/',
      S('A compact saturated-steam sterilizer with vertical loading for pharmaceutical, research, virology and microbiology laboratories. An air/steam variant (DLV CAB-HP) treats waste and highly pathogenic material.',
        ['Stainless-steel construction','Configurable to customer needs','Complies with cGMP, GAMP, EN 285 and PED'],
        [['Standard volumes','95 L and 170 L (page also cites 150 L)'],['Steam cycle','121 °C at 1.1 bar(g); 134 °C at 2.1 bar(g)']],
        ['Culture media','Filled vials and syringes','Petri dishes','Lab waste'])],
    ['DLVHP/ST HyPerPure® H₂O₂ sterilizers','Vaporized hydrogen peroxide sterilization under high vacuum.','https://www.delama.it/product/dlvhp-st/',
      S('Cold sterilization with vaporized hydrogen peroxide under high vacuum for heat-sensitive products. The process uses no process water and no toxic or carcinogenic substances.',
        ['HyPerGeneSys® patented H₂O₂ generator','Cold process for thermo-sensitive devices','Open-loop with catalyst — no consumables'],
        [['Principle','Vaporized H₂O₂, high vacuum'],['Claimed reduction','LOG 12 (De Lama technology claim)']],
        ['Thermo-sensitive devices','Filters','Textiles','Instruments'])],
    ['DLOS superheated-water sterilizers','Sterilizers using superheated water.','https://www.delama.it/product/dlos-series/',
      S('Superheated-water sterilizers for pharmaceutical loads. Contact NOVA for sizes and cycle data.',['Superheated-water cycle'],[],['Pharmaceutical containers'])],
    ['DLOG ethylene-oxide sterilizers','Low-temperature gas sterilizers for heat-sensitive items.','https://www.delama.it/product/dlog-series/',
      S('Low-temperature gas sterilizers for heat-sensitive items. Contact NOVA for sizes and cycle data.',['Low-temperature process'],[],['Heat-sensitive items'])],
    ['DLST-L dry-heat ovens (DHS)','Dry-heat sterilization and depyrogenation.','https://www.delama.it/product/dlst-l-series/',
      S('Dry-heat ovens for sterilization and depyrogenation of glassware and metal parts.',['Dry-heat sterilization and depyrogenation'],[],['Glassware','Metal parts'])]
   ]],
   ['Combined systems',[
    ['COMBO HyPerDekont® (H₂O₂ + steam)','Vaporized H₂O₂ decontamination and steam sterilization in one machine.','https://www.delama.it/product/combo-hyperdekont-vaporized-hydrogen-peroxide-decontamination-saturated-steam-sterilization-2-in-1/',
      S('Combines HyPerDekont® vaporized hydrogen-peroxide decontamination and saturated-steam sterilization, giving maximum flexibility to run both processes.',
        ['Doors: semi-automatic hinged, sliding or Magnetodoor® magnetic-driven','AISI 316L chamber, satin finish (mirror on request)','Magnetic-coupling fan; open-loop exhaust with catalyst','HyPerGeneSys® H₂O₂ generator under high vacuum and electromagnetic field','Energy savings of up to 70% claimed vs conventional methods'],
        [['Capacity','150 L up to 85 m³ (others on request)'],['Chamber','AISI 316L'],['Standards','cGMP, FDA, GAMP, PED, EN 285']],
        ['Medical devices','Filters','Filled vials','Laboratory cages'])],
    ['DLOV/W sterilizer + washer','Washing, sterilizing and drying in a single unit.','https://www.delama.it/product/saturated-steam-sterilizer-and-pharmaceutical-washing-machine-combined-in-one-single-unit-dlov-w/',
      S('Combines a saturated-steam autoclave with a high-efficiency washing machine to clean components, machine parts and accessories such as freeze-drying trays before sterilization.',
        ['Wash, sterilize and dry in one process','Fewer machines in the controlled area','Lower validation and maintenance costs','Loading and unloading from the same side'],
        [['Standards','cGMP, FDA, GAMP, EN 285, PED']],
        ['Pharmaceutical','Medical devices','Nutraceutical','Food'])]
   ]],
   ['Washers, dryers & utilities',[
    ['DLWM GLP washer','Industrial washer for laboratory glassware and parts.','https://www.delama.it/product/industrial-washer-pharmaceutical-laboratory-glp-glassware-parts-dlwm/',
      S('Industrial washer for pharmaceutical and laboratory glassware and parts, built to cGMP.',['GLP / cGMP washing of glassware and parts'],[],['Laboratory glassware','Process parts'])],
    ['DLDR static dryers (hot air / vacuum)','Hot-air static dryers DLDR and vacuum dryers DLDR-V.','https://www.delama.it/product/dldr-series/',
      S('Static hot-air dryers (DLDR) and static dryers under vacuum (DLDR-V) for pharmaceutical parts.',['Hot-air drying','Vacuum drying version (DLDR-V)'],[],['Washed parts','Glassware'])],
    ['DLVHP/DE H₂O₂ pass-boxes','Vaporized H₂O₂ decontamination pass-boxes for cleanroom transfer.','https://www.delama.it/product/passbox-for-decontamination-with-vaporized-h202-and-air-degassing/',
      S('Pass-boxes that decontaminate materials with vaporized hydrogen peroxide while moving them between zones. Available with air degassing (/A) or vacuum degassing (/V).',['Air degassing version DLVHP/DE/A','Vacuum degassing version DLVHP/DE/V'],[['Decontaminant','Vaporized H₂O₂']],['Cleanroom material transfer'])],
    ['DLSG steam generators','Clean, pure and ultrapure steam for autoclaves and SIP.','https://www.delama.it/product/serie-dlsg-steam-generators/',
      S('Steam generators for the pharmaceutical and biotech industries that supply autoclaves and sanitize lines, tanks and reactors through SIP.',
        ['Clean steam (DLSG/C), pure steam (DLSG/P), apyrogenic ultrapure steam (DLSG/U)','Heating: electric (/E), industrial steam (/S) or combined (/ES)','Horizontal or vertical evaporation body','Compact, quiet, easy to install'],
        [['Standards','cGMP, FDA, GAMP, PED, EN 285 (where applicable)']],['Autoclaves','SIP of tanks and lines'])],
    ['ZeroStop® continuous sterilization','Patented continuous-flow sterilization linked to the filling line.','https://www.delama.it/product/zerostop-continuous-sterilization/',
      S('A continuous, non-batch sterilization flow integrated with a filling line under an isolator, using steam, air/steam, superheated water or VH₂O₂ — alone or as a 2-in-1 station.',
        ['Continuous flow, no batch','No trolleys and less human handling','Closer alignment with Annex 1'],
        [['Technologies','Saturated steam, air/steam, superheated water, VH₂O₂']],
        ['Empty plastic syringes','Filled syringes','PP/PE bottles','Thermo-sensitive devices'])]
   ]]
  ];

  P.solme = [
   ['Process vessels',[
    ['Pharmaceutical tanks','Hygienic tanks for PW, WFI and sterile solutions.','https://www.solme.com/en/pharmaceutical/tanks/',
      S('Tanks for sterile liquid solutions such as eye drops and injectables, and for purified water and WFI. URS, cGMP and ASME BPE requirements apply from the commercial phase to final build.',
        ['Single-wall or insulated with cladding','Atmospheric or pressure designs (PED and/or ASME)','Mechanical agitation, magnetic drive or both'],
        [['Surface finish','Satin or mirror, Ra < 0.25 µm'],['Standards','URS, cGMP, ASME BPE, PED / ASME']],['Sterile solutions','PW','WFI'])],
    ['Preparation vessels','Sterile and non-sterile preparation vessels, 2 to 50,000 L.','https://www.solme.com/en/pharmaceutical/preparation-vessels/',
      S('Vessels for sterile and non-sterile production under strict cGMP, designed to EU cGMP and FDA requirements with ASME/PED certification.',
        ['Mechanical agitator with double sanitary gas-flushed seal, or magnetic drive','Jacket or dimpled-coil heating and cooling','Welded stainless-steel insulation cladding','Fixed frame or on wheels','Electrical panel with on-board PLC'],
        [['Capacity','2 – 50,000 L'],['Wetted parts','AISI 316L'],['Internal finish','Mirror, Ra up to 0.2 µm'],['Standards','EU cGMP, FDA, ASME/PED']],['Sterile production','Non-sterile liquids'])],
    ['Syrup & suspension plants','Equipment and complete plants for syrups and suspensions.','https://www.solme.com/en/pharmaceutical/syrup-and-suspension/',
      S('Individual machines up to complete integrated plants for syrup and suspension production, designed and built to customer specifications following cGMP and GEP.',
        ['Same quality standard as sterile processes','From single equipment to complete plants'],[],['Syrups','Oral suspensions'])],
    ['Pharmaceutical reactors','Reactors built to URS, ASME, BPE and cGMP.','https://www.solme.com/prodotti/farmaceutico/reattori/',
      S('Reactors built to the client\'s URS with welded or flanged roof, integrated CIP/SIP and several heating and cooling options.',
        ['Jacket, single or double half-pipe, or lamella coil','Mechanical and/or magnetic agitators','Stainless steel, duplex, super duplex or Hastelloy'],
        [['Surface finish','Satin or mirror, Ra < 0.25 µm'],['Certifications','PED, ATEX, ASME']],['API','Chemical synthesis'])]
   ]],
   ['Heat transfer, filtration & drying',[
    ['Pharma heat exchangers','Shell-and-tube exchangers to ASME BPE and cGMP.','https://www.solme.com/en/pharmaceutical/heat-exchangers-pharma/',
      S('Shell-and-tube heat exchangers designed for pharmaceutical processes in several configurations.',
        ['Fixed plate, floating head or extractable bundle','U-tube bundles, reboilers/kettles and tube-in-tube types','Tubes expanded, welded, or both'],
        [['Finish','Satin or mirror, Ra < 0.25 µm'],['Certifications','PED, ATEX, ASME']],['Heating and cooling of process liquids'])],
    ['Sterile filter housings','Cartridge and lenticular housings up to 1,000 mm.','https://www.solme.com/en/pharmaceutical/housing-for-sterile-filters/',
      S('Housings for sterile filters, designed and built to each customer\'s specification.',
        ['Cartridge or lenticular filters','Stainless steel, duplex, super duplex or Hastelloy'],
        [['Max diameter','1,000 mm'],['Internal finish','F1, 2B, satin or mirror, Ra < 0.25 µm'],['External finish','F1, 2B, satin or mirror, Ra < 0.45 µm'],['Certifications','PED, ATEX, ASME']],['Sterile filtration'])],
    ['Filter dryers','Filter dryers for frequent product changeover and sterile areas.','https://www.solme.com/en/pharmaceutical/filters-dryer/',
      S('Filter dryers optimised for frequent production changes and operation in sterile environments, designed to PED and/or ASME and optionally ATEX.',
        ['Vertical or horizontal cylindrical, welded or flanged bottom','Half-pipe jacket or microwave heating','CIP, SIP and UV cleaning','Two- or three-blade agitator, fixed or variable speed','Fabric, metal-mesh or sintered filtration media','PLC and hydraulic unit'],
        [['Seals','Lip-seal, mechanical or bellows'],['Certifications','PED / ASME, optional ATEX']],['API drying','Filtration of crystals'])]
   ]]
  ];

  P.omas = [
   ['Processing',[
    ['Liquid & cream processing','Dissolver, mixer, pre-melter and Turbomix.','https://imagroup.com/technologies/liquid-cream-processing/',
      S('Mixing, dispersion and emulsification equipment for liquids and creams: Dissolver, Mixer, Pre-melter and Turbomix.',
        ['Dissolver','Mixer','Pre-melter','Turbomix emulsifier'],[],['Creams','Lotions','Liquids'])]
   ]],
   ['Filling & closing',[
    ['Bottle & jar filling and closing','BTOP, G-BLOK, GM-BLOK, GRC, LINE and MINIBLOC ranges.','https://imagroup.com/technologies/bottle-and-jar-filling-and-closing/',
      S('Rotary or linear, semi-automatic to fully automated machines that fill and close bottles and jars.',
        ['BTOP-FILL and BTOP-KAP','G-BLOK (new) and G-KAP (bottles and jars)','GM-BLOK','GRC-BLOK and GRC-KAP','LINE-FILL and LINE-KAP (in-line)','MINIBLOC'],
        [['Layouts','Rotary or linear'],['Automation','Semi-automatic to fully automated']],['Pharmaceutical liquids','Creams','Cosmetics'])],
    ['POWD-FILL powder filler','Filling machine for powders.','https://imagroup.com/brands/omas-tecnosistemi-s-p-a/',
      S('Powder filling machine in the OMAS bottle and jar range.',['Handles powders'],[],['Powders'])],
    ['Tube filling (Comadis range)','C945, C1060, C1075, C1290, CD180 and CT240.','https://imagroup.com/technologies/tube-filling/',
      S('Tube fillers added to the OMAS portfolio in 2025 through the IMA brand Co.Ma.Di.S.',['Semi-automatic to fully automatic','Models C945, C1060, C1075, C1290, CD180, CT240'],[],['Creams','Ointments','Gels'])],
    ['OC100 cartoner','Carton packaging that integrates with filling lines.','https://imagroup.com/brands/omas-tecnosistemi-s-p-a/',
      S('Cartoner that integrates with OMAS filling lines.',['Carton packaging','Line integration'],[],['Cartoning'])]
   ]]
  ];

  P.stevanato = [
   ['Glass converting',[
    ['Vial forming lines','Five models from 40 to 60 index movements per minute.','https://www.stevanatogroup.com/en/technologies-equipment/glass-converting/vial-forming-lines/',
      S('Fully customisable vial forming lines supplied turnkey or as stand-alone modules, with servo-driven high-speed options.',
        ['Continuous monitoring of critical forming parameters','Modules: tube loaders, inline controls, after-forming line, annealing oven, packing machines','Optional siliconization with spray nozzles and electric or gas lehr'],
        [['3BS30','2 vials/cycle, up to 90 pcs/min, 11–31 mm tube'],['BS30 EV','2 vials/cycle, 108 pcs/min theoretical, 13–34 mm tube'],['BZ 16','1 vial/cycle, 40 index/min, 13–34 mm tube'],['BZ HS','1 vial/cycle, 60 index/min'],['Double BZ HS','Two BZ HS machines combined']],
        ['Pharmaceutical vials'])],
    ['Ampoule forming line SAM30','Up to 100 ampoules per minute.','https://www.stevanatogroup.com/en/technologies-equipment/glass-converting/ampoule-forming-lines/',
      S('High-efficiency, flexible ampoule forming line.',
        ['Optional camera inspection for printing and cosmetic checks','Self-centering chucks shorten changeovers','Colour-ring unit for up to three serigraphy rings','Packing line with five-position turntable'],
        [['Speed','Up to 100 pcs/min'],['Chucks','30 (36 on request)'],['Tube diameter','10.75 – 22.50 mm'],['Tube wall','0.8 – 1.5 mm'],['Ampoule length','60 – 170 mm']],['Ampoules'])],
    ['Cartridge forming lines','GS24/2, GS24/2 Tandem and GS36/3.','https://www.stevanatogroup.com/en/technologies-equipment/glass-converting/cartridge-forming-lines/',
      S('Lines for mechanically strong cartridges with compliant cosmetic quality.',
        ['Double-exit, tandem and triple-exit versions'],
        [['Cartridge range','1 – 5 ml'],['GS24/2','2 per cycle, 92 pcs/min'],['GS24/2 Tandem','4 per cycle, 184 pcs/min'],['GS36/3','3 per cycle, 144 pcs/min']],['Cartridges'])],
    ['Syringe forming lines','GS24/16 and GS36/15-2 for premium syringes.','https://www.stevanatogroup.com/en/technologies-equipment/glass-converting/syringe-forming-lines/',
      S('Purpose-built machines for customised syringes, bought as a full line or as stand-alone modules.',
        ['Optional servomotors for cone forming and total length','Flow meters regulate burners automatically','Modules: tube loader, 100% inline controls, annealing oven, needle assembly, packing, washing','Siliconization with emulsion or silicone oil'],
        [['GS24/16','0.5 – 5 ml, 1 syringe/cycle, 40 index/min'],['GS36/15-2','0.5 ml, 1 ml long, 1 ml STD; 2 per cycle, 40 index/min']],['Glass syringes'])],
    ['Glass converting modules','Tube loaders, after-forming lines, annealing ovens, inline controls, packing, needle assembly.','https://www.stevanatogroup.com/en/technologies-equipment/glass-converting/',
      S('Supporting modules sold as full lines or single units.',
        ['Continuous glass-tube loaders','After-forming lines','Annealing ovens with optimised thermal profile','Inline dimensional and cosmetic controls','Automatic packing machines','Two needle-assembly models'],[],['Glass container production'])]
   ]],
   ['Assembly & packaging',[
    ['Assembly platforms','Benchtop, Pilot Line and Linear platforms.','https://www.stevanatogroup.com/en/technologies-equipment/assembly-equipment/assembly-platforms/',
      S('Modular assembly platforms from development benches to high-volume lines for pen injectors, auto-injectors, inhalers and wearables.',
        ['Manual, semi-automatic or fully automatic','Assembly, labelling and packaging on one line with a single control panel'],
        [['Benchtop (Lab Unit)','1 – 4 ppm'],['Pilot Line','Linear, freely programmable indexing; cleanroom class 8 (ISO 14644)'],['Linear Platform','Up to 160 ppm; vertical (XTV) or horizontal (XTH) motion']],
        ['Pen injectors','Auto-injectors','Inhalers','Wearables'])],
    ['Secondary packaging & end-of-line','Turnkey cartoning, labelling, serialization and palletizing.','https://www.stevanatogroup.com/en/technologies-equipment/flexible-packaging-machines/labeling-packaging-serialization/',
      S('Turnkey lines combining cartoning, labelling, serialization and palletizing on standard platforms with dedicated modules.',
        ['Cartoners with automatic changeover','Check weighing and tamper-evidence sealing','Camera verification of labels, print and product presence','Modular end-of-line with automated pallet loading'],[],['Clinical-trial packaging','Multi-format packaging'])]
   ]],
   ['Visual inspection',[
    ['Visual inspection systems','Automatic, semi-automatic and bench systems for parenterals.','https://www.stevanatogroup.com/en/technologies-equipment/visual-inspection/',
      S('Inspection machines for ampoules, vials, microvials, cartridges, syringes and bottles, for water-like liquids, viscous and oily products, suspensions and lyophilised products.',
        ['AI platform combining deep-learning models with inspection expertise','Vision Robot Unit (VRU) combining vision and robotics','Solution for hazardous drugs bundling inspection, labelling and pre-sterilised vials'],[],['Ampoules','Vials','Cartridges','Syringes'])]
   ]]
  ];

  P.metapack = [
   ['Serialization & print',[
    ['Vericode TTE Mark & Verify (top version)','Prints and verifies 2D codes on cartons at up to 400/min.','https://www.metapack.it/mark-and-verify-top-version/',
      S('Metapack\'s most popular Mark & Verify machine for pharma carton serialization, combining in-line printing and verification of variable data and 2D codes for vignette and tamper-evident applications.',
        ['Servo-driven flighted belts for positive transport','One HMI for print, camera, tamper-evident application and verification','Cognex vision supplied by Metapack as Certified System Integrator','L1–L2 management system connectable to third-party L3'],
        [['Max speed','Up to 400 cartons/min'],['Print technologies','HP TIJ; laser and DOD UV supported'],['Regulatory','21 CFR Part 11 compliant']],
        ['Serialization','Vignette','Tamper-evident'])],
    ['Print & vision systems','TIJ or DOD-UV printing followed by camera inspection.','https://www.metapack.it/print-vision/',
      S('Print and vision systems for packaging and labelling machines, mainly pharmaceutical serialization and variable-data printing.',
        ['DOD-UV or thermal-inkjet printing','Camera inspection after every print system, with serial-code management','Image and logo inspection, up to seven cameras on high-grade machines','Late-stage customisation for cartons and labels'],[],['Cartons','Labels'])],
    ['Decoding & print-quality inspection','Full print inspection and fast decoding in one system.','https://www.metapack.it/decoding-and-print-quality-inspection/',
      S('A single system for full print-quality inspection and fast code decoding.',['Print-quality inspection and decoding in one unit'],[],['Serialized packaging'])],
    ['Track & Trace (L1–L2)','Serialization and aggregation software and hardware.','https://www.metapack.it/pharma/serialization-and-aggregation/track-and-trace/',
      S('Track & Trace systems for pharmaceutical serialization and aggregation, compliant with 21 CFR Part 11.',['Proprietary L1–L2 management','Connects to third-party L3'],[['Regulatory','21 CFR Part 11']],['Serialization','Aggregation'])]
   ]],
   ['Inspection & handling',[
    ['LTT-80R labelling machine','Prints variable data on labels and applies them to vials and bottles.','https://www.metapack.it/labeling-machine/',
      S('Prints variable data on adhesive labels and applies them to bottles or vials, with camera checks of print quality including OCR/OCV.',
        ['DOD-UV or cartridge printing','Positive vial/bottle transport','Automatic rejection for print or application errors','Tool-free format changes','HMI and industrial PC; access designed for 21 CFR Part 11'],
        [['Formats','Flexible bottle/vial sizes']],['Vials','Bottles'])],
    ['MediaCount vial & ampoule counter','Counts and inspects containers in trays and prints a tray label.','https://www.metapack.it/vial-and-ampoule-counters/',
      S('Free-standing counter: the operator loads metal or plastic trays, and the machine counts the containers, inspects them and produces a label and batch report. Can be configured for automatic in-line counting.',
        ['Linear camera on a three-axis handling system','Vision software built on COGNEX technology','Optional checks for damaged containers and non-compliant caps','PDF or XML batch report','Touchscreen with password login and recipes'],
        [['Tray types','Metal or plastic'],['Reports','PDF or XML']],['Vials','Ampoules'])],
    ['Glue & folding inspection (Veribox)','Inspection of glue and folding on cartons.','https://www.metapack.it/veribox-glue-and-folding-inspection-system/',
      S('Glue and folding inspection system for cartons.',['Glue and fold inspection'],[],['Carton converting'])],
    ['Alu micro-holes inspection','Inspection of micro-holes in aluminium foil.','https://www.metapack.it/alu-microholes-inspection/',
      S('Inspection system for micro-holes in aluminium foil.',['Micro-hole detection'],[],['Aluminium foil'])]
   ]]
  ];

  P.arca = [
   ['Pharmaceutical labels & seals',[
    ['Flebo-Label','Self-adhesive label with a hanger for infusion bottles.','https://www.arcaetichette.it/en/product/flebo-label/',
      S('A self-adhesive label for medical bottles and vials that can hang from the container.',
        ['Foldable hook, or foldable and extendable hook','Automatic application, including at high line speeds','Same thickness as a standard label, so rolls hold many labels','Blank version can be applied over existing decoration'],
        [['Materials','Transparent or white'],['Printing','Flexo, screen, offset, digital, hybrid']],['Infusion bottles','Vials'])],
    ['Wipe Out & Void tamper-evident seals','Patented seals that cannot be reapplied.','https://www.arcaetichette.it/en/seals-for-pharmaceutical-containers/',
      S('Tamper-evident seals for any box or container. Wipe Out is destroyed on removal; Void labels leave a "Void" warning on the product.',
        ['Wipe Out: fragile lower layer plus transparent plastic upper layer with pre-cut pattern','Void: coloured, highly visible plastic labels in custom thicknesses','Security tapes cover larger surfaces','Can be combined with security inks'],[],['Cartons','Containers'])],
    ['Bottle, jar & tube labels','Self-adhesive labels for glass and plastic containers.','https://www.arcaetichette.it/en/pharmaceuticals/',
      S('Self-adhesive decoration for pharmaceutical containers, including FSC®-certified eco-friendly options and "no label look" vial labels.',['Glass and plastic containers','FSC®-certified materials'],[],['Bottles','Jars','Tubes','Vials'])],
    ['Multipage & wrap labels','Booklet labels for dosage information and wraps for small vials.','https://www.arcaetichette.it/en/pharmaceuticals/',
      S('Multipage information labels carry dosage and additional communication; wrap labels fit small-diameter vials.',['Multipage information labels','Wrap labels'],[],['Vials','Ampoules'])],
    ['Multilayer & anti-counterfeiting labels','Traceability, serialized and security-ink labels.','https://www.arcaetichette.it/en/security-labels-anti-counterfeit-and-anti-fraud/',
      S('Multilayer labels support traceability; anti-counterfeiting labels are serialized with security inks or holograms.',['Serialized codes','Security inks or holograms','Scratch-off labels in silver, holographic and Void versions'],[],['Authentication','Traceability'])],
    ['Shrink sleeves & special labels','Shrink sleeves, child-resistant labels and braille hazard labels.','https://www.arcaetichette.it/en/pharmaceuticals/',
      S('Self-adhesive shrink sleeves for permanent sealing, child-resistant closure labels for blister packs and braille hazard labels with embossed symbols.',['Shrink sleeves','Child-resistant closure labels','Braille hazard labels'],[],['Blister packs','Hazard marking'])]
   ]]
  ];

  P.pieri = [
   ['Rotating arm wrappers',[
    ['UNICA / UNICA XP / UNICA XF','Fully automatic rotating-arm stretch wrappers.','https://pieri.it/en/product/fully-automatic-rotating-arm-wrapping-machine-unica/',
      S('Fully automatic rotary-arm stretch wrapping machines for palletised loads, with five patents and a compact footprint.',
        ['Single-motor TPS pre-stretch carriage without dandy roller','Quick film insertion (Q.F.I.)','Contactless hot-wire film cutting','Options: pantograph top press plate, pallet lifter, roping device, top-sheet applicator, dual-motor TPT 0–400% pre-stretch'],
        [['Pallet size','400×600 to 1,120×1,420 mm'],['Pallet height','2,100 mm standard'],['Film thickness','10 – 35 µm'],['Rotation speed','UNICA 25 rpm; XP 20 rpm; XF 35 rpm']],['End-of-line wrapping'])],
    ['SILVER ONE','Automatic or semi-automatic arm wrapper for unstable loads.','https://pieri.it/en/product/automatic-and-semiautomatic-wrapping-machine-silver-one/',
      S('An arm wrapping machine that runs automatic (in a wrapping line) or semi-automatic (stand-alone), suited to pallets with unstable loads.',
        ['Electromagnetic-friction carriage','Automatic film cutting at cycle end','Options: motorised pre-stretch TPT, ecoMATRIX tuck-in, pallet lifter, roping device, top-sheet applicator'],
        [['Standard cycle','Up to 20 pallets/h'],['Rotation','Up to 15 rpm'],['Pallet size','800×600 to 1,000×1,200 mm'],['Load height','500 – 2,100 mm'],['Pre-stretch (TPT)','0 – 400%']],['Unstable loads'])],
    ['SILVER TWIN','Fully automatic twin rotating-arm wrapper.','https://pieri.it/en/product/fully-automatic-twin-rotating-arm-wrapping-machine-silver-twin/',
      S('Fully automatic twin rotating-arm wrapping machine. Contact NOVA for data sheet figures.',['Twin rotating arm'],[],['End-of-line wrapping'])]
   ]],
   ['Rotating ring wrappers',[
    ['AVR 400 XP','High-productivity fully automatic rotating-ring wrapper.','https://pieri.it/en/product/fully-automatic-rotating-ring-wrapping-machine-avr-400-xp/',
      S('Fully automatic rotating-ring wrapping machine for high-productivity lines; the cycle can start and end at any pallet height.',
        ['Cycles: down-only, up-only, fixed height, two stacked pallets, dustproof, waterproof','Motorised pre-stretch up to 240%','Film-tension sensor','ecoMATRIX pneumatic clamp with cold-blade cutter','Options: pantograph press plate, pallet lifter, roping device, top-sheet applicator'],
        [['Pallet height','2,100 mm standard'],['Load size','800×600 to 1,000×1,200 mm'],['Film reel','250 mm dia × 500 mm, 17 kg'],['Film thickness','15 / 23 µm']],['High-speed end-of-line'])],
    ['AVR 400 TWIN / TWIN-S / FLEXA','Other fully automatic rotating-ring models.','https://pieri.it/en/product/fully-automatic-rotating-ring-wrapping-machine-avr-400-twin/',
      S('Further models of the AVR 400 rotating-ring range. Contact NOVA for data sheet figures.',['AVR 400 TWIN','AVR 400 TWIN-S','AVR 400 FLEXA'],[],['End-of-line wrapping'])]
   ]],
   ['Turntable & end-of-line',[
    ['EASY ROUND','Fully automatic turntable wrapping machine.','https://pieri.it/en/product/fully-automatic-turntable-wrapping-machine-easy-round/',
      S('Fully automatic turntable wrapping machine. Contact NOVA for data sheet figures.',['Turntable wrapping'],[],['Palletised loads'])],
    ['ROBO-LINK and TABLE-LINK','Robot and table based end-of-line systems.','https://pieri.it/en/product/robo-link/',
      S('Customised end-of-line systems with conveying, robot- or table-based handling.',['ROBO-LINK (robot based)','TABLE-LINK (table based)'],[],['End-of-line'])]
   ]]
  ];

  P.fourstars = [
   ['Glass tubes',[
    ['Vial glass tubes','Neutral borosilicate tubing for vial forming.','https://www.fs50glass.com/vial-glass-tubes.html',
      S('High-borosilicate pharmaceutical tubing in clear and amber for converting into vials.',
        ['Amber and clear','Various tube sizes listed on the maker\'s page, e.g. 12×2 mm, 12×2.2 mm and 25×4 mm amber'],
        [['Glass','Neutral borosilicate (FS50)'],['Colours','Clear, amber']],['Vial converting'])]
   ]],
   ['Vials',[
    ['Injection vials','Type I borosilicate injection vials, 1 to 100 ml.','https://www.fs50glass.com/injection-vials.html',
      S('Pharmaceutical injection vials made from Type I borosilicate glass tubing.',
        ['Also available as double-layer / liner vials and snap-cap vials','Screen printing instead of paper labels','Made to customer drawings on request'],
        [['Volume','1 – 100 ml'],['Glass','Type I borosilicate, clear or amber'],['Standards','ISO, Ph. Eur. or USP']],['Injectables'])],
    ['Screw-neck vials','Screw-neck glass vials for non-injectable use.','https://www.fs50glass.com/screw-neck-vials.html',
      S('Screw-neck vials, including flip-top types, from Type I borosilicate glass.',['Clear or amber'],[['Volume','1 – 100 ml'],['Standards','ISO, Ph. Eur. or USP']],['Oral and non-injectable products'])],
    ['Oral liquid vials','Glass vials for oral liquids.','https://www.fs50glass.com/oral-liquid-vials.html',
      S('Oral liquid vials from Type I borosilicate glass.',['Clear or amber'],[['Volume','1 – 100 ml range'],['Standards','ISO, Ph. Eur. or USP']],['Oral liquids'])]
   ]],
   ['Ampoules',[
    ['Pharmaceutical ampoules','Type I borosilicate ampoules, 1 to 25 ml.','https://www.fs50glass.com/products/glass-ampoule-d.html',
      S('Empty glass ampoules made from COE 5.0 pharmaceutical glass tube, USP Type I borosilicate. Amber is recommended for light-sensitive compounds.',
        ['Break systems: OPC and CBR','Printing available','Custom logo, packaging and graphics from 100,000 pieces'],
        [['Sizes','1, 2, 3, 5, 10, 15, 20, 25 ml; custom on request'],['Glass','COE 5.0, USP Type I'],['Form','Form B (Chinese and international standard)'],['Colours','Clear, amber']],['Pharmaceutical','Cosmetic'])]
   ]]
  ];
})();
