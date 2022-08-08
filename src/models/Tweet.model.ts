import { UserModel } from './User.model';

export interface TweetModel {
    author: UserModel;
    text: string;
    time: Date;
    repliesCount: number;
    retweetsCount: number;
    likesCount: number;
    id: string;
}