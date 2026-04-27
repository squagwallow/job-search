// LinkedIn Job Extractor Bookmarklet
// Paste the minified version in linkedin-extractor.bookmarklet.txt as a browser bookmark URL.
// Run on any LinkedIn jobs search results page.
// Copies a markdown block to clipboard ready to paste into triage.

(function () {
  var results = [];
  var seen = new Set();
  var idx = 1;

  // LinkedIn job cards -- covers both list and grid layouts
  var cards = document.querySelectorAll(
    '.jobs-search__results-list > li, '
    + '.scaffold-layout__list-container > ul > li, '
    + '.job-card-container, '
    + '.base-card'
  );

  cards.forEach(function (card) {
    // Job ID from data attribute or URL
    var jobId = card.getAttribute('data-job-id')
      || card.getAttribute('data-entity-urn');

    if (jobId) {
      // entity urn format: urn:li:jobPosting:1234567 -- extract number
      jobId = jobId.replace(/.*:(\d+)$/, '$1');
    }

    // Fallback: extract from link href
    if (!jobId) {
      var link = card.querySelector('a[href*="/jobs/view/"]');
      if (link) {
        var m = link.href.match(/\/jobs\/view\/(\d+)/);
        if (m) jobId = m[1];
      }
    }

    if (!jobId || seen.has(jobId)) return;
    seen.add(jobId);

    var titleEl = card.querySelector(
      '.job-card-list__title, '
      + '.base-search-card__title, '
      + 'a.job-card-container__link span[aria-hidden], '
      + '.jobs-unified-top-card__job-title a, '
      + 'a[data-control-name="job_card_title"]'
    );
    if (!titleEl) return;

    var title = titleEl.innerText.trim();
    var url = 'https://www.linkedin.com/jobs/view/' + jobId + '/';

    var companyEl = card.querySelector(
      '.job-card-container__primary-description, '
      + '.base-search-card__subtitle, '
      + '.job-card-container__company-name, '
      + 'a[data-control-name="job_card_company"]'
    );

    var locationEl = card.querySelector(
      '.job-card-container__metadata-item, '
      + '.base-search-card__metadata, '
      + '.job-card-container__metadata-wrapper li'
    );

    // Salary: LinkedIn sometimes shows it in a metadata badge
    var salaryEl = card.querySelector(
      '.job-card-container__salary-info, '
      + '[class*="salary"], '
      + '.job-search-card__salary-info'
    );

    // Posted time
    var timeEl = card.querySelector(
      'time, .job-card-container__listed-time, '
      + '.base-search-card__metadata time'
    );

    // Work type badge (Remote, Hybrid, On-site)
    var workTypeEl = card.querySelector(
      '.job-card-container__metadata-item--workplace-type, '
      + '[class*="workplace"]'
    );

    var company  = companyEl  ? companyEl.innerText.trim()  : 'unknown';
    var location = locationEl ? locationEl.innerText.trim() : 'unknown';
    var salary   = salaryEl   ? salaryEl.innerText.trim()   : 'not listed';
    var posted   = timeEl     ? (timeEl.getAttribute('datetime') || timeEl.innerText.trim()) : 'unknown';
    var workType = workTypeEl ? workTypeEl.innerText.trim() : '';

    // Combine location + work type if both present
    if (workType && !location.toLowerCase().includes(workType.toLowerCase())) {
      location = location + ' (' + workType + ')';
    }

    results.push(
      '## ' + idx + '. [' + title + '](' + url + ')\n'
      + '- Company: '  + company  + '\n'
      + '- Location: ' + location + '\n'
      + '- Salary: '   + salary   + '\n'
      + '- Posted: '   + posted   + '\n'
    );
    idx++;
  });

  if (results.length === 0) {
    alert('No listings found. Make sure you are on a LinkedIn Jobs search results page and results have loaded.');
    return;
  }

  var source = window.location.href;
  var date   = new Date().toISOString().split('T')[0];
  var output = '# LinkedIn ' + date + '\n\nSource: ' + source + '\n\n'
               + results.join('\n');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(output).then(function () {
      alert('Copied ' + results.length + ' LinkedIn listings to clipboard.');
    });
  } else {
    var el = document.createElement('textarea');
    el.value = output;
    el.style.position = 'fixed';
    el.style.top = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied ' + results.length + ' LinkedIn listings to clipboard.');
  }
})();
