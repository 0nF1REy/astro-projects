(function () {
  const translations = {
    "Secured by": "Protegido por",
    "Development mode": "Modo de desenvolvimento",
  };

  function translateTextNodes(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue) continue;
      let newVal = node.nodeValue;
      for (const [en, pt] of Object.entries(translations)) {
        const pattern = en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (newVal.includes(en) || new RegExp(pattern, "u").test(newVal))
          newVal = newVal.replace(new RegExp(pattern, "gu"), pt);
      }
      if (newVal !== node.nodeValue) node.nodeValue = newVal;
    }
  }

  translateTextNodes();

  function translateAttributes(root = document.body) {
    const attrs = ["aria-label", "title", "alt", "value"];
    root.querySelectorAll("*").forEach((el) => {
      attrs.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        if (attr === "value" && el.tagName.toLowerCase() !== "button") return;
        const orig = el.getAttribute(attr);
        if (!orig) return;
        let newVal = orig;
        for (const [en, pt] of Object.entries(translations)) {
          const pattern = en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          if (newVal.includes(en) || new RegExp(pattern, "u").test(newVal))
            newVal = newVal.replace(new RegExp(pattern, "gu"), pt);
        }
        if (newVal !== orig) el.setAttribute(attr, newVal);
      });
    });
  }

  translateAttributes();

  const mo = new MutationObserver(() => {
    translateTextNodes();
    translateAttributes();
  });
  mo.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
})();
