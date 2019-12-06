import React from 'react'
//Bootstrap
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default class TweetForm extends React.Component {
    render(){
        return(
          <Form>
            <FormGroup onSubmit={this.onSubmit}>
                <Label>Username</Label>
                <Input type="text" name="username" placeholder="Enter your username"/>

                <Label>Tweet</Label>
                <Input type="textarea" name="tweet" placeholder="Enter your tweet here"/>

                <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
        )
    }
}
