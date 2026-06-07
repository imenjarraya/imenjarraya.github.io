// Imen Jarraya — site script
// Publication filters + search

(function () {
  "use strict";

  // ---------- Publication filters ----------
  var filterButtons = document.querySelectorAll(".pub-filter");
  var searchInput = document.getElementById("pub-search-input");
  if (!filterButtons.length) return;

  var pubs = document.querySelectorAll(".pub");
  var activeFilter = "all";
  var activeSearch = "";

  function applyFilters() {
    pubs.forEach(function (pub) {
      var cat = pub.getAttribute("data-cat") || "";
      var year = pub.getAttribute("data-year") || "";
      var text = pub.textContent.toLowerCase();

      var matchesFilter =
        activeFilter === "all" ||
        cat === activeFilter ||
        year === activeFilter;

      var matchesSearch =
        activeSearch === "" || text.indexOf(activeSearch) !== -1;

      if (matchesFilter && matchesSearch) {
        pub.classList.remove("hidden");
      } else {
        pub.classList.add("hidden");
      }
    });

    // Hide empty section headers
    ["journal-list", "conf-list"].forEach(function (id) {
      var section = document.getElementById(id);
      if (!section) return;
      var visible = section.querySelectorAll(".pub:not(.hidden)").length;
      var heading = section.previousElementSibling;
      if (heading && heading.tagName === "H2") {
        heading.style.display = visible === 0 ? "none" : "";
      }
    });
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      activeSearch = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
})();
