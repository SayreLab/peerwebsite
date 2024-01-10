# PEER Institute

Professional Development for Emerging Education Researchers

## Description

This repository contains the project website for the PEER Institute. It is an improved and updated version of the old website.

This project was built using Quarto, R, RStudio, and RTools, and hosted on GitHub and Netlify.

## Why Quarto?

1. Quarto uses R Markdown and other packages and combines them into one system. 
2. It allows for simple content creation without having to install many other libraries or packages.
3. Easy to create custom formats, and add to existing formats with shortcodes and filters.
4. Quarto uses Lua to enable logic in custom metadata.

## What is PEER?

The Professional Development for Emerging Education Researchers (PEER) Institute supports scholars as they become education researchers and expand their research expertise. PEER focuses on Discipline-based Education Research, advancing both scholarship and teaching goals that are valued at all types of academic institutions.

At PEER, you will learn fundamental and applied research skills in a supportive and participatory research environment.

You will delve into research project development and best practices, engage with like-minded professionals, and gain invaluable insights into the world of educational research. Our expert facilitators will guide you through hands-on activities and collaborative discussions, helping you shape your project and engage your passion.

## Project Requirements and Setting up the Development Environment

You will need to follow these steps to run the project:

1. Clone the Git repository
2. [Install R](https://cran.r-project.org/)
3. Install tools
    * Windows: [RTools](https://cran.r-project.org/bin/windows/Rtools/)
    * MacOS: [tools](https://cran.r-project.org/bin/macosx/tools/)
4. [Install Quarto](https://quarto.org/docs/get-started/)

Once you have installed Quarto, it is recommended to add Quarto to Path environment variables. This will make running quarto commands like `quarto render` easier.

## Running the project

If you prefer using a CLI terminal and have added Quarto to Path, you can render the site by executing the command `quarto render`. This will render all `.qmd` files in the directory and subdirectories.

If you prefer using an IDE, see the list below for recommended choices which link to tutorials in the Quarto documentation:

* [Visual Studio Code](https://quarto.org/docs/get-started/hello/vscode.html)
    * In the project's parent directory, open the command palette (Ctrl+Shift+P) and execute the command `Quarto: Render Project`
    * An output will be created in `/_site/index.html`. There are different options to open it.
        1. Search for the file on the parent directory in VS Code, right-click it, and click on Copy Path. Then, open a browser and paste the path on the search bar.
        2. Open a file explorer and search for the file, then double-click it. It should open the file on your default browser.
* [RStudio](https://quarto.org/docs/get-started/hello/rstudio.html)
    * In the project's parent directory, on the top navigation bar, click on `Build` and then on `Render Website` or use Ctrl+Shift+B

Quarto documentation also has tutorials for [Jupyter](https://quarto.org/docs/get-started/hello/jupyter.html), [Neovim](https://quarto.org/docs/get-started/hello/neovim.html), and [Text Editor](https://quarto.org/docs/get-started/hello/text-editor.html)

## Git workflow

If `/_site` is not added to your `.gitignore` file, make sure you execute `quarto render` or render the website using an IDE before you commit changes.

After you've rendered the site, use the common Git workflow:
1. `git add .`
2. `git commit -m"<commit name>"`
3. `git push`

## Netlify Hosting

The website is currently being hosted on Netlify. To learn more about the hosting service please visit [Netlify's Site](https://www.netlify.com/) and [Documentation](https://docs.netlify.com/)

We've run into issues with the Registration Forms and how Netlify managed them in the past. If these issues arise again, try the following:

On your CLI or IDE:
* Re-render the project.
* Perform the Git workflow to push the new content to GitHub.

On Netlify:
* Open your project and on the left navbar go to "Deploys".
* You will see a content section on the page which contains a log or list of deploys.
* On that content section's top right corner, there will be a dropdown box with the text "Trigger Deploy"
* Click on that box and select "Clear Cache and Deploy Site"
* Wait for the site to deploy and check if it updated.

## Team members and collaborators

* Eleanor Sayre: [GitHub Profile](https://github.com/esayre)
* Haimar Rubio: [GitHub Profile](https://github.com/HaimarR)
* Christian Solorio