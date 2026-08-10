import { FlaskConical, Plus } from "lucide-react";
import { useAdminExperiments } from "../../../hooks/useAdminExperiments";
import type { ListExperimentsProps } from "../../../types/dashboardAdmin/ListExperimentsProps";
import { Init } from "./Init";
import { LoadingExp } from "./LoadingExp";
import { ListExperimentsDescription } from "./ListExperimentsDescription";

export const ListExperiments = ({ showModal }: ListExperimentsProps) => {
  const { loading: loadingExp } = useAdminExperiments();
  
  return (
    <div className="card border-0 rounded-4 shadow-sm overflow-hidden">
      <Init showModal={showModal} />
    
      {loadingExp 
        ? <LoadingExp />
        : <ListExperimentsDescription />}
    </div>
  )
}
