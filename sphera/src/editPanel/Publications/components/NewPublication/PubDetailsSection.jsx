import React, { useState } from 'react';
import styles from './NewPublication.module.css';
import { withStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// DATA PROVIDERS
const types = ['lorem', 'ipsum', 'dolor'];

// CSS PROVIDERS
const theme = createMuiTheme({
    overrides: {
        MuiOutlinedInput: {
            input: {
                padding: '8px 16px',
            },
        },
    },
});
const StyledTextField = withStyles((theme) => ({
    root: {
        width: '486px',
        backgroundColor: '#F1F3F5',
    },
}))(TextField);
const StyledSelectField = withStyles((theme) => ({
    root: {
        width: '277px',
    },
}))(Select);

// PUBLICATION DETAILS SECTION
export const PubDetailsSection = (props /* title, type, authors */) => {
    const [title, setTitle] = useState(props.title);
    const [selectedType, setSelectedType] = useState(props.selectedType);

    return (
        <>
            <div className={styles.sectionTitle}>Publication details</div>
            {/* PUBLICATION TITLE & TYPE */}
            <div className={styles.labelsRow}>
                <div className={styles.pubTitleCell}>Publication Title</div>
                <div className={styles.pubTypeCell}>Publication Type</div>
            </div>
            <div className={styles.inputsRow}>                
                <div className={styles.fieldsRow}>
                    <MuiThemeProvider theme={theme}>
                        <div className={styles.pubTitleCell}>
                            <StyledTextField 
                                id="publicationTitle"
                                placeholder="E.g. The Medieval Cardinal Virtues in Tolkien's The Hobbit"
                                variant="outlined" 
                                width="510px"
                                value={title}
                                onChange={(event) => {
                                    setTitle(event.target.value);
                                }}
                            />
                        </div>
                        <div  className={styles.pubTypeCell}>
                            <FormControl variant="outlined">
                                <StyledSelectField
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={selectedType}
                                    onChange={(event)=>{ setSelectedType(event.target.value) }}
                                >
                                    {types.map((item)=><MenuItem value={item}>{item}</MenuItem>)}
                                </StyledSelectField>
                            </FormControl>
                        </div>
                    </MuiThemeProvider>
                    </div>
            </div>

            {/* AUTHORS */}
            <div className={styles.labelsRow}>{/* Authors */}
                <div className={styles.authorsCell}>Authors</div>
            </div>
        </>
    );
}

export default PubDetailsSection;