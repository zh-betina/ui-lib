import cx from "classnames";

import { Props } from "./types";

import styles from "./styles.module.scss";

const Checkbox = ({ onChange, checked } : Props) => {

    const classnames = cx(
        styles.checkbox,
        checked ? styles.checked : null
    );

    return (
        <label className={classnames}>
            <input
                checked={checked}
                type="checkbox"
                onChange={onChange} />
        </label>
    );
};

export default Checkbox;
