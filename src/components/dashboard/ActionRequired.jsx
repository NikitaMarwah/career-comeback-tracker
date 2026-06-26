function ActionRequired({ applications, contacts }) {
  console.log("applications are:", applications, contacts);

  const followups = applications.filter((app)=> app.status === "Applied")
    return (
    <>
      <h2>Action Required Today</h2>
      {followups.map((app) => (
        <>
        <p key={app.id}>{app.company}-{app.role}</p>
        <p key={app.id}>{app.status}</p>
        <p key={app.id}>{app.appliedThrough}</p>
        </>
      ))}
    </>
  );
}

export default ActionRequired;