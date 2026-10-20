# EU AI Act Decision Map

Baseline: Regulation (EU) 2024/1689 consolidated on 27 July 2026, including Regulation (EU) 2026/1744. Read the full provision before relying on this map.

## 1. Scope and role

Establish whether the object is an AI system or GPAI model, territorial scope under Article 2, intended purpose, deployment context, and every relevant role. A deployer may become a provider under Article 25 through branding, substantial modification, or a changed intended purpose that makes the system high-risk.

## 2. Article 5 prohibited practices

Test all current points, not a sample:

- 5(1)(a): materially harmful subliminal, manipulative, or deceptive techniques
- 5(1)(b): materially harmful exploitation of age, disability, or social or economic vulnerability
- 5(1)(ba): specified non-consensual intimate material, subject to paragraphs 1a and 1b
- 5(1)(bb): specified child sexual abuse material, except where the national-law “without right” defence applies, subject to paragraph 1a
- 5(1)(c): social scoring leading to either listed type of detrimental or unfavourable treatment
- 5(1)(d): individual criminal-offence risk assessment based solely on profiling or personality traits, subject to the objective-facts support exception
- 5(1)(e): untargeted scraping of facial images to create or expand facial-recognition databases
- 5(1)(f): emotion inference in workplaces or education, except for medical or safety reasons
- 5(1)(g): biometric categorisation to deduce or infer the listed sensitive attributes, subject to the stated dataset and law-enforcement carve-outs
- 5(1)(h): real-time remote biometric identification in publicly accessible spaces for law enforcement, except within the narrow statutory objectives and safeguards in paragraphs 2 to 7

Points 5(1)(ba), 5(1)(bb), 5(1a), and 5(1b) apply from 2 December 2026. Do not collapse their specific scope, safeguards, or defences into a generic ban.

## 3. Article 6 high-risk classification

### Annex I route, Article 6(1)

Both conditions must be met: the AI is a product or safety component covered by listed harmonisation legislation, and the product requires third-party conformity assessment. Apply the amended safety-component limits in Article 6(1a) to (1c). Convenience, efficiency, optimisation, non-safety assistance, and quality control alone do not qualify; a failure or malfunction that would endanger health and safety does.

### Annex III route, Article 6(2)

Match the exact intended use to Annex III. Important boundaries include:

- one-to-one biometric verification whose sole purpose is confirming identity is excluded from Annex III point 1
- point 4 covers specified employment and worker-management uses
- point 5 does not create a generic housing category
- point 5(c) is limited to risk assessment and pricing for life and health insurance concerning natural persons

### Article 6(3) exception

An Annex III system is not high-risk only where it does not pose a significant risk to health, safety, or fundamental rights, including by not materially influencing decision outcomes, and at least one condition applies: narrow procedural task, improvement of a completed human activity, pattern/deviation detection without replacing or influencing the completed human assessment and with proper review, or a preparatory task. Profiling of natural persons always defeats the exception. Providers invoking it must document the assessment under Article 6(4) and register under Article 49(2).

## 4. Other duties

- Article 4: AI literacy measures apply to providers and deployers. Do not promise or assert a legally prescribed training level.
- Article 4a: exceptional special-category processing for bias detection and correction has actor-specific conditions. Paragraph 2 extends a permission, not an obligation, to providers and deployers of other AI systems and models and deployers of high-risk systems. In the enacted text: “This paragraph does not create any obligation to conduct such bias detection and correction.”
- Article 50: assess interaction, synthetic-content marking, emotion-recognition or biometric-categorisation disclosure, deepfake disclosure, and public-interest text disclosure separately.
- Articles 51 to 55: distinguish GPAI systemic-risk classification from provider duties. Do not attribute Article 55 systemic-risk duties to Articles 53 or 54.
- Article 26: apply deployer duties only to high-risk systems and paragraph-specific conditions.
- Article 27: FRIA applies before first use to listed Annex III systems used by public-law bodies, private entities providing public services, and deployers of Annex III 5(b) and 5(c), excluding Annex III point 2. It is not mandatory for every private employer. Article 27(4) permits DPIA cross-references; it does not make the documents interchangeable.

## 5. Correct evidence anchors

- Article 11 and Annex IV: provider technical documentation
- Article 12: technical logging capability
- Article 17: provider quality management system; harmonised standard EN 18286:2026 (see section 7)
- Article 18: provider documentation keeping, generally 10 years
- Article 19: provider retention of automatically generated logs under its control, generally at least six months
- Article 26(6): deployer retention of logs under its control, generally at least six months
- Article 43: conformity assessment; for Annex III point 1, Annex VI internal control only where harmonised standards or common specifications were applied for the Chapter III, Section 2 requirements, otherwise Annex VII
- Article 47: EU declaration of conformity
- Article 48: CE marking
- Article 49: registration
- Article 72: post-market monitoring
- Article 73: serious-incident reporting

## 6. Operative dates

- 2 February 2025: Article 4 and most Article 5 prohibitions apply
- 2 August 2025: GPAI obligations and the general penalties framework, except Article 101, apply
- 27 July 2026: Regulation (EU) 2026/1744 enters into force; Articles 102 to 110 apply
- 2 August 2026: Article 50 and Commission GPAI supervision/enforcement and Article 101 fines apply
- 14 October 2026: Commission Implementing Decision (EU) 2026/2274 publishes the reference of EN 18286:2026 in the Official Journal and enters into force (a presumption-of-conformity date, not an application date of the Regulation)
- 2 December 2026: new Article 5(1)(ba), (bb), 5(1a), and 5(1b) apply; legacy systems under the Article 50(2) transition reach the marking date
- 2 August 2027: legacy GPAI model obligations under Article 111(3)
- 2 December 2027: Chapter III Sections 1 to 3 apply to Article 6(2)/Annex III high-risk systems
- 2 August 2028: the same sections apply to Article 6(1)/Annex I high-risk systems

The 2027 and 2028 high-risk dates are unconditional calendar dates, not proposal-era backstops triggered by a Commission decision.

## 7. Harmonised standards and guidance status

Status reviewed 20 October 2026 against Commission Implementing Decision (EU) 2026/2274 and the Commission's AI Act pages of 19 October 2026. Check the Official Journal for references published later.

### Harmonised standards

- EN 18286:2026, *Artificial intelligence - Quality management system for EU AI Act regulatory purposes* (CEN and CENELEC) is the first and only harmonised standard with an Official Journal reference. Commission Implementing Decision (EU) 2026/2274 of 12 October 2026 published the reference on 14 October 2026, without a restriction, and entered into force that day.
- Scope: Article 17. Per the Commission, providers implementing it benefit from a presumption of conformity with the Article 17 requirements it covers. Article 40(1) itself names the Chapter III, Section 2 requirements and the GPAI obligations; the Digital Omnibus added to Article 40(2) a request for deliverables covering Sections 2 and 3. Cite the Article 17 presumption as the Commission's position.
- Applying a harmonised standard is voluntary. The presumption reaches only as far as the standard covers a requirement.
- No harmonised standard covers the Chapter III, Section 2 requirements (Articles 8 to 15) yet. Consequences: Annex IV point 7 requires a detailed description of the solutions adopted for them; for Annex III point 1 systems, Article 43(1) leaves only Annex VII unless common specifications were applied.
- EN 18286 is built around the AI system lifecycle and designed to be layered on ISO/IEC 42001, ISO 9001 or a sectoral system such as ISO 13485. ISO/IEC 42001 is not a harmonised standard under the AI Act and gives no presumption of conformity.
- Article 17(4): financial institutions meeting the duty through internal-governance rules must take harmonised standards referred to in Article 40 into account. Article 43(3): for Annex I Section A products, the Article 17 quality management system is assessed within the sectoral procedure.

### Commission guidance (non-binding)

- Draft guidelines on the classification of high-risk AI systems: Article 6(5) set 2 February 2026; the Commission published a draft on 19 May 2026 and still describes it as draft. Use its examples as interpretive support labelled `draft Commission guidance`; never let an example override Article 6 or Annex III.
- Guidelines on the Article 50 transparency obligations: adopted 20 July 2026. Non-binding interpretation of roles, definitions and exceptions.
- Code of Practice on Transparency of AI-generated Content: on 8 July 2026 the Commission found it adequate for Article 50(2), (4) and (5). Voluntary; adherence is not conclusive evidence of compliance. Providers and deployers of generative AI systems that do not adhere must show alternative, equivalently adequate means for marking and labelling.
