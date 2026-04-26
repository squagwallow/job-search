project_slug: job-search
doc_type: tooling
updated_at: 2026-04-26
url: https://cdn.jsdelivr.net/gh/squagwallow/job-search@main/docs/extraction-bookmarklets.md

# Extraction Bookmarklets

Browser bookmarklets that walk a search results page DOM and copy each job tile to the clipboard as a markdown block with the link preserved as `[title](url)`.

Why this exists: a raw `Cmd-A` page copy strips URLs (links are HTML attributes, not visible text). Without preserved links, the Claude Project triage output cannot deterministically point back at specific listings, which breaks the loop. These bookmarklets fix that.

## How to install a bookmarklet

For each platform below:

1. Open your browser bookmark manager (Chrome: `Cmd-Option-B`; Safari: Bookmarks menu → Edit Bookmarks).
2. Create a new bookmark in a folder named `JS-Extract`.
3. Set the bookmark name (e.g. `Extract Upwork`).
4. Paste the entire `javascript:...` line from the relevant block below into the bookmark's URL/address field.
5. Save.

Verify: open a search results page, click the bookmark in the bookmarks bar, expect an alert "Copied N jobs to clipboard." Paste the clipboard into a scratchpad to confirm the format.

## Bookmarklet — Upwork

Run on a search results page (URL like `upwork.com/nx/search/jobs/?q=...&sort=recency`). DOM selectors are best-guess; verify on first use and tune via DevTools (right-click a job tile → Inspect) if extraction returns 0 jobs or wrong fields.

```javascript
javascript:(function(){const tiles=document.querySelectorAll('article[data-test="JobTile"], section[data-test="JobTile"], [data-test="job-tile-list"] > article, [data-test="job-tile-list"] > section');const out=[];out.push('# Upwork extract — '+new Date().toISOString().slice(0,10));out.push('Source: '+window.location.href);out.push('Tiles found: '+tiles.length);out.push('');tiles.forEach((t,i)=>{const a=t.querySelector('h2 a, [data-test="job-tile-title"] a, h3 a');const title=(a&&a.textContent||'').trim();const url=a&&a.href||'';const posted=(t.querySelector('[data-test="job-pubilshed-date"], small[data-test], small.text-light')||{}).textContent||'';const type=(t.querySelector('[data-test="job-type"], [data-test="job-type-label"]')||{}).textContent||'';const budget=(t.querySelector('[data-test="budget"], [data-test="is-fixed-price"], [data-test="is-hourly"]')||{}).textContent||'';const skills=Array.from(t.querySelectorAll('[data-test="attr-item"], .air3-token, [data-test="token"]')).map(s=>s.textContent.trim()).filter(Boolean).join(', ');const verified=t.querySelector('[data-test="payment-verified"]')?'verified':'';const rating=(t.querySelector('[data-test="rating"], .air3-rating-value-text')||{}).textContent||'';const spent=(t.querySelector('[data-test="formatted-amount"], [data-test="client-spendings"]')||{}).textContent||'';const country=(t.querySelector('[data-test="client-country"]')||{}).textContent||'';const proposals=(t.querySelector('[data-test="proposals"], [data-test="proposals-tier"]')||{}).textContent||'';const desc=((t.querySelector('[data-test="job-description-text"], [data-test="UpCLineClamp"] span, .description span')||{}).textContent||'').trim().slice(0,500);out.push('## '+(i+1)+'. ['+title+']('+url+')');out.push('- Posted: '+posted.trim());out.push('- Type: '+type.trim()+' | Budget: '+budget.trim());out.push('- Client: '+[verified,rating.trim(),spent.trim(),country.trim()].filter(Boolean).join(' · '));out.push('- Proposals: '+proposals.trim());if(skills)out.push('- Skills: '+skills);out.push('- Description: '+desc);out.push('');});const text=out.join('\n');navigator.clipboard.writeText(text).then(()=>alert('Copied '+tiles.length+' Upwork jobs to clipboard ('+text.length+' chars)')).catch(e=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);alert('Copied '+tiles.length+' jobs (fallback method)');});})();
```

Selector rationale (why these were chosen):
- Tile container: `article[data-test="JobTile"]` is Upwork's standard job-tile element. Fallback to `section` and to children of `[data-test="job-tile-list"]` in case Upwork redesigns.
- Title link: `h2 a` is the typical title element; fallbacks to `[data-test="job-tile-title"]` and `h3 a`.
- Posted: `data-test="job-pubilshed-date"` (note: Upwork has historically had this typo on "pubilshed"; if Upwork ever fixes it, the selector breaks).
- Other fields use `data-test` attributes when available.

If extraction returns 0 jobs: open DevTools, inspect a tile, find the actual outermost element with a `data-test` attribute, and replace the `tiles` querySelectorAll selector.

## Bookmarklet — LinkedIn

Run on a saved-search results page or `/jobs/search/` results. LinkedIn obfuscates class names heavily and lazy-loads jobs as you scroll, so you may need to scroll to the bottom of the visible list before clicking the bookmarklet.

```javascript
javascript:(function(){const tiles=document.querySelectorAll('div.job-card-container, li.jobs-search-results__list-item, div.base-card[data-entity-urn*="jobPosting"]');const out=[];out.push('# LinkedIn extract — '+new Date().toISOString().slice(0,10));out.push('Source: '+window.location.href);out.push('Tiles found: '+tiles.length);out.push('');tiles.forEach((t,i)=>{const a=t.querySelector('a.job-card-list__title, a.base-card__full-link, a.job-card-container__link');const title=((a&&(a.querySelector('span[aria-hidden]')||a)).textContent||'').trim();let url=a&&a.href||'';if(url&&!url.startsWith('http'))url='https://www.linkedin.com'+url;const company=((t.querySelector('span.job-card-container__primary-description, h4.base-search-card__subtitle, a.job-card-container__company-name')||{}).textContent||'').trim();const location=((t.querySelector('li.job-card-container__metadata-item, span.job-search-card__location')||{}).textContent||'').trim();const posted=((t.querySelector('time, .job-search-card__listdate')||{}).textContent||'').trim();const flags=Array.from(t.querySelectorAll('li.job-card-container__metadata-item--workplace-type, .job-card-container__footer-item')).map(s=>s.textContent.trim()).filter(Boolean).join(' · ');out.push('## '+(i+1)+'. ['+title+']('+url+')');out.push('- Company: '+company);out.push('- Location: '+location);out.push('- Posted: '+posted);if(flags)out.push('- Tags: '+flags);out.push('');});const text=out.join('\n');navigator.clipboard.writeText(text).then(()=>alert('Copied '+tiles.length+' LinkedIn jobs ('+text.length+' chars)')).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);alert('Copied '+tiles.length+' jobs (fallback)');});})();
```

LinkedIn caveats:
- LinkedIn lazy-loads results. Scroll to bottom of the visible list before running, or only the rendered tiles will be captured.
- Selectors here are educated guesses based on common LinkedIn patterns. LinkedIn redesigns aggressively; expect first-use selector tuning.
- Description preview is intentionally omitted because LinkedIn's tile-level descriptions are minimal; the email digest format may be more useful for LinkedIn anyway.

## Bookmarklet — Indeed

Run on an Indeed search results page (URL like `indeed.com/jobs?q=...&l=...`). Indeed's structure is more stable than LinkedIn's.

```javascript
javascript:(function(){const tiles=document.querySelectorAll('div.job_seen_beacon, td.resultContent, div[data-jk]');const out=[];out.push('# Indeed extract — '+new Date().toISOString().slice(0,10));out.push('Source: '+window.location.href);out.push('Tiles found: '+tiles.length);out.push('');tiles.forEach((t,i)=>{const a=t.querySelector('h2 a, a.jcs-JobTitle');const titleSpan=t.querySelector('h2 span[title], h2 a span');const title=(titleSpan&&titleSpan.textContent||a&&a.textContent||'').trim();const jk=t.getAttribute('data-jk')||(a&&a.getAttribute('data-jk'))||'';const url=jk?'https://www.indeed.com/viewjob?jk='+jk:(a&&a.href||'');const company=((t.querySelector('span.companyName, [data-testid="company-name"]')||{}).textContent||'').trim();const location=((t.querySelector('div.companyLocation, [data-testid="text-location"]')||{}).textContent||'').trim();const salary=((t.querySelector('div.salary-snippet-container, .metadata.salary-snippet-container, [data-testid="attribute_snippet_testid"]')||{}).textContent||'').trim();const posted=((t.querySelector('span.date, [data-testid="myJobsStateDate"]')||{}).textContent||'').trim();const desc=((t.querySelector('div.job-snippet, [data-testid="belowJobSnippet"]')||{}).textContent||'').trim().slice(0,400);out.push('## '+(i+1)+'. ['+title+']('+url+')');out.push('- Company: '+company);out.push('- Location: '+location);if(salary)out.push('- Salary: '+salary);out.push('- Posted: '+posted);if(desc)out.push('- Description: '+desc);out.push('');});const text=out.join('\n');navigator.clipboard.writeText(text).then(()=>alert('Copied '+tiles.length+' Indeed jobs ('+text.length+' chars)')).catch(()=>{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);alert('Copied '+tiles.length+' jobs (fallback)');});})();
```

## Failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| Alert says "Copied 0 jobs" | Tile container selector doesn't match current DOM | Right-click a tile → Inspect → find outermost element with `data-test` or stable class → update `tiles` querySelectorAll selector |
| Title or URL is blank in output | Title link selector doesn't match | Inspect the title link, update the `a.querySelector(...)` line |
| Output captures sidebar/filter elements | Tile selector is too broad | Tighten the selector (add a more specific data attribute) |
| Clipboard copy fails | Some browsers block `clipboard.writeText` outside user-initiated events | The bookmarklet has a `document.execCommand('copy')` fallback; if both fail, try a different browser |
| Bookmarklet does nothing visible | JS error | Open DevTools console, run the bookmarklet again, look for the error message |

## Fallback — raw Cmd-A copy

If a bookmarklet is broken and you don't have time to fix selectors:

1. `Cmd-A` on the search results page.
2. `Cmd-C`.
3. Paste into Claude Project. Claude will rank by description content alone.
4. Without links, Claude cannot output clickable URLs in its triage table. To find a recommended listing on the page, use `Cmd-F` and search for the title.

This is degraded but not broken. Tier-A surfacing still works; the only loss is one-click navigation.

## Update protocol

When a bookmarklet stops working (Upwork redesigns, LinkedIn changes class names):
1. Inspect the live page DOM to find new selectors.
2. Update the JS source above.
3. Re-install the bookmarklet (paste new JS into the bookmark's URL field).
4. Note the change at the bottom of this file with the date and what changed.

## Change log

- 2026-04-26: Initial bookmarklets for Upwork, LinkedIn, Indeed. Selectors are best-guess; expect first-use tuning.
