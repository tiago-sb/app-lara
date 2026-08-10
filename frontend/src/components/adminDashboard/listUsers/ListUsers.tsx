import { useAdminUsers } from "../../../hooks/useAdminUsers";
import { useState } from "react";
import { Init } from "./Init";
import { LoadingUsers } from "./LoadingUsers";
import { TableListUsers } from "./TableListUsers";

export const ListUsers = () => {
  const { users, loading: loadingUsers, promoteToStaff } = useAdminUsers();
  
  const [promoting, setPromoting] = useState<number | null>(null);
    const handlePromote = async (userId: number, current: boolean) => {
    setPromoting(userId);
    await promoteToStaff(userId, !current);
    setPromoting(null);
  };
  
  const users_len = () => users.length
  
  return (
    <div 
    className="card border-0 rounded-4 shadow-sm overflow-hidden"
    style={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      <Init users={users_len()} />
      
      {loadingUsers 
        ? <LoadingUsers /> 
        : <TableListUsers users={users} promoting={promoting} onPromote={handlePromote} />
      }
    </div>
  )
}