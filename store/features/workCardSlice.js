import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            projectName: "Türkiye Earthquake Predictor",
            projectLink: "/assets/documents/seaLevelPredictor.pdf",
            projectLinkText: "coming soon...",
            description:  "Predict the future earthquakes with earthquake data from boğaziçi university",
            tecnologies: "python(pandas, seaborn, scipy), Jupyter-lab",
            classes: false,
            type: "work"
        },
        {
            id: 2,
            projectName: "Steam Web Scrapping and Analyz",
            projectGitLink: "https://github.com/BerkeDS/SteamWebScrapingAndAnalyze/blob/master/steamAnalysis.ipynb",
            projectLink: "/assets/documents/steamAnalysis.pdf",
            projectLinkText: "Open Analysis Result",
            description:  "Collect Steam data and analyze it with Python(pandas, jupyterlab) First run the gatherLinks.py for collecting data from steam web page, this procces may take a while. And run the cleanData.py for filling the percentage column finally analyze with steamAnalysis.ipynp use jupyter lab to open this file.",
            tecnologies: "sql, python(beatifulsoup, pandas, seaborn, matplotlib), Jupyter-lab",
            classes: false,
            type: "work"
        },
        {
            id: 3,
            projectName: "Student Management System",
            projectLink: "/assets/documents/seaLevelPredictor.pdf",
            projectLinkText: "coming soon...",
            description:  "Predict the future sea level with the data",
            tecnologies: "python(pandas, seaborn, scipy), Jupyter-lab",
            classes: false,
            type: "work"
        },
        {
            id: 4,
            projectName: "Sub Array Algorithm",
            projectLink: "https://github.com/BerkeDS/SubarrayAlgo/blob/main/SubArray.js",
            projectLinkText: "Github Page",
            description:  "This Algorithm finds all subarrays",
            tecnologies: "Javascript",
            classes: false,
            type: "work"
        },


        {
            id: 5,
            projectName: "Sea Level Predictor",
            projectGitLink: "https://github.com/BerkeDS/DataAnalyzPrac/tree/main/SeaLevelPredictor",
            projectLink: "/assets/documents/seaLevelPredictor.pdf",
            projectLinkText: "PDF dosyasına git",
            description:  "Predict the future sea level with the data",
            tecnologies: "python(pandas, seaborn, scipy), Jupyter-lab",
            classes: false,
            type: "practice"
        },
        {
            id: 6,
            projectName: "Medical Data Analyze",
            projectGitLink: "https://github.com/BerkeDS/DataAnalyzPrac/tree/main/MedicalDataAnalyz",
            projectLink: "/assets/documents/medicalAnalyz.pdf",
            projectLinkText: "PDF dosyasına git",
            description:  "Analysis and Visualize of medical data",
            tecnologies: "python(numpy, pandas, seaborn, matplotlib), Jupyter-lab",
            classes: false,
            type: "practice"
        },
        {
            id: 7,
            projectName: "Demographic Data Analyz",
            projectGitLink: "https://github.com/BerkeDS/DataAnalyzPrac/tree/main/DemographicDataAnalyzer",
            projectLink: "/assets/documents/demographicDataAnalyzer.pdf",
            projectLinkText: "PDF dosyasına git",
            description:  "Analysis of Demographic data",
            tecnologies: "python(pandas), Jupyter-lab",
            classes: false,
            type: "practice"
        },
        {
            id: 8,
            projectName: "Page View Visualizer",
            projectGitLink: "https://github.com/BerkeDS/DataAnalyzPrac/tree/main/PageViewTimeSeriesVisualizer",
            projectLink: "/assets/documents/timeVisualizer.pdf",
            projectLinkText: "PDF dosyasına git",
            description:  "Visualizing page views based on years and months",
            tecnologies: "python(pandas, seaborn, matplotlib), Jupyter-lab",
            classes: false,
            type: "practice"
        },
        {
            id: 9,
            projectName: "Netflix Page",
            projectLink: "/netPage",
            projectLinkText: "Go to page",
            description:  `Netflix page`,
            classes: false,
            type: "practice"
        },
        {
            id: 10,
            projectName: "Product Landing Page",
            projectLink: "/product",
            projectLinkText: "Go to page",
            description:  `A product landing page is a post-click page on a website designed specifically to promote or sell products or persuade visitors to convert to a product-related offer.`,
            tecnologies: "HTML, CSS",
            classes: false,
            type: "practice"
        },
        {
            id: 11,
            projectName: "Technical Documentation Page",
            projectLink: "/technical",
            projectLinkText: "Go to page",
            description:  `Css Doc Page`,
            tecnologies: "HTML, CSS",
            classes: false,
            type: "practice"
        },
        {
            id: 12,
            projectName: "Tribute Page",
            projectLink: "/tribute",
            projectLinkText: "Go to page",
            description:  `Tribute Page`,
            tecnologies: "HTML, CSS",
            classes: false,
            type: "practice"
        },
        {
            id: 13,
            projectName: "Survey Form",
            projectLink: "/survey",
            projectLinkText: "Go to page",
            description:  `Basic Form`,
            tecnologies: "HTML, CSS",
            classes: false,
            type: "practice"
        }
    ]
}
export const workCardSlice = createSlice({
    name: "cards",
    initialState,
    reducers:{
        addCard: (state, action)=>{
            state.value.splice(state.value.length,0, ...action.payload);
        },
        changeClass: (state, action)=>{
            const cardIndex = state.value.findIndex(card => card.id === action.payload);
            state.value[cardIndex]["classes"] =  !state.value[cardIndex]["classes"];
        }
    }
});

export const {addCard, changeClass} = workCardSlice.actions;
export default workCardSlice.reducer;
