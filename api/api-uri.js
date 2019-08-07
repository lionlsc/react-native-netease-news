const apiBase='https://3g.163.com';
function getNewsUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BBM54PGAwangning/${startIndex}-${newsCount}.html`
}
function getAmuseUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BA10TA81wangning/${startIndex}-${newsCount}.html`
}
function getSportUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BA8E6OEOwangning/${startIndex}-${newsCount}.html`
}
function getFinanceUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BA8EE5GMwangning/${startIndex}-${newsCount}.html`
}
function getWarUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BAI67OGGwangning/${startIndex}-${newsCount}.html`
}
function getTechUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BA8D4A3Rwangning/${startIndex}-${newsCount}.html`
}
function getMobileUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BAI6I0O5wangning/${startIndex}-${newsCount}.html`
}
function getDigitalUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BAI6JOD9wangning/${startIndex}-${newsCount}.html`
}
function getFasionUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BA8F6ICNwangning/${startIndex}-${newsCount}.html`
}
function getGameUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BAI6RHDKwangning/${startIndex}-${newsCount}.html`
}
function getEduUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BA8FF5PRwangning/${startIndex}-${newsCount}.html`
}
function getHealthUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BDC4QSV3wangning/${startIndex}-${newsCount}.html`
}
function getTravelUri(startIndex,newsCount) {
    return apiBase+`/touch/reconstruct/article/list/BEO4GINLwangning/${startIndex}-${newsCount}.html`
}
function getVideoUri() {
    return `http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&subtab=Video_Recom&size=10&offset=0&fn=1&passport=&devId=%2BUdKOimhleNgL9xSY5hC9g%3D%3D&lat=&lon=&version=32.1&net=wifi&ts=1563430254&sign=h3yAiTnASvKAIKuK5K%2BlSQu2kL%2F11JoQ21%2FESHeY15V48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=news_lf_cpa_2&mac=v3Sm8roAECwD8p7gOYYZhGA6W63jXMiLLBRm8sTXwOw%3D&open=&openpath=`
}
function getLiveUri() {
    return `http://gw.ws.126.net/live/previewlist?passport=%2BUdKOimhleNgL9xSY5hC9g%3D%3D&sign=626e8d7a173a71b578c7fa8da8f0f415&version=v3`
}
export const store={
    newsInfo:{
        responseEncode:"BBM54PGAwangning",
    },
    amuseInfo:{
        responseEncode:"BA10TA81wangning",
    },
    sportInfo:{
        responseEncode:"BA8E6OEOwangning",
    },
    financeInfo:{
        responseEncode:"BA8EE5GMwangning",
    },
    warInfo:{
        responseEncode:"BAI67OGGwangning",
    },
    techInfo:{
        responseEncode:"BA8D4A3Rwangning",
    },
    mobileInfo:{
        responseEncode:"BAI6I0O5wangning",
    },
    digitalInfo:{
        responseEncode:"BAI6JOD9wangning",
    },
    fasionInfo:{
        responseEncode:"BA8F6ICNwangning",
    },
    gameInfo:{
        responseEncode:"BAI6RHDKwangning",
    },
    eduInfo:{
        responseEncode:"BA8FF5PRwangning",
    },
    healthInfo:{
        responseEncode:"BDC4QSV3wangning",
    },
    travelInfo:{
        responseEncode:"BEO4GINLwangning",
    },
}
export default {
    NewsUri:getNewsUri,
    AmuseUri:getAmuseUri,
    SportUri:getSportUri,
    FinanceUri:getFinanceUri,
    WarUri:getWarUri,
    TechUri:getTechUri,
    MobileUri:getMobileUri,
    DigitalUri:getDigitalUri,
    FasionUri:getFasionUri,
    GameUri:getGameUri,
    VideoUri:getVideoUri,
    LiveUri:getLiveUri
}
