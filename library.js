// NOVA Library — articles, reference data, official documents and reading list.
// Written by NOVA for orientation. The official regulatory texts always govern.
// To add an article: copy one block in "articles", give it a new id, and write the body in HTML.
window.NOVA_LIB = {
  updated: "October 2026",

  articles: [
  /* ------------------------------------------------------------------ */
  { id: "annex1", tag: "Sterile", title: "EU GMP Annex 1: what the new rules mean for sterile manufacturing",
    summary: "The 2022 revision of Annex 1 is now fully in force. Here is what changed, in plain language, and what inspectors look for.",
    minutes: 7, partners: ["steriline","tema","rigel","am","elettracqua","abc","zirbus"],
    body: `
<p class="lead">Annex 1 of the EU GMP Guide covers the manufacture of sterile medicinal products. Its revised version was published in August 2022 and entered into force on <b>25 August 2023</b>. One requirement, paragraph 8.123, followed a year later on <b>25 August 2024</b>. PIC/S adopted the same text, so it applies in every PIC/S member country, and many other regulators use it as their reference.</p>

<h3>The big idea: a Contamination Control Strategy</h3>
<p>The old Annex 1 was a list of rules. The new one asks each site to write a <b>Contamination Control Strategy (CCS)</b>: one document that explains how the whole facility prevents microbial, particle and pyrogen contamination, and how the controls work together. It must cover the plant design, equipment, utilities, raw materials, people, cleaning, monitoring and the product itself, and it must be reviewed regularly.</p>
<p>An inspector will usually ask for the CCS first, then test whether daily practice matches it.</p>

<h3>Quality Risk Management everywhere</h3>
<p>Every decision — room grades, monitoring locations, alert limits, intervention lists — must be justified by documented risk assessment (ICH Q9). "We have always done it this way" is no longer a justification.</p>

<h3>Barrier technology is the expected standard</h3>
<ul>
<li><b>Isolators and RABS</b> are named as the preferred way to protect Grade A operations. Using an open Grade A zone without a barrier needs a strong, documented justification.</li>
<li>Interventions through gloves must be designed, listed, risk-assessed and included in aseptic process simulations.</li>
<li><b>Glove integrity</b> must be checked: visually at each use, and with a physical test (for example a pressure-decay glove tester) at least at the start and end of each batch or campaign.</li>
</ul>

<h3>Environmental monitoring is stricter</h3>
<ul>
<li>Grade A must be <b>monitored continuously</b> for particles throughout critical processing, including set-up.</li>
<li>Particles ≥ 5.0 µm are no longer used to classify Grade A at rest, but they are still monitored, because a rise often signals a real problem.</li>
<li>For Grade A, the microbial action limit is <b>no growth</b>. Any growth must be investigated.</li>
<li>Rapid and alternative microbiological methods are welcome if they are validated.</li>
</ul>
<div class="note">See the <a href="#lib-ref-grades">cleanroom grade tables</a> for the particle and microbial limits.</div>

<h3>Sterilisation, filters and PUPSIT</h3>
<p>Sterilising filters must be integrity-tested <b>after use</b>, and normally also <b>before use, after sterilisation (PUPSIT)</b>. Skipping PUPSIT is only acceptable with a documented risk assessment proving it is not needed. Steam, dry-heat and other sterilisation cycles need validated loading patterns and periodic requalification.</p>

<h3>Aseptic Process Simulation (media fill)</h3>
<ul>
<li>Initial qualification: <b>three consecutive successful</b> simulations per line and shift pattern.</li>
<li>Routine: at least <b>twice a year</b> per line and process.</li>
<li>The target is <b>zero contaminated units</b>. Any contaminated unit means the simulation has failed and must be investigated.</li>
<li>Simulations must include worst-case conditions: maximum duration, the most staff, and every listed intervention.</li>
</ul>

<h3>Freeze dryers (paragraph 8.123)</h3>
<p>Partially stoppered containers moving to and from the lyophiliser must stay under Grade A conditions throughout. Manual loading of open product is strongly discouraged. This is the paragraph that came into force in 2024, and it pushed many sites to automated loading systems.</p>

<h3>Utilities</h3>
<ul>
<li><b>Water for Injection</b> may be produced by distillation or by a purification process equivalent to distillation, such as reverse osmosis combined with other suitable techniques.</li>
<li>Water systems need continuous monitoring of total organic carbon (TOC) and conductivity, and trending of microbial results.</li>
<li>Pure steam and process gases in contact with product must be qualified and tested.</li>
</ul>

<h3>People</h3>
<p>Only trained and qualified staff may enter Grade A/B areas. Gowning qualification is repeated at least once a year. Numbers in cleanrooms should be kept to the minimum, and the CCS should explain how this is controlled.</p>

<h3>Where to start</h3>
<ol>
<li>Write or update your CCS and link it to existing risk assessments.</li>
<li>Run a gap assessment against each section of Annex 1.</li>
<li>Prioritise: barrier systems, continuous Grade A monitoring, glove testing and PUPSIT usually need the most investment.</li>
<li>Revisit your aseptic process simulation programme and intervention list.</li>
</ol>`,
    sources: [
      ["EU GMP Annex 1 (2022) — official text", "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf"],
      ["PIC/S — entry into force of revised Annex 1", "https://picscheme.org/en/news/entry-into-force-of-revised-annex-i-pics-gmp-guide-pe-009-17"]
    ] },

  /* ------------------------------------------------------------------ */
  { id: "gmp", tag: "GMP", title: "GMP essentials, and what is changing in 2025–2026",
    summary: "The structure of the EU GMP Guide, the principles behind it, and the draft rules for data, computerised systems and AI.",
    minutes: 6, partners: ["antares","rigel","techniconsult"],
    body: `
<p class="lead">Good Manufacturing Practice (GMP) is the set of rules that ensures medicines are consistently made and controlled to the quality required for their intended use. In Europe the rules are in <b>EudraLex Volume 4</b>. PIC/S publishes an almost identical guide (PE 009) used by more than 50 regulators, and the WHO publishes its own GMP texts used by many others.</p>

<h3>The nine chapters of EU GMP Part I</h3>
<table class="tbl"><thead><tr><th>#</th><th>Chapter</th><th>In one line</th></tr></thead><tbody>
<tr><td>1</td><td>Pharmaceutical Quality System</td><td>Management responsibility, product quality review, CAPA, change control</td></tr>
<tr><td>2</td><td>Personnel</td><td>Qualified Person, responsibilities, training, hygiene</td></tr>
<tr><td>3</td><td>Premises & Equipment</td><td>Design and maintenance that prevent mix-ups and contamination</td></tr>
<tr><td>4</td><td>Documentation</td><td>Specifications, procedures, batch records, data integrity</td></tr>
<tr><td>5</td><td>Production</td><td>Validated processes, prevention of cross-contamination, starting materials</td></tr>
<tr><td>6</td><td>Quality Control</td><td>Sampling, testing, stability, out-of-specification results</td></tr>
<tr><td>7</td><td>Outsourced Activities</td><td>Contracts and oversight of contract manufacturers and labs</td></tr>
<tr><td>8</td><td>Complaints & Recalls</td><td>Investigation, quality defects, recall procedures</td></tr>
<tr><td>9</td><td>Self Inspection</td><td>Internal audits to check GMP compliance</td></tr>
</tbody></table>
<p>Part II covers active substances, and the <b>Annexes</b> cover specific topics. The most used are Annex 1 (sterile products), Annex 11 (computerised systems), Annex 15 (qualification & validation) and Annex 16 (QP certification).</p>

<h3>Principles that run through everything</h3>
<ul>
<li><b>Quality Risk Management</b> (ICH Q9(R1)): the depth of control should match the risk to the patient.</li>
<li><b>Lifecycle thinking</b> (ICH Q10): design, qualify, monitor and improve, rather than validate once and forget.</li>
<li><b>Data integrity — ALCOA+</b>: records must be Attributable, Legible, Contemporaneous, Original and Accurate, and also Complete, Consistent, Enduring and Available.</li>
<li><b>Qualification before use</b>: equipment goes through URS → DQ → IQ → OQ → PQ, and processes are validated before commercial supply.</li>
</ul>

<h3>What is changing: Chapter 4, Annex 11 and the new Annex 22</h3>
<p>On <b>7 July 2025</b> the European Commission published draft revisions for public consultation, which closed on <b>7 October 2025</b>. Final versions were expected during 2026; check EudraLex for the adopted texts and their effective dates.</p>
<ul>
<li><b>Chapter 4 (Documentation)</b> moves from "documents" to <b>data governance</b>: the full data lifecycle, metadata, audit trails, hybrid paper-electronic systems and ALCOA++.</li>
<li><b>Annex 11 (Computerised Systems)</b> is expanded to cover cloud services (SaaS/PaaS/IaaS), mobile apps and IT security. It strengthens audit-trail review, access control and supplier oversight, and makes clear that GMP responsibility cannot be outsourced to a software or cloud provider.</li>
<li><b>Annex 22 (Artificial Intelligence)</b> is completely new. It applies to AI/ML models used in GMP-critical decisions — for example automated visual inspection. In the draft, only <b>static, deterministic</b> models are allowed in critical uses; generative AI and self-learning models are excluded from critical applications. Models need a defined intended use, independent test data, pre-set acceptance criteria, explainability and change control.</li>
</ul>

<h3>Practical tips</h3>
<ol>
<li>List every computerised system that touches GMP data, including cloud and spreadsheet tools, and classify them by risk.</li>
<li>Check that audit trails are switched on and actually reviewed.</li>
<li>If you use, or plan to use, AI-based inspection or monitoring, ask suppliers how their models will meet Annex 22.</li>
</ol>`,
    sources: [
      ["EudraLex Volume 4 — EU GMP Guide", "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en"],
      ["EC consultation: Chapter 4, Annex 11, Annex 22", "https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en"],
      ["ICH quality guidelines (Q9, Q10)", "https://www.ich.org/page/quality-guidelines"]
    ] },

  /* ------------------------------------------------------------------ */
  { id: "tnt", tag: "Track & Trace", title: "Track & Trace in Egypt: what manufacturers and importers must do",
    summary: "Egypt's national drug traceability system is live. The rules, the dates, and how they compare with Europe and the USA.",
    minutes: 6, partners: ["antares","siempharma","famartec","prisma"],
    body: `
<p class="lead">Falsified medicines are a global problem. Track & trace systems fight them by giving every pack a unique identity and recording its journey from the factory to the pharmacy. Egypt now has a national system, and it is mandatory.</p>

<h3>The Egyptian rules</h3>
<ul>
<li><b>EDA Decree No. 475 of 2025</b> established the National Unified Electronic Drug Track-and-Trace System and its phased rollout.</li>
<li><b>EDA Decree No. 804 of 2025</b> (December 2025) issued the binding Regulatory Guide: duties, technical requirements and penalties.</li>
</ul>

<h3>Key dates</h3>
<table class="tbl"><thead><tr><th>Date</th><th>Products in scope</th></tr></thead><tbody>
<tr><td><b>1 Feb 2026</b></td><td>Imported finished human medicines</td></tr>
<tr><td><b>1 Aug 2026</b></td><td>Locally manufactured, filled or packaged products, and bulk products (imported and local)</td></tr>
</tbody></table>
<p>Batches produced or imported before these dates may remain on the market until they expire. Products made after them cannot be traded unless they are enrolled in the system.</p>

<h3>What has to be on every pack</h3>
<p>A <b>GS1 2D DataMatrix</b> on the outer pack, containing four data elements:</p>
<table class="tbl"><thead><tr><th>GS1 AI</th><th>Data</th><th>Example</th></tr></thead><tbody>
<tr><td>(01)</td><td>Product code — GTIN</td><td>06221234567890</td></tr>
<tr><td>(21)</td><td>Unique serial number</td><td>A7K29X4P1</td></tr>
<tr><td>(10)</td><td>Batch / lot</td><td>B24-0915</td></tr>
<tr><td>(17)</td><td>Expiry date (YYMMDD)</td><td>271031</td></tr>
</tbody></table>
<p>Cases and pallets carry an <b>SSCC</b> (GS1 AI 00), and packs are linked to them through <b>aggregation</b>: pack → case → pallet. Every site in the supply chain needs a registered <b>location code</b>, and data is exchanged in the GS1 <b>EPCIS</b> event format.</p>

<h3>Who does what</h3>
<ul>
<li><b>Manufacturers</b>: serialise each pack, print and verify the DataMatrix, aggregate to SSCCs, and report to the national system. Toll manufacturers are included.</li>
<li><b>Importers</b>: make sure imported packs carry compliant codes, and register products.</li>
<li><b>Distributors and warehouses</b>: record receipt and shipment events with verified SSCCs and location codes.</li>
<li><b>Pharmacies and hospitals</b>: verify each pack before dispensing, refuse packs that cannot be verified, and report them to the EDA.</li>
</ul>

<h3>Enforcement</h3>
<p>A product that breaks the coding, registration or movement rules is "non-compliant" even if it is otherwise safe. It can be seized. The guide sets a step-by-step ladder: written warning, suspension of the product's circulation, suspension of supply to the company, then financial penalties.</p>

<h3>How Egypt compares</h3>
<table class="tbl"><thead><tr><th></th><th>EU (FMD)</th><th>USA (DSCSA)</th><th>Egypt (EDA)</th></tr></thead><tbody>
<tr><td>In force</td><td>9 Feb 2019</td><td>Enhanced rules from Nov 2023, with phased exemptions to 2025–2027</td><td>Feb & Aug 2026</td></tr>
<tr><td>Code</td><td>2D DataMatrix + tamper-evident seal</td><td>2D DataMatrix</td><td>GS1 2D DataMatrix</td></tr>
<tr><td>Model</td><td>Verify at dispensing (repository)</td><td>Full interoperable tracing between partners</td><td>Full tracing with central reporting</td></tr>
<tr><td>Aggregation</td><td>Not required</td><td>Used in practice</td><td>Required (SSCC)</td></tr>
</tbody></table>
<p>In the USA, the FDA exemptions from the enhanced requirements ended in 2025 for manufacturers, repackagers, wholesale distributors and larger dispensers. For small dispensers the exemption was extended to <b>27 November 2027</b>.</p>

<h3>On the packaging line</h3>
<ol>
<li>Printers for variable data (thermal inkjet or laser) on each carton.</li>
<li>Vision cameras to grade and verify every code, rejecting bad codes automatically.</li>
<li>A tamper-evident label or seal where required.</li>
<li>Aggregation stations (manual, semi-automatic or automatic) for cases and pallets.</li>
<li>Line and site software (levels 3–4) connected to your ERP and to the national system.</li>
</ol>
<div class="note">The official Arabic decree texts govern. Always check the latest EDA announcements for dates and technical specifications.</div>`,
    sources: [
      ["Egyptian Drug Authority", "https://www.edaegypt.gov.eg/"],
      ["Decree 804/2025 implementation framework (ADSERO)", "https://adsero.me/egyptian-drug-authority-issues-implementation-framework-for-the-national-pharmaceutical-track-and-trace-system/"],
      ["Egypt track-and-trace compliance overview (Consortio)", "https://consortiolawfirm.com/egypt-drug-track-and-trace-compliance/"],
      ["EU Falsified Medicines — Delegated Regulation 2016/161", "https://eur-lex.europa.eu/eli/reg_del/2016/161/oj"],
      ["FDA — Drug Supply Chain Security Act", "https://www.fda.gov/drugs/drug-supply-chain-integrity/drug-supply-chain-security-act-dscsa"],
      ["GS1 Healthcare", "https://www.gs1.org/industries/healthcare"]
    ] },

  /* ------------------------------------------------------------------ */
  { id: "sterile", tag: "Sterile", title: "Sterile area guidelines: a practical field guide",
    summary: "Cleanroom grades, pressure cascades, gowning, cleaning and monitoring — the daily rules that keep aseptic areas in control.",
    minutes: 8, partners: ["delta","generalfilter","cdz","am","rigel","inexport","ipm","tema"],
    body: `
<p class="lead">Sterile products cannot be tested into quality: a sterility test samples only a few units. Quality comes from a facility, process and team that never give contamination a chance. These are the core rules, based on EU GMP Annex 1.</p>

<h3>1. Know your grades</h3>
<table class="tbl"><thead><tr><th>Grade</th><th>Typical use</th></tr></thead><tbody>
<tr><td><b>A</b></td><td>High-risk operations: aseptic filling, open sterile product, stopper bowls, aseptic connections. Protected by unidirectional airflow, usually inside an isolator or RABS.</td></tr>
<tr><td><b>B</b></td><td>The background for a Grade A zone in RABS or open aseptic processing. Not needed around a closed isolator.</td></tr>
<tr><td><b>C</b></td><td>Less critical steps, such as solution preparation before sterile filtration. Also the background for many isolators.</td></tr>
<tr><td><b>D</b></td><td>Handling components after washing, and the background for some closed systems and isolators.</td></tr>
</tbody></table>
<div class="note">Limits for each grade are in the <a href="#lib-ref-grades">reference tables</a>.</div>

<h3>2. Design the air</h3>
<ul>
<li>Grade A unidirectional airflow: guidance velocity <b>0.36–0.54 m/s</b> at the working position, verified by smoke studies that show no turbulence or backflow over open product.</li>
<li>Pressure cascade: at least <b>10 Pa</b> between adjacent rooms of different grades (a guidance value), with alarms and records.</li>
<li><b>HEPA filters</b> (H13/H14) integrity-tested after installation and periodically, typically every 6–12 months.</li>
<li><b>Clean-up (recovery) time</b> from "in operation" to "at rest" levels: a guidance value of <b>15–20 minutes</b>, demonstrated during qualification.</li>
<li>Airlocks for people and materials, with doors interlocked so both cannot open at once.</li>
</ul>

<h3>3. Surfaces and fittings</h3>
<ul>
<li>Smooth, impervious, non-shedding surfaces that tolerate repeated disinfection.</li>
<li>No uncleanable recesses, sliding doors or exposed pipework. Use coved corners and flush-mounted lights and fixtures.</li>
<li>Sinks and drains are not allowed in Grade A/B areas.</li>
<li>Seamless resin floors and modular walls with sealed joints are the normal choice.</li>
</ul>

<h3>4. Gowning by grade</h3>
<table class="tbl"><thead><tr><th>Grade</th><th>Minimum garments</th></tr></thead><tbody>
<tr><td>D</td><td>Hair cover, and beard cover where relevant; general protective suit; dedicated shoes or overshoes</td></tr>
<tr><td>C</td><td>As D, plus a one- or two-piece suit closed at wrists with a high neck; gloves where appropriate</td></tr>
<tr><td>A/B</td><td>Sterile hood covering hair and beard, sterile face mask, sterile goggles, sterile one-piece suit, sterile powder-free gloves, sterile boots. No skin exposed, all garments non-shedding.</td></tr>
</tbody></table>
<ul>
<li>Gowning qualification for A/B before working alone, then at least once a year.</li>
<li>No jewellery, cosmetics, watches or phones. Change gloves or disinfect them regularly.</li>
</ul>

<h3>5. Behaviour in Grade A/B</h3>
<ul>
<li>Move slowly and deliberately. Never put any part of the body between the HEPA filter and open product ("first air").</li>
<li>Keep the number of people to the minimum stated in your contamination control strategy.</li>
<li>Every intervention follows a written procedure and is recorded.</li>
<li>Do not talk over open product; doors stay closed.</li>
</ul>

<h3>6. Cleaning and disinfection</h3>
<ul>
<li>Clean first (remove soil), then disinfect. Disinfection does not work on dirty surfaces.</li>
<li>Rotate a routine disinfectant with a <b>sporicidal</b> agent at a defined frequency.</li>
<li>Disinfectants and wipes used in Grade A/B must be <b>sterile</b>. Validate contact times.</li>
<li>Room bio-decontamination (for example vaporised hydrogen peroxide) after shutdowns or contamination events.</li>
</ul>

<h3>7. Monitoring</h3>
<ul>
<li>Total particles: continuous in Grade A; frequency in other grades set by risk.</li>
<li>Viable air: active air sampling and settle plates (exposure up to 4 hours each).</li>
<li>Surfaces: contact plates or swabs after operations; glove prints for operators leaving Grade A/B.</li>
<li>Trend everything. Set alert and action limits, and identify isolates to at least genus level for Grade A/B.</li>
</ul>

<h3>8. Materials in and out</h3>
<ul>
<li>Use pass-through hatches and transfer systems; sterilise or decontaminate items entering Grade A/B.</li>
<li><b>Rapid Transfer Ports (alpha-beta)</b> allow sterile transfer into isolators without breaking the barrier.</li>
<li>Remove cardboard and outer wrappings before items enter the cleanroom.</li>
</ul>

<h3>Daily checklist</h3>
<ol>
<li>Pressure differentials and room alarms in range</li>
<li>Particle counters running in Grade A</li>
<li>Cleaning log signed for the previous shift</li>
<li>Gowning and glove integrity confirmed</li>
<li>Monitoring plates exposed and labelled correctly</li>
<li>Any deviation reported immediately</li>
</ol>`,
    sources: [
      ["EU GMP Annex 1 (2022)", "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf"],
      ["FDA Guidance — Sterile Drug Products Produced by Aseptic Processing", "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/sterile-drug-products-produced-aseptic-processing-current-good-manufacturing-practice"],
      ["ISO 14644-1 Cleanroom classification", "https://www.iso.org/standard/53394.html"]
    ] },

  /* ------------------------------------------------------------------ */
  { id: "ccs", tag: "Sterile", title: "How to write a Contamination Control Strategy",
    summary: "A step-by-step outline for the document Annex 1 asks every sterile site to have.",
    minutes: 4, partners: ["rigel","am","tema","elettracqua"],
    body: `
<p class="lead">The Contamination Control Strategy (CCS) is the backbone of Annex 1. It should not repeat every procedure. Instead it shows how the controls fit together, where the risks are, and how you know the controls work.</p>
<h3>Suggested structure</h3>
<ol>
<li><b>Scope</b>: site, buildings, products, processes, lines.</li>
<li><b>Process flow</b>: from raw materials to final pack, marking every point where contamination could enter.</li>
<li><b>Risk assessment</b>: for each step, the hazards (microbial, particulate, endotoxin), their causes, and the controls.</li>
<li><b>Control elements</b>, each with a short description and a reference to the detailed procedure:
  <ul><li>Premises and HVAC</li><li>Equipment and barrier systems</li><li>Utilities: water, steam, gases</li><li>Raw materials and components</li><li>Personnel: training, gowning, behaviour</li><li>Cleaning and disinfection</li><li>Sterilisation and depyrogenation</li><li>Environmental and utility monitoring</li><li>Aseptic process simulation</li><li>Preventive maintenance</li><li>Suppliers and outsourced activities</li></ul></li>
<li><b>Verification</b>: which data show the controls work — EM trends, media fills, deviations, sterility results.</li>
<li><b>Continuous improvement</b>: review frequency, owner, how changes and new technology are evaluated.</li>
</ol>
<h3>Common inspection findings</h3>
<ul>
<li>The CCS exists but is not linked to the real risk assessments.</li>
<li>Monitoring locations are not justified by airflow studies.</li>
<li>The CCS has no owner and was not reviewed after changes.</li>
<li>Manual interventions in Grade A are not assessed or minimised.</li>
</ul>`,
    sources: [["EU GMP Annex 1 (2022), section 2", "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf"]] }
  ],

  /* ---------------- reference data ---------------- */
  reference: [
    { id: "grades", title: "Cleanroom grades: particle limits", tag: "Annex 1 · Table 1",
      html: `
<p>Maximum permitted total particle concentration for classification, particles per m³.</p>
<div class="tblwrap"><table class="tbl tnum"><thead><tr><th rowspan="2">Grade</th><th colspan="2">At rest</th><th colspan="2">In operation</th></tr><tr><th>≥ 0.5 µm</th><th>≥ 5 µm</th><th>≥ 0.5 µm</th><th>≥ 5 µm</th></tr></thead><tbody>
<tr><td><b>A</b></td><td>3 520</td><td>not specified*</td><td>3 520</td><td>not specified*</td></tr>
<tr><td><b>B</b></td><td>3 520</td><td>not specified*</td><td>352 000</td><td>2 930</td></tr>
<tr><td><b>C</b></td><td>352 000</td><td>2 930</td><td>3 520 000</td><td>29 300</td></tr>
<tr><td><b>D</b></td><td>3 520 000</td><td>29 300</td><td>not predetermined</td><td>not predetermined</td></tr>
</tbody></table></div>
<p class="muted small">* Not used for classification, but ≥ 5 µm particles are still monitored, because rises can indicate a problem.</p>
<h3>Approximate ISO 14644-1 equivalents</h3>
<div class="tblwrap"><table class="tbl"><thead><tr><th>Grade</th><th>At rest</th><th>In operation</th></tr></thead><tbody>
<tr><td>A</td><td>ISO 5</td><td>ISO 5</td></tr><tr><td>B</td><td>ISO 5</td><td>ISO 7</td></tr><tr><td>C</td><td>ISO 7</td><td>ISO 8</td></tr><tr><td>D</td><td>ISO 8</td><td>—</td></tr>
</tbody></table></div>
<h3>Microbial action limits</h3>
<div class="tblwrap"><table class="tbl tnum"><thead><tr><th>Grade</th><th>Air sample<br>CFU/m³</th><th>Settle plate Ø90 mm<br>CFU/4 h</th><th>Contact plate Ø55 mm<br>CFU/plate</th><th>Glove print<br>CFU/glove</th></tr></thead><tbody>
<tr><td><b>A</b></td><td colspan="4" style="text-align:center">No growth</td></tr>
<tr><td><b>B</b></td><td>10</td><td>5</td><td>5</td><td>5</td></tr>
<tr><td><b>C</b></td><td>100</td><td>50</td><td>25</td><td>—</td></tr>
<tr><td><b>D</b></td><td>200</td><td>100</td><td>50</td><td>—</td></tr>
</tbody></table></div>
<p class="muted small">Settle plates may be exposed for less than 4 hours; results are then compared pro rata. Source: EU GMP Annex 1 (2022), Tables 1, 2 and 6.</p>` },

    { id: "hvac", title: "Cleanroom design numbers", tag: "Guidance values",
      html: `
<div class="tblwrap"><table class="tbl"><tbody>
<tr><td>Grade A unidirectional airflow velocity</td><td><b>0.36 – 0.54 m/s</b> at working position</td></tr>
<tr><td>Pressure differential between grades</td><td><b>≥ 10 Pa</b></td></tr>
<tr><td>Clean-up (recovery) time, in operation → at rest</td><td><b>15 – 20 min</b></td></tr>
<tr><td>HEPA filter class for Grade A/B supply</td><td><b>H14</b> (H13 often for C/D)</td></tr>
<tr><td>HEPA integrity test (leak test)</td><td>After installation, then periodically (typically 6–12 months for A/B)</td></tr>
<tr><td>Grade A/B reclassification</td><td>Every 6 months</td></tr>
<tr><td>Grade C/D reclassification</td><td>Every 12 months</td></tr>
<tr><td>Settle plate exposure</td><td>≤ 4 hours per plate</td></tr>
<tr><td>Gowning requalification (A/B)</td><td>At least yearly</td></tr>
<tr><td>Aseptic process simulation</td><td>3 initial runs; then twice a year per line; target zero growth</td></tr>
</tbody></table></div>
<p class="muted small">Guidance values from EU GMP Annex 1 (2022). Your contamination control strategy may justify different values.</p>` },

    { id: "water", title: "Pharmaceutical water quality", tag: "Ph. Eur. / USP",
      html: `
<div class="tblwrap"><table class="tbl"><thead><tr><th>Parameter</th><th>Purified Water (PW)</th><th>Water for Injection (WFI)</th></tr></thead><tbody>
<tr><td>Conductivity (at 25 °C)</td><td>≤ 5.1 µS/cm (Ph. Eur. bulk, 25 °C) / USP stage 1 ≤ 1.3 µS/cm</td><td>≤ 1.3 µS/cm (stage 1, 25 °C)</td></tr>
<tr><td>TOC</td><td>≤ 500 ppb</td><td>≤ 500 ppb</td></tr>
<tr><td>Microbial action level</td><td>100 CFU/mL</td><td>10 CFU/100 mL</td></tr>
<tr><td>Bacterial endotoxins</td><td>—</td><td>&lt; 0.25 EU/mL</td></tr>
<tr><td>Typical production</td><td>RO + EDI, ion exchange</td><td>Multiple-effect distillation, vapour compression, or membrane (RO-based) process</td></tr>
<tr><td>Typical storage</td><td>Ambient loop with UV / ozone</td><td>Hot loop ≥ 70–80 °C, continuous circulation</td></tr>
</tbody></table></div>
<p class="muted small">Check the current monographs: Ph. Eur. 0008 (Purified Water), 0169 (Water for Injections) and USP &lt;1231&gt;, &lt;643&gt;, &lt;645&gt;. Limits differ slightly between pharmacopoeias and temperatures.</p>` },

    { id: "gs1", title: "GS1 codes for serialisation", tag: "Track & Trace",
      html: `
<div class="tblwrap"><table class="tbl"><thead><tr><th>AI</th><th>Meaning</th><th>Format</th></tr></thead><tbody>
<tr><td>(01)</td><td>GTIN — product code</td><td>14 digits</td></tr>
<tr><td>(21)</td><td>Serial number</td><td>Up to 20 alphanumeric</td></tr>
<tr><td>(10)</td><td>Batch / lot</td><td>Up to 20 alphanumeric</td></tr>
<tr><td>(17)</td><td>Expiry date</td><td>YYMMDD</td></tr>
<tr><td>(00)</td><td>SSCC — case / pallet</td><td>18 digits</td></tr>
<tr><td>(414)</td><td>GLN — location</td><td>13 digits</td></tr>
<tr><td>(714)</td><td>NHRN — Portugal national code</td><td>Up to 4 alphanumeric</td></tr>
</tbody></table></div>
<p><b>Example human-readable line:</b><br><code>(01)06221234567890 (21)A7K29X4P1 (10)B24-0915 (17)271031</code></p>
<p class="muted small">Codes are typically required to print at ISO/IEC 15415 grade C or better, and must be verified on the line.</p>` },

    { id: "glossary", title: "Glossary", tag: "A–Z",
      html: `<dl class="gloss">
<dt>ALCOA+</dt><dd>Data integrity principles: Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, Available.</dd>
<dt>APS / Media fill</dt><dd>Aseptic Process Simulation: running the aseptic process with growth medium instead of product, to prove sterility assurance.</dd>
<dt>CAPA</dt><dd>Corrective and Preventive Action.</dd>
<dt>CCS</dt><dd>Contamination Control Strategy, required by Annex 1.</dd>
<dt>cRABS / oRABS</dt><dd>Closed or open Restricted Access Barrier System around Grade A operations.</dd>
<dt>EPCIS</dt><dd>GS1 standard for sharing supply-chain event data (commission, pack, ship, receive).</dd>
<dt>FMD</dt><dd>EU Falsified Medicines Directive (2011/62/EU) and its Delegated Regulation 2016/161.</dd>
<dt>DSCSA</dt><dd>US Drug Supply Chain Security Act (2013), full electronic traceability.</dd>
<dt>HEPA / ULPA</dt><dd>High-efficiency / ultra-low penetration air filters (EN 1822: H13–H14, U15–U17).</dd>
<dt>IQ / OQ / PQ</dt><dd>Installation, Operational and Performance Qualification.</dd>
<dt>Isolator</dt><dd>A sealed enclosure with glove ports, bio-decontaminated (e.g. with VHP), giving the highest Grade A protection.</dd>
<dt>OEB</dt><dd>Occupational Exposure Band — the potency class of a substance, guiding the level of containment.</dd>
<dt>PUPSIT</dt><dd>Pre-Use Post-Sterilisation Integrity Test of a sterilising filter.</dd>
<dt>QP</dt><dd>Qualified Person who certifies each batch for release in the EU.</dd>
<dt>QRM</dt><dd>Quality Risk Management (ICH Q9).</dd>
<dt>RTP</dt><dd>Rapid Transfer Port (alpha-beta) for sterile transfer into isolators.</dd>
<dt>SSCC</dt><dd>Serial Shipping Container Code for cases and pallets.</dd>
<dt>URS</dt><dd>User Requirement Specification — the starting point for buying any equipment.</dd>
<dt>VHP</dt><dd>Vaporised Hydrogen Peroxide, used for bio-decontamination.</dd>
<dt>WFI</dt><dd>Water for Injection.</dd>
</dl>` }
  ],

  /* ---------------- official documents (free) ---------------- */
  documents: [
    { t: "EU GMP Guide — EudraLex Volume 4", d: "All chapters and annexes of EU GMP", by: "European Commission", url: "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en" },
    { t: "EU GMP Annex 1 (2022)", d: "Manufacture of sterile medicinal products", by: "European Commission", url: "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf" },
    { t: "Drafts: Chapter 4, Annex 11, Annex 22 (AI)", d: "2025 consultation documents", by: "European Commission", url: "https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en" },
    { t: "PIC/S GMP Guide (PE 009)", d: "GMP guide used by 50+ inspectorates", by: "PIC/S", url: "https://picscheme.org/en/publications" },
    { t: "WHO GMP guidelines", d: "WHO good manufacturing practices texts", by: "World Health Organization", url: "https://www.who.int/teams/health-product-and-policy-standards/standards-and-specifications/gmp" },
    { t: "ICH Q-guidelines", d: "Q7 (APIs), Q8, Q9(R1), Q10, Q12 …", by: "ICH", url: "https://www.ich.org/page/quality-guidelines" },
    { t: "FDA Aseptic Processing Guidance (2004)", d: "Sterile drug products produced by aseptic processing", by: "US FDA", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/sterile-drug-products-produced-aseptic-processing-current-good-manufacturing-practice" },
    { t: "FDA — DSCSA", d: "US track & trace law and guidance", by: "US FDA", url: "https://www.fda.gov/drugs/drug-supply-chain-integrity/drug-supply-chain-security-act-dscsa" },
    { t: "EU Delegated Regulation 2016/161", d: "Safety features on medicine packs (FMD)", by: "EUR-Lex", url: "https://eur-lex.europa.eu/eli/reg_del/2016/161/oj" },
    { t: "Egyptian Drug Authority", d: "Decrees, guidelines and track & trace announcements", by: "EDA", url: "https://www.edaegypt.gov.eg/" },
    { t: "GS1 Healthcare standards", d: "GTIN, DataMatrix, EPCIS for pharma", by: "GS1", url: "https://www.gs1.org/industries/healthcare" }
  ],

  /* ---------------- recommended books (to buy) ---------------- */
  books: [
    { t: "Good Manufacturing Practices for Pharmaceuticals", a: "Joseph D. Nally (ed.)", p: "CRC Press", d: "A classic chapter-by-chapter guide to GMP regulations and their practical application." },
    { t: "Cleanroom Technology: Fundamentals of Design, Testing and Operation", a: "William Whyte", p: "Wiley", d: "How cleanrooms are designed, tested and run: airflow, filters, particles and people." },
    { t: "Pharmaceutical Microbiology: Essentials for Quality Assurance and Quality Control", a: "Tim Sandle", p: "Woodhead Publishing", d: "Environmental monitoring, sterility testing, endotoxins and microbial risk." },
    { t: "Validation of Pharmaceutical Processes", a: "James Agalloco & Frederick J. Carleton (eds.)", p: "CRC Press", d: "Reference on validating sterilisation, aseptic processing, cleaning and utilities." },
    { t: "ISPE Baseline® Guide: Sterile Product Manufacturing Facilities", a: "ISPE", p: "ISPE", d: "Industry guidance for designing sterile facilities." },
    { t: "PDA Technical Report No. 13: Fundamentals of an Environmental Monitoring Program", a: "PDA", p: "PDA", d: "Widely used guide to setting up and running EM programs." }
  ]
};
