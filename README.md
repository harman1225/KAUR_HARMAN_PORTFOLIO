# KAUR HARMAN PORTFOLIO

## Assignment 14 – Component Library Portfolio

This project is a **React Portfolio Website** built using a component-based structure.
It highlights the coursework completed during the Full Stack Web Development program.

The application is fully **dockerized** and runs on:

 http://localhost:5575

---

## Features

The portfolio includes the following sections:

### 1. Basic Information

* Introduction about the developer
* Program details
* Career goals
* GitHub and LinkedIn links

### 2. Work

Projects included:

* Rails E-Commerce Store
* UI Garden
* StyleHub Store
* Rails CRM Project
* Form Validation Assignment
* TeamShotOnGoalPercentages

Each project contains:

* Title
* Description
* Image
* GitHub Link
* Technologies Used

### 3. Skills

* HTML
* CSS
* JavaScript
* React
* Ruby on Rails
* Java
* Git & GitHub
* Docker
* Storybook
* ESLint
* Prettier

### 4. Resources

* React Documentation
* MDN Web Docs
* Docker Documentation
* GitHub Docs
* freeCodeCamp

### 5. Developer Setup

* VS Code extensions
* Terminal: PowerShell
* Preferred font: Fira Code
* Helpful developer resources

---

## Technologies Used

* React (Create React App)
* JavaScript
* HTML / CSS
* Docker
* Git & GitHub

---

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/harman1225/KAUR_HARMAN_PORTFOLIO.git
cd KAUR_HARMAN_PORTFOLIO
```

---

### Step 2: Build Docker Image

```bash
docker build -t kaur_harman_coding_assignment14 .
```

---

### Step 3: Run Docker Container

```bash
docker run -d --name kaur_harman_coding_assignment14 -p 5575:5575 kaur_harman_coding_assignment14
```

---

### Step 4: Open in Browser

```bash
http://localhost:5575
```

---

## Docker Requirements (Assignment)

* Container name:

```
kaur_harman_coding_assignment14
```

* Working directory:

```
kaur_harman_final_site
```

* Runs production build of React app

---

## Git Commands Used

```bash
git init
git remote add origin https://github.com/harman1225/KAUR_HARMAN_PORTFOLIO.git
git add .
git commit -m "Initial portfolio setup"
git push -u origin main
```

For updates:

```bash
git add .
git commit -m "Update portfolio"
git push
```

---

## CI/CD Concept (Simple Explanation)

Continuous Integration and Continuous Delivery (CI/CD) helps automate the process of:

* Building the application
* Testing the application
* Deploying the application

In this project:

* Code is pushed to GitHub
* Docker is used to build and run the application
* This simulates a simple deployment pipeline

---

## Author

**Harmanpreet Kaur**

GitHub:
https://github.com/harman1225

LinkedIn:
https://www.linkedin.com/in/harmanpreet-kaur-9900b2389/

---

## Final Notes

* This project demonstrates full stack development knowledge
* Uses component-based architecture
* Shows real coursework projects
* Successfully deployed using Docker

---
