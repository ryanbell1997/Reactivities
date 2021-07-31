import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard(){
    const {activityStore} = useStore();
    const {editMode,} = activityStore;
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {/* If activities[0] equals something, render the ActivityDetails */}
                {activityStore.selectedActivity && !editMode && <ActivityDetails />}
                {editMode && <ActivityForm/>}   
            </Grid.Column>
        </Grid>
    );
});