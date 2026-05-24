import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInterview } from '../hooks/useInterview.js'
import { useAuth } from '../../auth/hooks/useAuth.js'
import { useNavigate } from 'react-router'
import {
    SparklesIcon,
    XMarkIcon,
    Squares2X2Icon,
    ClockIcon,
    PlusIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    UserCircleIcon,
    DocumentTextIcon,
    CheckCircleIcon,
    TrashIcon,
    InformationCircleIcon,
    BriefcaseIcon,
    ShieldCheckIcon,
    BoltIcon,
    ArrowRightIcon,
    CalendarIcon,
    ClipboardDocumentListIcon,
    FolderOpenIcon,
    RocketLaunchIcon
} from '@heroicons/react/24/outline'

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

const LOADING_PHASES = [
    "Reading Target Job Description...",
    "Parsing Resume & Profile Attributes...",
    "Cross-Referencing Requirements & Skill Gaps...",
    "Formulating Tailored Technical Questions...",
    "Synthesizing Behavioral Scenarios...",
    "Finalizing Personalized Preparation Roadmap...",
    "Assembling Your Strategy Dossier..."
]

const headingWords = "AI-Powered Interview Intelligence".split(" ")

const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.05
        }
    }
}

const headingWordVariants = {
    hidden: {
        opacity: 0,
        x: -8,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo for fluid deceleration
        }
    }
}

const Home = () => {
    const { loading, generateReport, reports } = useInterview()
    const { user, handleLogout } = useAuth()
    const [jobDescription, setJobDescription] = useState("")
    const [selfDescription, setSelfDescription] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)

    // UI tabs and state
    const [resumeTab, setResumeTab] = useState("file") // "file" | "text"
    const [jdTab, setJdTab] = useState("text") // "text" | "file"
    const [isDraggingResume, setIsDraggingResume] = useState(false)
    const [isDraggingJD, setIsDraggingJD] = useState(false)
    const [loadingPhase, setLoadingPhase] = useState(0)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    const navigate = useNavigate()

    // Cycle through loading messages
    useEffect(() => {
        if (!loading) return
        const interval = setInterval(() => {
            setLoadingPhase((prev) => (prev + 1) % LOADING_PHASES.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [loading])

    const handleGenerateReport = async () => {
        if (!isValid) return
        // Send empty selfDescription if resume file is chosen, and vice versa
        const data = await generateReport({
            jobDescription,
            selfDescription: resumeTab === "text" ? selfDescription : "",
            resumeFile: resumeTab === "file" ? selectedFile : null
        })
        if (data && data._id) {
            navigate(`/interview/${data._id}`)
        }
    }

    // Drag and Drop Handlers for Resume
    const handleResumeDragOver = (e) => {
        e.preventDefault()
        setIsDraggingResume(true)
    }

    const handleResumeDragLeave = () => {
        setIsDraggingResume(false)
    }

    const handleResumeDrop = (e) => {
        e.preventDefault()
        setIsDraggingResume(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0]
            validateAndSetResume(file)
        }
    }

    const handleResumeFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            validateAndSetResume(file)
        }
    }

    const validateAndSetResume = (file) => {
        const extension = file.name.split('.').pop().toLowerCase()
        if (extension === 'pdf' || extension === 'docx') {
            if (file.size <= 10 * 1024 * 1024) {
                setSelectedFile(file)
            } else {
                alert("File size exceeds 10MB limit.")
            }
        } else {
            alert("Only PDF or DOCX files are allowed.")
        }
    }

    // Drag and Drop Handlers for Job Description
    const handleJdDragOver = (e) => {
        e.preventDefault()
        setIsDraggingJD(true)
    }

    const handleJdDragLeave = () => {
        setIsDraggingJD(false)
    }

    const handleJdDrop = (e) => {
        e.preventDefault()
        setIsDraggingJD(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0]
            validateAndReadJd(file)
        }
    }

    const handleJdFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            validateAndReadJd(file)
        }
    }

    const validateAndReadJd = (file) => {
        const extension = file.name.split('.').pop().toLowerCase()
        if (['txt', 'md', 'json'].includes(extension)) {
            if (file.size <= 5 * 1024 * 1024) {
                const reader = new FileReader()
                reader.onload = (event) => {
                    setJobDescription(event.target.result)
                }
                reader.readAsText(file)
            } else {
                alert("File size exceeds 5MB limit.")
            }
        } else {
            alert("For JD files, please upload plain text (.txt, .md). For PDF/DOCX, please copy and paste the text directly.")
        }
    }

    const isValid = jobDescription.trim().length > 0 &&
        ((resumeTab === "file" && selectedFile !== null) || (resumeTab === "text" && selfDescription.trim().length > 0))

    // Stats calculations
    const completedSessions = reports?.length || 0
    const avgScore = reports?.length > 0
        ? Math.round(reports.reduce((sum, r) => sum + (r.matchScore || 0), 0) / reports.length)
        : 0
    const hoursSaved = completedSessions * 4

    if (loading) {
        return (
            <main className="loading-screen">
                <div className="loading-card">
                    {/* Scanner portal animation */}
                    <div className="scanner-portal">
                        <div className="scanner-beam"></div>
                        <SparklesIcon className="scanner-icon" />
                    </div>

                    <div className="text-center w-full">
                        <h2 className="text-headline-md font-bold text-on-surface mb-2">Analyzing Position Strategy</h2>
                        <p className="text-body-md text-primary font-medium min-h-[48px] px-4">{LOADING_PHASES[loadingPhase]}</p>

                        {/* Progress Bar */}
                        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-6">
                            <div
                                className="bg-primary h-full transition-all duration-700 ease-out"
                                style={{ width: `${((loadingPhase + 1) / LOADING_PHASES.length) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-label-sm text-on-surface-variant opacity-60 mt-2 block">
                            Please wait, this takes about 30 seconds...
                        </span>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <div className="min-h-screen bg-background text-on-surface flex font-sans">

            {/* Sidebar Navigation */}
            <aside className={`fixed inset-y-0 left-0 z-40 w-52 bg-surface-container-lowest border-r border-outline-variant py-md px-sm flex flex-col transition-transform duration-300 md:translate-x-0 ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="mb-md px-sm flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-sm">
                        <LogoIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                        <div>
                            <h1 className="text-headline-sm font-bold text-on-surface leading-tight transition-colors duration-200 group-hover:text-primary">HireStack</h1>
                            <p className="text-label-sm text-on-surface-variant opacity-70 leading-none mt-0.5">Enterprise Clarity</p>
                        </div>
                    </div>
                    <button className="md:hidden text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors" onClick={() => setMobileSidebarOpen(false)}>
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex-1 space-y-base">
                    <a className="group flex items-center gap-sm bg-secondary-container text-on-secondary-container font-semibold rounded-lg px-sm py-xs border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:opacity-98 transition-all duration-200" href="#/">
                        <Squares2X2Icon className="w-5 h-5 text-on-secondary-container transition-transform duration-200 group-hover:scale-105" />
                        <span className="font-semibold text-label-md">Overview</span>
                    </a>
                    <a className="group flex items-center gap-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg px-sm py-xs transition-all duration-200" href="#recent-plans">
                        <ClockIcon className="w-5 h-5 text-on-surface-variant/80 group-hover:text-on-surface transition-colors duration-200" />
                        <span className="font-medium text-label-md">Practice History</span>
                    </a>
                </nav>

                <div className="mt-auto space-y-sm pt-md border-t border-outline-variant">
                    <button
                        onClick={() => {
                            const uploadSec = document.getElementById("upload-section");
                            if (uploadSec) uploadSec.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full flex items-center justify-center gap-xs bg-primary text-on-primary rounded-lg py-sm font-semibold transition-all shadow-md hover:shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                    >
                        <PlusIcon className="w-5 h-5" />
                        New Session
                    </button>
                    <button
                        className="group w-full flex items-center gap-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200"
                        onClick={handleLogout}
                    >
                        <ArrowRightOnRectangleIcon className="w-5 h-5 text-on-surface-variant/80 group-hover:text-on-surface group-hover:translate-x-0.5 transition-all duration-200" />
                        <span className="font-medium text-label-md">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Sidebar backdrop for mobile */}
            {mobileSidebarOpen && (
                <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setMobileSidebarOpen(false)}></div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 md:ml-52 min-h-screen flex flex-col">

                {/* Top Header */}
                <header className="flex justify-between items-center h-14 w-full px-margin-desktop bg-surface-container-lowest sticky top-0 border-b border-outline-variant z-30">
                    <div className="flex items-center gap-md">
                        <button className="md:hidden text-on-surface-variant cursor-pointer" onClick={() => setMobileSidebarOpen(true)}>
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex items-center gap-md">
                        <nav className="hidden lg:flex items-center gap-lg">
                            <a className="text-primary font-bold border-b-2 border-primary pb-1 text-body-md" href="#/">Dashboard</a>
                            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-body-md" href="mailto:support@hirestack.com">Support</a>
                        </nav>

                        <div className="flex items-center gap-sm ml-lg border-l border-outline-variant pl-lg">
                            <div className="flex items-center gap-2">
                                <img
                                    alt="User Profile"
                                    className="w-8 h-8 rounded-full border border-outline-variant object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB851SCHiJiQ7qiTzWDrlK11Kz5P1tH9-99bVnG3f0VjKzC4bPGcLvcOoQI5aUCSb3LzZMKwfmhSKcuY3Sfe3XyQB0oBMV_4XI5wRv6Kxn0Sin8foXP0HfLP--eIBFlv8b7o62a4iXHsiu-gdwqGeOxdTdzIDnkZhOlTQIvBzU6n-aVuu_iCHqjrDFl03kKAnOGndYonwyrdtMkOGwLxOyhXIeJ-1ITfC-S-QYVPGfhc_FW2jaHOvHWPa012wrihbmapsTF8S1MnbU"
                                />
                                <span className="text-body-sm font-semibold text-on-surface hidden md:inline-block">
                                    {user?.username || "Guest User"}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Scrollable Body */}
                <div className="max-w-max-width w-full mx-auto px-margin-desktop py-8 space-y-8 flex-1">

                    {/* Hero Section */}
                    <section className="relative max-w-3xl pt-4 pb-2">
                        {/* Decorative ambient background glows */}
                        <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
                        <div className="absolute top-4 -right-16 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

                        {/* Premium Enterprise SaaS Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-[11px] font-bold text-primary mb-4 select-none tracking-wider uppercase shadow-[0_1px_2px_rgba(0,80,180,0.02)]"
                        >
                            <SparklesIcon className="w-3.5 h-3.5 text-primary animate-pulse" />
                            <span>Enterprise Preparation Intelligence</span>
                        </motion.div>

                        <motion.h2
                            variants={headingContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-display-lg font-bold text-on-surface mb-3 tracking-tight leading-tight"
                        >
                            {headingWords.map((word, i) => {
                                const isGradientWord = i >= 1; // "Interview Intelligence"
                                return (
                                    <motion.span
                                        key={i}
                                        variants={headingWordVariants}
                                        className={`inline-block pr-[0.25em] ${
                                            isGradientWord 
                                                ? 'bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1' 
                                                : ''
                                        }`}
                                        style={{ willChange: "transform, opacity, filter" }}
                                    >
                                        {word}
                                    </motion.span>
                                )
                            })}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-body-lg text-on-surface-variant/80 leading-relaxed font-normal max-w-2xl"
                            style={{ willChange: "transform, opacity, filter" }}
                        >
                            HireStack uses AI to evaluate your profile, identify weaknesses, generate interview simulations, and help you prepare with confidence.
                        </motion.p>
                    </section>

                    {/* Quick Stats Dashboard Bar */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Session Activity Card */}
                        <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-5 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-primary/10 transition-all duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/2 rounded-full blur-xl group-hover:bg-primary/5 transition-colors pointer-events-none" />
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <RocketLaunchIcon className="w-5.5 h-5.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Session Activity</p>
                                    <h4 className="text-xl md:text-2xl font-extrabold text-on-surface mt-0.5 tracking-tight">{completedSessions} Completed</h4>
                                </div>
                                <span className="text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded text-[10px] font-bold">Top 5%</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-outline-variant/30">
                                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-primary h-full rounded-full transition-all duration-1000" 
                                        style={{ width: `${Math.min(100, (completedSessions / 10) * 100)}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-on-surface-variant/75 font-semibold mt-2">
                                    <span>Target Progress: {completedSessions}/10 sessions</span>
                                    <span>{completedSessions >= 10 ? "Goal Met! 🎉" : "Keep practicing"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Average Score Card */}
                        <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-5 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-primary/10 transition-all duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-tertiary/2 rounded-full blur-xl group-hover:bg-tertiary/5 transition-colors pointer-events-none" />
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-tertiary/5 border border-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                                    <ClipboardDocumentListIcon className="w-5.5 h-5.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Average Match</p>
                                    <h4 className="text-xl md:text-2xl font-extrabold text-on-surface mt-0.5 tracking-tight">{avgScore}%</h4>
                                </div>
                                <span className="text-tertiary bg-tertiary/5 border border-tertiary/10 px-2 py-0.5 rounded text-[10px] font-bold">Stable</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-outline-variant/30">
                                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-tertiary h-full rounded-full transition-all duration-1000" 
                                        style={{ width: `${avgScore}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-on-surface-variant/75 font-semibold mt-2">
                                    <span>Target Performance: 80%</span>
                                    <span>{avgScore >= 80 ? "Optimal Alignment" : "Developing competency"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Hours Saved Card */}
                        <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-5 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-primary/10 transition-all duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/2 rounded-full blur-xl group-hover:bg-emerald-500/5 transition-colors pointer-events-none" />
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                    <ClockIcon className="w-5.5 h-5.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Preparation Velocity</p>
                                    <h4 className="text-xl md:text-2xl font-extrabold text-on-surface mt-0.5 tracking-tight">{hoursSaved} hrs saved</h4>
                                </div>
                                <span className="text-emerald-600 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">Efficient</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-outline-variant/30">
                                <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000" 
                                        style={{ width: `${Math.min(100, (hoursSaved / 40) * 100)}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] text-on-surface-variant/75 font-semibold mt-2">
                                    <span>Equivalent Study Saving</span>
                                    <span>High ROI</span>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Upload Zone & Inputs */}
                    <section id="upload-section" className="space-y-md">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
 
                            {/* Card 1: Resume Upload / Bio */}
                            <div className="bg-surface-container-lowest border border-outline-variant/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 rounded-2xl flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,80,180,0.02)] hover:border-outline-variant/80">
                                <div className="flex flex-col flex-1 justify-between">
                                    <div>
                                        <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-3">
                                            <div className="flex items-center gap-2.5">
                                                <UserCircleIcon className="w-7 h-7 text-primary stroke-[1.8]" />
                                                <h3 className="font-semibold text-lg text-on-surface tracking-tight">Your Profile</h3>
                                            </div>
                                            <div className="flex bg-surface-container-low rounded-lg p-1 text-[11px] border border-outline-variant/40">
                                                <button
                                                    onClick={() => setResumeTab("file")}
                                                    className={`px-5 py-2 rounded-md transition-all cursor-pointer font-bold duration-200 ${resumeTab === "file" ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-outline-variant/45 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                                >
                                                    Upload CV
                                                </button>
                                                <button
                                                    onClick={() => setResumeTab("text")}
                                                    className={`px-5 py-2 rounded-md transition-all cursor-pointer font-bold duration-200 ${resumeTab === "text" ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-outline-variant/45 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                                >
                                                    Write Bio
                                                </button>
                                            </div>
                                        </div>

                                        {resumeTab === "file" ? (
                                            selectedFile ? (
                                                <div className="flex flex-col items-center justify-center p-8 bg-surface-container-low/40 rounded-xl border border-outline-variant/40 transition-all">
                                                    <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-3">
                                                        <DocumentTextIcon className="w-8 h-8 text-primary stroke-[1.8]" />
                                                    </div>
                                                    <h4 className="font-bold text-on-surface text-center line-clamp-1 max-w-[250px]">{selectedFile.name}</h4>
                                                    <p className="text-xs text-on-surface-variant/80 font-semibold mt-1">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>

                                                    <div className="flex items-center gap-1.5 mt-4 bg-surface-container-lowest border border-outline-variant px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">
                                                        <CheckCircleIcon className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                                                        Uploaded &amp; Verified
                                                    </div>

                                                    <button
                                                        onClick={() => setSelectedFile(null)}
                                                        className="mt-4 flex items-center gap-1.5 text-xs text-error font-bold hover:text-error/80 transition-colors cursor-pointer"
                                                    >
                                                        <TrashIcon className="w-4 h-4" />
                                                        Remove CV
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    onDragOver={handleResumeDragOver}
                                                    onDragLeave={handleResumeDragLeave}
                                                    onDrop={handleResumeDrop}
                                                    className="group relative flex flex-col items-center justify-center p-10 rounded-xl upload-dashed transition-all cursor-pointer"
                                                >
                                                    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                                                        <DocumentTextIcon className="w-7 h-7 text-primary stroke-[1.8]" />
                                                    </div>
                                                    <h3 className="font-extrabold text-body-md text-on-surface mb-1">Drop your CV here</h3>
                                                    <p className="text-xs text-on-surface-variant/80 font-semibold">PDF, DOCX up to 10MB</p>
                                                    <input
                                                        type="file"
                                                        accept=".pdf,.docx"
                                                        onChange={handleResumeFileChange}
                                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                                    />
                                                </div>
                                            )
                                        ) : (
                                            <div className="space-y-2">
                                                <textarea
                                                    value={selfDescription}
                                                    onChange={(e) => setSelfDescription(e.target.value)}
                                                    className="w-full h-44 p-4 bg-surface-container-low/10 rounded-xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/5 text-body-sm transition-all outline-none resize-none placeholder-slate-400 font-medium text-slate-700"
                                                    placeholder="Briefly describe your professional background, skills, achievements, and career level..."
                                                ></textarea>
                                                <div className="flex justify-between items-center text-xs px-1">
                                                    <span className="text-on-surface-variant/75 font-semibold">Include details on skills &amp; experience</span>
                                                    <span className="text-on-surface-variant/80 font-bold">{selfDescription.length} characters</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 text-xs text-on-surface-variant flex items-center gap-3 bg-surface-container-low/40 p-4 rounded-xl border border-outline-variant/30">
                                        <InformationCircleIcon className="w-5 h-5 text-primary flex-shrink-0 stroke-[1.8]" />
                                        <span className="font-semibold text-on-surface-variant/90">Provide a resume file or write a detailed bio to customize analysis.</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Job Description */}
                            <div className="bg-surface-container-lowest border border-outline-variant/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 rounded-2xl flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,80,180,0.02)] hover:border-outline-variant/80">
                                <div className="flex flex-col flex-1 justify-between">
                                    <div>
                                        <div className="flex justify-between items-center mb-6 border-b border-outline-variant/30 pb-3">
                                            <div className="flex items-center gap-2.5">
                                                <BriefcaseIcon className="w-7 h-7 text-primary stroke-[1.8]" />
                                                <h3 className="font-semibold text-lg text-on-surface tracking-tight">Job Description</h3>
                                            </div>
                                            <div className="flex bg-surface-container-low rounded-lg p-1 text-[11px] border border-outline-variant/40">
                                                <button
                                                    onClick={() => setJdTab("text")}
                                                    className={`px-5 py-2 rounded-md transition-all cursor-pointer font-bold duration-200 ${jdTab === "text" ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-outline-variant/45 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                                >
                                                    Paste JD Text
                                                </button>
                                                <button
                                                    onClick={() => setJdTab("file")}
                                                    className={`px-5 py-2 rounded-md transition-all cursor-pointer font-bold duration-200 ${jdTab === "file" ? 'bg-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] border border-outline-variant/45 text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                                                >
                                                    Upload File
                                                </button>
                                            </div>
                                        </div>

                                        {jdTab === "text" ? (
                                            <div className="space-y-2">
                                                <textarea
                                                    value={jobDescription}
                                                    onChange={(e) => setJobDescription(e.target.value)}
                                                    className="w-full h-44 p-4 bg-surface-container-low/10 rounded-xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/5 text-body-sm transition-all outline-none resize-none placeholder-slate-400 font-medium text-slate-700"
                                                    placeholder="Paste the target job description details here. Specify key tech stacks, tasks, and requirements..."
                                                    maxLength={5000}
                                                ></textarea>
                                                <div className="flex justify-between items-center text-xs px-1">
                                                    <span className="text-on-surface-variant/75 font-semibold">Minimum required</span>
                                                    <span className={`${jobDescription.length >= 4500 ? 'text-error font-bold animate-pulse' : 'text-on-surface-variant/80 font-bold'}`}>
                                                        {jobDescription.length.toLocaleString()} / 5,000 chars
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                onDragOver={handleJdDragOver}
                                                onDragLeave={handleJdDragLeave}
                                                onDrop={handleJdDrop}
                                                className="group relative flex flex-col items-center justify-center p-10 rounded-xl upload-dashed transition-all cursor-pointer"
                                            >
                                                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                                                    <BriefcaseIcon className="w-7 h-7 text-primary stroke-[1.8]" />
                                                </div>
                                                <h3 className="font-extrabold text-body-md text-on-surface mb-1">Drop your JD file</h3>
                                                <p className="text-xs text-on-surface-variant/80 font-semibold">TXT, MD plain text files (Max 5MB)</p>
                                                <input
                                                    type="file"
                                                    accept=".txt,.md"
                                                    onChange={handleJdFileChange}
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4">
                                        {jdTab === "file" && jobDescription && (
                                            <div className="text-xs text-emerald-600 font-bold flex items-center gap-1.5 mb-2 px-1">
                                                <CheckCircleIcon className="w-4 h-4 text-emerald-500 font-bold" />
                                                JD content loaded successfully ({jobDescription.length} characters)
                                            </div>
                                        )}
                                        <div className="text-xs text-on-surface-variant flex items-center gap-3 bg-surface-container-low/40 p-4 rounded-xl border border-outline-variant/30">
                                            <ShieldCheckIcon className="w-5 h-5 text-primary flex-shrink-0 stroke-[1.8]" />
                                            <span className="font-semibold text-on-surface-variant/90">AI extracts core skills, tech stacks, and role expectations instantly.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Generate button */}
                        <div 
                            className={`relative isolate flex justify-center items-center p-5 rounded-xl border transition-all duration-300 w-full ${
                                isValid 
                                    ? 'bg-surface-container-low/45 border-primary/10 shadow-[0_2px_12px_rgba(0,80,180,0.02)]' 
                                    : 'bg-surface-container-low/20 border-outline-variant/30'
                            }`}
                        >
                            
                            <button
                                onClick={handleGenerateReport}
                                disabled={!isValid}
                                className={`group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-label-md font-bold transition-all duration-200 cursor-pointer overflow-hidden ${
                                    isValid 
                                        ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-sm hover:shadow-md hover:shadow-primary/15 hover:opacity-98 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]' 
                                        : 'bg-surface-container-high text-on-surface-variant/40 border border-outline-variant/20 cursor-not-allowed shadow-none'
                                }`}
                            >
                                <span>Analyze My Profile</span>
                                <ArrowRightIcon className={`w-4.5 h-4.5 transition-transform duration-200 ${isValid ? 'group-hover:translate-x-0.5' : ''}`} />
                            </button>
                        </div>
                    </section>

                    {/* Recent Preparation Plans */}
                    <section id="recent-plans" className="scroll-mt-20">
                        <div className="flex items-center justify-between mb-md">
                            <h3 className="text-headline-md font-semibold text-on-surface tracking-tight">Recent Preparation Plans</h3>
                            <a href="#/" className="text-primary font-semibold flex items-center gap-xs hover:gap-sm transition-all text-body-sm">
                                View All <ArrowRightIcon className="w-4 h-4" />
                            </a>
                        </div>

                        {reports?.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
                                {reports.map(report => (
                                    <div
                                        key={report._id}
                                        className="glass-card p-6 rounded-2xl hover:shadow-[0_12px_30px_rgba(0,80,180,0.03)] hover:border-primary/20 transition-all duration-300 group flex flex-col justify-between border border-outline-variant/40"
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-lg">
                                                <div className="max-w-[70%]">
                                                    <h4 className="text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-1">{report.title || 'Untitled Position'}</h4>
                                                    <p className="text-xs text-on-surface-variant line-clamp-1">Enterprise Prep Plan</p>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className={`text-headline-md font-extrabold ${report.matchScore >= 80 ? 'text-primary' : report.matchScore >= 60 ? 'text-tertiary' : 'text-error'}`}>
                                                        {report.matchScore}%
                                                    </span>
                                                    <span className="text-[10px] text-on-surface-variant opacity-70 uppercase tracking-wider font-semibold">Match</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2 mb-lg text-xs">
                                                <div className="flex items-center gap-1.5 text-on-surface-variant">
                                                    <CalendarIcon className="w-4 h-4" />
                                                    <span>Analyzed {new Date(report.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-on-surface-variant">
                                                    <ClipboardDocumentListIcon className="w-4 h-4" />
                                                    <span>{(report.technicalQuestions?.length || 0) + (report.behavioralQuestions?.length || 0)} custom questions</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => navigate(`/interview/${report._id}`)}
                                            className="w-full py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-colors text-body-sm cursor-pointer"
                                        >
                                            Resume Preparation
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full glass-card py-12 px-6 rounded-2xl text-center border border-dashed border-outline-variant/65 flex flex-col items-center justify-center bg-surface-container-low/20">
                                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center mb-4 text-on-surface-variant/80 shadow-inner">
                                    <FolderOpenIcon className="w-6 h-6 stroke-[1.8]" />
                                </div>
                                <h4 className="font-bold text-body-md text-on-surface mb-1.5 tracking-tight">No preparation plans yet</h4>
                                <p className="text-body-sm text-on-surface-variant max-w-[480px] mx-auto leading-relaxed w-full">
                                    Upload your CV and a Job Description above to generate your first custom AI interview analysis and timeline.
                                </p>
                            </div>
                        )}
                    </section>
                </div>

                {/* Page Footer */}
                <footer className="mt-auto py-5 px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/30 text-[11px] text-on-surface-variant/80">
                    <div className="max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4">
                        {/* Left: Branding & Status */}
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div className="flex items-center gap-2">
                                <LogoIcon className="w-5.5 h-5.5 text-on-surface" />
                                <span className="font-semibold text-on-surface tracking-tight text-sm">HireStack</span>
                            </div>
                            <span className="hidden sm:inline text-outline-variant/60 font-light">|</span>
                            <div className="flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-full text-emerald-600 font-semibold text-[10px] select-none">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                All Systems Operational
                            </div>
                        </div>

                        {/* Right: Navigation Links & AI Credit */}
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium">
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                Privacy Policy
                            </a>
                            <span className="text-on-surface-variant/20 select-none">&bull;</span>
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                Terms of Service
                            </a>
                            <span className="text-on-surface-variant/20 select-none">&bull;</span>
                            <a
                                href="#/"
                                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                                onClick={(e) => { e.preventDefault(); }}
                            >
                                Help Center
                            </a>
                            <span className="hidden sm:inline text-outline-variant/60 font-light select-none">|</span>
                            <div className="flex items-center gap-1 text-on-surface-variant/90 select-none">
                                <span>Powered by</span>
                                <span className="font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                                    Gemini AI
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Home