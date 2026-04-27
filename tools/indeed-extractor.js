// Indeed Job Extractor Bookmarklet
// Paste the minified version below as a browser bookmark URL.
// Run on any Indeed search results page.
// Copies a markdown block to clipboard ready to paste into triage.

(function () {
  // Extract job key from any Indeed URL format
  function extractJobKey(url) {
    if (!url) return null;
    // Standard viewjob URL
    var vjk = url.match(/[?&]jk=([a-f0-9]+)/);
    if (vjk) return vjk[1];
    // Pagead URL: job key is in vjk param of the referring search URL,
    // but individual tiles embed it in data-jk attribute -- see below.
    return null;
  }

  function cleanUrl(jk) {
    return jk ? 'https://www.indeed.com/viewjob?jk=' + jk : null;
  }

  var results = [];
  var seen = new Set();
  var idx = 1;

  // Primary tile selector -- covers current Indeed DOM
  var tiles = document.querySelectorAll(
    '.job_seen_beacon, .jobsearch-ResultsList > li[data-jk], li[data-jk]'
  );

  tiles.forEach(function (tile) {
    // Job key from data attribute (most reliable)
    var jk = tile.getAttribute('data-jk') ||
              tile.getAttribute('data-job-id');

    // Fallback: try to pull jk from the title link href
    if (!jk) {
      var link = tile.querySelector('[data-testid="jobTitle"] a, .jcs-JobTitle a, h2 a');
      if (link) jk = extractJobKey(link.href);
    }

    // Skip dupes
    if (!jk || seen.has(jk)) return;
    seen.add(jk);

    var titleEl = tile.querySelector(
      '[data-testid="jobTitle"] a, .jcs-JobTitle a, h2 a'
    );
    if (!titleEl) return;

    var title   = titleEl.innerText.trim();
    var url     = cleanUrl(jk) || titleEl.href;

    var companyEl  = tile.querySelector('[data-testid="company-name"], .companyName');
    var locationEl = tile.querySelector('[data-testid="text-location"], .companyLocation');
    var salaryEl   = tile.querySelector(
      '[data-testid="attribute_snippet_testid"], .salary-snippet-container, '
      + '.estimated-salary span, [class*="salary"]'
    );
    var typeEls    = tile.querySelectorAll('.jobMetaDataGroup li, .metadata li, [data-testid="attribute_snippet_testid"]');
    var snippetEl  = tile.querySelector('.job-snippet, [data-testid="job-snippet"]');

    var company  = companyEl  ? companyEl.innerText.trim()  : 'unknown';
    var location = locationEl ? locationEl.innerText.trim() : 'unknown';
    var salary   = salaryEl   ? salaryEl.innerText.trim()   : 'not listed';

    var typeParts = [];
    typeEls.forEach(function (el) {
      var t = el.innerText.trim();
      if (t && !typeParts.includes(t)) typeParts.push(t);
    });
    var jobType = typeParts.join(' | ') || 'not listed';

    var snippet  = snippetEl  ? snippetEl.innerText.trim()  : '';

    // Clean location: remove distance prefix ("25 min · ")
    location = location.replace(/^[\d]+ min\s*[·•]\s*/i, '').trim();

    results.push(
      '## ' + idx + '. [' + title + '](' + url + ')\n' +
      '- Company: '  + company  + '\n' +
      '- Location: ' + location + '\n' +
      '- Salary: '   + salary   + '\n' +
      '- Type: '     + jobType  + '\n' +
      (snippet ? '- Snippet: ' + snippet.replace(/\n/g, ' ') + '\n' : '')
    );
    idx++;
  });

  if (results.length === 0) {
    alert('No listings found. Make sure you are on an Indeed search results page and the results have loaded.');
    return;
  }

  var source = window.location.href;
  var date   = new Date().toISOString().split('T')[0];
  var output = '# Indeed extract — ' + date + '\n\nSource: ' + source + '\n\n' +
               results.join('\n');

  // Copy to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(output).then(function () {
      alert('Copied ' + results.length + ' listings to clipboard.');
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
    alert('Copied ' + results.length + ' listings to clipboard.');
  }
})();
