import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class Experience extends Component {
    state = {
        experienceIn: '',
        experienceTime: '',
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
          const { experienceIn, experienceTime } = this.state;
          this.props.onChangeExperience(experienceIn, experienceTime);
        });
      };

    render() {
        const { experienceIn, experienceTime } = this.state;
        return (
        <div>
            <Header as="h3" block>
                Experience
            </Header>
            <Form>
                <Form.Group inline>
                    <Form.Field inline>
                        <label>Expereienced in</label>
                        <input
                            type="text"
                            name="experienceIn"
                            value={experienceIn}
                            onChange={this.handleInputChange}
                        />
                    </Form.Field>
                    <Form.Field inline>
                        <label>For at least</label>
                        <input
                            type="text"
                            name="experienceTime"
                            value={experienceTime}
                            onChange={this.handleInputChange}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
        </div>
        );
    }
}
  
export default Experience;
  