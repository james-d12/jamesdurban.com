---
title: Panda
publishDate: 2023-01-01 00:00:00
img: /assets/stock-2.jpg
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  A financial planning and analysis tool used by many managers within the business to track their respective department's budgets.
skills:
  - Backend
  - Frontend
  - React.js
  - Material UI
  - TypeScript
  - GitHub Actions
  - Prisma.io
  - SQLITE
  - REST API
github: private
---

# Overview

Panda is a financial planning and analysis web application built from the ground up to address the required business needs to track and manage budgets across all sectors of the business. 

I worked with the Finance Team, I.T team and my manager to take it from the design phase all the way to the delivery phase. I used the agile methodology which allowed the development to respond more rapidly to the ever growing changes and needs of the product as it's requirements were not set in stone.

# How was it built?

When the project initially began, I used tools such as [DBDesigner.Net](https://www.dbdesigner.net/) to sketch up initial database designs and used GitHub's issues and projects feature to plan out milestones and tasks that would need to be completed for each phase. In the beginning, the project started more unstructured as we began the process towards a prototype / skeleton of what the web application would turn out to be. Once the shape and vision of the website was more set in stone we moved towards an agile development process where every 4 - 8 weeks we released features and cycled between bug fixes and features.

Panda was separated into 2 modules the backend and the frontend.

## Backend
- **REST API** developed in **TypeScript** & **Node.js**.
- **Express.js** used as the server library.
- **Prisma.io** was used for the database ORM. (Previously was Sequelize.js, but I migrated to Prisma.io
- **SQLite** was used as the primary database for storing Panda data.
- External connections to other databases within the company were performed using **Microsoft SQL** queries.
- Authentication of users was handled via integration of **Active Directory**.
- Unit tests and API tests were made using **Jest** and **Supertest**.
- **Postman** was used as well for testing requests.
- Endpoints documented using **Swagger** Docs.

## Frontend
- **React.js** & **TypeScript** were used as the main language + library.
- **Tabulator.js** was used for the tables to include sorting, filtering and advanced row / column calculations.
- **Material UI** was used as the main component library to assist with styling and UI.
- **Zod** and **Formik** used for validation and allowing users to input certain data typically used to send to the REST API.
- 

# What big challenges did I overcome?
There were a lot of big challenges that propped up during the design and development stages of Panda.