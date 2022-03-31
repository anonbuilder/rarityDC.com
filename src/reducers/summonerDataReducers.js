const initialState = {
    data: [],
    loading: true,
}

const summonerDataReducers = (state = initialState , action ) =>{
    switch (action.type){
        case 'summoners/updateSummoners':
            state.data = action.payload;
            break;
        case 'summoners/setLoading':
            state.loading = action.payload  
            break;
    }
}
export default  summonerDataReducers