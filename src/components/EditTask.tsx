interface EditTaskProps {
editedTitle: string;
setEditedTitle: (title: string) => void;
editedDescription: string;
setEditedDescription: (description: string) => void;
onSave: () => void;
onCancel: () => void;
}

function EditTask({
editedTitle,
setEditedTitle,
editedDescription,
setEditedDescription,
onSave,
onCancel,
}: EditTaskProps) {
return ( <div className="task-row">
<input
type="text"
value={editedTitle}
onChange={(event) => setEditedTitle(event.target.value)}
placeholder="Task title"
/>

```
  <input
    type="text"
    value={editedDescription}
    onChange={(event) => setEditedDescription(event.target.value)}
    placeholder="Task description"
  />

  <button onClick={onSave}>Save</button>
  <button onClick={onCancel}>Cancel</button>
</div>


);
}

export default EditTask;
