"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require('./ng2-file-upload/ng2-file-upload');
var FileApiComponent = (function () {
    function FileApiComponent() {
        //public URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
        this.URL = 'http://localhost:62412/api/fileupload';
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.URL });
    }
    FileApiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'file-api',
            templateUrl: 'file-upload.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FileApiComponent);
    return FileApiComponent;
}());
exports.FileApiComponent = FileApiComponent;
//# sourceMappingURL=fileapi.component.js.map