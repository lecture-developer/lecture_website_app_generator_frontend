import React, { useState } from 'react';
import styles from './NewPublication.module.css';

export const Authors = (props) => {
    const [authors, setAuthors] = useState(props.authors);
    return (
        <div className={styles.authorsSection}>
            {/* authors.map(item => {
                return 
            }) */}
        </div>
    );
}
export default Authors;