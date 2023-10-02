import React, {Component} from 'react'
import { Header, Form } from 'semantic-ui-react'

class Description extends Component {
    state = {
        title: '',
        description: '',
        skills: '',
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
          const { title, description, skills } = this.state;
          this.props.onChangeDescription(title, description, skills);
        });
      };

    render() {
        const { title, description, skills } = this.state;
        return (
        <div>
            <Header as="h3" block>
                Describe your job
            </Header>
            <Form>
                <Form.Field inline>
                    <label>Title/Position</label>
                    <input 
                        size={100}
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field inline>
                    <label>Job description</label>
                    <input 
                        size={100}
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field inline fluid>
                    <label>Skills</label>
                    <input placeholder='Please add skills that your job is required e.g., Java' 
                    size={100}
                    type="text"
                    name="skills"
                    value={skills}
                    onChange={this.handleInputChange}
                    />
                </Form.Field>
            </Form>
        </div>
        );
    }
}
  
export default Description;
  