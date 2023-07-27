import React from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";

const FilterSelect = ({filterSettings, handleSortCards}) => {

    return (
        <FormControl sx={{width:'100%', mb:3}}>
            <Select
                sx={{borderRadius:7, ml:'auto'}}
                size='small'
                value={filterSettings}
                onChange={handleSortCards}
            >
                <MenuItem value='new'>Порядок: сперва новые</MenuItem>
                <MenuItem value='low'>Порядок: сперва дешевле</MenuItem>
                <MenuItem value='hight'>Порядок: сперва дороже</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterSelect;