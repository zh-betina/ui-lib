var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './styles.module.scss';
var Toggler = function (_a) {
    var setState = _a.setState, defaultChecked = _a.defaultChecked;
    return (_jsxs("label", __assign({ className: styles.container }, { children: [_jsx("input", { defaultChecked: defaultChecked !== null && defaultChecked !== void 0 ? defaultChecked : false, type: "checkbox", onChange: function (e) { return setState(e.target.checked); } }, void 0), _jsx("span", { className: styles.toggler }, void 0)] }), void 0));
};
export default Toggler;
