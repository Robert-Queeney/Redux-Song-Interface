import { combineReducers } from 'redux'; 


const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:15' },
        { title: 'All Star', duration: '2:35' },
        { title: 'Welcome to the Terrordome', duration: '5:23' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
})