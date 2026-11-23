"use strict";

// Shared helpers (new JS syntax: const, arrow functions, template literals)
const $ = (id) => document.getElementById(id);

const peso = (n) =>
  `₱${n.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const show = (id, html, isError = false) => {
  const el = $(id);
  el.innerHTML = html;
  el.classList.toggle("error", isError);
};

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
