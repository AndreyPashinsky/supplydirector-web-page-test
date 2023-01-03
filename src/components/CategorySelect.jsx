import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const CategorySelect = () => {
    
    const handleChange = () => {

    }
  
    return (
    <FormControl variant="outlined" className="input">
    <InputLabel htmlFor="outlined-age-native-simple">Категория</InputLabel>
    <Select
      native
      value=""
      onChange={handleChange}
      label="Категория"
      inputProps={{
        name: 'category',
        id: 'outlined-age-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value={10}> - 1 - </option>
      <option value={20}> - 2 - </option>
      <option value={30}> - 3 - </option>
    </Select>
  </FormControl>
  )
}

export default CategorySelect