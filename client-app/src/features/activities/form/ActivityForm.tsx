import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props {
    closeForm: () => void;
    activity: Activity | undefined;
    createOrEdit: (activity: Activity) => void
}

export default function ActivityForm({closeForm, activity: selectedActivity, createOrEdit}: Props){

    const intialState = selectedActivity ?? {
        id: '',
        title: '',
        description: '',
        date: '',
        city: '',
        venue: '',
        category: ''
    }

    const [activity, setActivity] = useState(intialState);

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder="Title" value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder="Description" value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder="Category" value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input placeholder="Date" value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder="City" value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder="Venue" value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button onClick={closeForm} floated="right" color="grey" type="submit" content="Cancel"/>
                <Button onClick={() => createOrEdit(activity)} floated="right" positive type="submit" content="Submit"/>
            </Form>
        </Segment>
    )
}