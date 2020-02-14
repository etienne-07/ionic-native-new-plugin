var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ChuckOriginal = /** @class */ (function (_super) {
    __extends(ChuckOriginal, _super);
    function ChuckOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChuckOriginal.prototype.saySomething = function () { return cordova(this, "saySomething", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    ChuckOriginal.pluginName = "Chuck";
    ChuckOriginal.plugin = "cordova-plugin-new-plugin";
    ChuckOriginal.pluginRef = "Chuck";
    ChuckOriginal.repo = "https://github.com/etienne-07/cordova-plugin-new-plugin.git";
    ChuckOriginal.platforms = ["iOS"];
    return ChuckOriginal;
}(IonicNativePlugin));
var Chuck = new ChuckOriginal();
export { Chuck };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldy1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVTdDLHlCQUFpQjs7OztJQVUxQyw0QkFBWTs7Ozs7O2dCQXJCZDtFQVcyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDaHVjaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldy1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdDaHVjaycsXG4gIHJlcG86XG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGllbm5lLTA3L2NvcmRvdmEtcGx1Z2luLW5ldy1wbHVnaW4uZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENodWNrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogWW91ciBwbHVnaW4gcGx1Z2luIGZ1bmN0aW9ucyBnbyBoZXJlLlxuICAgKiBGdW5jdGlvbiBuYW1lcyBzaG91bGQgbWF0Y2ggdGhlIG9uZXMgaW4geW91ciAuc3dpZnQgJiAuanMgZmlsZXMuXG4gICAqIE90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBleGVjdXRlIHRoZW0uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgc2F5U29tZXRoaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=