import { TableListUserHead } from "./TableListUserHead";
import type { TableListUsersProps } from "../../../types/dashboardAdmin/TableListUsersProps";
import { TableListUserBody } from "./TableListUserBody";

export const TableListUsers = ({ users, promoting, onPromote }: TableListUsersProps) => {
  const font = "Montserrat, sans-serif";
  
  return (
    <div className="table-responsive">
      <table className="table mb-0" style={{ fontFamily: font }}>
        <TableListUserHead />
        <TableListUserBody users={users} promoting={promoting} onPromote={onPromote}/>
      </table>
    </div>
  )
}