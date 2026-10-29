// NOVA URS Builder — sections, requirement checklists and machine templates.
// Requirement format: [id, text, default priority (M = Mandatory, D = Desirable, O = Optional), verification]
// Text in [square brackets] becomes an editable value in the app.
// Verification: DQ, FAT, SAT, IQ, OQ, PQ, DOC (document review)
window.NOVA_URS = {

  priorities: {
    M: { label: "Mandatory", short: "Must", d: "Must be met. Not meeting it means the machine is rejected." },
    D: { label: "Desirable", short: "Should", d: "Strongly wanted. Deviations need written agreement." },
    O: { label: "Optional", short: "Nice", d: "Nice to have. Supplier may quote it as an option." }
  },

  verification: {
    DQ: "Design Qualification — design review against the URS",
    FAT: "Factory Acceptance Test — at the supplier's site",
    SAT: "Site Acceptance Test — after installation",
    IQ: "Installation Qualification",
    OQ: "Operational Qualification",
    PQ: "Performance Qualification",
    DOC: "Document review"
  },

  /* ---------- the sections every URS should have ---------- */
  sections: [
    { id: "gen", title: "General & scope", icon: "doc",
      why: "Identifies the document and tells the supplier exactly what you are buying, and what you are not.",
      fields: [
        ["purpose", "Purpose of the machine", "textarea", "e.g. Aseptic filling and stoppering of 2–20 mL vials for liquid injectables"],
        ["inScope", "Included in supply", "textarea", "e.g. Machine, change parts for 3 formats, HMI, documentation, FAT, installation, SAT, training"],
        ["outScope", "Not included", "textarea", "e.g. Building works, utilities up to machine connection points, civil works"],
        ["standards", "Company standards to follow", "text", "e.g. Site engineering standard ES-01, QA policy QP-07"]
      ],
      items: [
        ["gen1", "The supplier shall confirm in writing, point by point, how each requirement of this URS is met, partly met or not met (compliance matrix).", "M", "DOC"],
        ["gen2", "Any deviation from this URS shall be declared in the offer and agreed in writing before order.", "M", "DOC"],
        ["gen3", "The machine shall be new, unused and of the supplier's current design.", "M", "DQ"],
        ["gen4", "The supplier shall have a certified quality management system (ISO 9001 or equivalent).", "D", "DOC"],
        ["gen5", "The supplier shall accept a supplier audit by the customer before order or before FAT.", "D", "DOC"],
        ["gen6", "All documents, HMI texts and labels shall be in [English] language.", "M", "DOC"]
      ] },

    { id: "proc", title: "Process & product", icon: "pill",
      why: "Describes the product and the process. The supplier designs everything around this, so be precise.",
      fields: [
        ["product", "Product(s) and dosage form", "textarea", "e.g. Aqueous solution, non-viscous, light-sensitive"],
        ["props", "Product characteristics", "textarea", "e.g. Viscosity 1–50 cP, foaming, density 1.0–1.2 g/mL, abrasive powder"],
        ["oeb", "Potency / hazard class", "select", ["Not hazardous", "OEB 1", "OEB 2", "OEB 3", "OEB 4", "OEB 5", "Cytotoxic / hormone", "Flammable solvent present"]],
        ["batch", "Batch size", "text", "e.g. 50 000 units / 500 L"],
        ["speed", "Output speed (nominal / maximum)", "text", "e.g. 120 / 150 units per minute"],
        ["shifts", "Operating pattern", "text", "e.g. 2 shifts × 8 h, 5 days a week"]
      ],
      items: [
        ["proc1", "The machine shall process all products and formats listed in this URS without loss of quality.", "M", "PQ"],
        ["proc2", "The machine shall reach the nominal output of [120 units/min] for the reference product.", "M", "PQ"],
        ["proc3", "Overall equipment effectiveness (OEE) at full production shall be at least [75 %].", "D", "PQ"],
        ["proc4", "No product shall come into contact with lubricants or non-product-contact surfaces.", "M", "DQ"],
        ["proc5", "All critical process parameters (CPPs) shall be controlled, displayed and recorded.", "M", "OQ"],
        ["proc6", "Faulty units shall be rejected automatically into a lockable reject container, with reject counting.", "M", "OQ"],
        ["proc7", "The machine shall allow in-process control sampling without stopping production.", "D", "OQ"],
        ["proc8", "Start-up and end-of-batch product losses shall not exceed [0.5 %] of batch size.", "D", "PQ"]
      ] },

    { id: "perf", title: "Performance & accuracy", icon: "chart",
      why: "Measurable targets the machine must prove at FAT, SAT and PQ. If it can't be measured, it can't be accepted.",
      fields: [],
      items: [
        ["perf1", "Repeatability of the critical parameter shall be within [±1 %] (e.g. fill weight, tablet weight) across a full batch.", "M", "OQ"],
        ["perf2", "The machine shall run for [3 consecutive hours] at nominal speed during FAT without stops caused by the machine.", "M", "FAT"],
        ["perf3", "Machine-caused downtime shall be below [2 %] of production time.", "D", "PQ"],
        ["perf4", "Measuring instruments shall have an accuracy at least [3 times] better than the process tolerance.", "M", "DQ"],
        ["perf5", "The machine shall run reliably over the full range of formats and product properties defined in this URS (worst-case conditions).", "M", "OQ"]
      ] },

    { id: "mech", title: "Materials & mechanical design", icon: "tool",
      why: "Hygienic, cleanable, compatible materials are the heart of GMP equipment design.",
      fields: [
        ["ra", "Product-contact surface finish", "select", ["Ra ≤ 0.4 µm (sterile / high purity)", "Ra ≤ 0.6 µm", "Ra ≤ 0.8 µm (non-sterile)"]],
        ["steel", "Product-contact material", "select", ["AISI 316L / 1.4404", "AISI 316L with low ferrite / electropolished", "Hastelloy / special alloy", "Other (specify)"]]
      ],
      items: [
        ["mech1", "Product-contact metal parts shall be AISI 316L (1.4404/1.4435) stainless steel.", "M", "IQ"],
        ["mech2", "Non-product-contact metal parts shall be AISI 304 stainless steel or better; no painted or plated surfaces in the clean area.", "M", "IQ"],
        ["mech3", "Product-contact surfaces shall be polished to the finish selected above, with roughness measurement reports.", "M", "IQ"],
        ["mech4", "Elastomers and plastics in product contact shall comply with USP <88> Class VI and/or FDA 21 CFR 177, and be free from animal-derived materials (TSE/BSE).", "M", "DOC"],
        ["mech5", "Material certificates EN 10204 type 3.1 shall be supplied for all product-contact metal parts.", "M", "DOC"],
        ["mech6", "Product-contact welds shall be orbital where possible, with weld logs, welder qualifications and inspection (e.g. borescope) records.", "M", "DOC"],
        ["mech7", "The design shall be hygienic: no crevices, dead legs, threads or blind holes in product zones; dead legs shall not exceed [2 × pipe diameter] (ASME BPE).", "M", "DQ"],
        ["mech8", "Product-contact piping shall be fully self-draining (minimum slope [1 %]).", "M", "IQ"],
        ["mech9", "Stainless steel surfaces shall be passivated after fabrication, with certificates.", "M", "DOC"],
        ["mech10", "Lubricants that could contact product shall be food-grade (NSF H1).", "M", "DOC"],
        ["mech11", "Gearboxes and drives shall be located below or outside the product zone, or sealed.", "D", "DQ"]
      ] },

    { id: "clean", title: "Cleaning & changeover", icon: "drop",
      why: "Cleaning must be easy, reproducible and validatable. Changeover time directly affects capacity.",
      fields: [
        ["cleanMode", "Cleaning method", "select", ["Manual cleaning (removable parts)", "WIP — wash in place", "CIP — clean in place", "CIP + SIP (steam in place)"]],
        ["agents", "Cleaning and disinfection agents", "text", "e.g. PW, 0.5 % NaOH, 70 % IPA, H₂O₂-based sporicide"]
      ],
      items: [
        ["cl1", "All product-contact parts shall be easy to remove for cleaning without tools (tool-less) where possible.", "M", "OQ"],
        ["cl2", "Product-contact surfaces shall be accessible for visual inspection and swab sampling.", "M", "DQ"],
        ["cl3", "Materials shall resist the cleaning and disinfection agents listed above without corrosion or degradation.", "M", "DQ"],
        ["cl4", "Format changeover shall be completed by one trained operator in less than [30 min].", "D", "OQ"],
        ["cl5", "Change parts shall be coded and mistake-proof (cannot be fitted to the wrong position).", "D", "OQ"],
        ["cl6", "If CIP/SIP is selected, the cycle shall be automatic, validated and recorded, with spray coverage (riboflavin) testing.", "M", "OQ"],
        ["cl7", "The supplier shall propose a cleaning procedure and support cleaning validation.", "D", "DOC"],
        ["cl8", "Product changeover shall not require full disassembly; trolleys or racks for change parts shall be supplied.", "O", "DQ"]
      ] },

    { id: "env", title: "Installation & environment", icon: "building",
      why: "Makes sure the machine fits the room, the cleanroom grade and the building.",
      fields: [
        ["room", "Room grade where installed", "select", ["Grade A / ISO 5 (inside isolator/RABS)", "Grade B", "Grade C", "Grade D", "CNC (controlled not classified)", "Technical area"]],
        ["space", "Available space (L × W × H)", "text", "e.g. 6.0 × 3.5 × 2.8 m, door 1.2 × 2.2 m"],
        ["climate", "Room temperature / humidity", "text", "e.g. 20 ± 2 °C, 30–60 % RH"],
        ["floor", "Floor load limit", "text", "e.g. 750 kg/m²"]
      ],
      items: [
        ["env1", "The machine shall fit the available space and pass through the doors listed above, or be split into transportable modules.", "M", "DQ"],
        ["env2", "The machine shall not degrade the cleanroom grade of the room (particles, airflow).", "M", "OQ"],
        ["env3", "Technical parts (motors, panels) shall be separated from the clean area by a wall-through (bulkhead) design where possible.", "D", "DQ"],
        ["env4", "Heat released into the room shall be stated and shall not exceed [2 kW].", "D", "DQ"],
        ["env5", "Noise at the operator position shall not exceed [75 dB(A)].", "M", "SAT"],
        ["env6", "The supplier shall supply a layout drawing with utility connection points and service areas before order confirmation.", "M", "DOC"],
        ["env7", "Machine feet shall be adjustable and sealed to the floor without gaps that collect dirt.", "D", "IQ"]
      ] },

    { id: "util", title: "Utilities", icon: "wind",
      why: "Every utility the machine needs, with its quality, so the site can prepare connections in time.",
      fields: [
        ["power", "Power supply available", "text", "e.g. 380 V ±10 %, 3 phases + N + PE, 50 Hz"],
        ["air", "Compressed air available", "text", "e.g. 6 bar, oil-free, ISO 8573-1 Class 1.4.1"],
        ["others", "Other utilities available", "textarea", "e.g. N₂ 99.99 %, vacuum, PW, WFI, pure steam, chilled water 7/12 °C"]
      ],
      items: [
        ["ut1", "The supplier shall list every utility with consumption, pressure, quality and connection size.", "M", "DOC"],
        ["ut2", "The machine shall operate within the site supply tolerances: voltage [±10 %], frequency [50 Hz ±1 %].", "M", "OQ"],
        ["ut3", "Compressed air or gases in contact with product shall be filtered at point of use through a sterilising-grade (0.2 µm) filter.", "M", "IQ"],
        ["ut4", "The machine shall monitor critical utilities (e.g. air pressure, vacuum) and stop safely with an alarm if they fail.", "M", "OQ"],
        ["ut5", "Water and steam connections in contact with product shall be sanitary (tri-clamp) and drainable.", "M", "IQ"],
        ["ut6", "Dust or fume extraction connection shall be provided where product generates dust or vapours.", "D", "DQ"]
      ] },

    { id: "elec", title: "Electrical", icon: "bolt",
      why: "Electrical safety and reliability. IEC 60204-1 is the core standard for machine electrics.",
      fields: [
        ["ip", "Enclosure protection", "select", ["IP54 (dry areas)", "IP55", "IP65 (wash-down / cleanroom)", "IP66/IP69K (heavy wash-down)"]],
        ["brands", "Preferred component brands", "text", "e.g. Siemens, Schneider, Allen-Bradley, Festo, SMC"]
      ],
      items: [
        ["el1", "Electrical equipment shall comply with IEC 60204-1, and control panels with IEC 61439.", "M", "DOC"],
        ["el2", "Panels in clean areas shall be stainless steel AISI 304 or better with the protection rating selected above (IEC 60529).", "M", "IQ"],
        ["el3", "The machine shall have a lockable main isolator switch (lock-out/tag-out).", "M", "IQ"],
        ["el4", "Electromagnetic compatibility shall meet IEC/EN 61000-6-2 and 61000-6-4.", "M", "DOC"],
        ["el5", "PLC and HMI shall be protected by a UPS for at least [10 min], allowing a controlled shutdown without data loss.", "D", "OQ"],
        ["el6", "All cables and wires shall be numbered and labelled to match the electrical drawings; cable entries via glands.", "M", "IQ"],
        ["el7", "Panels shall have at least [20 %] spare space and spare I/O for future changes.", "D", "IQ"],
        ["el8", "Electrical components shall be from the preferred brands above, or locally available brands with local service.", "D", "DQ"],
        ["el9", "Panel cooling shall not blow unfiltered air into the clean area.", "M", "DQ"],
        ["el10", "As-built electrical drawings shall be supplied in paper and editable electronic format (e.g. EPLAN, PDF).", "M", "DOC"]
      ] },

    { id: "safe", title: "Safety & EHS", icon: "shield",
      why: "Protects operators and the environment. In Egypt and the EU, CE conformity is the usual reference.",
      fields: [
        ["atex", "Hazardous area (ATEX)", "select", ["No ATEX zone", "Zone 1 / 21", "Zone 2 / 22", "To be defined by risk assessment"]],
        ["oel", "Containment target (if hazardous)", "text", "e.g. OEL 1 µg/m³ (8 h TWA), verified by SMEPAC test"]
      ],
      items: [
        ["sf1", "The machine shall be CE marked with an EU Declaration of Conformity under the Machinery Directive 2006/42/EC or, from 20 January 2027, the Machinery Regulation (EU) 2023/1230.", "M", "DOC"],
        ["sf2", "The supplier shall provide a documented risk assessment according to ISO 12100.", "M", "DOC"],
        ["sf3", "Safety-related control functions shall reach the Performance Level determined by risk assessment (ISO 13849-1), minimum [PL d].", "M", "OQ"],
        ["sf4", "Emergency stop buttons shall be provided at every operator position (ISO 13850) and require manual reset.", "M", "OQ"],
        ["sf5", "Moving parts shall be protected by fixed or interlocked guards (ISO 14120, ISO 14119); opening a guard shall stop hazardous motion.", "M", "OQ"],
        ["sf6", "If an ATEX zone applies, all equipment shall be certified for that zone (Directive 2014/34/EU).", "M", "DOC"],
        ["sf7", "For hazardous products, the machine shall achieve the containment target above, proven by surrogate (SMEPAC) testing.", "M", "PQ"],
        ["sf8", "Hot surfaces, pinch points and residual energies (pneumatic, electrical) shall be marked and safely released at stop.", "M", "OQ"],
        ["sf9", "Operator positions shall be ergonomic: working height, reach and lifting loads within EN 614 / ISO 11228 limits.", "D", "FAT"],
        ["sf10", "Remote access and network connections shall be protected against unauthorised access (IEC 62443); new machines should address the cybersecurity requirements of Regulation (EU) 2023/1230.", "D", "DQ"]
      ] },

    { id: "auto", title: "Automation, data & integrity", icon: "chip",
      why: "Computerised systems in GMP must be validated and protect data integrity (EU GMP Annex 11, FDA 21 CFR Part 11).",
      fields: [
        ["plc", "PLC / HMI platform", "text", "e.g. Siemens S7-1500 + 15″ touch HMI"],
        ["gamp", "Software category (GAMP 5)", "select", ["Category 3 — standard, not configured", "Category 4 — configured product", "Category 5 — custom software", "Not sure — supplier to propose"]],
        ["iface", "Connection to site systems", "text", "e.g. OPC UA to SCADA/MES, serialisation L3, none"]
      ],
      items: [
        ["au1", "The control system shall comply with EU GMP Annex 11 and FDA 21 CFR Part 11 where electronic records are used.", "M", "OQ"],
        ["au2", "Each user shall log in with a unique user ID and password; at least 4 access levels (operator, supervisor, maintenance, administrator).", "M", "OQ"],
        ["au3", "An automatic log-off shall occur after [5 min] of inactivity.", "M", "OQ"],
        ["au4", "A secure, time-stamped audit trail shall record all GMP-relevant actions: who, what, when, old value, new value and reason. It cannot be edited or deleted.", "M", "OQ"],
        ["au5", "Critical actions (e.g. recipe approval, batch release) shall require an electronic signature with name, date/time and meaning.", "D", "OQ"],
        ["au6", "Recipe management: recipes created, changed and approved only by authorised users, with version control.", "M", "OQ"],
        ["au7", "An electronic batch report (PDF or equivalent) shall be generated automatically with parameters, alarms and events.", "M", "OQ"],
        ["au8", "Data shall be stored for at least [the retention period of the batch records] and backed up; restore shall be tested.", "M", "OQ"],
        ["au9", "System time shall be synchronised with the site time server (NTP); users cannot change the clock.", "D", "OQ"],
        ["au10", "Alarms shall be clear, prioritised, time-stamped and stored in an alarm history.", "M", "OQ"],
        ["au11", "The machine shall offer a standard interface (e.g. OPC UA, PackML states) to site SCADA/MES/serialisation systems.", "D", "FAT"],
        ["au12", "The supplier shall deliver the software design specification, I/O list and a backup of the final validated software version; source code access or escrow for custom (Cat. 5) code.", "D", "DOC"],
        ["au13", "Remote support shall be possible only through a secure, customer-controlled connection.", "D", "SAT"]
      ] },

    { id: "docs", title: "Documentation package", icon: "book",
      why: "The documents you need for qualification, maintenance and inspections. Agree them before order, not after delivery.",
      fields: [
        ["docLang", "Document format", "select", ["Paper + electronic (PDF)", "Electronic only (PDF + native files)"]]
      ],
      items: [
        ["dc1", "Functional Specification (FS) and Design Specification (DS) for approval before manufacturing.", "M", "DOC"],
        ["dc2", "General arrangement drawing, P&ID and layout with utility connections.", "M", "DOC"],
        ["dc3", "Electrical schematics, pneumatic diagrams and I/O list (as-built).", "M", "DOC"],
        ["dc4", "Material certificates (3.1), surface-finish reports, elastomer conformity certificates, welding documentation.", "M", "DOC"],
        ["dc5", "Calibration certificates for all critical instruments, traceable to national/international standards (ISO/IEC 17025).", "M", "DOC"],
        ["dc6", "Operating manual, maintenance manual and cleaning instructions.", "M", "DOC"],
        ["dc7", "Recommended spare parts list (2 years of operation) and wear parts list with part numbers.", "M", "DOC"],
        ["dc8", "EU Declaration of Conformity / CE certificate and ATEX certificates where applicable.", "M", "DOC"],
        ["dc9", "Requirements traceability matrix linking every URS point to its design and test.", "D", "DOC"],
        ["dc10", "Software documentation and backup (see Automation).", "M", "DOC"]
      ] },

    { id: "val", title: "Qualification & validation", icon: "check",
      why: "How the supplier proves the machine meets the URS. Annex 15 expects the URS to drive DQ → FAT → SAT → IQ → OQ → PQ.",
      fields: [
        ["valScope", "Supplier's role in qualification", "select", ["Supplier provides protocols and executes IQ/OQ", "Supplier provides protocols, customer executes", "Customer writes and executes, supplier supports"]]
      ],
      items: [
        ["va1", "The supplier shall support Design Qualification (DQ) by reviewing the design against this URS.", "M", "DQ"],
        ["va2", "A Factory Acceptance Test (FAT) shall be performed with the customer present, using approved protocols and [customer product / placebo].", "M", "FAT"],
        ["va3", "A Site Acceptance Test (SAT) shall be performed after installation.", "M", "SAT"],
        ["va4", "The supplier shall provide IQ and OQ protocols for customer approval, and execute them on site.", "D", "IQ"],
        ["va5", "The supplier shall support Performance Qualification (PQ) with technical presence during [3] runs.", "D", "PQ"],
        ["va6", "Tests performed and documented at FAT may be referenced in IQ/OQ, if not affected by transport and installation (Annex 15).", "D", "DOC"],
        ["va7", "Protocols shall follow Good Documentation Practice: pre-approved, signed, dated, with deviations recorded and resolved.", "M", "DOC"],
        ["va8", "The supplier shall support the customer's risk assessment (e.g. FMEA) of the machine.", "D", "DOC"]
      ] },

    { id: "svc", title: "Training, service & spare parts", icon: "phone",
      why: "What happens after delivery. Local service capability often matters more than the price.",
      fields: [
        ["warranty", "Warranty period", "text", "e.g. 24 months from SAT"],
        ["delivery", "Required delivery date", "text", "e.g. FAT by March 2027, on site by May 2027"]
      ],
      items: [
        ["sv1", "On-site operator training of [3 days] and maintenance training of [2 days], with training records.", "M", "DOC"],
        ["sv2", "Service response within [24 h] for critical breakdowns; remote support within [4 h].", "M", "DOC"],
        ["sv3", "Local technical service and spare parts stock in [Egypt / the region].", "D", "DOC"],
        ["sv4", "Spare parts shall be available for at least [10 years] after delivery; obsolescence shall be notified in advance.", "M", "DOC"],
        ["sv5", "A preventive maintenance plan with intervals, tools and estimated downtime.", "M", "DOC"],
        ["sv6", "Installation, commissioning and start-up supervision by the supplier's engineers.", "M", "SAT"],
        ["sv7", "Warranty as stated above, covering parts, labour and travel.", "D", "DOC"]
      ] }
  ],

  /* ---------- machine templates: extra requirements & typical values ---------- */
  machines: [
    { id: "generic", name: "Any machine (general template)", icon: "tool", extra: {} },

    { id: "filling", name: "Liquid filling & capping (vials, ampoules, bottles)", icon: "drop", partners: ["steriline","siempharma","tema"],
      extra: { proc: [
        ["fi1", "Fill volume range [0.5 – 100 mL] with filling accuracy [±0.5 %] (by weight).", "M", "OQ"],
        ["fi2", "100 % in-process weight control (IPC) or statistical check-weighing with automatic dose correction.", "D", "OQ"],
        ["fi3", "No container – no fill; no stopper/cap – reject.", "M", "OQ"],
        ["fi4", "Filling pump technology suitable for the product (peristaltic / rotary piston / time-pressure), with no product contact with moving seals where possible.", "M", "DQ"],
        ["fi5", "Stoppering and capping/crimping quality checks: presence, height, cap torque or crimp force.", "M", "OQ"],
        ["fi6", "Nitrogen purging of headspace with residual oxygen below [2 %] (if required).", "O", "PQ"]
      ], env: [
        ["fi7", "For aseptic filling, the filling zone shall be Grade A inside an isolator or RABS, with first-air protection over open containers (EU GMP Annex 1).", "M", "OQ"],
        ["fi8", "Continuous non-viable particle monitoring and active air sampling in the Grade A zone.", "M", "OQ"]
      ] } },

    { id: "tablet", name: "Tablet press", icon: "pill", partners: ["kikusui","cadmach"],
      extra: { proc: [
        ["tb1", "Number of stations and tooling type [D/B/BB, EU/TSM] to reach the required output.", "M", "DQ"],
        ["tb2", "Maximum main compression force [100 kN] and pre-compression force [20 kN].", "M", "OQ"],
        ["tb3", "Tablet weight control by force measurement with automatic weight adjustment and single-tablet rejection.", "M", "OQ"],
        ["tb4", "Tablet weight variation ≤ [±2 %] (RSD ≤ [1 %]).", "M", "PQ"],
        ["tb5", "Integrated or connected deduster, metal detector and tablet tester.", "D", "FAT"],
        ["tb6", "Wash-off-line (WOL) or wash-in-place for potent products.", "O", "DQ"]
      ] } },

    { id: "granulation", name: "Granulation, drying & coating", icon: "wind", partners: ["freund"],
      extra: { proc: [
        ["gr1", "Working batch volume [50 – 300 L], with a minimum/maximum fill level stated.", "M", "DQ"],
        ["gr2", "Inlet air temperature control [30 – 90 °C] within [±2 °C].", "M", "OQ"],
        ["gr3", "Spray rate control with mass flow measurement and spray pattern verification.", "M", "OQ"],
        ["gr4", "Pressure-shock resistance [10 / 12 bar] or explosion venting/suppression for solvent or dusty products.", "M", "DQ"],
        ["gr5", "Closed product transfer (vacuum, gravity or IBC) to minimise exposure.", "D", "DQ"],
        ["gr6", "End-point detection by product temperature, moisture (NIR) or power consumption.", "O", "OQ"]
      ] } },

    { id: "blister", name: "Blister, cartoning & case packing", icon: "box", partners: ["famartec","siempharma"],
      extra: { proc: [
        ["bl1", "Blister output [250 blisters/min] and cartoner output [150 cartons/min].", "M", "PQ"],
        ["bl2", "Formats: PVC/PVDC, PVC/Aclar or Alu-Alu (cold-form) with the listed blister sizes.", "M", "DQ"],
        ["bl3", "Vision inspection of empty pockets, broken or wrong tablets, and printed text (batch, expiry).", "M", "OQ"],
        ["bl4", "Leaflet presence check and code reading (pharmacode / DataMatrix) on cartons and leaflets.", "M", "OQ"],
        ["bl5", "Sealing temperature, pressure and dwell time controlled and recorded.", "M", "OQ"],
        ["bl6", "Ready for serialisation and tamper-evident labelling (see Serialisation template).", "D", "DQ"]
      ] } },

    { id: "tube", name: "Tube filling & semi-solids", icon: "drop", partners: ["tgm","adam"],
      extra: { proc: [
        ["tu1", "Tube sizes [Ø13 – 40 mm], materials aluminium / laminate / plastic.", "M", "DQ"],
        ["tu2", "Fill weight accuracy [±1 %] for viscous products, with heated hopper if needed.", "M", "OQ"],
        ["tu3", "Hot-air or ultrasonic sealing with batch/expiry coding in the seal.", "M", "OQ"],
        ["tu4", "Tube orientation by eye-mark, and no tube – no fill.", "M", "OQ"]
      ] } },

    { id: "sachet", name: "Sachet & stick-pack packaging", icon: "box", partners: ["omag"],
      extra: { proc: [
        ["sa1", "Number of lanes and output [e.g. 8 lanes, 400 sachets/min].", "M", "PQ"],
        ["sa2", "Dosing system suited to product: auger (powder), cup (granules), pump (liquid).", "M", "DQ"],
        ["sa3", "Sachet seal integrity verified (e.g. leak test) and coding of batch/expiry.", "M", "OQ"]
      ] } },

    { id: "isolator", name: "Isolator / RABS / containment", icon: "shield", partners: ["tema","abc","andock"],
      extra: { env: [
        ["is1", "Grade A conditions inside with unidirectional airflow [0.36 – 0.54 m/s] at working height.", "M", "OQ"],
        ["is2", "Automatic, validated bio-decontamination cycle (e.g. VHP) with ≥ [6-log] reduction on biological indicators.", "M", "OQ"],
        ["is3", "Leak tightness tested by pressure decay, class according to ISO 10648-2.", "M", "OQ"],
        ["is4", "Glove ports with integrated glove integrity testing.", "M", "OQ"],
        ["is5", "Material transfer via RTP (alpha-beta) ports, pass-boxes or e-beam tunnel without breaking Grade A.", "M", "DQ"],
        ["is6", "Negative pressure operation for toxic products with safe-change (bag-in/bag-out) filters.", "D", "DQ"]
      ] } },

    { id: "thermal", name: "Autoclave / freeze dryer / depyrogenation", icon: "chip", partners: ["zirbus","steriline"],
      extra: { proc: [
        ["th1", "Chamber usable volume [e.g. 600 L] / shelf area [e.g. 5 m²].", "M", "DQ"],
        ["th2", "Temperature uniformity in the load zone within [±1 °C] during the hold phase.", "M", "OQ"],
        ["th3", "Validated cycles with F₀ calculation (autoclave) or ≥ 3-log endotoxin reduction (depyrogenation).", "M", "PQ"],
        ["th4", "Independent temperature recording probes for validation (feed-throughs / validation ports).", "M", "IQ"],
        ["th5", "Double-door pass-through with interlock between clean and non-clean sides.", "D", "OQ"],
        ["th6", "Freeze dryer: automatic loading/unloading of partially stoppered vials under Grade A (Annex 1 point 8.123).", "D", "DQ"]
      ] } },

    { id: "water", name: "Water system (PW / WFI / pure steam)", icon: "drop", partners: ["elettracqua"],
      extra: { proc: [
        ["wa1", "Production capacity [e.g. 2 000 L/h PW, 1 000 L/h WFI] and storage [e.g. 5 000 L].", "M", "DQ"],
        ["wa2", "Water quality meets Ph. Eur. / USP monographs for PW / WFI, including conductivity, TOC, microbial and endotoxin limits.", "M", "PQ"],
        ["wa3", "Online conductivity and TOC monitoring with alarms and recording.", "M", "OQ"],
        ["wa4", "Distribution loop velocity ≥ [1 m/s]; WFI loop hot (≥ 70 °C) or sanitised by validated cycle.", "M", "OQ"],
        ["wa5", "Three-phase PQ (approx. 1 year) supported by the supplier.", "D", "PQ"]
      ] } },

    { id: "hvac", name: "Air handling / HVAC / filtration", icon: "wind", partners: ["cdz","generalfilter","hfiltration"],
      extra: { env: [
        ["hv1", "Air volume [m³/h], air changes per hour and pressure cascade [≥ 10 Pa] between grades.", "M", "OQ"],
        ["hv2", "Supply temperature and humidity control within [±1 °C / ±5 % RH].", "M", "OQ"],
        ["hv3", "Filter classes: G4/F7/F9 in AHU, H14 terminal HEPA for Grade A/B.", "M", "IQ"],
        ["hv4", "HEPA filters integrity tested in place (PAO/DEHS) with test ports.", "M", "OQ"],
        ["hv5", "Energy-efficient fans (EC/IE4) and heat recovery where possible.", "O", "DQ"]
      ] } },

    { id: "inspection", name: "Inspection: check weigher, metal detector, X-ray, vision", icon: "check", partners: ["prisma","antares"],
      extra: { proc: [
        ["in1", "Check weigher accuracy [±0.1 g] at [e.g. 150 ppm]; metal detection sensitivity Fe [0.5 mm], non-Fe [0.6 mm], SS [0.8 mm].", "M", "OQ"],
        ["in2", "Fail-safe rejection with reject confirmation and lockable reject bin.", "M", "OQ"],
        ["in3", "Automatic test-piece routine at start and at set intervals, with recorded results.", "M", "OQ"],
        ["in4", "Vision system with validated recipes, image storage of rejects and false-reject rate below [0.5 %].", "D", "PQ"]
      ] } },

    { id: "serial", name: "Serialisation & aggregation (track & trace)", icon: "chip", partners: ["antares"],
      extra: { proc: [
        ["se1", "Printing of GS1 DataMatrix with GTIN, serial, batch and expiry, plus human-readable text, on every pack.", "M", "OQ"],
        ["se2", "100 % verification of codes with grading (ISO/IEC 15415, grade C or better) and automatic reject.", "M", "OQ"],
        ["se3", "Aggregation pack → case → pallet with SSCC labels.", "M", "OQ"],
        ["se4", "Connection to level 3/4 software and reporting to the national system (e.g. Egyptian EDA, EPCIS).", "M", "SAT"],
        ["se5", "Tamper-evident labelling where required.", "D", "OQ"]
      ] } },

    { id: "vessel", name: "Process vessels, mixers & skids", icon: "building", partners: ["adam","cora"],
      extra: { proc: [
        ["ve1", "Working volume [e.g. 100 – 1 000 L], design pressure/vacuum [-1 / +3 bar] and temperature [5 – 121 °C].", "M", "DQ"],
        ["ve2", "Pressure vessels designed and certified to PED 2014/68/EU or ASME VIII.", "M", "DOC"],
        ["ve3", "Mixing performance: homogeneity [RSD ≤ 2 %] within [30 min] for the reference product.", "M", "PQ"],
        ["ve4", "Jacket heating/cooling with controlled ramp rate [°C/min].", "D", "OQ"],
        ["ve5", "Load cells for weight-based dosing with accuracy [±0.1 %].", "D", "OQ"]
      ] } }
  ],

  /* ---------- guide content ---------- */
  guide: {
    rules: [
      ["Write what you need, not how to build it", "“Fill accuracy shall be ±0.5 %” — not “use a ceramic piston pump.” Let the supplier propose the solution."],
      ["One requirement per sentence", "Split “The machine shall be fast and easy to clean” into two measurable points."],
      ["Make it measurable and testable", "Every requirement needs a number or a clear pass/fail check, so it can be verified at FAT, SAT or qualification."],
      ["Use “shall” for requirements", "“Shall” = mandatory. “Should” = desirable. Avoid “approximately”, “user-friendly”, “state of the art.”"],
      ["Give every point a unique ID", "IDs (URS-001…) let you trace each requirement to the design, the FAT and the qualification test."],
      ["Prioritise", "Mark each point Mandatory, Desirable or Optional, so offers can be compared fairly."],
      ["Start from product and process knowledge", "Identify critical quality attributes (CQAs) and critical process parameters (CPPs) first, then write the URS around them."],
      ["Keep it a living document", "Update the URS under change control when requirements change — including gaps found at FAT."]
    ],
    examples: [
      ["The machine must be fast.", "The machine shall fill at least 120 vials/min at nominal speed for 2 mL and 10 mL formats."],
      ["Easy to clean.", "All product-contact parts shall be removable without tools within 15 min by one operator."],
      ["GMP compliant software.", "The HMI shall keep a non-editable audit trail recording user, date/time, old and new value, and reason for each GMP-relevant change."],
      ["Good quality steel.", "Product-contact parts shall be AISI 316L with Ra ≤ 0.4 µm, with EN 10204 3.1 certificates and roughness reports."]
    ],
    team: [
      ["Production", "Output, formats, shifts, ergonomics"],
      ["Quality Assurance", "GMP, data integrity, approval of the URS"],
      ["Engineering & Maintenance", "Utilities, materials, spare parts, layout"],
      ["Validation / CQV", "Testability, FAT/SAT, IQ/OQ/PQ strategy"],
      ["EHS / Safety", "Machine safety, containment, ATEX, noise"],
      ["IT / Automation", "Part 11 / Annex 11, networks, interfaces, cybersecurity"],
      ["Procurement", "Commercial terms, delivery, warranty"]
    ],
    lifecycle: [
      ["URS", "What you need"],
      ["Offer + compliance matrix", "Supplier answers each URS point"],
      ["FS / DS", "How the supplier will meet it"],
      ["DQ", "Design checked against URS"],
      ["FAT", "Tested at supplier"],
      ["SAT", "Tested on site"],
      ["IQ / OQ", "Installed and operating correctly"],
      ["PQ", "Performs with real product"]
    ],
    mistakes: [
      "Copying the supplier's brochure into the URS",
      "Requirements that cannot be tested (“reliable”, “modern”)",
      "Forgetting utilities, door sizes or floor loads until delivery day",
      "No data integrity requirements for the HMI/PLC",
      "Documentation package not agreed before the order",
      "Missing format list — change parts ordered later at a higher price",
      "URS written by one department only"
    ],
    standards: [
      ["Qualification & validation", "EU GMP Annex 15; ASTM E2500; ISPE Baseline Guide Vol. 5 (C&Q)"],
      ["Computerised systems", "EU GMP Annex 11; FDA 21 CFR Part 11; ISPE GAMP 5 (2nd ed.)"],
      ["Sterile manufacturing", "EU GMP Annex 1 (2022)"],
      ["Risk management", "ICH Q9(R1); ISO 12100 (machine risk assessment)"],
      ["Machine safety", "Machinery Directive 2006/42/EC → Regulation (EU) 2023/1230 from 20 Jan 2027; ISO 13849-1; ISO 13850; ISO 14119; ISO 14120"],
      ["Electrical", "IEC 60204-1; IEC 61439; IEC 60529 (IP); IEC 61000-6 (EMC)"],
      ["Explosion protection", "ATEX 2014/34/EU; IECEx; IEC 60079"],
      ["Pressure equipment", "PED 2014/68/EU; ASME BPVC Section VIII"],
      ["Hygienic design", "ASME BPE; EHEDG guidelines; EN 10204 (3.1 certificates)"],
      ["Materials in contact", "USP <87>/<88> Class VI; FDA 21 CFR 177"],
      ["Compressed air", "ISO 8573-1"],
      ["Cleanrooms", "ISO 14644-1/-2; EU GMP Annex 1"],
      ["Automation interfaces", "OPC UA; ISA-88 (batch); ISA-TR88.00.02 (PackML); ISA-18.2 (alarms); IEC 62443 (cybersecurity)"],
      ["Water", "Ph. Eur. 0008 / 0169; USP <1231>"],
      ["Serialisation", "GS1 General Specifications; EPCIS; national rules (e.g. EDA Egypt)"]
    ]
  }
};
