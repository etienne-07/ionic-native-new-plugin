import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Chuck = /** @class */ (function (_super) {
    __extends(Chuck, _super);
    function Chuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chuck.prototype.saySomething = function () { return cordova(this, "saySomething", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Chuck.pluginName = "Chuck";
    Chuck.plugin = "cordova-plugin-new-plugin";
    Chuck.pluginRef = "Chuck";
    Chuck.repo = "https://github.com/etienne-07/cordova-plugin-new-plugin.git";
    Chuck.platforms = ["iOS"];
    Chuck = __decorate([
        Injectable()
    ], Chuck);
    return Chuck;
}(IonicNativePlugin));
export { Chuck };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldy1wbHVnaW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVTdDLHlCQUFpQjs7OztJQVUxQyw0QkFBWTs7Ozs7O0lBVkQsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQVhsQjtFQVcyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDaHVjaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldy1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdDaHVjaycsXG4gIHJlcG86XG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9ldGllbm5lLTA3L2NvcmRvdmEtcGx1Z2luLW5ldy1wbHVnaW4uZ2l0JyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENodWNrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogWW91ciBwbHVnaW4gcGx1Z2luIGZ1bmN0aW9ucyBnbyBoZXJlLlxuICAgKiBGdW5jdGlvbiBuYW1lcyBzaG91bGQgbWF0Y2ggdGhlIG9uZXMgaW4geW91ciAuc3dpZnQgJiAuanMgZmlsZXMuXG4gICAqIE90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBleGVjdXRlIHRoZW0uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgc2F5U29tZXRoaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=