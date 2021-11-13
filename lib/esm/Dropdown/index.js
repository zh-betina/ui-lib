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
import { useState } from "react";
import styles from "./styles.module.scss";
var Dropdown = function (_a) {
    var label = _a.label, options = _a.options, disabled = _a.disabled, required = _a.required, selectedOption = _a.selectedOption;
    var _b = useState(""), state = _b[0], setState = _b[1];
    var handleChange = function (e) {
        setState(e.target.value);
    };
    return (_jsxs("div", __assign({ className: styles.container }, { children: [label && _jsx("label", { children: label }, void 0), _jsx("select", __assign({ disabled: disabled, value: selectedOption || state, required: required, onChange: function (e) { return handleChange(e); } }, { children: Object.values(options).map(function (option, i) { return _jsx("option", __assign({ value: option.value }, { children: option.name }), i); }) }), void 0)] }), void 0));
};
export default Dropdown;
