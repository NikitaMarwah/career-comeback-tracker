function ApplicationCard ({app}) {
    return (
    <>
      <h3>🏢 {app.company}</h3>

      <p>
        <strong>Role:</strong> {app.role}
      </p>

      <p>
        <strong>Status:</strong> {app.status}
      </p>

      <p>
        <strong>Applied Through:</strong> {app.appliedThrough}
      </p>
    </>
    )
} 

export default ApplicationCard;


