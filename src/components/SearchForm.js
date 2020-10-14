import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Select, Button } from 'semantic-ui-react'

const options = [
    { key: 'i', text: 'Imperial', value: 'imperial' },
    { key: 'm', text: 'Metric', value: 'metric' }
  ]

const SearchForm = (props) => {

  const [fields, setFields] = useState({ zipcode: '', units: 'imperial'});

  const handleChange = (e,  {name, value}) => {
    setFields(fields => ({ ...fields, [name]: value }));
  }

  const handleSubmit = () => {
    props.getWeatherData(fields);
  }

  const validZipCode = () => {
    let zipcode = fields.zipcode;
    let pattern = /[0-9]{5}/;
    if(zipcode.length === 5 && pattern.test(zipcode)){
      return true;
    } else return false;
  }
  
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <Form.Field 
          inline
          required
          error={ !validZipCode() && fields.zipcode.trim().length > 0 ? true : false}>
            <label>Zip Code</label>
            <Input
              name='zipcode'
              placeholder='5 digit Zip Code'
              value={ fields.zipcode }
              onChange={ handleChange }
            />
        </Form.Field>
        <Form.Field inline>
          <label>Units</label>
          <Select
            id='unitsField'
            name='units'
            value={ fields.units }
            options={ options }
            placeholder='Units'
            onChange={ handleChange }
          />
        </Form.Field>
        <Button type='submit' content='Get Weather' disabled={!validZipCode() || fields.zipcode.length === 0 ? true : false}/>
      </Form.Group>
    </Form>
  )
}

SearchForm.propTypes = {
  getWeatherData: PropTypes.func
}

export default SearchForm;