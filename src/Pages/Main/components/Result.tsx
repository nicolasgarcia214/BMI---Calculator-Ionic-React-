import React from 'react';
import { IonCol, IonRow, IonCard, IonCardContent } from '@ionic/react';

const Result: React.FC<{ BMI: number | null }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Body-Mass-Index is:</h2>
            <h3>{props.BMI?.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default Result;
