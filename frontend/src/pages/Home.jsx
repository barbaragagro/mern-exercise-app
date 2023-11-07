import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  const fetchWorkouts = async () => {
    const response = await fetch('/api/workouts');
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'SET_WORKOUTS', payload: json });
    }
  };
  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
