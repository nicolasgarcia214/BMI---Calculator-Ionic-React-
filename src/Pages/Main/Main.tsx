import React, { useState } from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonAlert,
} from '@ionic/react';

import Inputs from './containers/Inputs';
import Buttons from './containers/Buttons';
import Result from './components/Result';
import Toggle from './components/Toggle';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../../theme/variables.css';

const Main: React.FC = () => {
  const [BMI, setBMI] = useState<number | null>();
  const [height, setHeight] = useState<number | null>();
  const [weight, setWeight] = useState<number | null>();
  const [error, setError] = useState<string>();
  const [systemOfUnits, setSystemOfUnits] = useState<'MKS' | 'FPS'>('MKS');

  function calculateBMI() {
    if (!height || !weight) {
      setError('Some fields are missing');
      return false;
    }
    if (height <= 0 || weight <= 0) {
      setError('The values must be greater than zero');
      return false;
    }

    const weightConversionFactor = systemOfUnits === 'FPS' ? 2.2 : 1;
    const heightConversionFactor = systemOfUnits === 'FPS' ? 3.28 : 1;

    const convertedHeight = height / heightConversionFactor;
    const convertedWeight = weight / weightConversionFactor;

    const result = convertedWeight / Math.pow(convertedHeight, 2);
    setBMI(result);
  }

  function resetValues() {
    setHeight(null);
    setWeight(null);
    setBMI(null);
  }

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[
          {
            text: 'OK',
            handler: () => {
              setError('');
            },
          },
        ]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <Toggle
              setSystemOfUnits={setSystemOfUnits}
              selectedSystem={systemOfUnits}
            />
            <Inputs
              height={height}
              weight={weight}
              setHeight={setHeight}
              setWeight={setWeight}
              systemOfUnits={systemOfUnits}
            />
            <Buttons resetValues={resetValues} calculateBMI={calculateBMI} />
            {BMI && <Result BMI={BMI} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default Main;
