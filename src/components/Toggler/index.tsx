import { Props } from './types';

import styles from './styles.module.scss';

const Toggler = ({ setState, defaultChecked }: Props) => {
    return (
        <label className={styles.container} >
            <input
                defaultChecked={defaultChecked ?? false}
                type="checkbox"
                onChange={(e) => setState(e.target.checked)}
            />
            <span className={styles.toggler}></span>
        </label>
    );
};

export default Toggler;
