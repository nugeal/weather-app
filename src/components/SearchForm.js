import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'

const options = [
    { key: 'i', text: 'Imperial', value: 'imperial' },
    { key: 'm', text: 'Metric', value: 'metric' }
  ]

class SearchForm extends Component {
    constructor(props){
      super(props);
      this.state = {
        zipcode: '',
        units: 'imperial'
      }
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (e,  {name, value}) => {
      this.setState({ [name]: value });
    }

    validZipCode = () => {
        let zipcode = this.state.zipcode;
        let pattern = /[0-9]{5}/;
        if(this.state.zipcode.length === 5 && pattern.test(zipcode)){
          return true;
        } else return false;
    }
  
    render() {
      return (
        <Form>
          <Form.Group>
            <Form.Field 
              inline
              required
              error={ !this.validZipCode() && this.state.zipcode.trim().length > 0 ? true : false}>
                <label>Zip Code</label>
                <Input
                  name='zipcode'
                  placeholder='5 digit Zip Code'
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                />
            </Form.Field>
            <Form.Field inline>
              <label>Units</label>
              <Select
                id='unitsField'
                name='units'
                value={this.state.units}
                options={options}
                placeholder='Units'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Button content='Get Weather' disabled={!this.validZipCode() || this.state.zipcode.length === 0 ? true : false}/>
          </Form.Group>
        </Form>
      )
    }
  }
  
  export default SearchForm;