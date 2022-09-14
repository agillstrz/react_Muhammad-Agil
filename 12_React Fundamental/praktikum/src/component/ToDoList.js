const ToDoList = () => {
  const listItems = [
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
    {
      id: 5,
      title: "Membuat website",
      completed: true,
    },
  ];
  return (
    <div>
      {listItems.map((m) => (
        <div className="todolist" key={m.id}>
          <p
            className={`${
              m.completed === true ? "text-decoration-line-through " : ""
            }`}
          >
            {m.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
