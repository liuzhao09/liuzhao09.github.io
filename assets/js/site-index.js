(() => {
  const noteDates = Object.freeze({
    "./papers/rhelm.html": "2026-06-02",
    "./papers/safeau.html": "2026-06-02",
    "./papers/foster.html": "2026-06-02",
    "./papers/llm-wiki.html": "2026-06-01",
    "./papers/schgen.html": "2026-06-01",
    "./papers/kbf.html": "2026-06-01",
    "./papers/ragear.html": "2026-06-01",
    "./papers/explicit-feedback-rec.html": "2026-06-01",
    "./papers/ncce.html": "2026-06-01",
    "./papers/nalaformer.html": "2026-06-01",
    "./papers/harvard-compression-math.html": "2026-05-31",
    "./papers/memft-parametric-memory.html": "2026-05-31",
    "./papers/critic-r1.html": "2026-05-31",
    "./papers/entity-collision.html": "2026-05-31",
    "./papers/loopfm.html": "2026-05-31",
    "./papers/ufrec.html": "2026-05-31",
    "./papers/pinterest-ads-llm.html": "2026-05-31",
    "./papers/gemini-embedding-2.html": "2026-05-30",
    "./papers/asymrec.html": "2026-05-30",
    "./papers/stv.html": "2026-05-29",
    "./papers/gplan.html": "2026-05-29",
    "./papers/bes.html": "2026-05-28",
    "./papers/sgsd.html": "2026-05-28",
    "./papers/memtrace.html": "2026-05-28",
    "./papers/amrs.html": "2026-05-28",
    "./papers/mixragrec.html": "2026-05-28",
    "./papers/sid-tokenizer-reliability.html": "2026-05-28",
    "./papers/resid.html": "2026-05-27",
    "./papers/rsir.html": "2026-05-27",
    "./papers/lm-sleep.html": "2026-05-27",
    "./papers/veritrace.html": "2026-05-27",
    "./papers/auto-benchmark-audit.html": "2026-05-27",
    "./papers/meta-modal-agent.html": "2026-05-27",
    "./papers/lens-ctr.html": "2026-05-27",
    "./papers/rankaid.html": "2026-05-27",
    "./papers/sa2crq.html": "2026-05-27",
    "./papers/claw-anything.html": "2026-05-26",
    "./papers/legal-search-r1.html": "2026-05-26",
    "./papers/dvao.html": "2026-05-26",
    "./papers/degre.html": "2026-05-26",
    "./papers/siren.html": "2026-05-26",
    "./papers/qgs-quark.html": "2026-05-26",
    "./papers/skillopt.html": "2026-05-25",
    "./papers/memaudit.html": "2026-05-25",
    "./papers/parallel-context-compaction.html": "2026-05-25",
    "./papers/tubifm.html": "2026-05-25",
    "./papers/harness-lm.html": "2026-05-25",
    "./papers/netflix-generative-recommenders.html": "2026-05-25",
    "./papers/interformer.html": "2026-05-25",
    "./papers/pearl-livestream.html": "2026-05-25",
    "./papers/wukong.html": "2026-05-25",
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
    "./papers/llm-ad-retrieval.html": "2026-05-28",
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
    "./papers/perpeft.html": "2026-05-31",
  });

  const newsDates = Object.freeze({
    "./news/2026-06-02.html": "2026-06-02",
    "./news/2026-06-01.html": "2026-06-01",
    "./news/2026-05-30.html": "2026-05-30",
    "./news/2026-05-29.html": "2026-05-29",
    "./news/2026-05-28.html": "2026-05-28",
    "./news/2026-05-27.html": "2026-05-27",
    "./news/2026-05-26.html": "2026-05-26",
  });

  const marketDates = Object.freeze({
    "./market/2026-06-01.html": "2026-06-01",
    "./market/2026-05-29.html": "2026-05-29",
    "./market/2026-05-28.html": "2026-05-28",
    "./market/2026-05-27.html": "2026-05-27",
    "./market/2026-05-26.html": "2026-05-26",
  });

  const housingDates = Object.freeze({
    "./housing/2026-05-30.html": "2026-05-30",
    "./housing/2026-05-31.html": "2026-05-31",
    "./housing/2026-05-29.html": "2026-05-29",
    "./housing/2026-05-28.html": "2026-05-28",
    "./housing/2026-05-27.html": "2026-05-27",
    "./housing/2026-05-24.html": "2026-05-24",
  });

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  const normalizeHref = (href) => {
    if (!href) return "";

    try {
      const url = new URL(href, window.location.href);
      const markers = ["/papers/", "/news/", "/market/", "/housing/"];
      for (const marker of markers) {
        const index = url.pathname.indexOf(marker);
        if (index !== -1) {
          return `.${marker}${url.pathname.slice(index + marker.length)}`;
        }
      }
      return href;
    } catch {
      return href;
    }
  };

  const dateForNode = (node) => {
    const link = node.matches("a") ? node : node.querySelector("a");
    if (!link) return "";

    const normalizedHref = normalizeHref(link.getAttribute("href"));
    const date =
      link.dataset.noteDate ||
      noteDates[normalizedHref] ||
      newsDates[normalizedHref] ||
      marketDates[normalizedHref] ||
      housingDates[normalizedHref];
    if (date) link.dataset.noteDate = date;
    return date || "";
  };

  const formatDate = (date) => date.replaceAll("-", ".");
  const formatMonth = (date) => date.slice(0, 7).replace("-", ".");
  const latestDate = (nodes) => nodes.map(dateForNode).filter(Boolean).sort().at(-1) || "";

  const syncHome = () => {
    const recentItems = [...document.querySelectorAll(".recent-item")];

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
    const paperCount = count || Object.keys(noteDates).length;
    const latest = latestDate(recentItems) || Object.values(noteDates).sort().at(-1) || "";
    const newsCount = Object.keys(newsDates).length;
    const newsLatest = Object.values(newsDates).sort().at(-1) || "";
    const marketCount = Object.keys(marketDates).length;
    const marketLatest = Object.values(marketDates).sort().at(-1) || "";
    const housingCount = Object.keys(housingDates).length;
    const housingLatest = Object.values(housingDates).sort().at(-1) || "";
    const latestSiteDate = [latest, newsLatest, marketLatest, housingLatest].filter(Boolean).sort().at(-1);

    setText("#home-note-count", String(paperCount));
    setText("#recent-count", `${count} / ${count}`);
    setText("#home-news-count", String(newsCount));
    setText("#home-market-count", String(marketCount));
    setText("#home-housing-count", String(housingCount));
    if (latest) setText("#home-paper-latest", `最新同步：${latest}`);
    if (newsLatest) setText("#home-news-latest", `最新同步：${newsLatest}`);
    if (marketLatest) setText("#home-market-latest", `最新同步：${marketLatest}`);
    if (housingLatest) setText("#home-housing-latest", `最新同步：${housingLatest}`);
    if (latestSiteDate) setText("#home-updated", formatMonth(latestSiteDate));
  };

  const syncLibrary = () => {
    const libraryPapers = [...document.querySelectorAll("#paper-list .library-paper")];
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

  const syncNewsLibrary = () => {
    const reports = [...document.querySelectorAll(".news-list .library-paper")];
    if (!reports.length) return;

    const count = reports.length;
    const latest = latestDate(reports);
    const searchInput = document.querySelector("#news-search");
    const resultCount = document.querySelector("#news-result-count");

    setText("#news-report-count", String(count));
    if (latest) setText("#news-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  const syncMarketLibrary = () => {
    const reports = [...document.querySelectorAll(".market-list .library-paper")];
    if (!reports.length) return;

    const count = reports.length;
    const latest = latestDate(reports);
    const searchInput = document.querySelector("#market-search");
    const resultCount = document.querySelector("#market-result-count");

    setText("#market-report-count", String(count));
    if (latest) setText("#market-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  const syncHousingLibrary = () => {
    const reports = [...document.querySelectorAll(".housing-list .library-paper")];
    if (!reports.length) return;

    const count = reports.length;
    const latest = latestDate(reports);
    const searchInput = document.querySelector("#housing-search");
    const resultCount = document.querySelector("#housing-result-count");

    setText("#housing-report-count", String(count));
    if (latest) setText("#housing-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    syncHome();
    syncLibrary();
    syncNewsLibrary();
    syncMarketLibrary();
    syncHousingLibrary();
  });
})();
