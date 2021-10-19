export async function getTodos() {
  const data = await fetch("http://localhost:3333/todo");
  return await data.json();
}

export async function setItem(item) {
  console.log("API ITEM");
  console.log(item);

  const data = await fetch("http://localhost:3333/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await data.json();
}

export async function updateItem(id, item) {
  const data = await fetch("http://localhost:3333/todo/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await data.json();
}
