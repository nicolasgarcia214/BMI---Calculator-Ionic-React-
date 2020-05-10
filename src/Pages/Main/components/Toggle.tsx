import React from 'react';
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonRow,
  IonCol,
} from '@ionic/react';

const Toggle: React.FC<{
  selectedSystem: 'MKS' | 'FPS';
  setSystemOfUnits: (value: 'MKS' | 'FPS') => void;
}> = (props) => {
  const toggleChangeHandler = (event: CustomEvent) => {
    props.setSystemOfUnits(event.detail.value);
  };
  return (
    <IonRow>
      <IonCol>
        <IonSegment
          value={props.selectedSystem}
          onIonChange={toggleChangeHandler}
        >
          <IonSegmentButton value="MKS">
            <IonLabel>m/kg</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="FPS">
            <IonLabel>ft/lbs</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCol>
    </IonRow>
  );
};

export default Toggle;
