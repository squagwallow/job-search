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
Each listing renders as:
```
## N. [Title](https://www.indeed.com/viewjob?jk=JOBKEY)
- Company: ...
- Location: ...
- Salary: ...
- Type: ...
- Snippet: ... (if available)
```

URLs are always clean `viewjob?jk=` format regardless of whether
Indeed served the tile as a pagead redirect.

### Known limitations
- Snippet text is often blank -- Indeed only populates it in the
  detail panel, not the tile. Open borderline listings manually.
- If the alert says "No listings found," scroll down to trigger
  lazy-load, then run the bookmarklet again.
- Indeed's DOM changes periodically. If selectors break, file a
  note in the handoff log and update the selectors in
  `indeed-extractor.js`.
