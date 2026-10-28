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
<p>Lyophilisers and their loading and unloading areas should be designed to keep operator intervention to a minimum. A lyophiliser that is <b>loaded or unloaded manually without barrier separation must be sterilised before each load</b>. For automated loading or closed barrier systems, the sterilisation frequency must be justified in the CCS. This is the paragraph that came into force on 25 August 2024, and it pushed many sites towards automated loading systems.</p>

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
  { id: "annex1guide", tag: "Sterile", title: "Annex 1 (2022) section by section: the requirements and numbers you need",
    summary: "A structured walk through all ten sections of EU GMP Annex 1, with the key limits, frequencies and paragraph numbers taken from the official text.",
    minutes: 12, partners: ["tema","rigel","abc","steriline","am","elettracqua","zirbus","cora","techniconsult"],
    body: `
<p class="lead">This guide follows the structure of the official text — <b>EU GMP Annex 1, Manufacture of Sterile Medicinal Products</b> (European Commission, C(2022) 5938, 22 August 2022). Paragraph numbers are given in brackets so you can go straight to the source. Always check the official document before making a decision.</p>

<div class="tblwrap"><table class="tbl">
<thead><tr><th>Item</th><th>Detail</th></tr></thead><tbody>
<tr><td>Replaces</td><td>The 2008 version of Annex 1 (in operation since 1 March 2009 / 2010)</td></tr>
<tr><td>In force</td><td><b>25 August 2023</b></td></tr>
<tr><td>Paragraph 8.123 (lyophilisers)</td><td><b>25 August 2024</b></td></tr>
<tr><td>Prepared by</td><td>EU GMP/GDP Inspectors Working Group with PIC/S, together with WHO</td></tr>
<tr><td>Length</td><td>10 sections + glossary, about 59 pages</td></tr>
</tbody></table></div>

<h3>1. Scope</h3>
<p>Annex 1 covers all sterile products — active substances, excipients, primary packaging and finished dosage forms, from single units to large batches, manual to fully automated. Its principles, especially the Contamination Control Strategy, may also be applied to other products that must control microbial, particle and endotoxin contamination, such as some liquids, creams and ointments.</p>

<h3>2. Principle</h3>
<ul>
<li>Facilities, equipment and processes must be designed, qualified and validated, and technologies such as <b>RABS, isolators, robotics, rapid methods and continuous monitoring</b> should be considered (2.1).</li>
<li>Quality Risk Management drives priorities in this order: <b>design first, then procedures, then monitoring</b>. Monitoring or testing alone does not give assurance of sterility (2.2).</li>
<li>A site-wide <b>Contamination Control Strategy (CCS)</b> must define all critical control points and assess the effectiveness of every control. It must be reviewed actively and form part of management review (2.3 – 2.6).</li>
</ul>
<div class="note">The CCS should cover, among other things: plant and process design, premises, equipment, personnel, utilities, raw materials, product containers, vendor approval, outsourced activities, risk assessment, process validation, preventive maintenance, cleaning and disinfection, monitoring, prevention mechanisms (trending, investigations, CAPA) and continuous improvement (2.5).</div>

<h3>3. Pharmaceutical Quality System</h3>
<p>The PQS must address sterile-specific risks: risk management across the life cycle and in the CCS, expert knowledge of products and equipment, proper root-cause analysis with CAPA, senior management oversight of the state of control, and release staff with sterile-manufacturing expertise (3.1). Sterility test failures, monitoring excursions and deviations must be investigated <b>before</b> batch certification (3.2).</p>

<h3>4. Premises</h3>
<p>Four cleanroom grades are defined (4.4):</p>
<ul>
<li><b>Grade A</b> — the critical zone: filling, stopper bowls, open primary packaging, aseptic connections, normally protected by unidirectional airflow inside RABS or isolators.</li>
<li><b>Grade B</b> — background for Grade A in aseptic filling (not needed around an isolator). Pressure differences are monitored continuously.</li>
<li><b>Grades C and D</b> — less critical steps, isolator backgrounds and terminally sterilised products.</li>
</ul>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th>Design value</th><th>Requirement</th><th>Para.</th></tr></thead><tbody>
<tr><td>Pressure difference between adjacent grades</td><td>≥ 10 Pa (guidance)</td><td>4.14</td></tr>
<tr><td>Unidirectional air speed at working position</td><td>0.36 – 0.54 m/s (guidance)</td><td>4.30</td></tr>
<tr><td>Clean-up time to “at rest” limits</td><td>&lt; 20 minutes (guidance)</td><td>4.29</td></tr>
<tr><td>Airlocks to Grade A/B</td><td>Interlocked doors</td><td>4.13</td></tr>
<tr><td>Sinks and drains in Grade A/B</td><td>Prohibited</td><td>4.9</td></tr>
<tr><td>Open isolator background</td><td>Minimum Grade C</td><td>4.20</td></tr>
<tr><td>Closed isolator background</td><td>Minimum Grade D</td><td>4.20</td></tr>
<tr><td>RABS background</td><td>Minimum Grade B</td><td>4.20</td></tr>
</tbody></table></div>
<p><b>Barrier technology (4.3, 4.18 – 4.22).</b> RABS or isolators should be considered in the CCS, and any alternative must be justified. Isolator interiors need an automated, validated bio-decontamination with a sporicidal agent (e.g. vaporised hydrogen peroxide). Glove systems:</p>
<ul>
<li><b>Isolators</b>: glove leak testing at defined intervals — generally at least at the <b>beginning and end of each batch or campaign</b> — plus visual inspection at each use (4.21).</li>
<li><b>RABS</b>: gloves sterilised before installation and sterilised or bio-decontaminated before each campaign; visual check each use, integrity test at periodic intervals.</li>
</ul>
<p><b>Classification (4.23 – 4.36).</b> Cleanrooms are classified to ISO 14644-1 at rest and in operation, and requalified periodically: Grade A and B every <b>6 months</b>, Grade C and D every <b>12 months</b> at most. Requalification includes particle classification, final filter integrity, airflow volume, pressure difference and air velocity.</p>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th rowspan="2">Grade</th><th colspan="2">≥ 0.5 µm / m³</th><th colspan="2">≥ 5 µm / m³</th></tr><tr><th>At rest</th><th>In operation</th><th>At rest</th><th>In operation</th></tr></thead><tbody>
<tr><td><b>A</b></td><td>3 520</td><td>3 520</td><td>not specified</td><td>not specified</td></tr>
<tr><td><b>B</b></td><td>3 520</td><td>352 000</td><td>not specified</td><td>2 930</td></tr>
<tr><td><b>C</b></td><td>352 000</td><td>3 520 000</td><td>2 930</td><td>29 300</td></tr>
<tr><td><b>D</b></td><td>3 520 000</td><td>set by risk</td><td>29 300</td><td>set by risk</td></tr>
</tbody></table></div>
<p class="small">Table 1 — classification limits. Microbial limits during qualification (Table 2): Grade A <b>no growth</b>; B 10 CFU/m³ air, 5 CFU/4 h settle plate, 5 CFU contact plate; C 100 / 50 / 25; D 200 / 100 / 50.</p>

<h3>5. Equipment</h3>
<p>Equipment must be designed for easy cleaning, disinfection or sterilisation, with a written description of critical design features. Parts in contact with sterile product must be sterilised; maintenance inside clean areas must not compromise them, and equipment taken out of service must be re-qualified or re-sterilised before return (5.1 – 5.8).</p>

<h3>6. Utilities</h3>
<ul>
<li>Higher-risk utilities — those in contact with product, such as water, gases and steam — need tighter design, qualification and trending (6.1 – 6.5).</li>
<li><b>WFI</b> must be made by distillation or an equivalent process, which may include reverse osmosis with EDI, ultrafiltration or nanofiltration, and stored to limit microbial growth, e.g. constant circulation above <b>70 °C</b> (6.10).</li>
<li>WFI systems need continuous <b>TOC and conductivity</b> monitoring; at least one representative water sample should be tested every day (6.13 – 6.15).</li>
<li>Pure steam used for sterilisation must be tested regularly (6.16 – 6.17). Gases in contact with product or used in aseptic processing must be filtered through a sterilising-grade filter that is integrity-tested (6.18 – 6.19).</li>
</ul>

<h3>7. Personnel</h3>
<ul>
<li>Only the minimum number of people in cleanrooms; the maximum number should be defined and justified (7.2).</li>
<li>Gowning qualification for Grade A/B access, reassessed <b>at least annually</b>, with visual and microbial checks of gloved fingers, forearms, chest and hood (7.4).</li>
<li>Unsupervised Grade A/B access only after passing gowning assessment <b>and</b> taking part in a successful APS (7.4). Systems for disqualification and requalification are required (7.6).</li>
<li>No watches, make-up, jewellery or phones in clean areas (7.9). Grade B gowning: sterile suit, hood, mask, goggles, boots and a second pair of sterile gloves (7.13).</li>
</ul>

<h3>8. Production and specific technologies</h3>
<ul>
<li><b>Terminally sterilised products</b>: component preparation at least Grade D; filling at least Grade C (8.1 – 8.4).</li>
<li><b>Aseptic processing</b>: aseptic connections in Grade A with Grade B background; an authorised list of qualified interventions; every intervention and stoppage recorded in the batch record (8.14 – 8.17).</li>
<li><b>Sterilisation</b>: terminal sterilisation is preferred wherever possible (8.34). All cycles — moist heat, dry heat, radiation, ethylene oxide and filtration — need validated loading patterns and periodic revalidation (8.34 – 8.95).</li>
<li><b>Sterilising filtration</b>: integrity test <b>after use</b> before removal from the housing, and <b>PUPSIT</b> (pre-use post-sterilisation) normally required. Where PUPSIT is not possible, a thorough risk assessment and compensating controls are needed (8.87).</li>
<li><b>Form-fill-seal, blow-fill-seal, lyophilisation, closed and single-use systems</b> each have dedicated paragraphs (8.96 – 8.140).</li>
<li><b>Lyophilisers (8.123)</b>: minimise interventions; manually loaded units without barrier separation must be sterilised <b>before each load</b>.</li>
<li><b>Container closure and inspection</b>: glass ampoules, BFS units and fused containers ≤ 100 ml need <b>100 % integrity testing</b> by validated methods — visual inspection is not an integrity test; other containers are sampled. Every filled parenteral container must be inspected for particles and defects, with trending of rejects (8.22 – 8.33).</li>
</ul>

<h3>9. Environmental and process monitoring</h3>
<p>The monitoring programme covers total particles, viable particles and aseptic process simulation. Alert levels and action limits must be set and trended (9.9 – 9.13).</p>
<ul>
<li>Grade A particles monitored <b>continuously</b> for the full duration of critical processing, including set-up, with a sample flow of at least <b>28 L/min (1 ft³/min)</b> (9.16 – 9.17). A similar system is recommended for Grade B (9.18).</li>
<li>Continuous viable monitoring in Grade A (air sampling or settle plates) for the full critical process (9.24).</li>
<li>Micro-organisms in Grade A and B identified to species level (9.31). Rapid methods may be used once validated (9.28).</li>
</ul>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th>Grade</th><th>Air CFU/m³</th><th>Settle plate 90 mm CFU/4 h</th><th>Contact plate 55 mm CFU</th><th>Glove print CFU/glove</th></tr></thead><tbody>
<tr><td><b>A</b></td><td colspan="4">No growth — any growth must be investigated</td></tr>
<tr><td><b>B</b></td><td>10</td><td>5</td><td>5</td><td>5</td></tr>
<tr><td><b>C</b></td><td>100</td><td>50</td><td>25</td><td>–</td></tr>
<tr><td><b>D</b></td><td>200</td><td>100</td><td>50</td><td>–</td></tr>
</tbody></table></div>
<p class="small">Table 6 — viable action limits. Monitoring particle limits (Table 5) match Table 1, but add ≥ 5 µm limits of 29/m³ for Grade A and 29 (at rest) / 2 930 (in operation) for Grade B.</p>
<p><b>Aseptic process simulation (9.32 – 9.49):</b></p>
<ul>
<li>Initial validation: <b>at least three consecutive successful</b> APS covering all shifts (9.38).</li>
<li>Revalidation: <b>twice a year</b> (about every six months) per process, filling line and shift; every operator in at least one successful APS per year (9.38).</li>
<li>Typically <b>5 000 – 10 000 units</b> filled; for batches under 5 000, at least the batch size (9.40).</li>
<li>Target: <b>zero growth</b>. Any contaminated unit means a failed APS and a full investigation (9.46).</li>
</ul>

<h3>10. Quality control</h3>
<p>QC needs staff with microbiology and sterility-assurance expertise (10.1). A <b>bioburden assay on every batch</b>, with limits before the final sterilising filter or terminal sterilisation (10.3). The sterility test is only the last in a series of controls and cannot rescue a product that misses its design or validation parameters (10.5). Sterility samples must represent the whole batch and include the most at-risk units — for aseptic filling, containers from the beginning and end of the batch (10.6).</p>

<h3>How NOVA partners help</h3>
<ul>
<li><b>Barrier systems and glove testing</b>: Tema Sinergie isolators, RABS and AGLTS glove testers; Steriline aseptic filling lines.</li>
<li><b>Continuous monitoring</b>: Rigel IEMS Next and CLiMET counters with ≥ 28 L/min sampling.</li>
<li><b>Transfers</b>: ABC Transfer alpha/beta ports and gloveless Ultra™ system.</li>
<li><b>Water and freeze drying</b>: Elettracqua WFI and pure steam; Zirbus lyophilisers and loading systems.</li>
<li><b>Engineering and qualification</b>: Techniconsult design, C&amp;Q and containment testing.</li>
</ul>
`,
    sources: [["EU GMP Annex 1 — Manufacture of Sterile Medicinal Products, C(2022) 5938 final (22.8.2022)", "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf"],
              ["EudraLex Volume 4 — EU GMP Guide", "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en"]] },

  /* ------------------------------------------------------------------ */
  { id: "areaclass", tag: "Sterile", title: "Cleanroom area classification: ISO 14644-1, EU GMP grades and FDA classes",
    summary: "How cleanrooms are classified, how the ISO classes, EU GMP grades A–D and FDA classes relate, and how to plan a classification test step by step.",
    minutes: 10, partners: ["rigel","techniconsult","cdz","delta","generalfilter","tema"],
    body: `
<p class="lead">Area classification proves that a cleanroom or clean-air device meets a defined level of airborne particle cleanliness. It is done when a room is qualified and repeated at fixed intervals. Three systems are used in pharma: the <b>ISO classes</b> of ISO 14644-1:2015, the <b>EU GMP grades A–D</b> of Annex 1 (2022), and the older <b>US FDA classes</b> (Class 100 to 100,000) used in the FDA 2004 aseptic processing guidance.</p>

<h3>Classification is not monitoring</h3>
<p>Annex 1 (4.24) requires classification to be kept clearly separate from routine environmental monitoring:</p>
<ul>
<li><b>Classification</b> (ISO 14644-1) — a formal test at defined times that shows the room <i>can</i> meet its class. Done at rest and in operation.</li>
<li><b>Monitoring</b> (ISO 14644-2) — continuous or frequent measurements during production that show the room <i>stays</i> in control.</li>
</ul>

<h3>ISO 14644-1:2015 classes</h3>
<p>Maximum concentration of particles equal to or larger than the stated size, per cubic metre of air (cumulative counts).</p>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th>ISO class</th><th>≥ 0.1 µm</th><th>≥ 0.2 µm</th><th>≥ 0.3 µm</th><th>≥ 0.5 µm</th><th>≥ 1 µm</th><th>≥ 5 µm</th></tr></thead><tbody>
<tr><td><b>1</b></td><td>10</td><td>–</td><td>–</td><td>–</td><td>–</td><td>–</td></tr>
<tr><td><b>2</b></td><td>100</td><td>24</td><td>10</td><td>–</td><td>–</td><td>–</td></tr>
<tr><td><b>3</b></td><td>1 000</td><td>237</td><td>102</td><td>35</td><td>–</td><td>–</td></tr>
<tr><td><b>4</b></td><td>10 000</td><td>2 370</td><td>1 020</td><td>352</td><td>83</td><td>–</td></tr>
<tr><td><b>5</b></td><td>100 000</td><td>23 700</td><td>10 200</td><td>3 520</td><td>832</td><td>(29)*</td></tr>
<tr><td><b>6</b></td><td>1 000 000</td><td>237 000</td><td>102 000</td><td>35 200</td><td>8 320</td><td>293</td></tr>
<tr><td><b>7</b></td><td>–</td><td>–</td><td>–</td><td>352 000</td><td>83 200</td><td>2 930</td></tr>
<tr><td><b>8</b></td><td>–</td><td>–</td><td>–</td><td>3 520 000</td><td>832 000</td><td>29 300</td></tr>
<tr><td><b>9</b></td><td>–</td><td>–</td><td>–</td><td>35 200 000</td><td>8 320 000</td><td>293 000</td></tr>
</tbody></table></div>
<p class="small">“–” means classification at that size is not appropriate (too few or too many particles to sample reliably). *For ISO 5 at ≥ 5 µm, the standard notes that sampling limitations make classification at this size inappropriate; the macroparticle (M) descriptor may be used together with another size. ISO 9 applies to the in-operation state only.</p>
<p>The limits come from the formula <b>C<sub>n</sub> = 10<sup>N</sup> × (0.1 / D)<sup>2.08</sup></b>, where N is the ISO class number and D the particle size in µm. The 2015 edition presents the table as the reference and uses the formula only for intermediate classes and sizes.</p>

<h3>EU GMP grades (Annex 1, 2022)</h3>
<p>Annex 1 classifies by particles ≥ 0.5 µm and ≥ 5 µm, both <b>at rest</b> and <b>in operation</b> (Table 1, para. 4.27):</p>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th rowspan="2">Grade</th><th colspan="2">≥ 0.5 µm / m³</th><th colspan="2">≥ 5 µm / m³</th><th rowspan="2">≈ ISO class (at rest / in operation)</th></tr><tr><th>At rest</th><th>In operation</th><th>At rest</th><th>In operation</th></tr></thead><tbody>
<tr><td><b>A</b></td><td>3 520</td><td>3 520</td><td>not specified</td><td>not specified</td><td>ISO 5 / ISO 5</td></tr>
<tr><td><b>B</b></td><td>3 520</td><td>352 000</td><td>not specified</td><td>2 930</td><td>ISO 5 / ISO 7</td></tr>
<tr><td><b>C</b></td><td>352 000</td><td>3 520 000</td><td>2 930</td><td>29 300</td><td>ISO 7 / ISO 8</td></tr>
<tr><td><b>D</b></td><td>3 520 000</td><td>not predetermined</td><td>29 300</td><td>not predetermined</td><td>ISO 8 / set by the site</td></tr>
</tbody></table></div>
<ul>
<li><b>Grade A</b> — critical zone: filling, stopper bowls, open containers, aseptic connections; protected by unidirectional airflow, normally inside RABS or an isolator. Classification at 5 µm may be added if the CCS or trends indicate it.</li>
<li><b>Grade B</b> — background for Grade A in aseptic processing (not needed around isolators).</li>
<li><b>Grades C and D</b> — less critical steps, isolator backgrounds and preparation/filling of terminally sterilised products. For Grade D the site sets its own in-operation limits based on risk and data.</li>
</ul>
<p>Microbial limits during qualification (Annex 1 Table 2):</p>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th>Grade</th><th>Air sample CFU/m³</th><th>Settle plate Ø 90 mm CFU/4 h</th><th>Contact plate Ø 55 mm CFU/plate</th></tr></thead><tbody>
<tr><td><b>A</b></td><td colspan="3">No growth</td></tr>
<tr><td><b>B</b></td><td>10</td><td>5</td><td>5</td></tr>
<tr><td><b>C</b></td><td>100</td><td>50</td><td>25</td></tr>
<tr><td><b>D</b></td><td>200</td><td>100</td><td>50</td></tr>
</tbody></table></div>

<h3>US FDA classes (2004 aseptic processing guidance)</h3>
<p>The FDA guidance uses the old US Federal Standard names (particles ≥ 0.5 µm per cubic foot) next to ISO designations. All values are measured near exposed product <b>during activity</b>.</p>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th>FDA class</th><th>ISO</th><th>≥ 0.5 µm / m³</th><th>Active air action level CFU/m³</th><th>Settle plates Ø 90 mm CFU/4 h</th></tr></thead><tbody>
<tr><td><b>100</b></td><td>5</td><td>3 520</td><td>1</td><td>1</td></tr>
<tr><td><b>1 000</b></td><td>6</td><td>35 200</td><td>7</td><td>3</td></tr>
<tr><td><b>10 000</b></td><td>7</td><td>352 000</td><td>10</td><td>5</td></tr>
<tr><td><b>100 000</b></td><td>8</td><td>3 520 000</td><td>100</td><td>50</td></tr>
</tbody></table></div>
<p class="small">Samples from Class 100 (ISO 5) areas should normally yield no micro-organisms. Settle plates are optional in the FDA guidance.</p>

<h3>Design values that support the class</h3>
<div class="tblwrap"><table class="tbl">
<thead><tr><th>Parameter</th><th>EU GMP Annex 1 (2022)</th><th>FDA guidance (2004)</th></tr></thead><tbody>
<tr><td>Pressure difference between adjacent grades</td><td>≥ 10 Pa (guidance, 4.14)</td><td>10 – 15 Pa; ≥ 12.5 Pa to unclassified areas</td></tr>
<tr><td>Unidirectional air speed</td><td>0.36 – 0.54 m/s at working position (guidance, 4.30)</td><td>about 0.45 m/s ± 20 %</td></tr>
<tr><td>Clean-up (recovery) to at-rest limits</td><td>&lt; 20 min (guidance, 4.29)</td><td>–</td></tr>
</tbody></table></div>

<h3>How to plan a classification test (ISO 14644-1:2015)</h3>
<ol>
<li><b>Define the target</b>: class, occupancy state (as-built, at rest or in operation) and particle sizes. Annex 1 requires at rest and in operation; initial classification should be done in simulated operations, and reclassification in simulated operations or during an aseptic process simulation (4.26).</li>
<li><b>Number of sampling locations</b> — from the room area (Table A.1). If the area falls between two values, use the higher one.</li>
<li><b>Place the locations</b> evenly over the area, at working height, and add locations at critical points (Annex 1 4.28 — e.g. point of fill, stopper bowls).</li>
<li><b>Sample volume per location</b>: V<sub>s</sub> = (20 / C<sub>n,m</sub>) × 1000 litres, where C<sub>n,m</sub> is the class limit for the largest particle size considered. Each sample must be at least <b>2 litres</b> and at least <b>1 minute</b>.</li>
<li><b>Measure</b> with a calibrated light-scattering particle counter (calibration to ISO 21501-4).</li>
<li><b>Evaluate</b>: the average count at <b>every</b> location must be within the class limit. The 95 % upper confidence limit calculation of the 1999 edition was removed in 2015.</li>
<li><b>Report</b> the result as, for example, “<i>ISO Class 5; in operation; ≥ 0.5 µm</i>”, with locations, counts, counter calibration and any deviations.</li>
</ol>
<div class="tblwrap"><table class="tbl tnum">
<thead><tr><th>Area ≤ (m²)</th><th>Locations</th><th>Area ≤ (m²)</th><th>Locations</th><th>Area ≤ (m²)</th><th>Locations</th></tr></thead><tbody>
<tr><td>2</td><td>1</td><td>52</td><td>10</td><td>148</td><td>19</td></tr>
<tr><td>4</td><td>2</td><td>56</td><td>11</td><td>156</td><td>20</td></tr>
<tr><td>6</td><td>3</td><td>64</td><td>12</td><td>192</td><td>21</td></tr>
<tr><td>8</td><td>4</td><td>68</td><td>13</td><td>232</td><td>22</td></tr>
<tr><td>10</td><td>5</td><td>72</td><td>14</td><td>276</td><td>23</td></tr>
<tr><td>24</td><td>6</td><td>76</td><td>15</td><td>352</td><td>24</td></tr>
<tr><td>28</td><td>7</td><td>104</td><td>16</td><td>436</td><td>25</td></tr>
<tr><td>32</td><td>8</td><td>108</td><td>17</td><td>636</td><td>26</td></tr>
<tr><td>36</td><td>9</td><td>116</td><td>18</td><td>1 000</td><td>27</td></tr>
</tbody></table></div>
<p class="small">ISO 14644-1:2015 Table A.1. Above 1 000 m²: N = 27 × (A / 1 000), rounded up.</p>
<div class="note"><b>Worked example.</b> A 30 m² Grade B room classified at ≥ 0.5 µm and ≥ 5 µm in operation: 30 m² → <b>8 locations</b>. The largest size considered is 5 µm with a limit of 2 930/m³, so V<sub>s</sub> = 20 / 2 930 × 1000 ≈ <b>6.8 litres</b> per location — about 15 seconds at 28.3 L/min, so the 1-minute minimum applies (28.3 L).<br>For Grade A at ≥ 0.5 µm (3 520/m³): V<sub>s</sub> = 20 / 3 520 × 1000 ≈ 5.7 L — again the 1-minute minimum governs. This is also why Grade A is not classified at 5 µm: with a 29/m³ limit a single sample would need about 690 litres.</div>

<h3>How often to repeat</h3>
<ul>
<li><b>Annex 1 (4.32)</b>: requalification at most every <b>6 months for Grades A and B</b> and every <b>12 months for Grades C and D</b>. It must include at least particle classification, final filter integrity, airflow volume, pressure differences between rooms and air velocity — required for unidirectional airflow; areas without unidirectional airflow use a recovery test instead.</li>
<li><b>ISO 14644-2:2015</b>: particle classification at most every <b>6 months for ISO 5 and cleaner</b> and every <b>12 months for classes above ISO 5</b>, with continuous or frequent monitoring supporting the state of control.</li>
<li>Reclassify after any change that could affect performance — HVAC modifications, layout changes, major repairs, or monitoring trends showing deterioration.</li>
</ul>

<h3>Not to be confused with hazardous area classification</h3>
<p>“Area classification” is also used for <b>explosive atmospheres (ATEX)</b>, which is a separate safety topic: gas zones <b>0, 1 and 2</b> and dust zones <b>20, 21 and 22</b> under EU Directive 1999/92/EC and IEC 60079-10-1 / -10-2. Solvent handling, fluid-bed drying and powder milling areas may need both a cleanroom grade and an ATEX zone, and the equipment must suit both.</p>

<h3>Common inspection findings</h3>
<ul>
<li>Classification and routine monitoring treated as the same exercise.</li>
<li>In-operation classification done with fewer people or less activity than real production.</li>
<li>Critical locations (point of fill, stopper bowl) missing from the sampling plan.</li>
<li>Particle counters out of calibration, or sample tubing too long.</li>
<li>No defined clean-up time, or recovery not verified.</li>
</ul>
`,
    sources: [["EU GMP Annex 1 (2022), section 4 — Premises", "https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf"],
              ["ISO 14644-1:2015 — Classification of air cleanliness by particle concentration", "https://www.iso.org/standard/53394.html"],
              ["ISO 14644-2:2015 — Monitoring to provide evidence of cleanroom performance", "https://www.iso.org/standard/53393.html"],
              ["FDA Guidance: Sterile Drug Products Produced by Aseptic Processing (2004)", "https://www.fda.gov/media/71026/download"]] },

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
