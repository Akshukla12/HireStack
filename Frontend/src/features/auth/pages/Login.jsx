import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const LogoIcon = ({ className = "w-8 h-8" }) => (
    <svg className={`${className} flex-shrink-0`} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="topFaceGrad" x1="9" y1="15" x2="39" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="topSideGrad" x1="8.2" y1="22" x2="39.8" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1a365d" />
            </linearGradient>
            <linearGradient id="midFaceGrad" x1="9" y1="21" x2="39" y2="21" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="midSideGrad" x1="8.2" y1="28" x2="39.8" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#172554" />
            </linearGradient>
            <linearGradient id="botFaceGrad" x1="9" y1="27" x2="39" y2="27" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="botSideGrad" x1="8.2" y1="34" x2="39.8" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
        </defs>
        <path d="M 8.2,28.8 L 8.2,31.8 C 8.2,32.3 8.5,32.8 9,33.1 L 22.8,39.8 C 23.5,40.1 24.5,40.1 25.2,39.8 L 39,33.1 C 39.5,32.8 39.8,32.3 39.8,31.8 L 39.8,28.8 L 25.2,36.1 C 24.5,36.4 23.5,36.4 22.8,36.1 Z" fill="url(#botSideGrad)" />
        <path d="M 22.8,19.3 L 9,26.2 C 8.3,26.5 8.3,27.5 9,27.8 L 22.8,34.7 C 23.5,35 24.5,35 25.2,34.7 L 39,27.8 C 39.7,27.5 39.7,26.5 39,26.2 L 25.2,19.3 C 24.5,19 23.5,19 22.8,19.3 Z" fill="url(#botFaceGrad)" />
        <path d="M 8.2,22.8 L 8.2,25.8 C 8.2,26.3 8.5,26.8 9,27.1 L 22.8,33.8 C 23.5,34.1 24.5,34.1 25.2,33.8 L 39,27.1 C 39.5,26.8 39.8,26.3 39.8,25.8 L 39.8,22.8 L 25.2,30.1 C 24.5,30.4 23.5,30.4 22.8,30.1 Z" fill="url(#midSideGrad)" />
        <path d="M 22.8,13.3 L 9,20.2 C 8.3,20.5 8.3,21.5 9,21.8 L 22.8,28.7 C 23.5,29 24.5,29 25.2,28.7 L 39,21.8 C 39.7,21.5 39.7,20.5 39,20.2 L 25.2,13.3 C 24.5,13 23.5,13 22.8,13.3 Z" fill="url(#midFaceGrad)" />
        <path d="M 8.2,16.8 L 8.2,19.8 C 8.2,20.3 8.5,20.8 9,21.1 L 22.8,27.8 C 23.5,28.1 24.5,28.1 25.2,27.8 L 39,21.1 C 39.5,20.8 39.8,20.3 39.8,19.8 L 39.8,16.8 L 25.2,24.1 C 24.5,24.4 23.5,24.4 22.8,24.1 Z" fill="url(#topSideGrad)" />
        <path d="M 22.8,7.3 L 9,14.2 C 8.3,14.5 8.3,15.5 9,15.8 L 22.8,22.7 C 23.5,23 24.5,23 25.2,22.7 L 39,15.8 C 39.7,15.5 39.7,14.5 39,14.2 L 25.2,7.3 C 24.5,7 23.5,7 22.8,7.3 Z" fill="url(#topFaceGrad)" />
        <path d="M 14,17.5 L 19,18.5 L 24,15.5 L 32.5,11.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 27.5,11.5 L 32.5,11.5 L 32.5,16.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        if (!email.trim() || !password.trim()) {
            setError("Email and password are required.")
            return
        }
        try {
            await handleLogin({ email, password })
            navigate('/')
        } catch (err) {
            setError(err.response?.data?.message || "Invalid email or password. Please try again.")
        }
    }

    if (loading) {
        return (
            <main className="auth-loading">
                <div className="spinner"></div>
                <p>Signing you in...</p>
            </main>
        )
    }

    return (
        <main className="auth-shell">
            <div className="auth-brand">
                <span className="brand-icon">
                    <LogoIcon className="w-12 h-12" />
                </span>
                <h1>HireStack</h1>
                <p>Unlock your personalized AI-driven interview coach</p>
            </div>

            <div className="form-container">
                <h2>Welcome Back</h2>
                <p className="form-subtitle">Enter your credentials to access your dashboard</p>

                {error && (
                    <div className="error-alert">
                        <span className="error-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                        </span>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-wrapper">
                            <span className="input-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </span>
                            <input
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" 
                                id="email" 
                                name='email' 
                                placeholder='name@company.com' 
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <span className="input-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </span>
                            <input
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" 
                                id="password" 
                                name='password' 
                                placeholder='••••••••' 
                                required
                            />
                        </div>
                    </div>

                    <button className='button primary-button auth-btn'>Sign In</button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link to={"/register"}>Create account</Link>
                </p>
            </div>
        </main>
    )
}

export default Login