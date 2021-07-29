import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelect: () => void;
    closeForm: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    createOrEditActivity: (activity: Activity) => void;
    handleDeleteActivity: (id: string) => void;

}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelect, closeForm, editMode, openForm, createOrEditActivity, handleDeleteActivity}: Props){
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={handleDeleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {/* If activities[0] equals something, render the ActivityDetails */}
                {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} cancelSelect={cancelSelect} openForm={openForm} deleteActivity={handleDeleteActivity} />}
                {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEditActivity} />}   
            </Grid.Column>
        </Grid>
    );
}