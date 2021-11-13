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
import icon from './assets/icon.png';
import styles from './styles.module.scss';
var Button = function (_a) {
    var withIcon = _a.withIcon, disabled = _a.disabled, title = _a.title;
    return (_jsx("span", { children: _jsxs("button", __assign({ disabled: disabled, className: styles.button }, { children: [withIcon && _jsx("img", { src: icon, alt: "icon" }, void 0), title] }), void 0) }, void 0));
};
export default Button;
