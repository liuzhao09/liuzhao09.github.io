(() => {
  const noteDates = Object.freeze({
    "./papers/interformer.html": "2026-05-25",
    "./papers/pearl-livestream.html": "2026-05-25",
    "./papers/kunlun.html": "2026-05-24",
    "./papers/kairos-data-temporality.html": "2026-05-24",
    "./papers/lcguard.html": "2026-05-24",
    "./papers/deltabox.html": "2026-05-24",
    "./papers/abpo-llm-rec.html": "2026-05-24",
    "./papers/tgq-former.html": "2026-05-24",
    "./papers/genli-ctr.html": "2026-05-24",
    "./papers/airbnb-cold-start-search.html": "2026-05-23",
    "./papers/gcrs.html": "2026-05-23",
    "./papers/thinkgr.html": "2026-05-23",
    "./papers/vpo.html": "2026-05-23",
    "./papers/gated-deltanet-2.html": "2026-05-23",
    "./papers/moss-self-evolution.html": "2026-05-23",
    "./papers/bgcc-multimodal-recommendation.html": "2026-05-25",
    "./papers/rporec.html": "2026-05-22",
    "./papers/llm-ad-retrieval.html": "2026-05-22",
    "./papers/search-e1.html": "2026-05-22",
    "./papers/defermem.html": "2026-05-22",
    "./papers/arborkv.html": "2026-05-22",
    "./papers/multimodal-gr-cost-paradox.html": "2026-05-22",
    "./papers/mem-pi.html": "2026-05-21",
    "./papers/pals.html": "2026-05-21",
    "./papers/agent-jit.html": "2026-05-21",
    "./papers/ltc-rerank.html": "2026-05-21",
    "./papers/mdcns.html": "2026-05-21",
    "./papers/delta-rlvr.html": "2026-05-21",
    "./papers/icml-2026-recsys-ad-llm-selection.html": "2026-05-21",
    "./papers/causaldpo.html": "2026-05-21",
    "./papers/hyprq-vae.html": "2026-05-21",
    "./papers/syngr.html": "2026-05-21",
    "./papers/macrec.html": "2026-05-21",
    "./papers/mql4grec.html": "2026-05-21",
    "./papers/memweaver.html": "2026-05-21",
    "./papers/tide-dllm.html": "2026-05-20",
    "./papers/graft.html": "2026-05-20",
    "./papers/balancerag.html": "2026-05-20",
    "./papers/peek.html": "2026-05-20",
    "./papers/m3bert.html": "2026-05-20",
    "./papers/d3-subsidy.html": "2026-05-20",
    "./papers/ragr.html": "2026-05-19",
    "./papers/dadf.html": "2026-05-19",
    "./papers/growthgr.html": "2026-05-19",
    "./papers/epic.html": "2026-05-19",
    "./papers/dashattention.html": "2026-05-19",
    "./papers/sapo.html": "2026-05-19",
    "./papers/latte.html": "2026-05-19",
    "./papers/capsid.html": "2026-05-19",
    "./papers/trinity.html": "2026-05-19",
    "./papers/varlenrec.html": "2026-05-19",
    "./papers/recgpt-mobile.html": "2026-05-19",
    "./papers/tiger.html": "2026-05-19",
    "./papers/marm.html": "2026-05-19",
    "./papers/llm2rec.html": "2026-05-19",
  });

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  const normalizeHref = (href) => {
    if (!href) return "";

    try {
      const url = new URL(href, window.location.href);
      const marker = "/papers/";
      const index = url.pathname.indexOf(marker);
      if (index === -1) return href;
      return `./papers/${url.pathname.slice(index + marker.length)}`;
    } catch {
      return href;
    }
  };

  const dateForNode = (node) => {
    const link = node.matches("a") ? node : node.querySelector("a");
    if (!link) return "";

    const date = link.dataset.noteDate || noteDates[normalizeHref(link.getAttribute("href"))];
    if (date) link.dataset.noteDate = date;
    return date || "";
  };

  const formatDate = (date) => date.replaceAll("-", ".");
  const formatMonth = (date) => date.slice(0, 7).replace("-", ".");
  const latestDate = (nodes) => nodes.map(dateForNode).filter(Boolean).sort().at(-1) || "";

  const syncHome = () => {
    const recentItems = [...document.querySelectorAll(".recent-item")];
    if (!recentItems.length) return;

    recentItems.forEach((item) => {
      const date = dateForNode(item);
      if (!date) return;

      let dateNode = item.querySelector(".recent-date");
      if (!dateNode) {
        dateNode = document.createElement("time");
        dateNode.className = "recent-date";
        item.append(dateNode);
      }

      dateNode.dateTime = date;
      dateNode.textContent = formatDate(date);
    });

    const count = recentItems.length;
    const latest = latestDate(recentItems);
    setText("#home-note-count", String(count));
    setText("#recent-count", `${count} / ${count}`);
    if (latest) setText("#home-updated", formatMonth(latest));
  };

  const syncLibrary = () => {
    const libraryPapers = [...document.querySelectorAll(".library-paper")];
    if (!libraryPapers.length) return;

    const count = libraryPapers.length;
    const latest = latestDate(libraryPapers);
    const searchInput = document.querySelector("#paper-search");
    const resultCount = document.querySelector("#result-count");

    setText("#library-note-count", String(count));
    if (latest) setText("#library-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    syncHome();
    syncLibrary();
  });
})();
