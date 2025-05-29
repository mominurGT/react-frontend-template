### Setting Up the Frontend Project Locally

Follow these steps to get the frontend project running on your local machine:

1. **Create a Project Folder**

   * Choose or create a directory where you'd like to store the project.

2. **Initialize Git (if needed)**

   * Open a terminal in the project directory.
   * Run:

     ```bash
     git init
     ```

3. **Clone the Repository**

   * Run:

     ```bash
     git clone https://github.com/mominurGT/react-frontend-template.git
     ```

4. **Create and Switch to a Feature Branch**

   * Run:

     ```bash
     git checkout -b feature/YOUR_FEATURE_NAME
     ```

5. **Rebase onto the Latest Development Branch**

   * Run:

     ```bash
     git fetch origin
     git rebase origin/main
     ```

6. **Configure the Environment**

   * If required, create an `.env` file in the root directory and add environment-specific variables.

7. **Install Project Dependencies**

   * Run:

     ```bash
     npm install
     ```

8. **Run the Development Server**

   * Start the project with:

     ```bash
     npm run dev
     ```

---

### ⚠️ Important Guidelines

* **Do NOT push directly to the `main` branch.**
  Always create a dedicated feature branch and push your changes there.
