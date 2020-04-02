export class LikeButtonComponent{
    constructor(private _totalCount: number, private _buttonStatus: Boolean){}
    likeButtonMethod(){
        this._totalCount += (this._buttonStatus) ? +1 : -1;
        this._buttonStatus = !this._buttonStatus;
    }

    get totalCount(){
        return this._totalCount;
    }

    get buttonStatus(){
        return this._buttonStatus;
    }
    
}