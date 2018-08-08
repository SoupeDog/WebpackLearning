export default class QueryStringHelper {

    static getQueryString(key) {
        var hash = window.location.href;
        var start = hash.indexOf('?');
        var search = hash.substring(start + 1);
        var searchArr = search.split('&');
        var searchObj = {};
        for(var i = 0 ; i < searchArr.length ; i++){
            var arr = searchArr[i].split('=');
            searchObj[arr[0]] = arr[1];
        }
        if(searchObj[key]){
            return decodeURI(searchObj[key]);
        }else{
            return null;
        }
    }
}