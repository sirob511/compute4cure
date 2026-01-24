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
    influenza: "Influenza"
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
      <details class="project-card__details">
        <summary>View Research Details</summary>
        <div class="project-card__content">
          <p>${escapeHtml(p.details)}</p>
          <div class="project-card__links">
             <a class="btn" href="https://stats.foldingathome.org/project/${p.id}" target="_blank" rel="noopener noreferrer">Official Page</a>
             <a class="btn btn--primary" href="#join">Join Team</a>
          </div>
        </div>
      </details>
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

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  wireFilters();
});
