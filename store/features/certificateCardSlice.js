import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [
        {
            id: "0",
            imgSRC: '/assets/images/JSfreeCodeCamp.png',
            title: "freeCodeCamp",
            certificateName: "JS Certificate",
            titleLink: "https://freecodecamp.org/certification/BerkeDS/javascript-algorithms-and-data-structures",
            certificateLink: "https://freecodecamp.org/certification/BerkeDS/javascript-algorithms-and-data-structures",
            description: "JavaScript Algorithms and Data Structures Cerficitace from freeCodeCamp"
        },
        {
            id: "1",
            imgSRC: '/assets/images/responsiveWebDesign.png',
            title: "freeCodeCamp",
            certificateName: "Web Design",
            titleLink: "https://freecodecamp.org/certification/BerkeDS/responsive-web-design",
            certificateLink: "https://freecodecamp.org/certification/BerkeDS/responsive-web-design",
            description: "Responsive Web Design Cerficitace from freeCodeCamp"
        },
        {
            id: "2",
            imgSRC: '/assets/images/certificateCss.png',
            title: "HackerRank",
            certificateName: "CSS Certificate",
            titleLink: "https://www.hackerrank.com/certificates/c9350c563f2d",
            certificateLink: "https://www.hackerrank.com/certificates/c9350c563f2d",
            description: "CSS Cerficitace from HackerRank"
        },
        {
            id: "3",
            imgSRC: '/assets/images/JSBasicCertificate.png',
            title: "HackerRank",
            certificateName: "JS(Basic) Certificate",
            titleLink: "https://www.hackerrank.com/certificates/b9ffd025195b",
            certificateLink: "https://www.hackerrank.com/certificates/b9ffd025195b",
            description: "JavaScript(Basic) Cerficitace from HackerRank"
        },
        {
            id: "4",
            imgSRC: '/assets/images/dataCer.png',
            title: "freeCodeCamp",
            certificateName: "Data Analysis with Python",
            titleLink: "https://www.freecodecamp.org/certification/BerkeDS/data-analysis-with-python-v7",
            certificateLink: "https://www.freecodecamp.org/certification/BerkeDS/data-analysis-with-python-v7",
            description: "Data Analysis Cerficitace from freeCodeCamp"
        },
        {
            id: "5",
            imgSRC: '/assets/images/pythonCer.png',
            title: "freeCodeCamp",
            certificateName: "Scientific Computing with Python",
            titleLink: "https://www.freecodecamp.org/certification/BerkeDS/scientific-computing-with-python-v7",
            certificateLink: "https://www.freecodecamp.org/certification/BerkeDS/scientific-computing-with-python-v7",
            description: "Python Cerficitace from freeCodeCamp"
        },
    ]
};

export const certificateCardSlice = createSlice({
    name: "certificates",
    initialState,
    reducers:{}
});

export default certificateCardSlice.reducer;