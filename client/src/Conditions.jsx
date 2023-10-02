import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class Conditions extends Component {
    state = {
        projectLength: '',
        paymentMin: '',
        paymentMax: '',
        workingHours: '',
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
          const { projectLength, paymentMin, paymentMax, workingHours } = this.state;
          this.props.onChangeConditions(projectLength, paymentMin, paymentMax, workingHours);
        });
      };

    render() {
            
        const { projectLength, paymentMin, paymentMax, workingHours } = this.state
        return (
        <div>
            <Header as="h3" block>
                Project Conditions
            </Header>
            <Form>
                <Form.Field inline>
                    <label>Project length</label>
                    <input
                        type="text"
                        name="projectLength"
                        value={projectLength}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Group inline>
                    <Form.Field inline>
                        <label>Payment</label>
                    </Form.Field>
                    <Form.Field inline>
                        <label>Min</label>
                        <input
                            type="number"
                            name="paymentMin"
                            value={paymentMin}
                            onChange={this.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Max</label>
                        <input
                            type="number"
                            name="paymentMax"
                            value={paymentMax}
                            onChange={this.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Field inline fluid>
                    <label>Working Hours</label>
                    <input
                        type="number"
                        name="workingHours"
                        value={workingHours}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
            </Form>
        </div>
        );
    }
}
  
export default Conditions;
  