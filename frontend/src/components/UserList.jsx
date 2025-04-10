import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, deleteUser } from "../api/userApi";

function UsersList() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  return (
    <ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => mutation.mutate(user.id)}>❌</button>
          </li>
        ))
      )}
    </ul>
  );
}

export default UsersList;
