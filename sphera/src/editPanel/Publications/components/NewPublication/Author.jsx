import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import styles from './NewPublication.module.css';

// CSS PROVIDERS
const authorTheme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            root: {
                backgroundColor: '#F1F3F5',
                width: 290,
                height: 40,
            },
        },
        MuiInputBase: {
            root: {
                height: 40,
            },
        },
        MuiFormLabel: {
            root: {
                color: '#828282',
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '5px'
            },
        },
    },
});

// AUTHOR
export const Author = (props) => {
    const [author, setAuthor] = useState(props.author);

    return (
        <div className={styles.authorCell}>
            <MuiThemeProvider theme={authorTheme} key="src-options-inputs-key">
                <TextField 
                    placeholder="E.g. Marie Skłodowska Curie"
                    variant="outlined"
                    value={author}
                    onChange={(event) => {
                        setAuthor(event.target.value);
                    }}
                />
            </MuiThemeProvider>
        </div>
    );
}

export default Author;