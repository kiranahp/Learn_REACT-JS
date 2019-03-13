// import { Provider, connect } from 'unistore/preact';
import axios from "axios";
import createStore from 'unistore';
 
const apiKey = "7bd9771f997e43a4880691db83cb5221";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=7bd9771f997e43a4880691db83cb5221"
const urlEverything = 'https://newsapi.org/v2/everything?q=id&apiKey=7bd9771f997e43a4880691db83cb5221'

const initialState = {
    api_key: '',
    email: '',
    password:'',
    full_name:'',
    popularNews:[],
    newsContent:[],
    is_login: false
};

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value};
    },
    
    postSignout: state => {
        return {is_login: false};
    },

    postLogin: async state => {
        const data = {username: state.username, password:state.password};
        await axios
        .post ("https://loginadmin.free.beeceptor.com/auth", data)
        .then(response => {
            console.log('postLogin resp', response.data);
            if (response.data.hasOwnProperty('api_key')) {
                store.setState({
                    is_login: true,
                    api_key: response.data.api_key,
                    full_name: response.data.full_name,
                    email: response.data.email
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    },

    doSearch: async (state, keyword) => {
        let urlSearch = baseUrl + "everything?q="+ keyword + "&apiKey=" + apiKey;
        if(keyword.length > 2){
            axios.get(urlSearch).then(function(response){
                store.setState({newsContent : response.data.articles});
                // console.log('test response', response)
            }).catch(function(error){
                console.log(error);
            });
        }},

    pOpular: async state => {
        await axios
        .get(urlHeadline).then(function(response){
            store.setState({popularNews : response.data.articles});
        }).catch(function(error){
            console.log(error);
        })},

    neWs: async state => {
        await axios
        .get(urlEverything).then(function(response){
            store.setState({newsContent : response.data.articles});
            //console.log(response.data);
        }).catch(function(error){
            console.log(error);
        })}
});