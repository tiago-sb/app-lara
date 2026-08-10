import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"
import type { UserProfile } from "../../types/autentication/UserProfile";

export const BackProfile = ({ user }: { user: UserProfile | null}) => {
  const navigate = useNavigate();
  const navigation = () => navigate(user?.is_staff ? "/admin/dashboard" : "/dashboard")

  return (
    <div className="bg-white shadow-sm d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded"
      onClick={navigation}
      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", cursor: "pointer" }}
    >
      <ArrowLeft size={16} />
      Voltar ao Dashboard
    </div>
  )
}