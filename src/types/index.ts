import View from "../core/view";

export interface NewsStore{
    getAllFeeds : () => NewsFeed[];
    getFeed: (position : number) => NewsFeed;
    setFeeds: (feeds: NewsFeed[]) => void;
    makeRead: (id: number) => void;
    hasFeeds : boolean;
    currentPage : number;
    numberOfFeed : number;
    nextPage : number;
    prevPage : number;
}

//interface
export interface Store {
    currentPage : number;
    feeds : NewsFeed[];
  };
  
  //중복 타입 제거 
  interface News {
    readonly id : number;
    readonly user : string;
    readonly time_ago : string;
    readonly content : string;
    readonly title : string;
    readonly url : string;
  };
  
export interface NewsFeed extends News {
    readonly comments_count : number;
    readonly points : number;
    read? : boolean;
  };
  
export interface NewsDetail extends News {
    readonly comments : NewsComment[];
  };
  
export interface NewsComment extends News {
    readonly comments : NewsComment[];
    level : number;
  };
  
export interface RouterInfo {
    path: string;
    page: View;
  }