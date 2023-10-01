import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class JobType extends Component {
    state = {
        value: '',
      };
    
      handleChange = (e, { value }) => {
        this.setState({ value });
        this.props.onSelectJobType(value);
      };

    render() {
            
        const { value } = this.state
        return (
        <div>
            <Header as="h3" block>
                New Job
            </Header>
            <Form>
                <Form.Group inline>
                    <label>Select Job Type</label>
                    <Form.Radio
                    label='Freelance'
                    value='false'
                    checked={value === 'false'}
                    onChange={this.handleChange}
                    />
                    <Form.Radio
                    label='Employment'
                    value='true'
                    checked={value === 'true'}
                    onChange={this.handleChange}
                    />
                </Form.Group>
            </Form>
        </div>
        );
    }
}
  
export default JobType;