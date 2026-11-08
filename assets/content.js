/* Clinical Algorithm Atlas — Calcium channel blocker (CCB) toxicity:
   phenotype-guided management with salvage intravenous lipid emulsion (IVLE)
   and VA-ECMO.

   Source: "Management of Calcium Channel Blocker Intoxication with
   Intravenous Lipid Emulsions and Glucagon: A Scoping Review" (blinded
   submission manuscript, 2026; PRISMA-ScR; searches to 30 Sept 2026; 35
   charted sources [24 human + 11 animal] of 180 PubMed records screened;
   80 total cited references), and its Figure 1 decision algorithm (the
   standalone image supplied directly by the authors — inspected directly,
   not just text-extracted). All label/sub text in NODES below is
   transcribed byte-for-byte from that image; only meaning, rationale,
   cautions, references and glossary are added by this tool.

   WORKFLOW NOTE — same external-AI condensation path as
   cwa-blood-gas-protocol: Dr Karcıoğlu ran the manuscript through Gemini
   using the project's structured condensation prompt (metadata / abstract /
   purpose statement / methodology / claim-tagged box-by-box clinical
   content with guideline-sourced-detail flagging / complete verbatim
   reference list), and this build was made from that structured document
   plus the authors' own standalone figure image. This did NOT replace
   independent reference verification — no skip-verification exception was
   given for this tool, same as cwa-blood-gas-protocol.

   FIGURE-VERSION DISCREPANCY — flagged by the condensation itself, not
   introduced by this tool: the manuscript .docx file still has an OLDER,
   linear, non-phenotype-split Figure 1 embedded in Section 8 (Suspect CCB
   intoxication → signs of severe toxicity? → immediate resuscitation →
   haemodynamically unstable? → first-line antidotes → adequate response? →
   ILE + glucagon together as second-line → haemodynamic recovery? →
   consider ECMO / continue therapy), plus a strengths/weaknesses table for
   ILE and glucagon. This is a DIFFERENT algorithm from the standalone
   phenotype-branched, echocardiography-guided image supplied separately
   and built here. The standalone image matches the manuscript's own
   updated Section 8 paragraph 4 narrative (built on Mehrpour & Brent 2026,
   ref 79) and was confirmed by the author team as the current, correct
   figure before this build started. The legacy embedded figure is
   superseded — the manuscript file simply was not regenerated with the
   new figure in place of the old one — and is not reproduced in this tool.

   REFERENCE VERIFICATION STATUS: every one of this manuscript's 80
   references was run through independent verification against a primary
   source (DOI resolution plus a title/author/journal/subject-matter
   check), not accepted from the condensed document's own reference list.
   Three passes were needed to clear the shared per-turn search-budget
   limit (a known constraint in this atlas — see cwa-blood-gas-protocol's
   own build history); every reference was eventually reached. Final
   outcome, all 80 references resolved:
     - 69 references independently verified clean.
     - 11 references corrected after verification — in every one of these
       11 cases the underlying paper is real, findable, and on-topic; the
       error is purely bibliographic:
         - 2 epub-ahead-of-print vs print year mismatches (refs 47, 52).
         - 1 subtitle/page-range mismatch (ref 24: "case report" cited as
           "a review", pages off by one DOI digit).
         - 8 wrong/extra/missing co-author names, with title, journal,
           year and DOI all otherwise correct (refs 31, 32, 38, 39, 40, 48,
           53, 76) — five of these (32, 38, 39, 40, and by the same
           pattern 48/53) are animal-model or non-English-language papers
           from a handful of research groups (Sohn/Ok et al.; Çelebi/
           Coşkun/Güngör et al.; Avcı/Kaya et al.) where the first author
           and bibliographic details were reliably right but co-authors
           were swapped for plausible-looking names not on the actual
           byline — a distinct, cross-reference pattern worth flagging to
           the author team rather than four/five isolated one-off errors.
     - 0 references flagged NOT VERIFIED / fabricated — unlike
       cwa-blood-gas-protocol's build (5 of 83 fabricated), no trace-free,
       non-existent reference turned up anywhere in this manuscript's list.
   Refs 76, 24, 47/48, and 31/32/38/39/40/47/48/52 land on visible nodes
   (vasoplegic, cardiogenic, still_unstable_decision, salvage_ile
   respectively); since the underlying clinical claim is independently
   supported by the real paper in every case, no per-node caveat was
   needed beyond each reference's own `kind` field, visible in the
   References panel — see each reference's own `kind` field below for its
   individual result and sourcing.
*/
const REFERENCES = [
  {
    id: 1,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "DeWitt CR, Waksman JC. Pharmacology, pathophysiology and management of calcium channel blocker and beta-blocker toxicity. Toxicol Rev. 2004;23(4):223–38.",
    url: "https://doi.org/10.2165/00139709-200423040-00003"
  },
  {
    id: 2,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Olson KR, Erdman AR, Woolf AD, et al. Calcium channel blocker ingestion: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol. 2005;43(7):797–822.",
    url: "https://doi.org/10.1080/15563650500357404"
  },
  {
    id: 3,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Palatnick W, Jelic T. Emergency department management of calcium-channel blocker, beta blocker, and digoxin toxicity. Emerg Med Pract. 2014;16(2):1–20.",
    url: "https://www.ebmedicine.net/topics/toxicology/calcium-channel-blocker"
  },
  {
    id: 4,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Yuan TH, Kerns WP 2nd, Tomaszewski CA, Ford MD, Kline JA. Insulin-glucose as adjunctive therapy for severe calcium channel antagonist poisoning. J Toxicol Clin Toxicol. 1999;37(4):463–74.",
    url: "https://doi.org/10.1081/clt-100102437"
  },
  {
    id: 5,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Engebretsen KM, Kaczmarek KM, Morgan J, Holger JS. High-dose insulin therapy in beta-blocker and calcium channel-blocker poisoning. Clin Toxicol. 2011;49(4):277–83.",
    url: "https://doi.org/10.3109/15563650.2011.582471"
  },
  {
    id: 6,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Marques M, Gomes E, de Oliveira J. Treatment of calcium channel blocker intoxication with insulin infusion: case report and literature review. Resuscitation. 2003;57(2):211–3.",
    url: "https://doi.org/10.1016/s0300-9572(03)00026-1"
  },
  {
    id: 7,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Shepherd G, Klein-Schwartz W. High-dose insulin therapy for calcium-channel blocker overdose. Ann Pharmacother. 2005;39(5):923–30.",
    url: "https://doi.org/10.1345/aph.1E436"
  },
  {
    id: 8,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lam SHF, Majlesi N, Vilke GM. Use of intravenous fat emulsion in the emergency department for the critically ill poisoned patient. J Emerg Med. 2016;51(2):203–14.",
    url: "https://doi.org/10.1016/j.jemermed.2016.02.008"
  },
  {
    id: 9,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Weinberg GL. Lipid emulsion infusion: resuscitation for local anesthetic and other drug overdose. Anesthesiology. 2012;117(1):180–7.",
    url: "https://doi.org/10.1097/ALN.0b013e31825ad8de"
  },
  {
    id: 10,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Jamaty C, Bailey B, Larocque A, Notebaert E, Sanogo K, Chauny J-M. Lipid emulsions in the treatment of acute poisoning: a systematic review of human and animal studies. Clin Toxicol. 2010;48(1):1–27.",
    url: "https://doi.org/10.3109/15563650903544124"
  },
  {
    id: 11,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Levine M, Hoffman RS, Lavergne V, et al. Systematic review of the effect of intravenous lipid emulsion therapy for non-local anesthetics toxicity. Clin Toxicol. 2016;54(3):194–221.",
    url: "https://doi.org/10.3109/15563650.2015.1126286"
  },
  {
    id: 12,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bailey B. Glucagon in beta-blocker and calcium channel blocker overdoses: a systematic review. J Toxicol Clin Toxicol. 2003;41(5):595–602.",
    url: "https://doi.org/10.1081/CLT-120023761"
  },
  {
    id: 13,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Kanagarajan K, Marraffa JM, Bouchard NC, Krishnan P, Hoffman RS, Stork CM. The use of vasopressin in the setting of recalcitrant hypotension due to calcium channel blocker overdose. Clin Toxicol. 2007;45(1):56–9.",
    url: "https://doi.org/10.1080/15563650600795669"
  },
  {
    id: 14,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Mégarbane B, Leprince P, Deye N, et al. Emergency feasibility in medical intensive care unit of extracorporeal life support for refractory cardiac arrest. Intensive Care Med. 2007;33(5):758–64.",
    url: "https://doi.org/10.1007/s00134-007-0568-4"
  },
  {
    id: 15,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "St-Onge M, Anseeuw K, Cantrell FL, et al. Experts consensus recommendations for the management of calcium channel blocker poisoning in adults. Crit Care Med. 2017;45(3):e306–15.",
    url: "https://doi.org/10.1097/CCM.0000000000002087"
  },
  {
    id: 16,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Gosselin S, Hoegberg LC, Hoffman RS, et al. Evidence-based recommendations on the use of intravenous lipid emulsion therapy in poisoning. Clin Toxicol. 2016;54(10):899–923.",
    url: "https://doi.org/10.1080/15563650.2016.1214275"
  },
  {
    id: 17,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023;148(16):e149–84.",
    url: "https://doi.org/10.1161/CIR.0000000000001161"
  },
  {
    id: 18,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Isbister GK, Jenkins S, Harris K, Downes MA, Isoardi KZ. Calcium channel blocker overdose: not all the same toxicity. Br J Clin Pharmacol. 2025;91(3):740–7.",
    url: "https://doi.org/10.1111/bcp.16258"
  },
  {
    id: 19,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Simpson MD, Cole JB. Developments in the epidemiology of calcium channel blocker poisoning and implications for management. Curr Opin Crit Care. 2024;30(6):603–10.",
    url: "https://doi.org/10.1097/MCC.0000000000001218"
  },
  {
    id: 20,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Tricco AC, Lillie E, Zarin W, et al. PRISMA extension for scoping reviews (PRISMA-ScR): checklist and explanation. Ann Intern Med. 2018;169(7):467–73.",
    url: "https://doi.org/10.7326/M18-0850"
  },
  {
    id: 21,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Kerns W 2nd. Management of beta-adrenergic blocker and calcium channel antagonist toxicity. Emerg Med Clin North Am. 2007;25(2):309–31.",
    url: "https://doi.org/10.1016/j.emc.2007.02.001"
  },
  {
    id: 22,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Ashraf M, Chaudhary K, Nelson J, Thompson W. Massive overdose of sustained-release verapamil: a case report and review of literature. Am J Med Sci. 1995;310(6):258–63.",
    url: "https://doi.org/10.1097/00000441-199512000-00007"
  },
  {
    id: 23,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Buckley N, Dawson AH, Howarth D, Whyte IM. Slow-release verapamil poisoning. Use of polyethylene glycol whole-bowel lavage and high-dose calcium. Med J Aust. 1993;158(3):202–4.",
    url: "https://doi.org/10.5694/j.1326-5377.1993.tb137530.x"
  },
  {
    id: 24,
    kind: "Corrected after independent verification: authors (Patel NP, Pugh ME, Goldberg S, Eiger G), journal (Am J Crit Care), year (2007) and volume/issue (16(5)) were confirmed correct via an independent citing source (PMID 17724251, cross-confirmed by two independent reference lists). However the article’s actual subtitle is \"case report,\" not \"a review\" as cited, and its actual page range is 518–520, not 498–503 as cited (the real DOI would end in .518, not .498).",
    text: "Patel NP, Pugh ME, Goldberg S, Eiger G. Hyperinsulinemic euglycemia therapy for verapamil poisoning: a review. Am J Crit Care. 2007;16(5):498–503.",
    url: "https://doi.org/10.4037/ajcc2007.16.5.498"
  },
  {
    id: 25,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Weinberg GL, Palmer JW, VadeBoncouer TR, Zuechner MB, Edelman G, Hoppel CL. Bupivacaine inhibits acylcarnitine exchange in cardiac mitochondria. Anesthesiology. 2000;92(2):523–8.",
    url: "https://doi.org/10.1097/00000542-200002000-00036"
  },
  {
    id: 26,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Weinberg G, Ripper R, Feinstein DL, Hoffman W. Lipid emulsion infusion rescues dogs from bupivacaine-induced cardiac toxicity. Reg Anesth Pain Med. 2003;28(3):198–202.",
    url: "https://doi.org/10.1053/rapm.2003.50041"
  },
  {
    id: 27,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Ozcan MS, Weinberg G. Update on the use of lipid emulsions in local anesthetic systemic toxicity: a focus on differential efficacy and lipid emulsion as part of advanced cardiac life support. Int Anesthesiol Clin. 2011;49(4):91–103.",
    url: "https://doi.org/10.1097/AIA.0b013e318217fe6f"
  },
  {
    id: 28,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Rothschild L, Bern S, Oswald S, Weinberg G. Intravenous lipid emulsion in clinical toxicology. Scand J Trauma Resusc Emerg Med. 2010;18:51.",
    url: "https://doi.org/10.1186/1757-7241-18-51"
  },
  {
    id: 29,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "French D, Smollin C, Ruan W, Wong A, Drasner K, Wu AH. Partition constant and volume of distribution as predictors of clinical efficacy of lipid rescue for toxicological emergencies. Clin Toxicol. 2011;49(9):801–9.",
    url: "https://doi.org/10.3109/15563650.2011.617308"
  },
  {
    id: 30,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Kryshtal DO, Dawling S, Seger D, Knollmann BC. In vitro studies indicate intravenous lipid emulsion acts as lipid sink in verapamil poisoning. J Med Toxicol. 2016.",
    url: "https://doi.org/10.1007/s13181-015-0511-y"
  },
  {
    id: 31,
    kind: "Corrected after independent verification: the paper itself is real and correctly identified (title, journal, volume/issue, article number 8741, year 2023, and DOI 10.3390/ijms24108741 all confirmed via the publisher’s page and an independent institutional repository record). However the cited author list is wrong — the actual authors are Park K-E, Lee SH, Bae SI, Hwang Y, Ok S-H, Ahn SH, Sim G, Chung S, Sohn J-T. There is no author named \"Kim HJ\" on this paper, and Ok S-H is actually the fifth author, not the second as the citation implies.",
    text: "Park KE, Ok S-H, Kim HJ, et al. Lipid emulsion inhibits amlodipine-induced nitric oxide-mediated vasodilation in isolated rat aorta. Int J Mol Sci. 2023;24(10):8741.",
    url: "https://doi.org/10.3390/ijms24108741"
  },
  {
    id: 32,
    kind: "Corrected after independent verification: confirmed the paper is real — ‘Lipid emulsion attenuates extrinsic apoptosis induced by amlodipine toxicity in rat cardiomyoblasts,’ Hum Exp Toxicol. 2021 Apr;40(4):695-706 (PMID 33030052, DOI 10.1177/0960327120964551), first author Ok S-H and last author Sohn J-T confirmed — but the full author list is actually Ok SH, Ahn SH, Kim HJ, Lee SH, Bae SI, Park KE, Hwang Y, Shin IW, Yoon S, Sohn JT; ‘Hong J-M’ is not an author on this paper, and the formal year/volume/pages (2021;40(4):695-706) were given as just ‘2020’ in the citation.",
    text: "Ok S-H, Hong J-M, Lee SH, Sohn J-T. Lipid emulsion attenuates extrinsic apoptosis induced by amlodipine toxicity in rat cardiomyoblasts. Hum Exp Toxicol. 2020.",
    url: "https://doi.org/10.1177/0960327120964551"
  },
  {
    id: 33,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Young AC, Velez LI, Kleinschmidt KC. Intravenous fat emulsion therapy for intentional sustained-release verapamil overdose. Resuscitation. 2009;80(5):591–3.",
    url: "https://doi.org/10.1016/j.resuscitation.2009.01.023"
  },
  {
    id: 34,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Krastev D, Atanasov V, Vinarov Z, Tcholakova S, Denkov N. In vitro studies of detoxification by intravenous fat emulsions: mechanism of action and preclinical assessment tools. Clin Toxicol (Phila). 2026;64(10):943–54.",
    url: "https://doi.org/10.1080/15563650.2026.2708998"
  },
  {
    id: 35,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Bania TC, Chu J, Perez E, Su M, Hahn IH. Hemodynamic effects of intravenous fat emulsion in an animal model of severe verapamil toxicity resuscitated with atropine, calcium, and saline. Acad Emerg Med. 2007;14(2):105–11.",
    url: "https://doi.org/10.1197/j.aem.2006.10.094"
  },
  {
    id: 36,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Perez E, Bania TC, Medlej K, Chu J. Determining the optimal dose of intravenous fat emulsion for the treatment of severe verapamil toxicity in a rodent model. Acad Emerg Med. 2008;15(12):1284–9.",
    url: "https://doi.org/10.1111/j.1553-2712.2008.00259.x"
  },
  {
    id: 37,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Tebbutt S, Harvey M, Nicholson T, Cave G. Intralipid prolongs survival in a rat model of verapamil toxicity. Acad Emerg Med. 2006;13(2):134–9.",
    url: "https://doi.org/10.1197/j.aem.2005.08.016"
  },
  {
    id: 38,
    kind: "Corrected after independent verification: confirmed the paper is real and at the cited DOI — intravenous lipid emulsion prolonging survival in a rat model of calcium-channel-blocker toxicity (diltiazem and nicardipine), Clinical Toxicology 2015;53(6):540-554, DOI 10.3109/15563650.2015.1045979, first author Kang C confirmed — but the co-authors are wrong: an independent paper’s own reference list (Tulgar et al., Med Sci Monit 2016;22:984-990, PMC4809387) cites this exact DOI as ‘Kang C, Kim DH, Kim SC, et al.,’ not ‘Kim SH, Jeong JH’ as in this manuscript.",
    text: "Kang C, Kim SH, Jeong JH, et al. The effects of intravenous lipid emulsion on prolongation of survival in a rat model of calcium channel blocker toxicity. Clin Toxicol. 2015.",
    url: "https://doi.org/10.3109/15563650.2015.1045979"
  },
  {
    id: 39,
    kind: "Corrected after independent verification: title, journal, year, volume and DOI all confirmed exactly via the journal’s own site (Turkish Journal of Medical Sciences, vol. 46, pp. 1568-1572, DOI 10.3906/sag-1506-71) — ‘Therapeutic effects of intralipid and medialipid emulsions in a rat model of verapamil toxicity,’ first author Akgün Şahin F confirmed — but the listed co-authors Öztürk Ç and Gürsoy S do not exist on this paper; the real co-authors are Sıdıka Hülya Çelebi, İrfan Güngör, Demet Coşkun and Elif Ergüven Kaya.",
    text: "Akgün Şahin F, Öztürk Ç, Gürsoy S, et al. Therapeutic effects of intralipid and medialipid emulsions in a rat model of verapamil toxicity. Turk J Med Sci. 2016.",
    url: "https://doi.org/10.3906/sag-1506-71"
  },
  {
    id: 40,
    kind: "Corrected after independent verification: title, journal, year, volume/issue and DOI all confirmed (Bratislavske lekarske listy 2019;120(10):789-793, DOI 10.4149/bll_2019_132 — matches 10.4149/BLL_2019_132 cited) — ‘Effect of intralipid administration on calcium therapy in verapamil toxicity,’ first author Ozen SB confirmed — but the listed co-authors Dursun ZB and Yücel M do not exist on this paper; the real co-authors are S.H. Celebi, D. Coşkun, İ. Gungor and G. Inan (the same research group as ref 39, which explains the overlapping but swapped-in co-author names).",
    text: "Ozen SB, Dursun ZB, Yücel M, et al. Effect of intralipid administration on calcium therapy in verapamil toxicity. Bratisl Lek Listy. 2019;120(10).",
    url: "https://doi.org/10.4149/BLL_2019_132"
  },
  {
    id: 41,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Tulgar S, Kose HC, Demir Piroglu I, et al. Comparison of effects of separate and combined sugammadex and lipid emulsion administration on hemodynamic parameters and survival in a rat model of verapamil toxicity. Med Sci Monit. 2016;22.",
    url: "https://doi.org/10.12659/msm.896125"
  },
  {
    id: 42,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Murphy CM, Quinn MW, Kerns WP 2nd, Beuhler MC. Pilot trial of intravenous lipid emulsion treatment for severe nifedipine-induced shock. J Med Toxicol. 2016.",
    url: "https://doi.org/10.1007/s13181-016-0572-6"
  },
  {
    id: 43,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Stellpflug SJ, Harris CR, Engebretsen KM, Cole JB, Holger JS. Intentional overdose with cardiac arrest treated with intravenous fat emulsion and high-dose insulin. Clin Toxicol. 2010;48(3):227–9.",
    url: "https://doi.org/10.3109/15563650903555294"
  },
  {
    id: 44,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Doepker B, Healy W, Cortez E, Adkins EJ. High-dose insulin and intravenous lipid emulsion therapy for cardiogenic shock induced by intentional calcium-channel blocker and beta-blocker overdose: a case series. J Emerg Med. 2014;46(4):486–90.",
    url: "https://doi.org/10.1016/j.jemermed.2013.08.135"
  },
  {
    id: 45,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Kuhn Y, Fischbach J, Putensen C, Ehrentraut SF. Competing therapy options for severe amlodipine poisoning—lessons learned: a case report. J Med Case Rep. 2026;20(1):48.",
    url: "https://doi.org/10.1186/s13256-025-05781-3"
  },
  {
    id: 46,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Presley JD, Chyka PA. Intravenous lipid emulsion to reverse acute drug toxicity in pediatric patients. Ann Pharmacother. 2013;47(5):735–43.",
    url: "https://doi.org/10.1345/aph.1R666"
  },
  {
    id: 47,
    kind: "Corrected after independent verification: title (\"Intravenous Lipid Emulsion Treatment for Calcium-Channel Blocker Intoxication: Pediatric Case Series and Review of the Literature\"), authors (Katlan B, Kesici S, Bayrakci B), journal (Pediatric Emergency Care) and DOI (10.1097/PEC.0000000000002703) all confirmed correct. The citation lists 2022, which is the article's epub-ahead-of-print date; the formal print publication is 2023, Vol. 39(3):120–124.",
    text: "Katlan B, Kesici S, Bayrakci B. Intravenous lipid emulsion treatment for calcium-channel blocker intoxication: pediatric case series and review of the literature. Pediatr Emerg Care. 2022.",
    url: "https://doi.org/10.1097/PEC.0000000000002703"
  },
  {
    id: 48,
    kind: "Corrected after independent verification: title, journal (Turkish Journal of Pediatrics), year (2024), and DOI (10.24953/turkjped.2023.543, Vol. 66(1):75–80) all confirmed correct directly on the journal's own site. However, the cited co-authors \"Tekin S\" and \"Doğan Y\" do not exist anywhere in the real author byline — the true authors beyond first author Yavuz S are Avcı A, Gündoğan Serin R, Kaya MM, and Ağalıoğlu D.",
    text: "Yavuz S, Tekin S, Doğan Y. Effect of intravenous lipid therapy in critically ill pediatric patients with calcium channel blocker toxicity. Turk J Pediatr. 2024.",
    url: "https://doi.org/10.24953/turkjped.2023.543"
  },
  {
    id: 49,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Cave G, Harvey M. Intravenous lipid emulsion as antidote beyond local anesthetic toxicity: a systematic review. Acad Emerg Med. 2009;16(9):815–24.",
    url: "https://doi.org/10.1111/j.1553-2712.2009.00499.x"
  },
  {
    id: 50,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Cao D, Heard K, Foran M, Koyfman A. Intravenous lipid emulsion in the emergency department: a systematic review of recent literature. J Emerg Med. 2015;48(3):387–97.",
    url: "https://doi.org/10.1016/j.jemermed.2014.10.009"
  },
  {
    id: 51,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Meamar R, Samsamshariat S, Dorvashi G, Feizi A, Seifnezhad A, Eizadi-Mood N. Intravenous lipid emulsion in beta-blocker with or without calcium channel blocker toxicity: a systematic review of human case reports and series. J Appl Toxicol. 2026. Online ahead of print.",
    url: "https://doi.org/10.1002/jat.70328"
  },
  {
    id: 52,
    kind: "Corrected after independent verification: title (\"Utilization of lipid emulsion therapy in fatal overdose cases: an observational study\"), authors (Smolinske S, Hoffman RS, Villeneuve E, Hoegberg LCG, Gosselin S), journal (Clinical Toxicology) and DOI (10.1080/15563650.2018.1504954) all confirmed correct. The citation lists 2018, which is the epub-ahead-of-print date; the formal print publication is 2019, Vol. 57(3):197–202.",
    text: "Smolinske S, Hoffman RS, Villeneuve E, Hoegberg LCG, Gosselin S. Utilization of lipid emulsion therapy in fatal overdose cases: an observational study. Clin Toxicol. 2018.",
    url: "https://doi.org/10.1080/15563650.2018.1504954"
  },
  {
    id: 53,
    kind: "Corrected after independent verification: title (\"Treatment Modalities in Calcium Channel Blocker Overdose: A Systematic Review\"), journal (Cureus), year (2023), and DOI (10.7759/cureus.42854, Vol. 15(8):e42854) all confirmed correct directly from the publisher's own PDF. However, the cited co-authors \"Damania R\" and \"Gandhi V\" do not exist in the real 8-author byline — the actual second and third authors are Kaeley N and Singh S (full list: Baid H, Kaeley N, Singh S, Mahala P, Chawang H, Datta SS, Manchanda H, Shankar T).",
    text: "Baid H, Damania R, Gandhi V, et al. Treatment modalities in calcium channel blocker overdose: a systematic review. Cureus. 2023;15(8):e42854.",
    url: "https://doi.org/10.7759/cureus.42854"
  },
  {
    id: 54,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Picard J, Meek T. Lipid emulsion to treat overdose of local anaesthetic: the gift of the glob. Anaesthesia. 2006;61(2):107–9.",
    url: "https://doi.org/10.1111/j.1365-2044.2005.04494.x"
  },
  {
    id: 55,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Love JN, Howell JM, Litovitz TL, Klein-Schwartz W. Acute beta blocker overdose: factors associated with the development of cardiovascular morbidity. J Toxicol Clin Toxicol. 2000;38(3):275–81.",
    url: "https://doi.org/10.1081/clt-100100932"
  },
  {
    id: 56,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Senart AM, LeClair LA. Cardiovascular and adverse effects of glucagon for the management of suspected beta blocker toxicity: a case series. J Med Toxicol. 2023;19(1):9–15.",
    url: "https://doi.org/10.1007/s13181-022-00919-x"
  },
  {
    id: 57,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Holger JS, Stellpflug SJ, Cole JB, Harris CR, Engebretsen KM. High-dose insulin: a consecutive case series in toxin-induced cardiogenic shock. Clin Toxicol. 2011;49(7):653–8.",
    url: "https://doi.org/10.3109/15563650.2011.593522"
  },
  {
    id: 58,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Isoardi KZ, Chan B, Chiew AL. High dose insulin is an inodilator, not an antidote in the poisoned patient! Emerg Med Australas. 2025;37(2):e70035.",
    url: "https://doi.org/10.1111/1742-6723.70035"
  },
  {
    id: 59,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Chan BSH, Isoardi KZ, Roberts DM, Har OS. Management of hypotension in dihydropyridine calcium channel blocker overdose: the role of high-dose insulin therapy. Br J Clin Pharmacol. 2025;91(9):2613–20.",
    url: "https://doi.org/10.1002/bcp.70081"
  },
  {
    id: 60,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Spungen HH, Sherman JM, Ryan K, Krueger JJ, Levine M, Spyres MB. Vasopressor use, critical care management, and outcomes in dihydropyridine calcium channel blocker toxicity. J Med Toxicol. 2025;21(3):304–11.",
    url: "https://doi.org/10.1007/s13181-025-01069-6"
  },
  {
    id: 61,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Stevens DL, Montague AJ, Olives TD, Lee SC, Knack SK, Cole JB. High-dose insulin for calcium channel-blocker and beta-blocker poisoning in children: referrals to the Minnesota Regional Poison Center, 2000–2024. Pediatr Crit Care Med. 2026;27(1):33–41.",
    url: "https://doi.org/10.1097/PCC.0000000000003854"
  },
  {
    id: 62,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Espinoza TR, Bryant SM, Aks SE. Hyperinsulin therapy for calcium channel antagonist poisoning: a seven-year retrospective study. Am J Ther. 2013.",
    url: "https://doi.org/10.1097/MJT.0b013e31824d5fbd"
  },
  {
    id: 63,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Woodward C, Pourmand A, Mazer-Amirshahi M. High dose insulin therapy, an evidence based approach to beta blocker/calcium channel blocker toxicity. Daru. 2014;22(1):36.",
    url: "https://doi.org/10.1186/2008-2231-22-36"
  },
  {
    id: 64,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Pertoldi F, D’Orlando L, Mercante WP. Electromechanical dissociation 48 hours after atenolol overdose: usefulness of calcium chloride. Ann Emerg Med. 1998;31(6):777–81.",
    url: "https://doi.org/10.1016/s0196-0644(98)70241-0"
  },
  {
    id: 65,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Salhanick SD, Shannon MW. Management of calcium channel antagonist overdose. Drug Saf. 2003;26(2):65–79.",
    url: "https://doi.org/10.2165/00002018-200326020-00001"
  },
  {
    id: 66,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Skoog CA, Engebretsen KM. Are vasopressors useful in toxin-induced cardiogenic shock? Clin Toxicol. 2017.",
    url: "https://doi.org/10.1080/15563650.2017.1284329"
  },
  {
    id: 67,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Varpula T, Rapola J, Sallisalmi M, Kurola J. Treatment of serious calcium channel blocker overdose with levosimendan, a calcium sensitizer. Anesth Analg. 2009;108(3):790–2.",
    url: "https://doi.org/10.1213/ane.0b013e3181931737"
  },
  {
    id: 68,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Fisher R, Minaya SB, Brunette H, Nogar J, Sud P. Interfacility transfer for VA-ECMO in beta blocker and calcium channel blocker overdoses: a report of two cases. Clin Pract Cases Emerg Med. 2025;9(1):73–7.",
    url: "https://doi.org/10.5811/cpcem.34869"
  },
  {
    id: 69,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Omar S, Shukla V, Khan AB, Dangor Z. Hemoadsorption therapy for calcium channel blocker overdose at a tertiary-level intensive care unit: a retrospective study. Indian J Crit Care Med. 2025;29(2):130–6.",
    url: "https://doi.org/10.5005/jp-journals-10071-24906"
  },
  {
    id: 70,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Geib AJ, Liebelt E, Manini AF, Toxicology Investigators’ Consortium. Clinical experience with intravenous lipid emulsion for drug-induced cardiovascular collapse. J Med Toxicol. 2012;8(1):10–4.",
    url: "https://doi.org/10.1007/s13181-011-0187-x"
  },
  {
    id: 71,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Darracq MA, Thornton SL, Do HM, Bok D, Clark RF, Cantrell FL. Utilization of hyperinsulinemia euglycemia and intravenous fat emulsion following poison center recommendations. J Med Toxicol. 2013.",
    url: "https://doi.org/10.1007/s13181-013-0290-2"
  },
  {
    id: 72,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Christian MR, Pallasch EM, Wahl M, Mycyk MB. Lipid rescue 911: are poison centers recommending intravenous fat emulsion therapy for severe poisoning? J Med Toxicol. 2013.",
    url: "https://doi.org/10.1007/s13181-013-0302-2"
  },
  {
    id: 73,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Truitt CA, Brooks DE, Dommer P, LoVecchio F. Outcomes of unintentional beta-blocker or calcium channel blocker overdoses: a retrospective review of poison center data. J Med Toxicol. 2012.",
    url: "https://doi.org/10.1007/s13181-011-0209-8"
  },
  {
    id: 74,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Nafea OE, Zakaria M, Hassan T, El-Hussieny NA. Comparative effectiveness of methylene blue versus intravenous lipid emulsion in a rodent model of amlodipine toxicity. Clin Toxicol. 2019.",
    url: "https://doi.org/10.1080/15563650.2018.1560461"
  },
  {
    id: 75,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Aqel YHI, Karayem MMJ, Rahhal A, Hasan Koya S, Abusal AM, George S. Methylene blue rescue therapy for vasoplegic shock after antihypertensive drug overdose. Am J Case Rep. 2026;27:e951026.",
    url: "https://doi.org/10.12659/AJCR.951026"
  },
  {
    id: 76,
    kind: "Corrected after independent verification: title ('A Case of Angiotensin II Utilization for Refractory Shock in a Polysubstance Overdose'), journal (Journal of Medical Toxicology), year (2025), volume/issue (21(3)) and pages (350–354) were all confirmed exactly against the journal's own table of contents (DOI 10.1007/s13181-025-01080-x). However, the author list is wrong: the published paper's authors are Brian W. Gilbert, Charles S. Wilson Jr, and Melissa V. Ortiz only — the two additional names in the citation, 'Kim N' and 'Cox TR,' are not authors of this paper.",
    text: "Gilbert BW, Wilson CS, Kim N, Cox TR, Ortiz MV. A case of angiotensin II utilization for refractory shock in a polysubstance overdose. J Med Toxicol. 2025;21(3):350–4.",
    url: "https://doi.org/10.1007/s13181-025-01080-x"
  },
  {
    id: 77,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Murad MH, Montori VM, Ioannidis JP, et al. How to read a systematic review and meta-analysis and apply the results to patient care: users’ guides to the medical literature. JAMA. 2014;312(2):171–9.",
    url: "https://doi.org/10.1001/jama.2014.5559"
  },
  {
    id: 78,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Boyle JS, Bechtel LK, Holstege CP. Management of the critically poisoned patient. Scand J Trauma Resusc Emerg Med. 2009;17:29.",
    url: "https://doi.org/10.1186/1757-7241-17-29"
  },
  {
    id: 79,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Mehrpour O, Brent J. Proposed echocardiography-guided flowchart for calcium channel blocker overdose: distinguishing vasoplegia from cardiogenic shock. Daru. 2026;34(1).",
    url: "https://doi.org/10.1007/s40199-026-00596-z"
  },
  {
    id: 80,
    kind: "Independently verified against a primary source (DOI resolution; title, authors, journal, year and subject matter confirmed).",
    text: "Suarez F, Koyfman A, Long B. Pearls and pitfalls for the emergency clinician: beta blocker and calcium channel blocker toxicity. J Emerg Med. 2026;84:1–11.",
    url: "https://doi.org/10.1016/j.jemermed.2026.01.021"
  },
];const NODES = [
  {
    id: "start",
    type: "terminal",
    tone: "key",
    label: "SUSPECTED CALCIUM CHANNEL BLOCKER INGESTION",
    meaning: "Entry point for any patient presenting with a suspected overdose or ingestion of a dihydropyridine (e.g. amlodipine, nifedipine, nicardipine, felodipine) or non-dihydropyridine (verapamil, diltiazem) calcium channel blocker, regardless of initial severity.",
    rationale: "CCB overdose accounts for a disproportionate share of cardiovascular-drug fatalities — case-fatality in severe ingestions approaches 9–18% despite intensive care — so the algorithm opens broadly at the point of suspicion, before irreversible haemodynamic and metabolic collapse develops. Dihydropyridines, led by amlodipine, now account for most CCB poisonings: in a 2014–2023 Australian cohort of 236 CCB overdoses, amlodipine alone accounted for 147 cases.",
    refs: [1, 2, 3, 18, 19]
  },
  {
    id: "abc_box",
    type: "process",
    label: "ABC · cardiac monitoring · IV access · 12-lead ECG",
    sub: "Glucose · lactate · blood gas\nActivated charcoal if < 1 h and airway protected\nWhole bowel irrigation for sustained-release drug",
    meaning: "Immediate supportive stabilisation, continuous cardiac monitoring, IV access, baseline and serial metabolic/acid-base evaluation (glucose, lactate, blood gas), and targeted gastrointestinal decontamination — single-dose activated charcoal for early immediate-release ingestions, polyethylene glycol whole bowel irrigation (WBI) for sustained-release (SR) preparations.",
    rationale: "CCBs block L-type voltage-gated calcium channels (VGCCs), precipitating rapid conduction blocks, bradyarrhythmias and hypotension that need immediate detection and venous access. The same VGCC blockade impairs pancreatic beta-cell insulin release, producing hyperglycaemia and relative insulinopenia that starve the myocardium of glucose, while hypoperfusion and mitochondrial dysfunction raise lactate — so baseline and serial glycaemia/acid-base checks both index severity and set up later HIE dosing. SR formulations have delayed peak concentrations and a prolonged absorption window that WBI can meaningfully shorten; immediate-release formulations peak quickly, so charcoal only helps within the first hour.",
    dose: [
      ["Activated charcoal", "1 g/kg within 1 h of ingestion (ext. guideline, ref 2)"],
      ["SR toxicokinetics behind WBI", "peak concentration delayed 6–18 h; toxicity can evolve over 24–48 h"]
    ],
    cautions: [
      "The manuscript's own Section 8 describes this step more narrowly — cardiac monitoring, IV access, and serial BP/heart-rate/glycaemia/acid-base assessment — without separately naming ABC or a 12-lead ECG, and its charcoal recommendation (Section 7.3) is explicitly restricted to immediate-release formulations, a qualifier the figure box itself doesn't repeat."
    ],
    refs: [2, 4, 5, 22, 23]
  },
  {
    id: "brady_decision",
    type: "decision",
    label: "Bradycardia, hypotension or conduction abnormality?",
    meaning: "Triage diamond separating asymptomatic patients after suspected CCB exposure (No) from symptomatic patients with any cardiovascular manifestation of toxicity — bradycardia, hypotension, or SA/AV nodal conduction delay or block (Yes).",
    rationale: "Asymptomatic ingestions — particularly modest immediate-release or unintentional extra doses — frequently never progress to severe toxicity and can be safely observed, whereas any sign of bradycardia, hypotension or conduction abnormality marks active VGCC blockade requiring immediate pharmacological resuscitation. Among 436 unintentional supratherapeutic ingestions of a patient's own beta-blocker or CCB, symptoms developed in only 10.1% and just 7.3% required hospital admission.",
    refs: [2, 3, 5, 73]
  },
  {
    id: "observe",
    type: "terminal",
    label: "Observe with monitoring",
    sub: "Immediate-release: ≥ 6 h\nSustained-release: 12–24 h",
    meaning: "Clinical observation with serial haemodynamic and cardiac monitoring for patients with no bradycardia, hypotension or conduction abnormality at presentation, with the observation window stratified by formulation.",
    rationale: "Immediate-release preparations peak quickly, so an asymptomatic patient after a modest ingestion needs only a limited window; sustained-release formulations delay peak concentration and prolong absorption, so severe toxicity can still emerge many hours after an initially reassuring presentation.",
    dose: [
      ["Immediate-release observation", "≥ 6 h"],
      ["Sustained-release observation", "12–24 h (ext. guideline, refs 2, 3)"]
    ],
    cautions: [
      "The manuscript text itself doesn't state a ≥ 6 h figure for immediate-release observation — only that modest immediate-release ingestions \"may be managed with observation alone\". There is also an internal tension on the sustained-release window: this box and Section 8 say 12–24 h, while Section 3.1 separately says SR toxicity \"may evolve over 24–48 hours\", a wider figure."
    ],
    refs: [2, 3, 22, 23, 73]
  },
  {
    id: "resuscitation",
    type: "process",
    tone: "key",
    label: "INITIAL RESUSCITATION (all symptomatic patients)",
    sub: "IV calcium, repeated · cautious fluids · atropine\nMonitor ionised calcium · early toxicology advice",
    meaning: "First-line bedside stabilisation for every symptomatic CCB-poisoned patient: repeated IV calcium with serial ionised-calcium monitoring, cautious fluid resuscitation, atropine, and early clinical toxicology consultation.",
    rationale: "Raising the extracellular calcium gradient partially overcomes competitive VGCC blockade; calcium chloride is preferred over calcium gluconate for faster ionisation and more elemental calcium per ampoule, though the effect is typically transient and needs serial ionised-calcium checks during repeat dosing. Early toxicology input is recommended by international expert consensus to guide the multimodal escalation that follows and to coordinate ECMO early if it turns out to be needed.",
    dose: [
      ["Calcium chloride (preferred)", "10 mL of 10% (1 g / 6.8 mmol elemental Ca²⁺) IV over 5–10 min, repeat q10–20 min PRN"],
      ["Calcium gluconate (alternative)", "3 g IV, repeat q10–20 min PRN (ext. guideline, refs 2, 15)"]
    ],
    cautions: [
      "\"Cautious fluids\" and \"atropine\" sit in this box but aren't actually recommended or dosed anywhere in the manuscript's own Section 6 or 8 text — \"fluids\" there only appears describing two paediatric case series' prior failed therapy, and \"atropine\" only appears describing an animal resuscitation model.",
      "Section 8 also says urgent HIE preparation should start at this same step for every symptomatic patient — the figure instead defers HIE to the phenotype-specific boxes below, after echocardiography."
    ],
    refs: [2, 5, 15, 64, 65]
  },
  {
    id: "echo_decision",
    type: "decision",
    label: "BEDSIDE ECHOCARDIOGRAPHY",
    sub: "Assess LV function early\nRepeat as the picture evolves",
    meaning: "Early point-of-care echocardiography to classify the patient into a vasoplegic (preserved LV) or cardiogenic (reduced LV) phenotype, repeated serially as the clinical picture evolves.",
    rationale: "Dihydropyridines — now the majority of CCB poisonings — typically cause distributive/vasoplegic shock with preserved or hyperdynamic contractility, while verapamil and diltiazem cause cardiogenic shock with reduced contractility and bradycardia. Because high-dose insulin (HIE) is an inodilator that can worsen isolated vasoplegia, the haemodynamic phenotype — not the drug name — has to determine whether therapy is vasopressor-led or inotrope/HIE-led. Serial repetition matters because mixed phenotypes are common and can evolve over hours as sustained-release drug continues to be absorbed.",
    cautions: [
      "The figure routes every symptomatic patient from Initial Resuscitation through this diamond — including isolated bradycardia without shock — while the manuscript text (Section 8) specifically scopes bedside echo to \"any CCB-poisoned patient with shock\", a narrower population than the figure's own trunk implies."
    ],
    refs: [18, 19, 58, 59, 60, 79]
  },
  {
    id: "vasoplegic",
    type: "branch",
    label: "VASOPLEGIC PHENOTYPE",
    sub: "Preserved or hyperdynamic LV · low SVR\nUsually amlodipine\nNorepinephrine first-line, MAP ≥ 65 mmHg\nAdd vasopressin if catecholamine-refractory\nRepeat calcium · correct acidosis\nMethylene blue or angiotensin II only if refractory\nHigh-dose insulin only with proven LV dysfunction",
    meaning: "Phenotype-directed management of vasodilatory/distributive CCB shock (low SVR, preserved or hyperdynamic LV, most often amlodipine or another dihydropyridine): norepinephrine first-line titrated to blood pressure, vasopressin added if catecholamine-refractory, repeated calcium and acidosis correction, methylene blue or exogenous angiotensin II reserved for refractory cases, and high-dose insulin withheld unless LV dysfunction is actually demonstrated.",
    rationale: "Dihydropyridines selectively block vascular smooth-muscle VGCCs, causing peripheral vasodilation and reflex tachycardia. Norepinephrine and, if catecholamine-refractory, vasopressin restore systemic vascular resistance and coronary perfusion pressure — vasopressin acts through vascular V1a receptors via a calcium-independent pathway, so it can still work when adrenergic and calcium-channel signalling are both impaired. Methylene blue inhibits guanylyl cyclase to blunt nitric-oxide-mediated vasodilation, but the only controlled animal trial in amlodipine toxicity found it no better than saline and inferior to IVLE, and human evidence for both methylene blue and angiotensin II is limited to isolated case reports — hence \"only if refractory\". High-dose insulin is an inodilator, not a true antidote, and can itself worsen isolated vasoplegia; recent dihydropyridine cohorts show vasopressors doing most of the work, with HIE reserved for the minority who actually have documented LV dysfunction.",
    dose: [
      ["MAP target", "≥ 65 mmHg (figure-only — see caution below)"],
      ["Vasopressin", "0.04 units/min IV infusion"],
      ["Calcium repeat dosing", "CaCl₂ 1 g IV (10 mL of 10%) or calcium gluconate 3 g IV, q10–20 min PRN"],
      ["Methylene blue (preclinical)", "2 mg/kg IV in the negative rat trial vs. saline/IVLE"]
    ],
    cautions: [
      "Two figure items in this box have no match anywhere in the manuscript's own text: the MAP ≥ 65 mmHg target, and \"correct acidosis\" as a named therapeutic step — the closest the text gets is a general mention of serially assessing acid-base status.",
      "In an Australian multicentre series of 50 hypotensive dihydropyridine overdoses, only 20% received HIE (mostly those with LV dysfunction); in a separate single-centre cohort of 68 dihydropyridine exposures, 62% needed vasopressors and 15% received HIE — consistent with vasopressors, not HIE, being the mainstay here."
    ],
    refs: [1, 2, 13, 15, 18, 19, 21, 58, 59, 60, 65, 66, 74, 75, 76, 79]
  },
  {
    id: "cardiogenic",
    type: "branch",
    label: "CARDIOGENIC PHENOTYPE",
    sub: "Reduced contractility · bradycardia · AV block\nUsually verapamil or diltiazem\nHyperinsulinaemia–euglycaemia (HIE) therapy\nGlucagon when bradycardia or AV block dominates,\nand as a bridge while HIE is titrated\nNorepinephrine for coexisting vasoplegia\nPacing for refractory bradycardia",
    meaning: "Phenotype-directed management of myocardial pump and conduction failure (reduced LV contractility, bradycardia, AV block, classically verapamil or diltiazem): HIE as the primary inotropic/metabolic adjunct, IV glucagon when bradycardia or AV block dominates and as a fast bridge while HIE is titrated, norepinephrine for coexisting vasoplegia, and pacing for bradycardia refractory to drug therapy.",
    rationale: "Non-dihydropyridines strongly block cardiac L-type VGCCs, depressing SA/AV nodal conduction and excitation–contraction coupling, while the same pancreatic beta-cell blockade starves the failing myocardium of glucose. HIE has the strongest cumulative evidence and international consensus backing as the preferred first-line adjunct: insulin activates myocardial GLUT-4 transporters to restore glucose uptake independently of blocked calcium channels and provides a non-calcium-mediated inotropic effect, with observational safety confirmed in both adults (46 cases over 7 years, 0 hypoglycaemic events) and children (36 patients over 25 years, 0 discontinuations for adverse events). Glucagon stimulates myocardial adenylyl cyclase independently of calcium channels and acts within minutes, whereas HIE's onset is delayed 15–45 minutes — so glucagon bridges that gap and targets dominant bradycardia/AV block specifically, even though it doesn't correct the underlying metabolic starvation and its clinical effects are modest and inconsistent. Norepinephrine is added because CCB shock often has a vasodilatory component too, and HIE itself is an inodilator. Pacing for refractory bradycardia follows the cardiogenic arm of the Mehrpour & Brent echo-guided flowchart this algorithm is built on.",
    dose: [
      ["HIE — insulin bolus", "1 unit/kg IV"],
      ["HIE — insulin infusion", "0.5–1 unit/kg/h, titrated to haemodynamic response"],
      ["HIE — dextrose", "25–50 g IV bolus, then continuous infusion"],
      ["HIE — glucose target", "8–10 mmol/L (ext. guideline, ref 15)"],
      ["HIE — potassium target", "3.0–3.5 mmol/L, hourly K⁺ checks"],
      ["HIE onset", "15–45 min (also reported 15–60 min)"],
      ["Glucagon bolus", "3–10 mg IV over 1–2 min"],
      ["Glucagon infusion", "3–5 mg/h, titrated to response"]
    ],
    cautions: [
      "Glucagon's 2017/2023 downgrade from first-line to a second-line/adjunctive option is sourced from external consensus guidelines the review cites (St-Onge 2017; 2023 AHA Focused Update, Class IIb, LOE C-LD), not from this review's own pooled analysis — and GRADE certainty for glucagon's chronotropic response and survival benefit is rated very low (⊕⊖⊖⊖). In the largest glucagon series (107 beta-blocker-overdose patients, 144 administrations), the heart-rate increase at 20 minutes was statistically significant but small (mean +4 bpm), with nausea, vomiting and hyperglycaemia as common side effects.",
      "Table 2's \"Agent / Dose\" column actually states an 8–12 mmol/L glucose target, a small internal mismatch against the 8–10 mmol/L figure given in Section 6.1 and this box.",
      "Pacing for refractory bradycardia is mentioned exactly once in the whole manuscript (Section 8, listing the Mehrpour & Brent flowchart's elements) — it isn't otherwise discussed. Levosimendan is also named in the Abstract as \"a potential add-on\" for refractory cardiogenic toxicity but doesn't appear in this or any other box of the figure."
    ],
    refs: [1, 2, 3, 4, 5, 6, 7, 12, 15, 17, 21, 24, 55, 56, 57, 58, 61, 62, 63, 79]
  },
  {
    id: "mixed_phenotype",
    type: "process",
    tone: "note",
    label: "MIXED PHENOTYPE — treat both arms, reassess serially",
    sub: "Common after massive dihydropyridine ingestion and in\nβ-blocker co-ingestion; may evolve as SR drug is absorbed",
    meaning: "Recognition and simultaneous treatment of combined vasodilatory and cardiogenic shock — running both the vasoplegic-phenotype and cardiogenic-phenotype arms together — with serial clinical and echocardiographic reassessment, since the dominant pattern can shift over time.",
    rationale: "At high plasma concentrations (massive or sustained-release dihydropyridine overdoses in particular), dihydropyridines lose their vascular selectivity and directly depress myocardial contractility and conduction on top of causing vasodilation. Mixed vasodilatory–cardiogenic shock is also frequent when a CCB is co-ingested with a beta-blocker, and can evolve dynamically over hours as a sustained-release tablet keeps being absorbed. Two patients with amlodipine ingestions exceeding 1000 mg needed norepinephrine requirements above 2 µg/kg/min; in one series of 28 IVLE-treated beta-blocker-poisoning patients, 13 had co-ingested a CCB.",
    cautions: [
      "In the figure, dashed (arrowhead-free) lines run from both phenotype boxes into this one, and the single solid arrow onward to the next decision comes from this box — visually this can read as though every patient passes through Mixed Phenotype on the way to the next step, rather than this being a conditional bridge specifically for patients showing features of both arms at once or in sequence."
    ],
    refs: [2, 3, 19, 22, 23, 43, 44, 45, 51, 79]
  },
  {
    id: "still_unstable_decision",
    type: "decision",
    label: "Still unstable despite\nmaximal therapy above?",
    meaning: "Decision diamond evaluating whether the patient remains haemodynamically unstable after optimal phenotype-directed first- and second-line therapy (calcium, high-dose vasopressors/vasopressin, HIE, glucagon, pacing).",
    rationale: "The evidence behind intravenous lipid emulsion is very-low certainty and comes from confounded case reports, so international consensus guidelines (EXTRIP, AHA, St-Onge) and recent reviews restrict it to patients who have already failed standard first-line and phenotype-directed therapy. Once that threshold of refractoriness is actually reached, though, giving it should not be delayed until deterioration becomes irreversible.",
    refs: [15, 16, 17, 47, 48, 51, 79, 80]
  },
  {
    id: "continue_titrated",
    type: "terminal",
    label: "Continue titrated therapy",
    sub: "Watch for late deterioration",
    meaning: "For patients who stabilise on phenotype-directed therapy without needing salvage IVLE: maintain and carefully titrate the ongoing infusions (vasopressors, HIE, calcium, glucagon) while watching closely for delayed or recurrent decompensation.",
    rationale: "Sustained-release CCB formulations have delayed peak absorption (6–18 h) and toxicity that can evolve over 24–48 h, and amlodipine's own elimination half-life runs 35–50 hours — all of which create real risk of late or recurrent deterioration after an apparently successful initial stabilisation. HIE infusions in particular often need to be maintained for a prolonged period.",
    dose: [
      ["SR peak delay / toxicity window", "6–18 h delay to peak; 24–48 h evolution"],
      ["Amlodipine elimination half-life", "35–50 h (≈40 h in the manuscript's own table)"]
    ],
    cautions: [
      "This box is drawn as a dead end in the figure, with no arrow onward to Post-Resuscitation Care — but patients who stabilise here, especially those still on HIE or after an intentional overdose, still need exactly that post-resuscitation monitoring and psychiatric assessment."
    ],
    refs: [1, 2, 3, 22, 23, 57]
  },
  {
    id: "salvage_ile",
    type: "process",
    tone: "alarm",
    label: "SALVAGE: INTRAVENOUS LIPID EMULSION",
    sub: "Rescue only — not first-line, not prophylactic\nUse after calcium, vasopressors and HIE have failed\nExpect interference with CRRT and extracorporeal circuits,\nlipaemic assay interference, hypertriglyceridaemia",
    meaning: "20% intravenous lipid emulsion (IVLE) given strictly as salvage for life-threatening instability refractory to calcium, vasopressors and HIE — while anticipating the lipid-related laboratory and extracorporeal-circuit complications it causes.",
    rationale: "Proposed mechanisms: a \"lipid sink\" effect, where the infused oil compartment partitions lipophilic CCB away from target tissue (shown in vitro for verapamil at concentrations as low as 0.03%); direct mitochondrial energetic support, supplying fatty acids for beta-oxidation to counter ATP depletion; and vascular/cellular signalling effects shown in rat tissue. Why rescue-only: human evidence is entirely uncontrolled case reports and series (GRADE very low certainty, ⊕⊖⊖⊖) confounded by concurrent therapies, with 459 fatal IVLE cases recorded in the NPDS registry pointing to real publication bias — and while preclinical verapamil/diltiazem/nicardipine studies showed benefit, a controlled swine study of nifedipine shock showed none. That's why EXTRIP, the 2023 AHA update, St-Onge, and this review itself all restrict IVLE to salvage after standard therapy fails rather than early or prophylactic use. Why the circuit/lab warnings: concentrated lipid causes hypertriglyceridaemia, makes blood samples lipaemic (interfering with labs and plasma drug assays), and can clog or interfere with CRRT filters and extracorporeal circuits, as reported in a massive amlodipine poisoning case — on top of a real risk of fat-overload syndrome and pancreatitis.",
    dose: [
      ["20% lipid emulsion bolus", "1.5 mL/kg IV over 1 min"],
      ["Continuous infusion", "0.25 mL/kg/min for 30–60 min"],
      ["Repeat bolus", "once more, 1.5 mL/kg, if no response at 5 min (ext. guideline, refs 15–17)"],
      ["Maximum cumulative dose", "~10–12 mL/kg of 20% emulsion"]
    ],
    cautions: [
      "Reported haemodynamic improvement/survival across overlapping human case-report pools runs 74–89%, but because almost every one of those patients also received calcium, vasopressors and/or HIE, that figure reflects reported clinical response, not demonstrated IVLE efficacy on its own — the manuscript's own conclusion is explicit about this.",
      "A poison-centre implementation gap is documented in the source review: HIE was actually instituted in only 42% of recommended cases, and IVLE in just 33% of those, despite 80% of poison-centre directors endorsing IVLE for verapamil cardiac arrest — a real gap between guideline endorsement and bedside use.",
      "Unlike the superseded embedded figure in the manuscript file, this box deliberately doesn't print the numeric dosing regimen inline — the authors moved the numbers out to the manuscript's own Section 4.6 and Table 2."
    ],
    refs: [8, 9, 10, 11, 15, 16, 17, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 70, 71, 72, 74, 79, 80]
  },
  {
    id: "refractory_decision",
    type: "decision",
    label: "Refractory shock or\ncardiac arrest?",
    meaning: "Decision diamond assessing whether the patient remains in refractory shock or progresses to refractory cardiac arrest despite every pharmacological therapy including salvage IVLE (Yes), versus recovering enough to go straight to post-resuscitation care (No).",
    rationale: "When maximal pharmacological support — calcium, vasopressors, HIE, glucagon, IVLE — fails to restore circulation or prevent impending or actual cardiac arrest, mechanical circulatory support via VA-ECMO is the only life-saving bridge left until the drug itself is metabolised and cleared.",
    cautions: [
      "The manuscript's own Section 6.5, Table 2 and Section 8 frame VA-ECMO's primary indication more narrowly, as cardiac arrest refractory to pharmacological treatment (activated once signs of impending cardiac collapse emerge) — this diamond is explicitly broader, including refractory shock short of arrest, which does match the case reports the review itself cites (Kuhn et al.; Fisher et al.) and the cardiogenic arm of the Mehrpour & Brent flowchart this figure is built on."
    ],
    refs: [14, 15, 17, 45, 68, 79, 80]
  },
  {
    id: "va_ecmo",
    type: "process",
    tone: "alarm",
    label: "VA-ECMO / EXTRACORPOREAL LIFE SUPPORT",
    sub: "Activate the team early, before collapse is irreversible\nTransfer if ECMO is unavailable on site\nBridges circulation; does not remove drug",
    meaning: "Urgent initiation of veno-arterial ECMO to mechanically support systemic circulation and end-organ perfusion until the ingested CCB is hepatically/renally cleared, including early team activation and interfacility transfer to an ECMO-capable centre when needed.",
    rationale: "VA-ECMO supports the circulation while the body clears the drug, but the circuit itself does not remove lipophilic CCB from the body. Activating the team before haemodynamic deterioration causes irreversible end-organ damage is associated with better outcomes. In two reported cases, early coordination between the ICU, toxicology, and a regional ECMO team allowed successful interfacility transfer for VA-ECMO in refractory CCB/beta-blocker overdose.",
    cautions: [
      "No specific ECMO flow or cannulation thresholds are given anywhere in the manuscript. A related but distinct number from the same section: in a separate 24-patient cohort treated with resin haemoadsorption rather than ECMO, MAP rose more by 48 hours despite a sicker baseline population — cited for context, not as part of this box's own pathway."
    ],
    refs: [14, 15, 17, 45, 68, 79, 80]
  },
  {
    id: "post_resuscitation",
    type: "terminal",
    label: "POST-RESUSCITATION CARE",
    sub: "Glucose and potassium management while HIE continues\nAvoid negative inotropes · monitor ≥ 24 h\nPsychiatric assessment after intentional ingestion",
    meaning: "Post-stabilisation intensive care: continuous glucose and potassium monitoring/supplementation for as long as HIE continues, strict avoidance of negative-inotropic drugs, at least 24 hours of extended haemodynamic monitoring, and psychiatric evaluation after an intentional self-poisoning.",
    rationale: "High-dose insulin drives both glucose and potassium into cells, so mandatory dextrose co-infusion and routine potassium supplementation prevent iatrogenic hypoglycaemia and hypokalaemia during prolonged HIE. A recovering myocardium stays vulnerable to recurrent depression, and delayed redistribution or a long drug half-life means at least 24 hours of monitoring is needed after haemodynamic stabilisation.",
    dose: [
      ["Post-stabilisation monitoring", "≥ 24 h (ext. guideline, ref 15)"],
      ["Glucose target during HIE", "8–10 mmol/L (8–12 mmol/L in one table)"],
      ["Potassium target during HIE", "3.0–3.5 mmol/L, hourly checks"]
    ],
    cautions: [
      "Psychiatric assessment after intentional ingestion isn't actually discussed anywhere in the manuscript's own prose or tables, even though intentional overdoses are mentioned in Section 4.4 case reports.",
      "The superseded embedded figure's own closing box specified a longer SR-CCB monitoring window (≥ 48 h) than this one (≥ 24 h) — one more place the old and new figures disagree; this tool follows the standalone image's ≥ 24 h, consistent with the current Section 8 text."
    ],
    refs: [5, 15, 57, 62]
  }
];

const GLOSSARY = [
  {
    match: "VGCC",
    full: "voltage-gated calcium channel",
    def: "The L-type calcium channel that CCBs block — in vascular smooth muscle this causes vasodilation, and in cardiac SA/AV nodal and myocardial tissue it depresses conduction and contractility."
  },
  {
    match: "SVR",
    full: "systemic vascular resistance",
    def: "The resistance the left ventricle pumps against; low SVR with preserved contractility is the signature of vasoplegic/distributive CCB shock."
  },
  {
    match: "MAP",
    full: "mean arterial pressure",
    def: "The average arterial pressure over a cardiac cycle, used here as the resuscitation target for vasopressor titration in vasoplegic-phenotype shock."
  },
  {
    match: "HIE",
    full: "hyperinsulinaemia–euglycaemia therapy",
    def: "High-dose insulin with dextrose co-infusion, used as a metabolic/inotropic adjunct in cardiogenic-phenotype CCB shock; acts as an inodilator, which is why it's withheld in isolated vasoplegia unless LV dysfunction is proven."
  },
  {
    match: "IVLE",
    full: "intravenous lipid emulsion",
    def: "A 20% lipid infusion used as salvage therapy for CCB shock refractory to calcium, vasopressors and HIE — proposed to work as a lipid sink and as a mitochondrial energy substrate; not first-line or prophylactic."
  },
  {
    match: "VA-ECMO",
    full: "veno-arterial extracorporeal membrane oxygenation",
    def: "Mechanical circulatory support bridging a patient through refractory shock or cardiac arrest until the body clears the ingested drug; does not remove the drug itself."
  },
  {
    match: "CRRT",
    full: "continuous renal replacement therapy",
    def: "Continuous dialysis/filtration support, whose filters and circuits can be clogged or interfered with by the hypertriglyceridaemia that high-volume lipid emulsion therapy causes."
  },
  {
    match: "AV block",
    def: "Delayed or blocked electrical conduction between the atria and ventricles — a hallmark of cardiogenic-phenotype CCB toxicity from verapamil or diltiazem."
  },
  {
    match: "dihydropyridine",
    def: "The CCB subclass (amlodipine, nifedipine, nicardipine, felodipine) that is vascular-selective at usual doses and now accounts for most CCB poisonings, typically producing vasoplegic rather than cardiogenic shock."
  }
];

const AGENTS = [
  "Norepinephrine",
  "Vasopressin",
  "Calcium chloride",
  "Calcium gluconate",
  "Atropine",
  "Glucagon",
  "Methylene blue",
  "Angiotensin II",
  "Insulin",
  "Dextrose",
  "Activated charcoal"
];
