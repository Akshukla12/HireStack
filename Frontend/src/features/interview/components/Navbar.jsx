import React from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import '../style/navbar.scss'

const Navbar = () => {
    const { user, handleLogout } = useAuth()

    const getInitials = (name) => {
        if (!name) return 'U'
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    }

    return (
        <header className="navbar">
            <div className="navbar__container">
                {/* Logo */}
                <div className="navbar__logo">
                    <span className="logo-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </span>
                    <span className="logo-text">Interview<span className="highlight-text">.AI</span></span>
                </div>

                {/* User Controls */}
                {user && (
                    <div className="navbar__user-panel">
                        <div className="user-info">
                            <div className="user-avatar" title={user.username}>
                                {getInitials(user.username)}
                            </div>
                            <span className="user-name">{user.username}</span>
                        </div>
                        <button onClick={handleLogout} className="logout-btn" title="Sign Out">
                            <span className="logout-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
                                </svg>
                            </span>
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar
