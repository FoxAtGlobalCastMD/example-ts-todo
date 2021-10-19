// i'm beginning to think that handling these in one place will be the right thing to do.
// though i think there is more to it than relocating. 
// this type of extrapolating is a second layer.
// I just wonder at this, if it is worth it to do.
// CALL THIS UTILITIES

const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event?.currentTarget?.value);
    console.log("NEW VALUE: " + value);
  };

  const handleOnEnter = () => {
    const date = new Date().getTime();
    const newTodo: ItemType = {
      id: date.toString(),
      title: value,
      complete: false,
      editing: false,
      display: true,
    };

    setItem(newTodo);
    setTodos([...todos, newTodo] as any); // must be 'as any' so that state doesn't complain
    // setTrigger(!trigger);
    setValue(""); // clears the input
    console.log("SetItem");
    console.log(newTodo);
  };

  const handleOnEscape = () => setValue("");