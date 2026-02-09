const App = (() => {
  const storageKeys = {
    auth: "trigano_auth",
    lang: "trigano_lang"
  };

  const getLang = () => localStorage.getItem(storageKeys.lang) || "fr";

  const setLang = (lang) => {
    localStorage.setItem(storageKeys.lang, lang);
  };

  const isAuthenticated = () => localStorage.getItem(storageKeys.auth) === "true";

  const setAuth = (value) => {
    localStorage.setItem(storageKeys.auth, value ? "true" : "false");
  };

  const i18n = (key) => {
    const lang = getLang();
    const entry = DATA.ui[key];
    if (!entry) return key;
    return entry[lang] || entry.fr || key;
  };

  const t = (entry) => {
    const lang = getLang();
    if (!entry) return "";
    return entry[lang] || entry.fr || "";
  };

  const updateI18n = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = i18n(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", i18n(key));
    });
  };

  const setBrandAccent = (brand) => {
    if (brand?.accent) {
      document.documentElement.style.setProperty("--brand-accent", brand.accent);
    }
  };

  const getParam = (name) => new URLSearchParams(window.location.search).get(name);

  const renderBreadcrumbs = (items) => {
    const container = document.querySelector(".breadcrumbs");
    if (!container) return;
    container.innerHTML = items
      .map((item, index) => {
        if (!item.href || index === items.length - 1) {
          return `<span>${item.label}</span>`;
        }
        return `<a href="${item.href}">${item.label}</a>`;
      })
      .join("<span class=\"breadcrumb-sep\">/</span>");
  };

  const renderHome = () => {
    const grid = document.querySelector(".brand-grid");
    if (!grid) return;
    grid.innerHTML = DATA.brands
      .map((brand) => {
        return `
          <article class="card brand-card" style="--card-accent:${brand.accent}">
            <div class="card-header">
              <img src="assets/logo-placeholder.svg" alt="${brand.name} logo" />
              <span class="tag">${brand.name}</span>
            </div>
            <h3>${brand.name}</h3>
            <p>${t(brand.description)}</p>
            <div class="stats">
              <div><strong>${brand.stats.models}</strong><span>modèles</span></div>
              <div><strong>${brand.stats.files}</strong><span>fichiers</span></div>
              <div><strong>${brand.stats.packs}</strong><span>packs</span></div>
            </div>
            <a class="btn" href="brand.html?brand=${brand.id}">${i18n("viewBrand")}</a>
          </article>
        `;
      })
      .join("");
  };

  const renderBrand = () => {
    const brandId = getParam("brand");
    const brand = DATA.brands.find((item) => item.id === brandId);
    const list = document.querySelector(".category-grid");
    const header = document.querySelector(".brand-hero");
    if (!brand || !list || !header) return;

    setBrandAccent(brand);

    header.querySelector("h1").textContent = brand.name;
    header.querySelector("p").textContent = t(brand.description);
    header.querySelector(".hero-meta").innerHTML = `
      <span>${brand.stats.models} modèles</span>
      <span>${brand.stats.files} fichiers</span>
      <span>${brand.stats.packs} packs</span>
    `;

    const categories = DATA.categories[brandId] || [];
    list.innerHTML = categories
      .map((category) => {
        return `
          <article class="card">
            <div class="card-header">
              <img src="assets/icon-folder.svg" alt="" />
              <span class="tag">${t(category.name)}</span>
            </div>
            <h3>${t(category.name)}</h3>
            <p>${t(category.description)}</p>
            <div class="meta-line">
              <span>${category.items.length} contenus</span>
              <span>${category.items.reduce((total, item) => total + (item.fileCount || 1), 0)} fichiers</span>
            </div>
            <a class="btn" href="category.html?brand=${brandId}&category=${category.id}">Explorer</a>
          </article>
        `;
      })
      .join("");

    renderBreadcrumbs([
      { label: "Accueil", href: "home.html" },
      { label: brand.name }
    ]);
  };

  const applyFilters = (items) => {
    const query = document.querySelector("#search")?.value?.toLowerCase() || "";
    const type = document.querySelector("#filter-type")?.value || "all";
    const year = document.querySelector("#filter-year")?.value || "all";
    const lang = document.querySelector("#filter-lang")?.value || "all";

    return items.filter((item) => {
      const matchesQuery = item.title && t(item.title).toLowerCase().includes(query);
      const matchesType = type === "all" || item.type === type;
      const matchesYear = year === "all" || String(item.year) === year;
      const matchesLang = lang === "all" || item.languages?.includes(lang);
      return matchesQuery && matchesType && matchesYear && matchesLang;
    });
  };

  const renderCategory = () => {
    const brandId = getParam("brand");
    const categoryId = getParam("category");
    const brand = DATA.brands.find((item) => item.id === brandId);
    const category = (DATA.categories[brandId] || []).find((item) => item.id === categoryId);
    if (!brand || !category) return;

    setBrandAccent(brand);

    const header = document.querySelector(".category-hero");
    header.querySelector("h1").textContent = `${brand.name} — ${t(category.name)}`;
    header.querySelector("p").textContent = t(category.description);

    const uniqueYears = [...new Set(category.items.map((item) => item.year))].sort((a, b) => b - a);
    const yearSelect = document.querySelector("#filter-year");
    if (yearSelect) {
      yearSelect.innerHTML = `<option value="all">${i18n("filterYear")}</option>`;
      uniqueYears.forEach((yearValue) => {
        yearSelect.innerHTML += `<option value="${yearValue}">${yearValue}</option>`;
      });
    }

    const langSelect = document.querySelector("#filter-lang");
    if (langSelect) {
      langSelect.innerHTML = `<option value="all">${i18n("filterLanguage")}</option>`;
      DATA.languages.forEach((lang) => {
        langSelect.innerHTML += `<option value="${lang.id}">${lang.label}</option>`;
      });
    }

    const renderList = () => {
      const list = document.querySelector(".media-list");
      if (!list) return;
      const filtered = applyFilters(category.items);
      list.innerHTML = filtered
        .map((item) => {
          const label = t(item.title);
          const langCount = item.languages?.length || 1;
          const langLabels = item.languages?.map((l) => l.toUpperCase()).join(", ") || "";
          const fileCount = item.fileCount ? `${item.fileCount} fichiers` : "";
          const typeLabel = item.type === "file" ? "Fichier" : item.type === "folder" ? "Dossier" : item.type === "pack" ? "Pack" : "Lien";

          let action = "";
          if (item.type === "pack") {
            action = `<a class="btn" href="pack.html?pack=${item.packId}">${i18n("openPack")}</a>`;
          } else if (item.type === "link") {
            action = `<a class="btn ghost" href="${item.link}" target="_blank" rel="noreferrer">${i18n("productSheet")}</a>`;
          } else {
            action = `<button class="btn ghost" type="button" data-download="${item.id}">Télécharger</button>`;
          }

          return `
            <article class="media-item">
              <div class="media-icon">
                <img src="assets/icon-${item.type === "link" ? "link" : item.type}.svg" alt="" />
              </div>
              <div class="media-content">
                <h3>${label}</h3>
                <p>${typeLabel} · ${item.year} · ${langCount} langues · ${fileCount || item.size}</p>
                <div class="meta-line">
                  <span>${langLabels}</span>
                  <span>${item.size || ""}</span>
                </div>
              </div>
              <div class="media-actions">${action}</div>
            </article>
          `;
        })
        .join("");
    };

    renderList();

    document.querySelectorAll("#search, #filter-type, #filter-year, #filter-lang").forEach((input) => {
      input?.addEventListener("input", renderList);
      input?.addEventListener("change", renderList);
    });

    renderBreadcrumbs([
      { label: "Accueil", href: "home.html" },
      { label: brand.name, href: `brand.html?brand=${brand.id}` },
      { label: t(category.name) }
    ]);

    const packButton = document.querySelector(".pack-cta button");
    if (packButton) {
      packButton.addEventListener("click", () => openPackModal(category.packId));
    }
  };

  const openPackModal = (packId) => {
    const modal = document.querySelector(".modal");
    const pack = DATA.packs[packId];
    if (!modal || !pack) return;
    modal.querySelector("h3").textContent = t(pack.title);
    modal.querySelector("p").textContent = t(pack.description);
    modal.querySelector(".modal-size").textContent = pack.totalSize;
    const list = modal.querySelector("ul");
    list.innerHTML = pack.files.map((file) => `<li>${file.name} · ${file.type} · ${file.size}</li>`).join("");
    modal.classList.add("open");
  };

  const closeModal = () => {
    document.querySelector(".modal")?.classList.remove("open");
  };

  const renderPack = () => {
    const packId = getParam("pack");
    const pack = DATA.packs[packId];
    if (!pack) return;
    const brand = DATA.brands.find((item) => item.id === pack.brand);
    if (brand) setBrandAccent(brand);

    const header = document.querySelector(".pack-hero");
    header.querySelector("h1").textContent = t(pack.title);
    header.querySelector("p").textContent = t(pack.description);
    header.querySelector(".pack-size").textContent = pack.totalSize;
    header.querySelector(".pack-langs").textContent = pack.languages.map((l) => l.toUpperCase()).join(", ");

    const list = document.querySelector(".pack-files");
    list.innerHTML = pack.files.map((file) => `
      <li>
        <span>${file.name}</span>
        <span>${file.type}</span>
        <span>${file.size}</span>
      </li>
    `).join("");

    renderBreadcrumbs([
      { label: "Accueil", href: "home.html" },
      { label: brand?.name || "Marque", href: brand ? `brand.html?brand=${brand.id}` : "home.html" },
      { label: t(pack.title) }
    ]);
  };

  const initAuth = () => {
    const page = document.body.dataset.page;
    if (page !== "login" && !isAuthenticated()) {
      window.location.href = "login.html";
    }

    const logout = document.querySelector(".logout-btn");
    if (logout) {
      logout.addEventListener("click", () => {
        setAuth(false);
        window.location.href = "login.html";
      });
    }
  };

  const initLogin = () => {
    const form = document.querySelector("#login-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      setAuth(true);
      window.location.href = "home.html";
    });
  };

  const initLangSelector = () => {
    const selector = document.querySelector("#lang-select");
    if (!selector) return;
    selector.value = getLang();
    selector.addEventListener("change", (event) => {
      setLang(event.target.value);
      window.location.reload();
    });
  };

  const initModal = () => {
    const modal = document.querySelector(".modal");
    if (!modal) return;
    modal.querySelector(".modal-close")?.addEventListener("click", closeModal);
    modal.querySelector(".modal-overlay")?.addEventListener("click", closeModal);
  };

  const init = () => {
    initAuth();
    initLangSelector();
    updateI18n();
    initModal();

    switch (document.body.dataset.page) {
      case "home":
        renderHome();
        break;
      case "brand":
        renderBrand();
        break;
      case "category":
        renderCategory();
        break;
      case "pack":
        renderPack();
        break;
      case "login":
        initLogin();
        break;
      default:
        break;
    }
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", App.init);
