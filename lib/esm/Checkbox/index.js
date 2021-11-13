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
import { jsx as _jsx } from "react/jsx-runtime";
import cx from "classnames";
import styles from "./styles.module.scss";
var Checkbox = function (_a) {
    var onChange = _a.onChange, checked = _a.checked;
    var classnames = cx(styles.checkbox, checked ? styles.checked : null);
    return (_jsx("label", __assign({ className: classnames }, { children: _jsx("input", { checked: checked, type: "checkbox", onChange: onChange }, void 0) }), void 0));
};
export default Checkbox;
