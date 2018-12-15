(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bank-account-br', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-bank-account-br'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxPersona = /** @class */ (function () {
        function NgxPersona() {
        }
        NgxPersona.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-persona',
                        template: "<article overlay-content >\n    <section message [innerHTML]=\"message\">\n    </section>\n    <img persona [src]=\"pic.src\" [width]=\"pic.width\" [height]=\"pic.height\" />\n</article>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        NgxPersona.ctorParameters = function () { return []; };
        NgxPersona.propDecorators = {
            pic: [{ type: core.Input, args: ['pic',] }],
            message: [{ type: core.Input, args: ['message',] }]
        };
        return NgxPersona;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxPersonaModule = /** @class */ (function () {
        function NgxPersonaModule() {
        }
        NgxPersonaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [NgxPersona],
                        exports: [NgxPersona]
                    },] }
        ];
        return NgxPersonaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxPersonaModule = NgxPersonaModule;
    exports.ɵa = NgxPersona;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-bank-account-br.umd.js.map