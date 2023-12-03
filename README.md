# WordSnap Analyzer

WordSnap Analyzer is an AI keyword extractor used to get keywords from text using Open AI's completions Api to extract text from a given paragraph. This project aims to learn and explore Open AI's API.


# Getting Started

- clone the repository https://github.com/PriyankaMaru28/WordSnap_Analyzer.git
- run npm install
- run npm run dev

  # Create a .env file to include the following 

    - VITE_OPENAI_API_KEY (openAI API key)
    - VITE_OPENAI_API_URL (openAI API URL)


# Tools and Technologies used 


  

1: Screenshot of the WordSnap Analyzer

![Screenshot 2023-12-02 at 22 14 50](https://github.com/PriyankaMaru28/WordSnap_Analyzer/assets/68162528/62ff9ced-7059-49e8-a5db-2938b32d5fd1)


2. Paste the content in the Text box

![Screenshot 2023-12-02 at 22 15 55](https://github.com/PriyankaMaru28/WordSnap_Analyzer/assets/68162528/728649e9-d516-4f0c-b7c9-cee1b4c6126a)



3: After Clicking the "Extract Keyword" button; a loader is shown indicating the keywords are being extracted from the pasted content

![Screenshot 2023-12-02 at 22 18 06](https://github.com/PriyankaMaru28/WordSnap_Analyzer/assets/68162528/afdef416-5be2-4fce-8d53-ca4becb8031a)


4: The generated keywords are displayed in the modal

![Screenshot 2023-12-02 at 22 16 07](https://github.com/PriyankaMaru28/WordSnap_Analyzer/assets/68162528/fcdcab65-9521-4723-8f6a-07f8942e395c)


5: If the user clicks on the "Extract Keyword" button without any content in the text box, the user is notified


![Screenshot 2023-12-02 at 22 18 23](https://github.com/PriyankaMaru28/WordSnap_Analyzer/assets/68162528/5573351d-d63a-4a6f-874a-b414da577b69)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
