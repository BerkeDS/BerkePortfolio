import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            projectName: "Answer",
            projectLink: "www.bombabomba.com",
            description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nunc diam. Curabitur tincidunt dui neque, non mattis ex pellentesque sit amet. Aenean elementum, velit id elementum commodo, augue neque faucibus purus, id convallis massa augue vulputate ipsum. Donec nec euismod nisl. Vivamus ut dolor vitae sem porta facilisis nec in nunc. Ut tempus ipsum vulputate tortor auctor lobortis. Etiam est justo, interdum eu augue vulputate, laoreet tempus odio. Praesent pellentesque ex ac tellus pulvinar aliquet. Suspendisse in turpis urna. Aliquam aliquet pulvinar augue vel accumsan. Duis sapien felis, tincidunt in congue ac, varius in risus. Nam vitae ultricies dui. In leo augue, molestie at iaculis et, pellentesque vel ligula. Proin id odio nec justo iaculis interdum.",
            tecnologies: "React, Redux",
            classes: false,
            type: "work"
        },
        {
            id: 2,
            projectName: "Geliyo",
            projectLink: "çipetpet.com",
            description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nunc diam. Curabitur tincidunt dui neque, non mattis ex pellentesque sit amet. Aenean elementum, velit id elementum commodo, augue neque faucibus purus, id convallis massa augue vulputate ipsum. Donec nec euismod nisl. Vivamus ut dolor vitae sem porta facilisis nec in nunc. Ut tempus ipsum vulputate tortor auctor lobortis. Etiam est justo, interdum eu augue vulputate, laoreet tempus odio. Praesent pellentesque ex ac tellus pulvinar aliquet. Suspendisse in turpis urna. Aliquam aliquet pulvinar augue vel accumsan. Duis sapien felis, tincidunt in congue ac, varius in risus. Nam vitae ultricies dui. In leo augue, molestie at iaculis et, pellentesque vel ligula. Proin id odio nec justo iaculis interdum.",
            tecnologies: "React, Redux",
            classes: false,
            type: "work"
        },
        {
            id: 3,
            projectName: "Deneme",
            projectLink: "www.DOMBADOMBA.com",
            description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nunc diam. Curabitur tincidunt dui neque, non mattis ex pellentesque sit amet. Aenean elementum, velit id elementum commodo, augue neque faucibus purus, id convallis massa augue vulputate ipsum. Donec nec euismod nisl. Vivamus ut dolor vitae sem porta facilisis nec in nunc. Ut tempus ipsum vulputate tortor auctor lobortis. Etiam est justo, interdum eu augue vulputate, laoreet tempus odio. Praesent pellentesque ex ac tellus pulvinar aliquet. Suspendisse in turpis urna. Aliquam aliquet pulvinar augue vel accumsan. Duis sapien felis, tincidunt in congue ac, varius in risus. Nam vitae ultricies dui. In leo augue, molestie at iaculis et, pellentesque vel ligula. Proin id odio nec justo iaculis interdum.",
            tecnologies: "React, Redux",
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
