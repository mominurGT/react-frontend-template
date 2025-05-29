Here are the steps to set up the FFP Frontend project on your local PC:

1. **Create a Project Directory:**  
   * Create a directory where you want to keep the project.  
2. **Initialize Git:**  
   * Navigate to the project directory.  
   * Run: `git init`  
3. **Clone the Project:**  
   * Run: `git clone project URL`  
4. **Create and Checkout a New Branch:**  
   * Run: `git checkout -b feature/YOUR_FEATURE_NAME`  
5. **Rebase from the Development Branch:**  
   * Run: `git rebase origin/dev`  
6. **Set Up the Environment:**  
   * Create an `.env` file in the root directory if needed.  
7. **Install Dependencies:**  
   * Run: `npm install`  
8. **Start the Development Server:**  
   * Run: `npm run dev`

**Attention:** Do not push code to the `dev` or `main` branches. Always push your code to your feature branch.
