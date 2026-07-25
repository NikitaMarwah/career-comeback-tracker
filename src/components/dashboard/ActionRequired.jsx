import ApplicationCard from "./ApplicationCard";

function ActionRequired({ applications }) {
  console.log("applications are:", applications);

  const followups = applications.filter((app)=> app.status === "Applied")
    return (
    <>
      <h2>Action Required Today</h2>
      {followups.map((app) => (
        <p key={app.id}>
          ⚠ {app.company} - {app.role}
        </p>
        
      ))}
    </>
  );
}

export default ActionRequired;