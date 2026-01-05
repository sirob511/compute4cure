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
