function reducer(state,action){
    // console.log(action.type)
    // switch(action.type){
    //     case "INC":
    //         return{ count:state.count+1}
    //     case "DEC":
    //         return { count: state.count-1}
    //     case "ADD":
    //         return {count: state.count+action.payload}
    //     case "RESET":
    //         return {count:0}
    //     default:
    //         return state;
    // }

    console.log(action.payload)
    switch(action.type){
        case "ADD":{
            return{
            arr:[...state.arr,action.payload]
            }
        };

        case "DELETE":{
            return{
                arr:action.payload
            }
        }

        case "UPDATE":{
          let updatedArr= state.arr.map((item,ind)=>{
            if(ind===action.index)
            {
                return action.payload
            }
            return item
        })
        return{
            arr:updatedArr
        }
        }

        default:
            return state;
    }

}

export {reducer};