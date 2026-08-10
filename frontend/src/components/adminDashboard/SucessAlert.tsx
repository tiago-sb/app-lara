export const SucessAlert = ({ success }: { success: string }) => {
  const font = "Montserrat, sans-serif";
  
  return (
    <div 
    className="alert py-2 mb-4" 
    style={{ 
      backgroundColor: "rgba(25,135,84,0.08)", 
      border: "1px solid rgba(25,135,84,0.2)", 
      color: "#198754", 
      fontFamily: font, fontSize: "0.85rem" 
    }}>
      {success}
    </div>
  )
}