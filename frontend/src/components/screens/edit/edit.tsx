import React, { useState, useEffect, useRef, ReactNode } from 'react';
import move from 'lodash-move';
import { withRouter } from 'react-router-dom';
import { Main } from '../../page';
import { getRoutines, getRoutine, getExercises, postRoutine } from '../../../api';
import { Button, LinkButton, Dropdown, DragAndDropRegion, Input } from '../../elements';
import { EditFormRow } from './';
import { ButtonContainer } from '../../elements/button';

function EditScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [routines, setRoutines] = useState<Array<any>>([]);
  const [routineSets, setRoutineSets] = useState<any>({});
  const [exercises, setExercises] = useState<Array<any>>([]);
  const activeRoutine = routines[activeIndex];
  const activeRoutineId = routines[activeIndex] ? routines[activeIndex].id : null;
  const activeRoutineSets = activeRoutineId && routineSets[activeRoutineId] ? routineSets[activeRoutineId] : [];
  useEffect(() => {
    getRoutines().then(routines => {
      setRoutines(routines);
      if (routines[0]) {
        getRoutine(routines[0].id).then(routineWithSets => {
          setRoutineSets({ ...routineSets, [routineWithSets.id]: routineWithSets.sets });
        });
      }
    });
  }, []);

  useEffect(() => {
    getExercises().then(exercises => {
      setExercises(exercises);
    });
  }, []);

  useEffect(() => {
    if (activeRoutine) {
      if (activeRoutineSets) {
        setRoutineSets(activeRoutineSets);
      } else {
        getRoutine(activeRoutineId).then(routineWithSets => {
          setRoutineSets({ ...routineSets, [activeRoutineId]: routineWithSets.sets });
        });
      }
    }
  }, [activeIndex]);

  const onDragEnd = (result: any): any => {
    if (!result.destination) {
      return;
    }

    const array = move(activeRoutineSets, result.source.index, result.destination.index);

    setRoutineSets({ ...routineSets, [activeRoutineId]: array });
  };

  const updateRoutineSets = (routineSetId: number, attrsToMerge: any) => {
    const newActiveRoutineSets = activeRoutineSets.map((routineSet: any) => {
      return routineSet.id === routineSetId ? { ...routineSet, ...attrsToMerge } : routineSet;
    });
    setRoutineSets({ ...routineSets, [activeRoutineId]: newActiveRoutineSets });
  };

  const saveRoutine = () => {
    postRoutine({
      routine: activeRoutine,
      workoutSets: activeRoutineSets,
      routineSets: activeRoutineSets.map((activeRoutineSet: any, index: number) => ({
        routineId: activeRoutine.id,
        setId: activeRoutineSet.id,
        ordering: index
      }))
    });
  };

  return (
    <Main>
      <h1>Edit Routines</h1>
      <Dropdown
        activeIndex={activeIndex}
        options={routines.map((routine, index) => ({ value: index, label: routine.name }))}
        onChange={event => setActiveIndex(Number(event.currentTarget.value))}
        name={'Routines'}
      />
      <DragAndDropRegion onDragEnd={onDragEnd}>
        {activeRoutineSets.map((set: any) => (
          <EditFormRow key={set.id} exercises={exercises} routineSet={set} updateRoutineSets={updateRoutineSets} />
        ))}
      </DragAndDropRegion>
      <ButtonContainer>
        <LinkButton to="/home" text="Cancel" />
        <Button onClick={saveRoutine} text={'Save'} buttonType={'action'} />
      </ButtonContainer>
    </Main>
  );
}

export default withRouter(EditScreen);
