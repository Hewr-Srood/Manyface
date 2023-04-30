export interface IMeta {
  avatarUri: string;
  name: string;
  date: string;
  numberOfLikes: number;
  numberOfComments: number;
  numberOfShares: number;
  text: string;
}

export interface IFeedResp extends IMeta {
  id: number;
  images: string[];
}

class Meta implements IMeta {
  constructor(obj: IMeta) {
    this.avatarUri = obj.avatarUri;
    this.name = obj.name;
    this.date = obj.date;
    this.numberOfLikes = obj.numberOfLikes;
    this.numberOfComments = obj.numberOfComments;
    this.numberOfShares = obj.numberOfShares;
    this.text = obj.text;
  }
  avatarUri: string;
  name: string;
  date: string;
  numberOfLikes: number;
  numberOfComments: number;
  numberOfShares: number;
  text: string;
}

class Feed {
  constructor(public text: string, public images: string[]) {}
}

export class FeedModel {
  constructor(obj: IFeedResp) {
    this.meta = new Meta(obj);
    this.feed = new Feed(obj.text, obj.images);
    this.id = obj.id;
  }

  meta: IMeta;
  feed: Feed;
  id: number;
}
