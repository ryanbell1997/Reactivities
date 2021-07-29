import React from 'react';
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props {
    activity: Activity;
    cancelSelect: () => void;
    openForm: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelect, openForm, deleteActivity}: Props){
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup width='2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelect} basic color='grey' content='Cancel' />
                    <Button onClick={() => openForm(activity.id)} color='red' content='Delete' float="right" />
                    
                </ButtonGroup>
            </Card.Content>
        </Card>
    );
}