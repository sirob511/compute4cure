const PROJECTS = [
  {
    "id": 12489,
    "target": "alzheimers",
    "author": "Prof. Vincent Voelz",
    "university": "Temple University",
    "summary": "Computational drug discovery of new AChE inhibitors to boost neurotransmitter activity.",
    "details": "Acetylcholinesterase (AChE) is an enzyme that breaks down the neurotransmitter acetylcholine. This project uses absolute binding free energy calculations to test new virtual screening methods for Alzheimer’s drug discovery."
  },
  {
    "id": 16773,
    "target": "cancer",
    "author": "Prof. Xuhui Huang",
    "university": "University of Wisconsin-Madison",
    "summary": "Exploring KRAS oncogene mutations and molecular glue strategies.",
    "details": "KRAS is a commonly mutated oncogene in human cancers. We simulate KRAS to find 'pockets' for molecular glues that can help degrade cancer-causing proteins."
  },
  {
    "id": 15407,
    "target": "cancer",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Studying polymer–PFAS interactions to support environmental remediation.",
    "details": "PFAS are carcinogens found in water. We simulate how polymers interact with PFAS to create better filtration and cleaning technologies."
  },
  {
    "id": 18451,
    "target": "influenza",
    "author": "Prof. Peter Kasson",
    "university": "University of Virginia",
    "summary": "Simulating the fusion process of the Influenza virus to block entry.",
    "details": "By understanding how the flu virus enters human cells, we can identify targets for new antiviral medications that prevent infection entirely."
  },
  {
    "id": 19227,
    "target": "unspecified",
    "author": "Tanner Dean",
    "university": "University of Illinois",
    "summary": "Predicting the site of halogenation for medicinal drug candidates.",
    "details": "40% of drugs contain halogens. We use Relative Binding Free Energy to predict how enzymes halogenate molecules, helping chemists synthesize better drugs."
  },
  {
    "id": 18240,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking molecular dynamics force fields using the well-studied protein T4 Lysozyme.",
    "details": "Force fields determine how atomic forces are calculated in molecular dynamics simulations. In this project series, we use T4 Lysozyme as a benchmark system to catalog force field performance and accuracy, including rare conformations observed experimentally. We are testing multiple force field/water combinations (including Amber99SB-disp with TIP4PD-1.6 water) and expect these results to help improve simulation accuracy on Folding@home and across the broader scientific community."
  },
  {
    "id": 15301,
    "target": "cancer",
    "author": "Miko Miwa",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Simulating ProcM lanthipeptide synthetase to understand substrate site-selectivity.",
    "details": "Lanthipeptides are RiPP natural products with diverse bioactivities, including anticancer effects. ProcM is notable for high substrate tolerance, but how it determines site-selectivity is unclear. We run atomistic MD simulations of wild-type and variant ProcM–ProcA3.3 complexes to investigate the molecular basis of this selectivity."
  },
  {
    "id": 17951,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Simulating the plant monosaccharide transporter AtSTP10 to understand active transport.",
    "details": "AtSTP10 is a high-affinity monosaccharide transporter in plants that facilitates uptake of glucose, galactose, and mannose into pollen tubes and root primordia. Simulating its transport mechanism can help inform strategies for designing better crops."
  },
  {
    "id": 18806,
    "target": "unspecified",
    "author": "Dr. Sonya Hanson",
    "university": "Flatiron Institute",
    "summary": "Studying how phosphorylation changes interactions between disordered protein fragments involved in gene regulation.",
    "details": "Disordered proteins regulate transcription and are often chemically modified, for example by phosphorylation. Adding a negatively charged phosphoryl group can strengthen or weaken binding depending on partner charge and binding-site chemistry. This project uses simulations of small disordered protein fragments to understand how phosphorylation mediates these interactions, with future work expanding to larger fragments and full-length proteins relevant to age-related diseases such as cancer."
  },
  {
    "id": 18929,
    "target": "cancer",
    "author": "Song Yin",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Modeling lasso peptide topology and cyclization to clarify how lariat-like natural products form.",
    "details": "Lasso peptides are RiPP natural products with a threaded, lariat-like topology and can show anticancer, antibacterial, or antiviral activity. The proposed mechanism involves forming a prefolded lariat-like structure before a cyclase enzyme catalyzes macrolactam ring closure via an isopeptide bond. We use molecular dynamics simulations of lasso peptides with and without cyclase to explore topology formation and the cyclization mechanism."
  },
  {
    "id": 12137,
    "target": "unspecified",
    "author": "Hassan Nadeem",
    "university": "University of Illinois at Urbana-Champaign",
    "summary": "Studying how mutations alter protein folding rates and misfolding behavior.",
    "details": "Protein misfolding can occur when mutations prevent a peptide from reaching its native structure, contributing to diseases such as cancer and Alzheimer's. This project systematically studies folding rates across diverse mutated proteins to better understand and predict folding dynamics."
  },
  {
    "id": 14955,
    "target": "parkinsons",
    "author": "Prateek Bansal",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Simulating Class C receptors involved in neuronal signaling and opioid addiction.",
    "details": "Class C receptors help control neuronal signaling in the brain, and their overactivation or inactivation has been linked to Parkinson's, anxiety, depression, pain relief, and opioid addiction. This project simulates receptor activation mechanisms to better understand disease pathways and support improved anti-opioid drug design."
  },
  {
    "id": 15004,
    "target": "unspecified",
    "author": "Nathan Tvedt",
    "university": "University of Illinois at Urbana-Champaign",
    "summary": "Investigating proton-driven membrane transport through the LAX3 transporter.",
    "details": "Membrane transporters move ions, nutrients, neurotransmitters, and drugs across cell membranes. This project studies LAX3, a LeuT-fold transporter that appears to be driven by protons rather than sodium or chloride gradients, by comparing motion in protonated and unprotonated states."
  },
  {
    "id": 15092,
    "target": "alzheimers",
    "author": "Nathan Tvedt",
    "university": "University of Illinois at Urbana-Champaign",
    "summary": "Simulating GLYT1 transport cycles relevant to neurological disease and Alzheimer's drug discovery.",
    "details": "GLYT1 is the major human glycine transporter responsible for terminating neurotransmission in neuronal signaling. Deleterious GLYT1 mutants are associated with neurological diseases, and drugs targeting GLYT1 have been proposed for Alzheimer's treatment. These simulations study the kinetics and thermodynamics of intermediate steps in the forward transport cycle."
  },
  {
    "id": 15232,
    "target": "cancer",
    "author": "Eric Giavedoni",
    "university": "University of Illinois at Urbana-Champaign",
    "summary": "Studying cholesterol transport by PTCH1 in the hedgehog signaling pathway.",
    "details": "PTCH1 is a transmembrane protein that inhibits SMO by reducing access to ciliary membrane cholesterol in the hedgehog signaling pathway. Dysregulation of this pathway is linked to cancers including medulloblastoma and basal cell carcinoma, so understanding PTCH1 cholesterol transport can inform therapeutic strategies."
  },
  {
    "id": 15236,
    "target": "cancer",
    "author": "Eric Giavedoni",
    "university": "University of Illinois at Urbana-Champaign",
    "summary": "Extending PTCH1 cholesterol transport simulations tied to hedgehog pathway cancers.",
    "details": "This project continues work on the PTCH1 cholesterol transport mechanism, a process connected to inhibition of SMO in the hedgehog signaling pathway. Failures in this pathway have been linked to cancers such as medulloblastoma and basal cell carcinoma."
  },
  {
    "id": 15308,
    "target": "cancer",
    "author": "Miko Miwa",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Simulating graspetide folding to understand macrocycle ring formation.",
    "details": "Graspetides are RiPP natural products whose ATP-grasp ligase-catalyzed macrocycles provide structural stability and diverse bioactivities. This project compares molecular dynamics trajectories across representative graspetide groups to identify determinants of ring pattern formation and ring closure order."
  },
  {
    "id": 15313,
    "target": "cancer",
    "author": "Miko Miwa",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Comparing graspetide groups to identify folding and cyclization preferences.",
    "details": "This project uses atomic-level molecular dynamics simulations of model graspetide species to study how precursor sequence and folding pathways influence ATP-grasp ligase-driven macrolactam or macrolactone ring formation."
  },
  {
    "id": 15322,
    "target": "cancer",
    "author": "Miko Miwa",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Studying interactions between graspetide precursor peptides and ATP-grasp ligases.",
    "details": "This project simulates graspetide precursor peptides with their ATP-grasp ligases under different conditions to identify patterns in ring closure preference and better explain how graspetide macrocycles form."
  },
  {
    "id": 15410,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Mapping enzyme active-site flexibility to inform drug discovery and enzyme engineering.",
    "details": "Protein function depends on dynamic structural behavior, especially in regions involved in molecular recognition. This project uses large-scale molecular dynamics simulations to study conformational variability, binding pocket flexibility, and transient structural rearrangements across diverse enzymes."
  },
  {
    "id": 15411,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Simulating enzyme conformational variability across molecular recognition sites.",
    "details": "This project studies how active-site dynamics influence ligand binding by analyzing pocket flexibility, structural rearrangements, and transient conformations across a diverse set of enzymes."
  },
  {
    "id": 15412,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Investigating how enzyme dynamics shape ligand-binding behavior.",
    "details": "Using large-scale molecular dynamics simulations, this project examines intrinsic conformational variability in enzyme active sites to support advances in drug discovery, enzyme engineering, and protein function prediction."
  },
  {
    "id": 15413,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Studying transient enzyme conformations that affect molecular recognition.",
    "details": "This project explores binding pocket flexibility and structural rearrangements in enzymes, aiming to connect protein dynamics with ligand binding and broader protein function."
  },
  {
    "id": 15414,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Characterizing enzyme binding-pocket motion with large-scale simulations.",
    "details": "This project studies dynamic structural behavior in enzyme regions involved in molecular recognition, helping explain how conformational variability influences ligand binding."
  },
  {
    "id": 15415,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Exploring how active-site flexibility influences protein function.",
    "details": "Large-scale molecular dynamics simulations are used to analyze enzyme active-site dynamics, including pocket flexibility, transient conformations, and rearrangements relevant to ligand binding."
  },
  {
    "id": 15416,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Simulating enzyme dynamics to support ligand-binding and design insights.",
    "details": "This project examines conformational variability across enzymes to understand how dynamic active-site behavior affects ligand binding, drug discovery, and enzyme engineering."
  },
  {
    "id": 15417,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Analyzing binding pocket flexibility across diverse enzymes.",
    "details": "This molecular dynamics project studies structural rearrangements and transient conformations in enzyme active sites to clarify how intrinsic protein motion shapes molecular recognition."
  },
  {
    "id": 15418,
    "target": "unspecified",
    "author": "Adrija Dutta",
    "university": "University of Illinois Urbana-Champaign",
    "summary": "Using simulations to connect enzyme structural motion with ligand binding.",
    "details": "By modeling conformational variability in enzyme active sites, this project aims to improve understanding of protein function and support future drug discovery and enzyme engineering work."
  },
  {
    "id": 16774,
    "target": "cancer",
    "author": "Prof. Xuhui Huang",
    "university": "University of Wisconsin-Madison",
    "summary": "Studying KRAS and VHL interactions to support molecular glue discovery.",
    "details": "KRAS is frequently mutated in human cancers and has long been difficult to drug directly. This project studies protein-protein interactions between VHL and wild-type or G12 mutant KRAS to support molecular glue strategies for selective degradation or allosteric modulation."
  },
  {
    "id": 16775,
    "target": "cancer",
    "author": "Prof. Xuhui Huang",
    "university": "University of Wisconsin-Madison",
    "summary": "Exploring KRAS mutant interactions for targeted cancer therapeutic strategies.",
    "details": "This project continues simulations of KRAS interactions relevant to molecular glues, with the goal of identifying interactions that can help target KRAS through degradation or allosteric modulation."
  },
  {
    "id": 16959,
    "target": "cancer",
    "author": "Prof. Vincent Voelz",
    "university": "Temple University",
    "summary": "Benchmarking TrpCage mini-protein folding dynamics against NMR data.",
    "details": "This project simulates folding dynamics of TrpCage mini-protein variants designed by Niels Andersen's group. The simulations are compared with high-quality NMR experimental data to assess simulation-based computational protein design."
  },
  {
    "id": 16969,
    "target": "cancer",
    "author": "Prof. Vincent Voelz",
    "university": "Temple University",
    "summary": "Simulating beta-strap peptide variants to test protein design models.",
    "details": "This project studies peptide variants with the beta-strap motif, comparing simulations with experimental data to evaluate the reliability of simulation-based computational protein design for beta hairpin-forming sequences."
  },
  {
    "id": 17926,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Simulating the plant sucrose transporter AtSUC1 to study active transport.",
    "details": "AtSUC1 actively loads sucrose in plant regions with higher concentrations, such as roots and flowers. Understanding its active transport mechanism can help inform crop designs with higher nutritional content."
  },
  {
    "id": 17952,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Extending AtSTP10 monosaccharide transporter simulations in plants.",
    "details": "This project simulates AtSTP10, a high-affinity monosaccharide transporter that takes up glucose, galactose, and mannose into pollen tubes and root primordia. Understanding this mechanism can inform strategies for better crops."
  },
  {
    "id": 17953,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Studying STP6 sugar transport mechanisms important for pollen development.",
    "details": "STP6 is a high-affinity proton/hexose symporter expressed mainly in pollen, where it imports sugars such as glucose and fructose to support late pollen maturation and pollen tube germination. This project studies the molecular mechanism of STP6 sugar transport."
  },
  {
    "id": 17954,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Simulating STP6 proton-coupled sugar transport in plants.",
    "details": "This project investigates STP6, a plasma membrane sugar transporter involved in importing sugars for pollen maturation and germination. The simulations aim to clarify the molecular mechanism of sugar transport."
  },
  {
    "id": 17955,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Modeling AtSTP10 transport of glucose, galactose, and mannose.",
    "details": "AtSTP10 is a high-affinity monosaccharide transporter in plants that facilitates uptake of glucose, galactose, and mannose into pollen tubes and root primordia. This project studies its active transport behavior to support crop design insights."
  },
  {
    "id": 17956,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Continuing AtSTP10 plant monosaccharide transporter simulations.",
    "details": "This project continues simulations of AtSTP10, focusing on how a plant monosaccharide transporter moves glucose, galactose, and mannose in tissues important for pollen tubes and root primordia."
  },
  {
    "id": 17957,
    "target": "unspecified",
    "author": "Arnav Paul",
    "university": "University of Illinois",
    "summary": "Extending AtSUC1 sucrose transporter simulations for crop-design insights.",
    "details": "AtSUC1 actively transports sucrose in plant tissues such as roots and flowers. This project studies the molecular basis of sucrose transport to help inform future crop designs with higher nutritional content."
  },
  {
    "id": 18262,
    "target": "alzheimers",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking force fields for tau, an intrinsically disordered Alzheimer's protein.",
    "details": "Tau aggregation is a hallmark of Alzheimer's disease, but tau is difficult to characterize experimentally because it is intrinsically disordered. This project benchmarks force field and water models against single-molecule FRET data to identify simulations that best reproduce tau conformational behavior."
  },
  {
    "id": 18265,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Simulating naive PGT121 antibodies to study affinity maturation.",
    "details": "Antibodies improve antigen binding through affinity maturation, but the dynamic role of these mutations is not fully understood. This project simulates the naive PGT121 lineage antibody, which targets the V3-glycan epitope on HIV gp120, to support improved antibody therapeutics and vaccine immunogens."
  },
  {
    "id": 18266,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Simulating mature PGT121 antibodies to study affinity maturation.",
    "details": "This project simulates a mature PGT121 lineage antibody, a broadly neutralizing antibody that binds the V3-glycan epitope on HIV gp120. Comparing naive and mature antibody dynamics can help explain how affinity maturation produces potent antibodies."
  },
  {
    "id": 18267,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Studying naive CAP256-VRC26 antibody dynamics during affinity maturation.",
    "details": "This project simulates the naive CAP256-VRC26 antibody lineage, which targets the V2-apex epitope on HIV gp120. The goal is to understand how mutations during affinity maturation influence antibody dynamics and specificity."
  },
  {
    "id": 18268,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Studying mature CAP256-VRC26 antibody dynamics during affinity maturation.",
    "details": "This project simulates the mature CAP256-VRC26 antibody lineage, a broadly neutralizing antibody against the V2-apex epitope on HIV gp120. The simulations help compare mature and naive antibody dynamics."
  },
  {
    "id": 18272,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Simulating mature CH103 antibodies that bind the HIV CD4 binding site.",
    "details": "This project studies mature CH103 lineage antibodies, which broadly neutralize HIV by targeting the CD4 binding site epitope on gp120. The simulations are part of a broader antibody affinity maturation series."
  },
  {
    "id": 18273,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Simulating naive 1-18 antibodies that bind HIV gp120.",
    "details": "This project studies the naive 1-18 antibody lineage, which binds the CD4 binding site on HIV gp120. Simulations of naive and mature antibody states help reveal how affinity maturation changes antibody dynamics."
  },
  {
    "id": 18274,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Simulating mature 1-18 broadly neutralizing antibodies against HIV gp120.",
    "details": "This project simulates the mature 1-18 antibody lineage, a broadly neutralizing antibody targeting the CD4 binding site on HIV gp120, to understand dynamics associated with affinity maturation."
  },
  {
    "id": 18278,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking IL-2 simulations with Amber03 and TIP3P water.",
    "details": "This project is part of a human interleukin-2 force field benchmark series comparing simulations with NMR spectroscopy data. IL-2 controls T-cell activity, and understanding its receptor-recognition dynamics can help design IL-2 variants with more specific therapeutic activity."
  },
  {
    "id": 18279,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking IL-2 simulations with Amber19SB and OPC water.",
    "details": "This project continues the IL-2 force field benchmark series, using molecular dynamics simulations to compare force field behavior against experimental NMR data and improve understanding of IL-2 receptor binding dynamics."
  },
  {
    "id": 18280,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking IL-2 simulations with Amber99SB-disp and AADISP water.",
    "details": "This IL-2 simulation project benchmarks a force field and water model combination against NMR data while investigating the dynamics that govern IL-2 receptor recognition and immune signaling."
  },
  {
    "id": 18281,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking IL-2 simulations with CHARMM36m and TIP3P water.",
    "details": "This project is part of the IL-2 force field benchmark series, aimed at improving simulation accuracy and supporting design of IL-2 variants with more targeted immune-cell activity."
  },
  {
    "id": 18282,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking IL-2 simulations with Amber99SB-star-ILDN and TIP4P water.",
    "details": "This project studies IL-2 dynamics using a specific force field and water model combination, comparing simulation behavior to NMR data to refine molecular dynamics models for cytokine receptor binding."
  },
  {
    "id": 18283,
    "target": "unspecified",
    "author": "Justin Miller",
    "university": "University of Pennsylvania",
    "summary": "Benchmarking IL-2 simulations with Amber99SB-star-ILDN and TIP4PD water.",
    "details": "This IL-2 benchmark project evaluates a force field and water model combination against NMR data, helping improve simulations of receptor binding dynamics relevant to immune therapeutic design."
  },
  {
    "id": 18490,
    "target": "cancer",
    "author": "Prof. Vincent Voelz",
    "university": "Temple University",
    "summary": "Testing expanded-ensemble simulations for predicting molecular partition coefficients.",
    "details": "This project supports computational drug discovery by testing expanded-ensemble simulations as a method for calculating logP, the partition coefficient that predicts relative solubility in aqueous versus non-polar media and helps estimate drug bioavailability."
  },
  {
    "id": 19020,
    "target": "parkinsons",
    "author": "Nicole Chiang",
    "university": "University of Illinois",
    "summary": "Simulating glycine transporter ion coupling relevant to neurological disease.",
    "details": "The glycine transporter terminates neurotransmission in neurons, and malfunctions have been associated with diseases including schizophrenia and hyperekplexia. This project studies how ions couple with substrate transport to support better glycine transporter-targeted drug design."
  },
  {
    "id": 19229,
    "target": "unspecified",
    "author": "Tanner Dean",
    "university": "University of Illinois",
    "summary": "Predicting regioselective halogenation sites for drug candidate scaffolds.",
    "details": "Many approved and investigational drugs contain halogens, but existing halogenation methods can be hard to control or produce toxic byproducts. This project uses relative binding free energy calculations across common organic scaffolds and halogenases to predict likely sites of halogenation."
  }
];

function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function badgeLabel(target) {
  const labels = {
    alzheimers: "Alzheimer’s",
    cancer: "Cancer",
    influenza: "Influenza",
    parkinsons: "Parkinson’s"
  };
  return labels[target] || "Research";
}

function renderProjects(filter = "all") {
  const grid = document.querySelector("#projects-grid");
  if (!grid) return;

  const list = PROJECTS.filter((p) => filter === "all" || p.target === filter);

  grid.innerHTML = list.map((p) => `
    <article class="project-card">
      <div class="badge badge--${p.target}">${badgeLabel(p.target)}</div>
      <div class="project-card__header">
        <h3 class="project-card__title">${escapeHtml(p.author)}</h3>
        <div class="project-card__id">Project #${p.id}</div>
      </div>
      <div class="project-card__body">
        <div class="project-card__meta">${escapeHtml(p.university)}</div>
        <p class="project-card__summary">${escapeHtml(p.summary)}</p>
      </div>
      <div class="project-card__details">
        <h4 class="project-card__details-title">Research Details</h4>
        <div class="project-card__content">
          <p>${escapeHtml(p.details)}</p>
          <div class="project-card__links">
             <a class="btn project-card__official-link" href="https://stats.foldingathome.org/project/${p.id}" target="_blank" rel="noopener noreferrer">Official Page <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function wireFilters() {
  const pills = document.querySelectorAll(".pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((btn) => btn.classList.remove("is-active"));
      pill.classList.add("is-active");
      renderProjects(pill.getAttribute("data-filter"));
    });
  });
}

function initProjects() {
  renderProjects();
  wireFilters();
}

window.initProjects = initProjects;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjects);
} else {
  initProjects();
}
