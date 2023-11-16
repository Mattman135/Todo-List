export default function formIsValid(title, description, dueDate, priority) {
  if (
    title.value !== "" &&
    description.value !== "" &&
    dueDate.value !== "" &&
    priority.value !== ""
  ) {
    return true
  } else {
    return false
  }
}
