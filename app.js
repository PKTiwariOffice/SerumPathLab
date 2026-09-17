/* ============================================================
   SERUM PATH LAB — Application Script
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919876543210';

  /* ==========================================================
     DATA
     ========================================================== */
  var CATEGORIES = [
    { id: 'all', label: 'All Tests' },
    { id: 'fullbody', label: 'Full Body Checkups' },
    { id: 'diabetes', label: 'Diabetes' },
    { id: 'cardiac', label: 'Cardiac' },
    { id: 'senior', label: 'Senior Citizen' },
    { id: 'anc', label: 'ANC Prenatal' },
    { id: 'thyroid', label: 'Thyroid' },
    { id: 'vitamin', label: 'Vitamin & Nutrition' },
    { id: 'basic', label: 'Routine Blood Tests' }
  ];

  var PACKAGES = [
    {
      id: 'essential-checkup',
      name: 'Essential Health Checkup',
      cat: 'fullbody',
      params: 63,
      price: 1599,
      discount: 999,
      fasting: '10–12 Hrs Fasting Required',
      turnaround: '24 Hrs',
      popular: true,
      desc: 'A smart baseline screen for adults covering blood counts, sugar, lipids, kidney and liver function — ideal for your annual preventive check.',
      tests: ['Complete Blood Count (CBC)', 'Fasting Blood Sugar', 'HbA1c', 'Lipid Profile', 'Kidney Function Test', 'Liver Function Test', 'Urine Routine', 'Vitamin D', 'Thyroid Profile (TSH)', 'Iron Studies', 'Calcium', 'Uric Acid']
    },
    {
      id: 'comprehensive-body',
      name: 'Comprehensive Full Body Checkup',
      cat: 'fullbody',
      params: 81,
      price: 2999,
      discount: 1799,
      fasting: '10–12 Hrs Fasting Required',
      turnaround: '24 Hrs',
      popular: true,
      desc: 'Our most complete health assessment with 81+ parameters — from cardiac and diabetes markers to liver, kidney, nutrition and doctor review.',
      tests: ['Complete Blood Count (CBC)', 'HbA1c', 'Fasting & Post-Prandial Sugar', 'Lipid Profile', 'Cardiac Risk Markers', 'Kidney Function Test', 'Liver Function Test', 'Thyroid Profile (T3, T4, TSH)', 'Vitamin D & B12', 'Iron Studies', 'Urine Routine & Microscopy', 'ECG (at center)', 'Chest X-Ray (at center)']
    },
    {
      id: 'diabetes-care',
      name: 'Diabetes Care Package',
      cat: 'diabetes',
      params: 28,
      price: 1399,
      discount: 699,
      fasting: '10–12 Hrs Fasting Required',
      turnaround: 'Same Day',
      desc: 'Complete monitoring panel for diabetics — HbA1c, glucose, kidney and lipid markers to keep your sugar control on track.',
      tests: ['HbA1c', 'Fasting Blood Sugar', 'Post-Prandial Blood Sugar', 'Kidney Function Test', 'Lipid Profile', 'Urine Routine (Microalbumin)', 'Serum Creatinine', 'Uric Acid', 'Blood Urea']
    },
    {
      id: 'cardiac-screen',
      name: 'Cardiac Health Screening',
      cat: 'cardiac',
      params: 32,
      price: 2290,
      discount: 1299,
      fasting: '10–12 Hrs Fasting Required',
      turnaround: '24 Hrs',
      desc: 'Early-warning panel for heart health covering lipids, cardiac enzymes, diabetes and lifestyle markers with a cardiology-ready report.',
      tests: ['Lipid Profile (Total, LDL, HDL, VLDL, Triglycerides)', 'HbA1c', 'Fasting Blood Sugar', 'Hs-CRP', 'Homocysteine', 'Lp(a)', 'Kidney Function Test', 'ECG (at center)', 'Blood Pressure Check']
    },
    {
      id: 'senior-gold',
      name: 'Senior Citizen Gold Package',
      cat: 'senior',
      params: 70,
      price: 3499,
      discount: 1999,
      fasting: '10–12 Hrs Fasting Required',
      turnaround: '24 Hrs',
      popular: true,
      desc: 'Specially designed for 60+ adults covering all vital systems, bone & vitamin health, joint markers and a doctor consultation.',
      tests: ['Complete Blood Count (CBC)', 'HbA1c', 'Fasting Blood Sugar', 'Lipid Profile', 'Kidney Function Test', 'Liver Function Test', 'Thyroid Profile', 'Vitamin D & B12', 'Calcium & Phosphorus', 'Uric Acid', 'Urine Routine', 'ECG (at center)']
    },
    {
      id: 'anc-premium',
      name: 'ANC Prenatal Premium',
      cat: 'anc',
      params: 45,
      price: 2790,
      discount: 1699,
      fasting: 'Non-Fasting',
      turnaround: '24 Hrs',
      desc: 'Comprehensive first-trimester screening for expectant mothers including Complete Blood Count, blood group, infections and iron studies.',
      tests: ['Complete Blood Count (CBC)', 'Blood Group & RH Factor', 'Hb Electrophoresis', 'Thyroid Profile', 'Blood Sugar', 'VDRL', 'HBsAg', 'HIV', 'TORCH Panel', 'Iron Studies', 'Urine Routine', 'Vitamin D']
    },
    {
      id: 'thyroid-profile',
      name: 'Thyroid Profile (T3, T4, TSH)',
      cat: 'thyroid',
      params: 7,
      price: 699,
      discount: 349,
      fasting: 'Non-Fasting',
      turnaround: 'Same Day',
      desc: 'Complete thyroid workup with Total T3, Total T4 and TSH by chemiluminescent immunoassay — the gold standard for thyroid evaluation.',
      tests: ['Triiodothyronine (T3)', 'Thyroxine (T4)', 'Thyroid Stimulating Hormone (TSH)']
    },
    {
      id: 'vitamin-panel',
      name: 'Vitamin D3 (25-OH) + B12 Panel',
      cat: 'vitamin',
      params: 6,
      price: 1290,
      discount: 649,
      fasting: 'Non-Fasting',
      turnaround: 'Same Day',
      desc: 'Deficiency is common in Indian adults. Measure your Vitamin D and B12 levels to plan diet and supplementation with your doctor.',
      tests: ['Vitamin D3 (25-Hydroxy)', 'Vitamin B12', 'Folate']
    },
    {
      id: 'cbc-single',
      name: 'Complete Blood Count (CBC)',
      cat: 'basic',
      params: 24,
      price: 450,
      discount: 199,
      fasting: 'Non-Fasting',
      turnaround: 'Same Day',
      desc: 'Basic health screen for anaemia, infection and blood disorders. Includes 24 blood parameters with expert pathologist review.',
      tests: ['Haemoglobin', 'Total RBC Count', 'Total WBC Count', 'Platelet Count', 'Packed Cell Volume', 'MCV / MCH / MCHC', 'Differential Count', 'Peripheral Smear']
    }
  ];

  var TEST_ITEMS = [
    'Complete Blood Count (CBC)', 'Thyroid Profile (T3, T4, TSH)',
    'Lipid Profile', 'HbA1c', 'Vitamin D (25-OH)', 'Vitamin B12',
    'Fasting Blood Sugar (FBS)', 'Post-Prandial Blood Sugar (PPBS)',
    'Kidney Function Test (KFT)', 'Liver Function Test (LFT)', 'Uric Acid',
    'Iron Studies / Ferritin', 'Calcium', 'Hormone Panel (FSH, LH, Prolactin)',
    'Dengue NS1 & IgG/IgM', 'Malaria Antigen Test', 'Typhoid (Widal)',
    'Urine Routine & Microscopy', 'CRP (C-Reactive Protein)', 'ESR',
    'Homocysteine', 'Lp(a)', 'Cardiac Risk Markers', 'Hb Electrophoresis',
    'TORCH Panel', 'ANC Prenatal Package', 'Senior Citizen Gold Package',
    'Full Body Checkup'
  ];

  var TESTIMONIALS = [
    { name: 'Sneha Agarwal', source: 'Google Review', since: '2 weeks ago', initials: 'SA', text: 'Booked the Comprehensive Full Body Checkup at 10 PM — a phlebotomist arrived at 7 AM next morning, fully sterile kit. Reports came on WhatsApp the same evening. Truly doorstep convenience!' },
    { name: 'Ramesh Sharma', source: 'Google Review', since: '1 month ago', initials: 'RS', text: 'I am 68 and cannot travel easily. Serum Path Lab\'s senior citizen package is a blessing. The technician was patient, gentle and explained everything. Results were verified-clear and accepted by my cardiologist.' },
    { name: 'Priya Nair', source: 'Verified Patient', since: '3 weeks ago', initials: 'PN', text: 'Very professional team. They called within 10 minutes of my WhatsApp prescription upload, advised the right tests and the collection was completely painless. Highly recommended for working parents.' },
    { name: 'Mohammed Ilyas', source: 'Google Review', since: '2 months ago', initials: 'MI', text: 'The thyroid profile and vitamin D tests were done at home for my wife. Report quality is excellent with reference ranges and doctor notes. Pricing is transparent — exactly what was quoted.' },
    { name: 'Divya Khare', source: 'Google Review', since: '3 months ago', initials: 'DK', text: 'Hands down the best diagnostic experience in the city. Sterile gear, temperature-controlled boxes, same-day digital reports, and the follow-up call from the consultant was genuinely caring. 5 stars.' }
  ];

  /* ==========================================================
     HELPERS
     ========================================================== */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function fmtINR(n) { return '\u20B9' + n.toLocaleString('en-IN'); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function isValidPhone(p) { return /^[6-9]\d{9}$/.test(String(p).trim()); }
  function normalize(str) { return String(str).toLowerCase().replace(/[^a-z0-9]/g, ''); }

  /* ==========================================================
     PACKAGE RENDERING
     ========================================================== */
  var state = { cat: 'all', query: '' };
  var pkgGrid = $('#packageGrid');
  var filtersEl = $('#catFilters');

  CATEGORIES.forEach(function (c) {
    var b = document.createElement('button');
    b.className = 'filter-chip' + (c.id === 'all' ? ' is-active' : '');
    b.setAttribute('data-cat', c.id);
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', c.id === 'all');
    b.textContent = c.label;
    filtersEl.appendChild(b);
  });

  function pkgCardHtml(p) {
    var off = Math.round(((p.price - p.discount) / p.price) * 100);
    return (
      '<article class="pkg-card reveal is-visible" data-id="' + p.id + '">' +
        (p.popular ? '<span class="pkg-badge popular">Most Popular</span>' : '<span class="pkg-badge">' + off + '% Off</span>') +
        '<div class="pkg-cat-row">' +
          '<span class="pkg-cat">' + (CATEGORIES.find(function (c) { return c.id === p.cat; }) || {}).label + '</span>' +
          '<span class="pkg-cat green">' + p.fasting + '</span>' +
        '</div>' +
        '<h3 class="pkg-name">' + esc(p.name) + '</h3>' +
        '<p class="pkg-desc-sm">' + esc(p.desc.slice(0, 82)) + '…</p>' +
        '<div class="pkg-stats">' +
          '<span class="pkg-stat">Includes ' + p.params + ' Parameters</span>' +
          '<span class="pkg-stat turn">' + p.turnaround + ' Reports</span>' +
        '</div>' +
        '<div class="pkg-price-row">' +
          '<span class="pkg-original">' + fmtINR(p.price) + '</span>' +
          '<span class="pkg-price">' + fmtINR(p.discount) + '</span>' +
          '<span class="pkg-off">' + off + '% Off</span>' +
        '</div>' +
        '<div class="pkg-actions">' +
          '<button class="btn-view" data-view="' + p.id + '" aria-label="View details of ' + esc(p.name) + '">View Details</button>' +
          '<button class="btn btn-primary btn-sm" data-book="' + p.id + '">Book Now</button>' +
        '</div>' +
      '</article>'
    );
  }

  function renderPackages() {
    var q = normalize(state.query);
    var filtered = PACKAGES.filter(function (p) {
      var inCat = state.cat === 'all' || p.cat === state.cat;
      if (!inCat) return false;
      if (!q) return true;
      return normalize(p.name + ' ' + (p.tests || []).join(' ') + ' ' + p.cat).indexOf(q) !== -1;
    });
    pkgGrid.innerHTML = filtered.map(pkgCardHtml).join('');
    if (filtered.length === 0) {
      pkgGrid.innerHTML = '';
    }
    $('#emptyState').hidden = filtered.length > 0;
    var count = $('#searchCount');
    if (count) count.textContent = filtered.length + ' result' + (filtered.length === 1 ? '' : 's');
  }
  renderPackages();

  filtersEl.addEventListener('click', function (e) {
    var chip = e.target.closest('.filter-chip');
    if (!chip) return;
    state.cat = chip.getAttribute('data-cat');
    $$('.filter-chip', filtersEl).forEach(function (c) {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-selected', c === chip ? 'true' : 'false');
    });
    renderPackages();
  });

  $('#testSearch').addEventListener('input', function (e) {
    state.query = e.target.value;
    renderPackages();
  });

  /* ==========================================================
     BOOKING FORM + AUTOCOMPLETE
     ========================================================== */
  var bkTest = $('#bkTest');
  var bkSuggestions = $('#bkSuggestions');
  var bkTestClear = $('#bkTestClear');
  var bkTime = $('#bkTime');

  function matchTests(q) {
    if (!q) return [];
    var n = normalize(q);
    return TEST_ITEMS.filter(function (t) { return normalize(t).indexOf(n) !== -1; }).slice(0, 6);
  }

  bkTest.addEventListener('input', function () {
    var q = bkTest.value.trim();
    var matches = matchTests(q);
    bkSuggestions.innerHTML = '';
    if (!matches.length) { bkSuggestions.classList.remove('is-open'); return; }
    matches.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      li.setAttribute('role', 'option');
      li.addEventListener('click', function () { bkTest.value = t; closeSug(); setBkTestValid(true); });
      bkSuggestions.appendChild(li);
    });
    bkSuggestions.classList.add('is-open');
    bkTest.setAttribute('aria-expanded', 'true');
  });

  function closeSug() { bkSuggestions.classList.remove('is-open'); bkTest.setAttribute('aria-expanded', 'false'); }

  bkTest.addEventListener('blur', function () { setTimeout(closeSug, 150); });
  bkTestClear.addEventListener('click', function () { bkTest.value = ''; bkTestClear.hidden = true; closeSug(); setBkTestValid(false, true); bkTest.focus(); });

  function setBkTestValid(ok, forced) {
    var f = bkTest.closest('.field');
    if (ok) { f.classList.remove('has-error'); bkTestClear.hidden = false; }
    else if (forced) { f.classList.add('has-error'); }
  }

  /* Phone validation live */
  $$('input[type="tel"]').forEach(function (el) {
    el.addEventListener('input', function () {
      el.value = el.value.replace(/\D/g, '').slice(0, 10);
      el.closest('.field').classList.remove('has-error');
    });
  });

  function setFieldError(field, hasError) {
    var f = field.closest('.field');
    if (hasError) f.classList.add('has-error'); else f.classList.remove('has-error');
  }

  /* Date min = today */
  var bkDate = $('#bkDate');
  function setMinDate() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    bkDate.min = d.toISOString().slice(0, 10);
  }
  setMinDate();

  var bookingForm = $('#bookingForm');
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateBooking()) return;

    var name = $('#bkName').value.trim();
    var phone = $('#bkPhone').value.trim();
    var test = bkTest.value.trim();
    var date = bkDate.value;
    var time = bkTime.value;

    fillConfirm(name, phone, test, date, time);
    openModal('confirmModal');

    var fa = $('#bkName').closest('.field');
    var dLbl = bkDate.closest('.field');
    var tLbl = bkTime.closest('.field');
    [fa, dLbl, tLbl].forEach(function (f) {
      if (f) { if (f.querySelector('input')) f.querySelector('input').value = ''; if (f.querySelector('select')) f.querySelector('select').value = ''; }
    });
    bkTest.value = ''; bkTestClear.hidden = true;
  });

  function validateBooking() {
    var ok = true;
    var name = $('#bkName'), phone = $('#bkPhone'), test = bkTest, date = bkDate, time = bkTime;
    setFieldError(name, !name.value.trim().length);
    setFieldError(phone, !isValidPhone(phone.value));
    var testField = test.closest('.field'), testValid = TEST_ITEMS.concat(PACKAGES.map(function (p) { return p.name; })).some(function (t) { return normalize(t) === normalize(test.value.trim()) || normalize(t).indexOf(normalize(test.value.trim())) !== -1; });
    if (!test.value.trim() || !testValid) { setBkTestValid(false, true); ok = false; } else setBkTestValid(true);
    setFieldError(date, !date.value);
    setFieldError(time, !time.value);
    if (!name.value.trim()) ok = false;
    if (!isValidPhone(phone.value)) ok = false;
    if (!date.value) ok = false;
    if (!time.value) ok = false;
    return ok && testValid;
  }

  /* Pre-filled fields from package cards */
  function bookPackage(id) {
    var p = PACKAGES.find(function (x) { return x.id === id; });
    if (!p) return;
    bkTest.value = p.name;
    bkTestClear.hidden = false;
    closeSug();
    $('#booking').scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(function () { $('#bkName').focus(); }, 500);
  }

  pkgGrid.addEventListener('click', function (e) {
    var view = e.target.closest('[data-view]');
    var book = e.target.closest('[data-book]');
    if (view) openPackage(view.getAttribute('data-view'));
    if (book) bookPackage(book.getAttribute('data-book'));
  });

  /* ==========================================================
     PACKAGE DETAIL MODAL
     ========================================================== */
  function openPackage(id) {
    var p = PACKAGES.find(function (x) { return x.id === id; });
    if (!p) return;
    var off = Math.round(((p.price - p.discount) / p.price) * 100);
    $('#pkgCat').textContent = (CATEGORIES.find(function (c) { return c.id === p.cat; }) || {}).label;
    $('#pkgTitle').textContent = p.name;
    $('#pkgFast').textContent = p.fasting;
    $('#pkgParams').textContent = 'Includes ' + p.params + ' Parameters';
    $('#pkgDesc').textContent = p.desc;
    $('#pkgTests').innerHTML = p.tests.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    $('#pkgOriginal').textContent = fmtINR(p.price);
    $('#pkgPrice').textContent = fmtINR(p.discount);
    $('#pkgOff').textContent = off + '% Off';
    $('#pkgBook').setAttribute('data-book-id', p.id);
    openModal('pkgModal');
  }
  $('#pkgBook').addEventListener('click', function () {
    closeModal('pkgModal');
    bookPackage(this.getAttribute('data-book-id'));
  });

  /* ==========================================================
     CONFIRMATION MODAL / WHATSAPP
     ========================================================== */
  function fillConfirm(name, phone, test, date, time) {
    var d = new Date(date + 'T00:00:00');
    var prettyDate = isNaN(d.getTime()) ? date : d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    $('#confirmName').textContent = name.split(' ')[0];
    $('#confirmPhone').textContent = '+91 ' + phone;
    $('#confirmDetail').innerHTML =
      '<p><span>Test / Package:</span> ' + esc(test) + '</p>' +
      '<p><span>Preferred Date:</span> ' + esc(prettyDate) + '</p>' +
      '<p><span>Time Slot:</span> ' + esc(time) + '</p>';
    var wa = 'Hi Serum Path Lab, I would like to book home sample collection.\n' +
      'Name: ' + name + '\nMobile: ' + phone + '\nTest: ' + test + '\nPreferred: ' + date + ' ' + time;
    $('#confirmWhatsApp').setAttribute('href', 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(wa));
  }

  /* ==========================================================
     MODALS
     ========================================================== */
  function openModal(id) {
    var m = document.getElementById(id);
    m.hidden = false;
    document.body.style.overflow = 'hidden';
    var f = m.querySelector('input');
    if (f) setTimeout(function () { f.focus(); }, 60);
  }
  function closeModal(id) {
    var m = document.getElementById(id);
    m.hidden = true;
    document.body.style.overflow = '';
  }

  $$('.modal').forEach(function (m) {
    m.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) {
        var id = e.target.closest('[data-close]').getAttribute('data-close');
        closeModal(id);
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      $$('.modal').forEach(function (m) { if (!m.hidden) m.hidden = true; });
      document.body.style.overflow = '';
    }
  });

  /* Modal open triggers in header / footer / mobile nav */
  $$('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(btn.getAttribute('data-open'));
    });
  });

  var reportTriggerBtns = $$('.report-trigger, .download-trigger');
  reportTriggerBtns.forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      openModal('reportModal');
    });
  });

  /* ==========================================================
     DOWNLOAD REPORT FORM
     ========================================================== */
  $('#reportForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var id = $('#rpId'), phone = $('#rpPhone');
    var ok = true;
    if (!id.value.trim()) { setFieldError(id, true); ok = false; } else setFieldError(id, false);
    if (!isValidPhone(phone.value)) { setFieldError(phone, true); ok = false; } else setFieldError(phone, false);
    if (!ok) return;
    showToast('Report matching ID "' + esc(id.value.trim()) + '" is being prepared.');
    var text2 = 'Hi Serum Path Lab, please send the report for Patient ID: ' + id.value.trim() + ' on WhatsApp.';
    var a2 = document.createElement('a');
    a2.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text2);
    a2.target = '_blank';
    a2.rel = 'noopener';
    a2.click();
    $('#reportModal').hidden = true;
    document.body.style.overflow = '';
    $('#rpId').value = ''; $('#rpPhone').value = '';
  });

  /* ==========================================================
     PRESCRIPTION UPLOAD
     ========================================================== */
  var dropzone = $('#dropzone');
  var fileInput = $('#fileInput');
  var fileList = $('#fileList');
  var filesStore = [];
  var MAX_FILES = 3, MAX_SIZE = 10 * 1024 * 1024;

  dropzone.addEventListener('click', function () { fileInput.click(); });
  dropzone.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
  });
  ['dragenter', 'dragover'].forEach(function (ev) {
    dropzone.addEventListener(ev, function (e) { e.preventDefault(); dropzone.classList.add('is-drag'); });
  });
  ['dragleave', 'drop'].forEach(function (ev) {
    dropzone.addEventListener(ev, function (e) { e.preventDefault(); dropzone.classList.remove('is-drag'); });
  });
  dropzone.addEventListener('drop', function (e) { addFiles(Array.prototype.slice.call(e.dataTransfer.files)); });
  fileInput.addEventListener('change', function () { addFiles(Array.prototype.slice.call(fileInput.files)); fileInput.value = ''; });

  function addFiles(newFiles) {
    newFiles.forEach(function (f) {
      if (filesStore.length >= MAX_FILES) return;
      var okExt = /\.(jpe?g|png|pdf)$/i.test(f.name);
      if (!okExt) { showToast('Only JPG, PNG or PDF files allowed.'); return; }
      if (f.size > MAX_SIZE) { showToast('File "' + f.name + '" exceeds 10 MB.'); return; }
      filesStore.push(f);
      var li = document.createElement('li');
      li.className = 'file-item';
      li.innerHTML = '<span>📄</span> <span>' + esc(f.name) + '</span> <button type="button" class="file-remove" aria-label="Remove file">×</button>';
      li.querySelector('.file-remove').addEventListener('click', function () {
        filesStore = filesStore.filter(function (x) { return x !== f; });
        li.remove();
      });
      fileList.appendChild(li);
    });
  }

  function showToast(msg) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.role = 'status';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('is-show'); }, 20);
    setTimeout(function () { t.classList.remove('is-show'); setTimeout(function () { t.remove(); }, 400); }, 3200);
  }

  $('#rxForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var phone = $('#rxPhone'), addr = $('#rxAddress');
    var ok = true;
    if (!isValidPhone(phone.value)) { setFieldError(phone, true); ok = false; } else setFieldError(phone, false);
    if (!addr.value.trim()) { setFieldError(addr, true); ok = false; } else setFieldError(addr, false);
    if (!ok) return;
    if (!filesStore.length) { showToast('Please attach at least one prescription file.'); return; }
    var wa = 'Hi Serum Path Lab, I am uploading my prescription for home sample collection.\n' +
      'Mobile: ' + phone.value + '\nAddress: ' + addr.value + '\nAttachments: ' + filesStore.map(function (f) { return f.name; }).join(', ');
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(wa), '_blank');
    filesStore = []; fileList.innerHTML = '';
    $('#rxPhone').value = ''; $('#rxAddress').value = '';
  });

  /* ==========================================================
     TESTIMONIAL CAROUSEL
     ========================================================== */
  var track = $('#testimonialTrack');
  var dotsEl = $('#carouselDots');
  var cur = 0;
  var n = TESTIMONIALS.length;

  TESTIMONIALS.forEach(function (t, i) {
    var card = document.createElement('div');
    card.className = 't-card';
    card.innerHTML =
      '<div class="t-head">' +
        '<span class="t-avatar">' + esc(t.initials) + '</span>' +
        '<div><p class="t-name">' + esc(t.name) + '</p>' +
        '<p class="t-source">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 4.6a10 10 0 00-3.8-2.3 9.9 9.9 0 00-6.9.5 6 6 0 00-2 1 3.4 3.4 0 01-2 .2 2.5 2.5 0 00-1.4 2.6c.1 1 .7 2 .9 3.1.2 1 .1 2-.4 2.8a7 7 0 01-.5.7c-.3.4-.4 1 .1 1.4a9 9 0 002.3 1.8 1.6 1.6 0 01.4 2.2 9 9 0 002.4.5h.4a9.9 9.9 0 006-2.7l2.5-.6A10 10 0 0021.6 4.6z" fill="#4285F4"/><circle cx="8.5" cy="10.5" r="1.3" fill="#fbbc05" transform="rotate(45 8.5 10.5)"/></svg>' +
          esc(t.source) + ' · ' + esc(t.since) +
        '</p></div>' +
      '</div>' +
      '<div class="t-stars" aria-label="5 out of 5 stars">★★★★★</div>' +
      '<p class="t-text">"' + esc(t.text) + '"</p>';
    track.appendChild(card);
    var dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
    dot.setAttribute('role', 'tab');
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', function () { go(i); });
    dotsEl.appendChild(dot);
  });

  function go(i) {
    cur = (i + n) % n;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    $$('.carousel-dots button').forEach(function (d, di) { d.classList.toggle('is-active', di === cur); });
  }
  $('#prevBtn').addEventListener('click', function () { go(cur - 1); });
  $('#nextBtn').addEventListener('click', function () { go(cur + 1); });

  var autoTimer = setInterval(function () { go(cur + 1); }, 5200);
  var carousel = $('.carousel');
  carousel.addEventListener('mouseenter', function () { clearInterval(autoTimer); });
  carousel.addEventListener('mouseleave', function () { autoTimer = setInterval(function () { go(cur + 1); }, 5200); });
  carousel.addEventListener('touchstart', function () { clearInterval(autoTimer); }, { passive: true });

  var touchX = null;
  carousel.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 45) go(dx < 0 ? cur + 1 : cur - 1);
    touchX = null;
  }, { passive: true });

  /* ==========================================================
     HEADER / NAV — Desktop + Mobile Drawer
     ========================================================== */
  var header = $('#siteHeader');
  var navToggle = $('#navToggle');
  var mobileDrawer = $('#mobileDrawer');
  var drawerBackdrop = $('#drawerBackdrop');
  var drawerClose = $('#drawerClose');

  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    $('#scrollTop').hidden = window.scrollY < 600;
  }, { passive: true });

  function openDrawer() {
    mobileDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-visible');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    mobileDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-visible');
    navToggle.setAttribute('aria-expanded', 'false');
    if (!$$('.modal').some(function (m) { return !m.hidden; })) {
      document.body.style.overflow = '';
    }
  }

  navToggle.addEventListener('click', function () {
    if (mobileDrawer.classList.contains('is-open')) { closeDrawer(); } else { openDrawer(); }
  });
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  mobileDrawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeDrawer();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) closeDrawer();
  });

  if (window.matchMedia) {
    var desktopQuery = window.matchMedia('(min-width: 1024px)');
    var onDesktopChange = function (e) { if (e.matches) closeDrawer(); };
    if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);
    else if (desktopQuery.addListener) desktopQuery.addListener(onDesktopChange);
  }

  /* Active nav link on scroll (desktop + drawer) */
  var sections = ['home', 'tests', 'packages', 'prescription', 'reviews', 'faq', 'contact'].map(function (id) {
    return document.getElementById(id);
  });
  window.addEventListener('scroll', function () {
    var pos = window.scrollY + 120;
    var current = 'home';
    sections.forEach(function (sec) {
      if (sec && sec.offsetTop <= pos) current = sec.id;
    });
    $$('.nav-link, .drawer-link').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  $('#scrollTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ==========================================================
     FOOTER QUICK SEARCH LINKS
     ========================================================== */
  $$('[data-search]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      $('#testSearch').value = this.getAttribute('data-search');
      state.query = this.getAttribute('data-search');
      renderPackages();
      $('#tests').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ==========================================================
     REVEAL ON SCROLL
     ========================================================== */
  var revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); revealObserver.unobserve(en.target); }
    });
  }, { threshold: 0.12 }) : null;

  function observeReveals() {
    $$('.reveal:not(.is-visible)').forEach(function (el) {
      if (revealObserver) revealObserver.observe(el); else el.classList.add('is-visible');
    });
  }
  observeReveals();
  window.addEventListener('load', observeReveals);

  /* Toast styles are injected dynamically (kept lean) */
  function injectToastStyles() {
    var s = document.createElement('style');
    s.textContent = '.toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);background:#0a1d44;color:#fff;padding:13px 22px;border-radius:12px;font-size:14px;z-index:200;box-shadow:0 12px 30px rgba(0,0,0,.25);opacity:0;transition:all .3s ease;max-width:88vw;text-align:center}.toast.is-show{opacity:1;transform:translateX(-50%) translateY(0)}';
    document.head.appendChild(s);
  }
  injectToastStyles();

  $('#year').textContent = new Date().getFullYear();
})();