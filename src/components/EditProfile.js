import React from "react"

export default function EditProfile() {

    return (
        <section className="edit-profile">
            <header>
                <nav class="Header">
                    <a href="/"> Home </a>
                </nav>
            </header>
            <h1 className="Title">
                Edit Profile
            </h1>
            <form className="input-sections">
                <label className="labels">
                    <h4>Name:</h4>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="name"
                    />
                </label>
                <label className="labels">
                    <h4>Username</h4>
                    <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="username"
                    />
                </label>
                <label className="labels">
                    <h4>Password</h4>
                    <input
                    id="password"
                    type="text"
                    name="password"
                    placeholder="password"
                    />
                </label>
                <button className="Button"type="submit">Submit!</button>
            </form>
            <footer>
               
            </footer>
        </section>
    )

}