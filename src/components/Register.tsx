export const Register = () => {
    return (
        <div>
            <h2>Create an account</h2>
            <form>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <div>
                    <button>Sign up</button>
                </div>
            </form>
        </div>
    )
}