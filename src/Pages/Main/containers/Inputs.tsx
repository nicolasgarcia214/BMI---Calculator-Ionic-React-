import React, { useRef } from 'react';
import { IonInput, IonLabel, IonCol, IonItem, IonRow } from '@ionic/react';

const Inputs: React.FC<{
  setHeight: (p: any) => void;
  setWeight: (p: any) => void;
  weight: any;
  height: any;
  systemOfUnits: 'MKS' | 'FPS';
}> = (props) => {
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  function handleInput() {
    const height = heightInputRef.current!.value;
    const weight = weightInputRef.current!.value;
    props.setHeight(height);
    props.setWeight(weight);
  }

  return (
    <>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">
              Your Height {props.systemOfUnits === 'MKS' ? '(m)' : '(ft)'}
            </IonLabel>
            <IonInput
              type="number"
              ref={heightInputRef}
              onBlur={handleInput}
              value={props.height}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">
              Your Weight {props.systemOfUnits === 'MKS' ? '(kg)' : '(lbs)'}
            </IonLabel>
            <IonInput
              type="number"
              ref={weightInputRef}
              onBlur={handleInput}
              value={props.weight}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
    </>
  );
};

export default Inputs;
