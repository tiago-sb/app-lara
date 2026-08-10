import { useAdminExperiments } from "../../../hooks/useAdminExperiments";
import { useAdminUsers } from "../../../hooks/useAdminUsers";
import { Init } from "./Init";
import { Stats } from "./Stats";

export const TitleDashboardAdmin = () => {
  const { users } = useAdminUsers();
  const { experiments } = useAdminExperiments();

  const users_len = () => users.length
  const experiments_len = () => experiments.length
  const actives_len = () => users.filter(u => u.is_staff).length
  
  return (
    <>
      <Init />
      <Stats users={users_len()} actives={actives_len()} experiments={experiments_len()} />    
    </>
  )
}
