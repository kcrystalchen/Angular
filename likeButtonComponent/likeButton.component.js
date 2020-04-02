"use strict";
exports.__esModule = true;
var LikeButtonComponent = /** @class */ (function () {
    function LikeButtonComponent(_totalCount, _buttonStatus) {
        this._totalCount = _totalCount;
        this._buttonStatus = _buttonStatus;
    }
    LikeButtonComponent.prototype.likeButtonMethod = function () {
        this._totalCount += (this._buttonStatus) ? +1 : -1;
        this._buttonStatus = !this._buttonStatus;
    };
    Object.defineProperty(LikeButtonComponent.prototype, "totalCount", {
        get: function () {
            return this._totalCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButtonComponent.prototype, "buttonStatus", {
        get: function () {
            return this._buttonStatus;
        },
        enumerable: true,
        configurable: true
    });
    return LikeButtonComponent;
}());
exports.LikeButtonComponent = LikeButtonComponent;
