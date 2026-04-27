# Tools

Browser bookmarklets for job search extraction.

---

## Indeed Extractor

Files: `indeed-extractor.js` (readable source) and
`indeed-extractor.bookmarklet.txt` (minified, paste as bookmark URL).

### Install
1. Open `indeed-extractor.bookmarklet.txt`
2. Copy the full `javascript:(function(){...})();` line
3. Create a new browser bookmark named "Indeed Extract"
4. Paste the line as the bookmark URL
5. Save

### Use
1. Run an Indeed search and let results load fully
2. Click the "Indeed Extract" bookmark
3. A dialog confirms how many listings were copied
4. Paste into your triage chat

### Output format
```
## N. [Title](https://www.indeed.com/viewjob?jk=JOBKEY)
- Company: ...
- Location: ...
- Salary: ...
- Type: ...
- Snippet: ... (if available)
```

### Known limitations
- Snippet text is often blank -- Indeed only populates it in the
  detail panel, not the tile. Open borderline listings manually.
- If the alert says "No listings found," scroll down to trigger
  lazy-load, then run the bookmarklet again.
- Indeed's DOM changes periodically. If selectors break, note it
  in the handoff log and update selectors in `indeed-extractor.js`.

---

## LinkedIn Extractor

Files: `linkedin-extractor.js` (readable source) and
`linkedin-extractor.bookmarklet.txt` (minified, paste as bookmark URL).

### Install
1. Open `linkedin-extractor.bookmarklet.txt`
2. Copy the full `javascript:(function(){...})();` line
3. Create a new browser bookmark named "LinkedIn Extract"
4. Paste the line as the bookmark URL
5. Save

### Use
1. Run a LinkedIn Jobs search and let results load fully
2. Click the "LinkedIn Extract" bookmark
3. A dialog confirms how many listings were copied
4. Paste into your triage chat

### Output format
```
## N. [Title](https://www.linkedin.com/jobs/view/JOBID/)
- Company: ...
- Location: ...
- Salary: ... (not listed if LinkedIn withholds it)
- Posted: ... (ISO date or relative time)
```

### Known limitations
- Salary is absent on most LinkedIn listings -- LinkedIn only shows
  it when the employer provides it. Missing salary is normal.
- LinkedIn's DOM changes frequently. If the bookmarklet returns 0
  listings, check the selectors in `linkedin-extractor.js` against
  the current page structure.
- Scroll to load all results before running the bookmarklet.
  LinkedIn lazy-loads cards as you scroll.
