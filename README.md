# Calcium Channel Blocker Toxicity — Phenotype-Guided Management

An interactive, referenced walkthrough of the phenotype-guided, echocardiography-directed
decision algorithm for calcium channel blocker (CCB) toxicity — from initial recognition and
decontamination, through bedside-echo classification into a vasoplegic or cardiogenic
phenotype, to salvage intravenous lipid emulsion and VA-ECMO. Every box and decision point in
the diagram can be selected to reveal, in one place: what the step means, why the algorithm
calls for it, and the sources behind it.

**Live site:** https://satbuhan.github.io/ccb-toxicity-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24112640.svg)](https://doi.org/10.5281/zenodo.24112640)

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))
- [LMWH selection & renal dosing in NSTE-ACS](https://github.com/satbuhan/lmwh-nste-acs-protocol) ([live site](https://satbuhan.github.io/lmwh-nste-acs-protocol/))
- [Ketamine in head injury — safety & complication management](https://github.com/satbuhan/ketamine-head-injury-protocol) ([live site](https://satbuhan.github.io/ketamine-head-injury-protocol/))
- [Midazolam versus clonazepam — seizures, acute agitation & anxiety](https://github.com/satbuhan/midazolam-clonazepam-protocol) ([live site](https://satbuhan.github.io/midazolam-clonazepam-protocol/))
- [Vasopressor (aminergic) agent selection in shock states](https://github.com/satbuhan/vasopressor-shock-protocol) ([live site](https://satbuhan.github.io/vasopressor-shock-protocol/))
- [Whole-body CT in traumatic circulatory shock](https://github.com/satbuhan/wbct-trauma-protocol) ([live site](https://satbuhan.github.io/wbct-trauma-protocol/))
- [Epinephrine/Adrenaline revisited — contemporary decision-making algorithm](https://github.com/satbuhan/epinephrine-revisited-protocol) ([live site](https://satbuhan.github.io/epinephrine-revisited-protocol/))
- [Ketamine in emergency and critical care — indication-based decision algorithm](https://github.com/satbuhan/ketamine-indications-protocol) ([live site](https://satbuhan.github.io/ketamine-indications-protocol/))
- [Tenecteplase versus alteplase — fibrinolysis in STEMI](https://github.com/satbuhan/tenecteplase-alteplase-stemi-protocol) ([live site](https://satbuhan.github.io/tenecteplase-alteplase-stemi-protocol/))
- [Blood gas-guided assessment of the chemical warfare agent casualty](https://github.com/satbuhan/cwa-blood-gas-protocol) ([live site](https://satbuhan.github.io/cwa-blood-gas-protocol/))
- [Choosing an adjunct to haloperidol in hyperactive delirium with severe agitation](https://github.com/satbuhan/haloperidol-adjunct-protocol) ([live site](https://satbuhan.github.io/haloperidol-adjunct-protocol/))
- [Selection of a neuromuscular blocking agent for rapid sequence induction and intubation](https://github.com/satbuhan/succinylcholine-rocuronium-protocol) ([live site](https://satbuhan.github.io/succinylcholine-rocuronium-protocol/))
- [Pharmacological pain management in elderly patients](https://github.com/satbuhan/geriatric-pain-protocol) ([live site](https://satbuhan.github.io/geriatric-pain-protocol/))
- [Metoclopramide versus Ondansetron — Antiemetic Selection by Clinical Setting](https://github.com/satbuhan/metoclopramide-ondansetron-protocol) ([live site](https://satbuhan.github.io/metoclopramide-ondansetron-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*, and a reader outside
the authors' own team cannot easily check the evidence behind a specific box (why MAP ≥ 65 mmHg
drives the vasoplegic arm; why HIE, not vasopressors, leads the cardiogenic arm; why intravenous
lipid emulsion is rescue-only, never first-line). This page keeps the original algorithm exactly
as authored, and attaches the clinical reasoning and literature to each box without cluttering
the diagram itself.

The algorithm this page presents is Figure 1 of "Management of Calcium Channel Blocker
Intoxication with Intravenous Lipid Emulsions and Glucagon: A Scoping Review" (PRISMA-ScR; 35
charted sources — 24 human + 11 animal — of 180 PubMed records screened; 80 total cited
references) — specifically the standalone, phenotype-branched, echocardiography-guided version
of that figure supplied directly by the authors alongside the manuscript.

## Status

This is a working version, built to be tested on both desktop and mobile.

- **Source workflow note:** same external-AI condensation path as `cwa-blood-gas-protocol`.
  Dr. Karcıoğlu ran the manuscript through an external AI (Gemini) using this project's
  structured condensation prompt (metadata, abstract/purpose, methodology, claim-tagged
  box-by-box clinical content with guideline-sourced-detail flagging, complete verbatim
  reference list), and this tool was built from that structured document plus the authors' own
  standalone figure image. **This did not replace independent reference verification** — no
  skip-verification exception was given for this build, the same as every tool in this atlas
  except the two explicitly marked exceptions.
- **Figure-version discrepancy, flagged and resolved before this build started:** the
  manuscript's own `.docx` file still has an older, linear, non-phenotype-split Figure 1
  embedded in Section 8 (first-line antidotes grouped together, then ILE and glucagon together
  as second-line, with a strengths/weaknesses table) — a different algorithm from the
  phenotype-branched, echo-guided standalone image supplied separately. The standalone image
  matches the manuscript's own updated Section 8 narrative (built on Mehrpour & Brent 2026) and
  was confirmed by the author team as the current, correct figure before any build work began.
  The superseded embedded figure is documented in `assets/content.js`'s header comment but not
  reproduced anywhere in this tool.
- **Reference verification:** all 80 references independently verified (took three passes to
  clear a shared per-turn search-budget limit). Final result: 69 verified clean, 11 corrected
  (2 epub-vs-print-year mismatches, 1 subtitle/page mismatch, 8 wrong/extra/missing co-author
  names — in every one of the 11, the underlying paper is real, findable and on-topic, only the
  bibliographic record had an error), **0 fabricated or untraceable references** — a cleaner
  result than `cwa-blood-gas-protocol`'s build (5 of 83 fabricated). Several of the co-author
  errors cluster around the same two or three non-English-language/animal-model research groups
  — see `assets/content.js`'s header comment for the full breakdown and each reference's own
  `kind` field in the References panel for its individual result.

## Disclaimer

This is an academic / educational reference tool, not a substitute for institutional protocol
or bedside clinical judgement. Verify any threshold or dose against current local protocol
before clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site that GitHub Pages can
serve directly.

```
index.html          page structure — masthead, the diagram (trunk, the triage diamond, the
                     echo-guided 2-way phenotype fan-out, the mixed-phenotype bridge, the
                     salvage/ECMO tail), readout panel, references, abbreviation legend, footer
assets/style.css     design (the "paper" masthead/references, the single-trunk diagram grid
                     and its 2-wide fan-outs)
assets/content.js     ← single source of truth for every node's text and reference list. Edit
                     this file to change what the page says.
assets/app.js         rendering + interaction (builds the diagram and its connector lines from
                     content.js, handles the click-to-expand panel on desktop and the bottom
                     sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision diamond from the diagram
(`meaning`, `rationale`, optional `cautions`/`dose`, and `refs` pointing at numbered entries in
`REFERENCES`). Add or edit a reference in `REFERENCES` and point to it by `id` from any node.
Never change a node's `label` or `sub` text without the author team's sign-off — those fields
are the algorithm itself, transcribed verbatim from the authors' standalone figure image.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification process (fidelity rule,
content schema, citation verification, QA steps), written so that any collaborator or AI
assistant can pick up this project in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — share and adapt with
attribution, non-commercially, under the same license.
