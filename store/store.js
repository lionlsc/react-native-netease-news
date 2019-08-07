import {observable,action} from "mobx"
import URI,{store}from "../api/api-uri"
import axios from "axios";
class Store {
    @observable newsdata=[];
    @observable videoData=[];
    @observable liveData=[];
    @observable startIndex=-10;
    @observable newsCount=10;
    @action getNewsData(){
        this.startIndex+=10;
        axios.get(URI.NewsUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.newsInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getAmuseData(){
        this.startIndex+=10;
        axios.get(URI.AmuseUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.amuseInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })

        })
    }
    @action getSportsData(){
        this.startIndex+=10;
        axios.get(URI.SportUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.sportInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getFinanceData(){
        this.startIndex+=10;
        axios.get(URI.FinanceUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.financeInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getWarData() {
        this.startIndex+=10;
        axios.get(URI.WarUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.warInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getTechData(){
        this.startIndex+=10;
        axios.get(URI.TechUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.techInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getMobileData(){
        this.startIndex+=10;
        axios.get(URI.MobileUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.mobileInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getDigitialData(){
        this.startIndex+=10;
        axios.get(URI.DigitalUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.digitalInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getFashionData(){
        this.startIndex+=10;
        axios.get(URI.FasionUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.fasionInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getGameData(){
        this.startIndex+=10;
        axios.get(URI.GameUri(this.startIndex,this.newsCount)).then((res)=>{
            let news=JSON.parse(res.data.slice(res.data.indexOf("{"),res.data.lastIndexOf("}")+1))
            news=news[store.gameInfo.responseEncode];
            news.forEach((item)=>{
                this.newsdata.unshift(item);
            })
        })
    }
    @action getVideoData(){
        axios.get(URI.VideoUri()).then(response => {
            response.data["视频"].forEach((item)=>{
                this.videoData.unshift(item)
            })
        })
    }
    @action getLiveData(){
        axios.get(URI.LiveUri()).then((response)=>{
            response.data["live_review"].forEach((item)=>{
               if(item.videos[0].length!=0&&item.sourceinfo!=null){
                   item["videoUrl"]=item.videos[0].videoUrl;
                   this.liveData.unshift(item)
               }
          })

        })
   }
    @action clearNews(){
        this.newsdata.length=0;
        this.startIndex=-10;
    }
    @action clearVideo(){
        this.videoData.length=0
        this.startIndex=-10;
    }
    @action clearLive(){
        this.liveData.length=0
        this.startIndex=-10;
    }
}
export default new Store();

