import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/userApi";

function AddUser() {
  const [name, setName] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setName("");
    },
  });
  console.log(name);
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (name.trim()) {
      mutation.mutate({ name });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Adding..." : "Add User"}
      </button>
    </form>
  );
}

export default AddUser;
