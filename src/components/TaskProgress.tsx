
interface TaskProgressProps {
  percentage: number;
}

function TaskProgress({ percentage }: TaskProgressProps) {
  return (
    <>
      <p>{percentage}% complete</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </>
  );
}

export default TaskProgress;