project_slug: job-search
doc_type: tooling
updated_at: 2026-04-27
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

Run on a search results page (URL like `upwork.com/nx/search/jobs/?q=...&sort=recency`).

```
javascript:(function(){var t=document.querySelectorAll('[data-test=JobTile]');if(!t.length){alert('Still 0 tiles. Tell Claude.');return;}var o='# Upwork '+new Date().toISOString().slice(0,10)+'\n';t.forEach(function(x,i){var a=x.querySelector('h2 a')||x.querySelector('a[href*="/jobs/"]');o+='## '+(i+1)+'. ['+(a?a.textContent.trim():'?')+']('+(a?a.href:'')+')\n'+x.innerText.replace(/\s+/g,' ').slice(0,400)+'\n\n';});navigator.clipboard.writeText(o).then(function(){alert('Copied '+t.length+' jobs');}).catch(function(e){alert(''+e);});})();
```

Selector rationale: `[data-test=JobTile]` targets Upwork's stable article element. Quote-free attribute selector avoids browser bookmark URL-field mangling.

## Bookmarklet — LinkedIn ✓ TESTED 2026-04-27

Run on a saved-search results page. LinkedIn uses pagination (not infinite scroll) — each page shows ~25 listings. Run the bookmarklet on each page separately and paste all extracts together into the Claude Project.

Key finding: LinkedIn's class names are hashed and change on every deploy. The stable selector is `componentkey^="job-card-component-ref-"` on the outer div. URLs are constructed from the job ID embedded in that attribute rather than hunting for an `<a>` tag (which is nested too deep to reliably select).

```
javascript:(function(){var t=document.querySelectorAll('div[componentkey^="job-card-component-ref-"]');if(!t.length){alert('0 tiles. Tell Claude.');return;}var seen={};var o='# LinkedIn '+new Date().toISOString().slice(0,10)+'\n';var count=0;t.forEach(function(x){var key=x.getAttribute('componentkey');if(seen[key])return;seen[key]=true;var id=key.replace('job-card-component-ref-','');var url='https://www.linkedin.com/jobs/view/'+id+'/';var title=x.querySelector('strong')||x.querySelector('h3')||x.querySelector('h2');var t2=title?title.textContent.trim():x.innerText.split('\n')[0].trim();count++;o+='## '+count+'. ['+t2+']('+url+')\n'+x.innerText.replace(/\s+/g,' ').slice(0,400)+'\n\n';});navigator.clipboard.writeText(o).then(function(){alert('Copied '+count+' jobs');}).catch(function(e){alert(''+e);});})();
```

LinkedIn notes:
- Pages show ~25 jobs each. Use pagination controls, run bookmarklet per page.
- Title text appears doubled in body (LinkedIn renders it twice in the card) — harmless, Claude parses through it fine.
- If 0 tiles: LinkedIn may have changed the componentkey attribute name. Inspect a card, find the new stable data attribute, update the selector.

## Bookmarklet — Indeed (NEEDS TESTING)

Run on an Indeed search results page. Append `&sort=date` to all Indeed URLs before bookmarking.

```
javascript:(function(){var t=document.querySelectorAll('.job_seen_beacon');if(!t.length){t=document.querySelectorAll('div[class*="resultContent"]');}if(!t.length){alert('0 tiles. Tell Claude.');return;}var o='# Indeed '+new Date().toISOString().slice(0,10)+'\n';t.forEach(function(x,i){var a=x.querySelector('a[id^="job_"]')||x.querySelector('a[href*="/rc/clk"]')||x.querySelector('h2 a');var title=a?a.textContent.trim():'?';var url=a?'https://indeed.com'+a.getAttribute('href'):'';o+='## '+(i+1)+'. ['+title+']('+url+')\n'+x.innerText.replace(/\s+/g,' ').slice(0,400)+'\n\n';});navigator.clipboard.writeText(o).then(function(){alert('Copied '+t.length+' jobs');}).catch(function(e){alert(''+e);});})();
```

## Failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| Alert says "Copied 0 jobs" | Tile container selector doesn't match current DOM | Right-click a tile → Inspect → find outermost element with stable data attribute → update selector |
| Title or URL is blank | Title link selector doesn't match | Inspect the title link, update the querySelector line |
| Bookmarklet does nothing | URL field truncated by browser | Right-click bookmark → Edit → verify URL ends with `});})();` not mid-word |
| Clipboard copy fails | Browser blocks clipboard outside user gesture | Click somewhere on the page first, then click bookmarklet |

## Pending system prompt edits

These edits need to be applied in TWO places: Claude Project > Job Search Daily Triage > System instructions AND repo > docs/daily-use-prompt.md.

**Edit 1 — Recency filter** (add to Upwork FAIL conditions):
> Posted more than 2 days ago AND proposals submitted >= 20. If proposal count not visible, do not auto-fail on age alone.

**Edit 2 — Experience gap flag** (add to Upwork FAIL conditions):
> If listing requires demonstrated production experience with a tool the user is currently learning (e.g. Cowork sub-agents, Agent SDK dispatch mode), do NOT fail — flag in one_line_why as "experience gap" and let user decide.

**Edit 3 — Credential language flag** (add to Upwork FAIL conditions):
> If listing requires a credentialed practitioner role by title or licensure ("seasoned [profession]", "licensed [role]", "certified [specialist]") in a domain outside the user's portfolio, FAIL.

## Change log

- 2026-04-26: Initial bookmarklets for Upwork, LinkedIn, Indeed. Selectors best-guess.
- 2026-04-27: Replaced LinkedIn bookmarklet with tested working version using componentkey selector. Added pending system prompt edits section. LinkedIn confirmed working: 25 unique jobs, correct URLs.
