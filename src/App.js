import React from 'react';
import Cls from './Component/class/Cls';
import Hello from './Component/class/Hello';
import Fun from './Component/function/Fun';
import My from './Component/function/My';
// import New from './Component/function/New';

export default function App() {
  return (
    <div>
     <Cls dataone='class props' />
     <Fun data='function props' />
     {/* <New try='new component' /> */}
     <My name='saif' />
     <Hello />
    </div>
  );
}