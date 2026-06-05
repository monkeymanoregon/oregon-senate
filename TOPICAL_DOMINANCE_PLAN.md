# Oregon Senate Topical Dominance Plan

This document outlines the content strategy and implementation checklist for building out the Oregon State Senate issue library, ensuring the campaign captures topical dominance while remaining strictly neutral and resident-centered.

## 📋 Strategy Brief

**Primary Goal:** Build topical dominance around Oregon issues without turning pages into candidate opinion or partisan platform pages.
**Core Framing:** Every issue page should state that the issue matters to Oregonians, residents may disagree on the best solution, and the campaign wants to know what people actually want represented.
**Terminology:** Use 'Issue Listening Pages' or 'Oregon Issue Library' instead of 'Policy Positions'.
**Voice:** Plain-language, calm, fair, practical, and resident-centered.
**Avoid:** Do not label one viewpoint as good/bad, right/wrong, compassionate/cruel, smart/dumb, or partisan. Do not write as if the candidate has already decided.
**Always Include:** Public-input CTA, neutral tradeoffs, related issue links, and current bills/policies when available.
**Website Structure:** Use `/issues` as main hub, `/issues/[topic]` for issue hubs/spokes, and `/bills` for bill tracking.

---

## ✅ Implementation Checklist

### Phase 0: Infrastructure
- [x] Create main `/issues` hub page layout (How It Works)
- [x] Create interactive feedback form component for data collection
- [x] Create `/bills` tracking page to show real-time legislative integration

### Phase 1: Core Issue Hubs (Parent Pages)
*Develop neutral, high-level pages that outline the overarching topic without taking a stance.*
- [ ] Create Hub: Economy & Cost of Living (`/issues/economy`)
- [ ] Create Hub: Housing & Homelessness (`/issues/housing`)
- [ ] Create Hub: Healthcare & Mental Health (`/issues/healthcare`)
- [ ] Create Hub: Education & Schools (`/issues/education`)
- [ ] Create Hub: Environment & Natural Resources (`/issues/environment`)
- [ ] Create Hub: Public Safety & Justice (`/issues/public-safety`)

### Phase 2: Issue Spoke Pages (Sub-topics)
*Develop specific long-tail keyword pages that link back to their respective hubs.*
- [ ] Spoke: Property Taxes (`/issues/economy/property-taxes`)
- [ ] Spoke: Addiction Services (`/issues/healthcare/addiction-services`)
- [ ] Spoke: Urban Growth Boundaries (`/issues/housing/urban-growth-boundary`)
- [ ] Spoke: Wildfire Management (`/issues/environment/wildfires`)
- [ ] *(Add more specific spoke topics as identified by SEO research)*

### Phase 3: Integration & Feedback loops
- [ ] Connect individual issue pages to relevant live bills via API.
- [ ] Add public sentiment results/charts to issue pages showing aggregate feedback (e.g. "60% of constituents support X").

---
*Document imported from Google Sheets. Keep this file updated as pages are built out.*
