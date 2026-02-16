# PetResort

[![CI](https://github.com/andrewRCr/PetResort/actions/workflows/ci.yml/badge.svg)](https://github.com/andrewRCr/PetResort/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An employee web portal for managing pet boarding and grooming operations, built with
TypeScript across the full Express and MongoDB stack. Six domain models — Guests, Clients,
Visits, Employees, Kennels, and Services — form an interconnected data layer where visits
cross-reference assigned kennels, scheduled services, and check-in state. The visit workflow
covers the full operational cycle: scheduling with kennel assignment, check-in and check-out
with occupancy tracking, per-service completion logging, and computed billing.

<p align="center">
  <a href="https://pet-resort.andrewcreekmore.com">Live Demo</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://andrewcreekmore.dev/projects/software/petresort">Portfolio</a>
</p>

> **Demo credentials:** username `admin` / password `admin`

<div align="center">
  <a href="https://github.com/andrewcreekmore/PetResort/assets/44483269/e586063b-3da0-4721-a32a-e195217d4072"><img src="https://github.com/andrewcreekmore/PetResort/assets/44483269/e586063b-3da0-4721-a32a-e195217d4072" width="24%" alt="Home page" /></a>
  <a href="https://github.com/andrewcreekmore/PetResort/assets/44483269/39200933-6492-46f6-b874-e700237a7bd2"><img src="https://github.com/andrewcreekmore/PetResort/assets/44483269/39200933-6492-46f6-b874-e700237a7bd2" width="24%" alt="Dashboard" /></a>
  <a href="https://github.com/andrewcreekmore/PetResort/assets/44483269/b66efb59-95e3-48b2-8b52-26c970129114"><img src="https://github.com/andrewcreekmore/PetResort/assets/44483269/b66efb59-95e3-48b2-8b52-26c970129114" width="24%" alt="Visit details" /></a>
  <a href="https://github.com/andrewcreekmore/PetResort/assets/44483269/53e249c1-cb0f-4773-97d9-26e4ec27aba4"><img src="https://github.com/andrewcreekmore/PetResort/assets/44483269/53e249c1-cb0f-4773-97d9-26e4ec27aba4" width="24%" alt="Admin panel" /></a>
</div>

## Details

*Employees manage daily boarding operations — scheduling visits, assigning kennels, tracking
service completion, and processing billing — with role-based views separating standard
workflows from administrative functions.*

- Six domain models with cross-referenced relationships — Visits track Guests, Kennels, and
  Services; Guests reference their owner Client and visit history
- Visit lifecycle from scheduling through kennel assignment, check-in, per-service completion
  tracking, check-out, and computed billing
- Two-tier access control: all employees see operational views, admin-flagged users manage
  Employees, Kennels, and Services
- Defense-in-depth validation: Joi schemas with custom HTML sanitization extension, Mongoose
  validation, express-mongo-sanitize, and Helmet CSP
- Password reset via time-limited crypto tokens with transactional email confirmation
- Cloudinary image uploads for guest profiles, fuzzy search across records, paginated views,
  and dynamic breadcrumb navigation

## Technology

- **Frontend:** EJS, Bootstrap
- **Backend:** TypeScript, Node.js, Express
- **Database:** MongoDB, Mongoose
- **Auth:** Passport.js, session-based
- **Hosting:** Heroku

<p align="center"><a href="#petresort">↑ Back to top</a></p>
