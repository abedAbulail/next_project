"use client";

export default function CreateUser() {
  function createUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    // refresh the page after creating a user
    window.location.reload();

}

  return (
    <div className="container mt-5 p-5">
      <h2>Create User</h2>
      <form onSubmit={createUser} method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
}
