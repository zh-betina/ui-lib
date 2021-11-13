import { useState, ChangeEvent } from "react";

import { Props } from "./types";

import styles from "./styles.module.scss";

const Dropdown = ({ label, options, disabled, required, selectedOption }: Props) => {

    const [state, setState] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setState(e.target.value);
    };
    
    return (
        <div className={styles.container}>
            { label && <label>{ label }</label> } 
            <select disabled={disabled} value={selectedOption || state} required={required} onChange={(e) => handleChange(e)}>
                { Object.values(options).map((option, i) => <option key={i} value={option.value}>{option.name}</option>) }
            </select>
        </div>
    );
};

export default Dropdown;
