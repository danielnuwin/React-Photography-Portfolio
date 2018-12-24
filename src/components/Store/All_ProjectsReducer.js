import {
    CONSTANT_NEW, CONSTANT_OLD, ACTION_TYPE_FILTER 
} from '../configs/constants'
import AllProjectsConfig from '../PhotoProjects/All_Projects_Config'

const initialState = {
    projectObject: AllProjectsConfig.imageArray
};

const All_ProjectsReducer = (state = initialState, action) => {
    //Delay in rendering state
    let projCopy = [...initialState.projectObject];
    let newState = { ...state };
    //Allows for the reverse when clicking filter on any category
    // const reverseCopy = projCopy.reverse(); //Actually manipulates this variable projcopy

    // console.log("initial state: ", JSON.stringify(projCopy));
    // console.log("newState : ", JSON.stringify(newState));
    // console.log(" state: ", JSON.stringify(state));
    switch (action.type) {
        case CONSTANT_NEW:
            newState.projectObject = initialState.projectObject;
            // console.log("newstate_NEW: ", JSON.stringify(newState.projectObject));
            return newState;

        case CONSTANT_OLD:
            let reverseCopy = projCopy.reverse();
            newState.projectObject = reverseCopy;
            // console.log("newstate_OLD: ", JSON.stringify(newState.projectObject));
            return newState;

        case ACTION_TYPE_FILTER:
            let filteredArray = projCopy.filter(function (proj) {
                let searchValue = proj.category;
                return searchValue.indexOf(action.value) !== -1;
            });
            newState.projectObject = filteredArray;
            // console.log("newstate_FILTER: ", JSON.stringify(newState.projectObject));
            return newState;
    }
    // console.log("newstate_END: ", JSON.stringify(newState.projectObject));

    return newState;
};

export default All_ProjectsReducer;