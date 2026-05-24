import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInterview } from '../hooks/useInterview.js'
import { useAuth } from '../../auth/hooks/useAuth.js'
import { useNavigate, useParams } from 'react-router'
import {
    ChevronDownIcon,
    XMarkIcon,
    ArrowLeftIcon,
    CodeBracketIcon,
    LightBulbIcon,
    ChartBarIcon,
    ArrowDownTrayIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BellIcon,
    QuestionMarkCircleIcon,
    ExclamationCircleIcon,
    ArrowTrendingUpIcon,
    CheckCircleIcon,
    ShieldCheckIcon,
    BoltIcon,
    UserGroupIcon,
    PlayCircleIcon,
    BookOpenIcon,
    CheckIcon,
    DocumentTextIcon,
    BriefcaseIcon,
    CalendarIcon
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

// ── Sub-components ────────────────────────────────────────────────────────────

const TechnicalAccordionCard = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0) // Open the first one by default

    return (
        <motion.div
            layout
            initial={false}
            animate={{
                borderColor: isOpen ? 'rgba(0, 80, 180, 0.18)' : 'rgba(226, 232, 240, 0.5)',
                boxShadow: isOpen ? '0 12px 30px rgba(0,80,180,0.03)' : '0 4px 20px rgba(0,0,0,0.015)',
                backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'
            }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative border rounded-2xl overflow-hidden bg-surface-container-lowest group transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,80,180,0.04)] hover:border-primary/20"
        >
            <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${isOpen ? 'bg-primary' : 'bg-transparent'}`} />
            <button
                className="w-full p-5 md:p-6 pl-6 md:pl-7 flex items-start justify-between gap-4 text-left focus:outline-none cursor-pointer select-none transition-colors hover:bg-surface-container-low/20"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col pr-md">
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                            Question 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant/80 text-[10px] font-bold">
                            Technical Assessment
                        </span>
                    </div>
                    <h3 className="text-base md:text-[17px] font-semibold text-on-surface leading-snug tracking-tight text-slate-800">
                        {item.question}
                    </h3>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? 0 : 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                    className={`flex-shrink-0 mt-1.5 ${isOpen ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                    <ChevronDownIcon className="w-5 h-5 stroke-[2.2]" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.38, bounce: 0 }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-col gap-4 border-t border-outline-variant/20 pt-5 bg-surface-bright/30 overflow-hidden">
                            <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 border-l-3 border-primary rounded-xl flex flex-col gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.005)]">
                                <div className="flex items-center gap-1.5 text-primary select-none">
                                    <CheckCircleIcon className="w-4.5 h-4.5" />
                                    <h4 className="text-[11px] font-bold uppercase tracking-wider">Model Answer</h4>
                                </div>
                                <p className="font-body-md text-on-surface text-sm leading-relaxed text-slate-700 max-w-3xl">{item.answer}</p>
                            </div>

                            <div className="p-5 bg-primary/[0.015] border border-outline-variant/30 border-l-3 border-primary-container rounded-xl flex flex-col gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.005)]">
                                <div className="flex items-center gap-1.5 select-none">
                                    <LightBulbIcon className="w-4.5 h-4.5 text-primary" />
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">AI Insights &amp; Intention</span>
                                </div>
                                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed max-w-3xl">{item.intention}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const BehavioralAccordionCard = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0)

    // Dynamic competency mapping configuration matching the index
    const behavioralCompetencies = [
        { category: "Leadership & Initiative", method: "STAR Methodology", color: "text-blue-700 bg-blue-50/70 border-blue-200/50" },
        { category: "Conflict Resolution", method: "Situational Response", color: "text-purple-700 bg-purple-50/70 border-purple-200/50" },
        { category: "Adaptability & Growth", method: "STAR Methodology", color: "text-indigo-700 bg-indigo-50/70 border-indigo-200/50" },
        { category: "Problem Solving & Grit", method: "Critical Assessment", color: "text-amber-700 bg-amber-50/70 border-amber-200/50" },
        { category: "Collaboration & Teamwork", method: "Ownership Mindset", color: "text-emerald-700 bg-emerald-50/70 border-emerald-200/50" },
        { category: "Effective Communication", method: "Situational Response", color: "text-rose-700 bg-rose-50/70 border-rose-200/50" }
    ]
    const comp = behavioralCompetencies[index % behavioralCompetencies.length]

    return (
        <motion.div
            layout
            initial={false}
            animate={{
                borderColor: isOpen ? 'rgba(0, 80, 180, 0.18)' : 'rgba(226, 232, 240, 0.5)',
                boxShadow: isOpen ? '0 12px 30px rgba(0,80,180,0.03)' : '0 4px 20px rgba(0,0,0,0.015)',
                backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'
            }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative border rounded-2xl overflow-hidden bg-surface-container-lowest group transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,80,180,0.04)] hover:border-primary/20"
        >
            <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${isOpen ? 'bg-primary' : 'bg-transparent'}`} />
            <button
                className="w-full text-left p-5 md:p-6 pl-6 md:pl-7 flex items-start justify-between gap-4 focus:outline-none cursor-pointer select-none transition-colors hover:bg-surface-container-low/20"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col flex-1 min-w-0 pr-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2.5 select-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                            Question 0{index + 1}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface-variant/80 text-[10px] font-bold">
                            Behavioral Assessment
                        </span>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${comp.color}`}>
                            {comp.category}
                        </span>
                    </div>
                    <h3 className="text-base md:text-[17px] font-semibold text-on-surface leading-snug tracking-tight text-slate-800 max-w-3xl">
                        {item.question}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-wider select-none">
                        <span>Methodology: {comp.method}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3.5 flex-shrink-0 mt-1 md:mt-1.5">
                    {index % 2 === 0 ? (
                        <span className="inline-flex items-center bg-emerald-500/[0.04] border border-emerald-500/10 text-emerald-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none">
                            <span className="relative flex h-1.5 w-1.5 mr-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                            Strong Fit
                        </span>
                    ) : (
                        <span className="inline-flex items-center bg-blue-500/[0.04] border border-blue-500/10 text-blue-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase select-none">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-1.5"></span>
                            Solid Fit
                        </span>
                    )}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? 0 : 1 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                        className={`flex-shrink-0 ${isOpen ? 'text-primary' : 'text-on-surface-variant'}`}
                    >
                        <ChevronDownIcon className="w-5 h-5 stroke-[2.2]" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.38, bounce: 0 }}
                    >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 flex flex-col gap-4 border-t border-outline-variant/20 pt-5 bg-surface-bright/30 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-surface-container-lowest/80 p-6 rounded-xl border border-outline-variant/40 border-l-3 border-l-primary/60 shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col gap-3 hover:bg-surface-container-lowest hover:border-primary/20 transition-all duration-300">
                                    <div className="flex items-center gap-2 select-none">
                                        <div className="w-7 h-7 rounded bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                                            <ShieldCheckIcon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-extrabold text-primary/60 uppercase tracking-widest leading-none">Interviewer Focus</span>
                                            <h4 className="text-xs font-bold text-slate-800 tracking-wide mt-0.5">Intention &amp; Goal</h4>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-slate-600 leading-relaxed font-medium max-w-2xl mt-0.5">{item.intention}</p>
                                </div>

                                <div className="bg-surface-container-lowest/80 p-6 rounded-xl border border-outline-variant/40 border-l-3 border-l-indigo-500/60 shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col gap-3 hover:bg-surface-container-lowest hover:border-indigo-500/20 transition-all duration-300">
                                    <div className="flex items-center gap-2 select-none">
                                        <div className="w-7 h-7 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                                            <BoltIcon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-extrabold text-indigo-600/60 uppercase tracking-widest leading-none">Response Playbook</span>
                                            <h4 className="text-xs font-bold text-slate-800 tracking-wide mt-0.5">Recommended Strategy</h4>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-slate-600 leading-relaxed font-medium max-w-2xl mt-0.5">{item.answer}</p>
                                </div>
                            </div>

                            <div className="p-5 bg-gradient-to-r from-primary/[0.03] to-blue-500/[0.01] border border-primary/10 border-l-3 border-primary rounded-xl flex items-start gap-4 shadow-[0_1px_3px_rgba(0,80,180,0.005)] select-none">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary flex items-center justify-center flex-shrink-0">
                                    <LightBulbIcon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <span className="font-bold text-on-surface block text-[10px] uppercase tracking-wider mb-1 font-extrabold">AI Coach Strategic Guide</span>
                                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                                        Your tone should remain authentic and solution-oriented, focusing on personal growth and business impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

// ── Main Component ────────────────────────────────────────────────────────────

const Interview = () => {
    const [activeNav, setActiveNav] = useState('technical')
    const { report, getReportById, loading, getResumePdf } = useInterview()
    const { user, handleLogout } = useAuth()
    const { interviewId } = useParams()
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const navigate = useNavigate()

    const [completedTasks, setCompletedTasks] = useState(() => {
        if (!interviewId) return {}
        const saved = localStorage.getItem(`interview-progress-${interviewId}`)
        return saved ? JSON.parse(saved) : {}
    })

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
            const saved = localStorage.getItem(`interview-progress-${interviewId}`)
            setCompletedTasks(saved ? JSON.parse(saved) : {})
        }
    }, [interviewId])

    const toggleTask = (dayNum, taskIndex) => {
        const key = `${dayNum}-${taskIndex}`
        const updated = {
            ...completedTasks,
            [key]: !completedTasks[key]
        }
        setCompletedTasks(updated)
        localStorage.setItem(`interview-progress-${interviewId}`, JSON.stringify(updated))
    }

    if (loading || !report) {
        return (
            <main className="loading-screen">
                <div className="loading-card">
                    {/* Scanner portal animation */}
                    <div className="scanner-portal">
                        <div className="scanner-beam"></div>
                        <ChartBarIcon className="scanner-icon" />
                    </div>

                    <div className="text-center w-full">
                        <h2 className="text-headline-md font-bold text-on-surface mb-1">Fetching Strategy Dossier</h2>
                        <p className="text-body-sm text-on-surface-variant mb-4">Cross-referencing index charts...</p>

                        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full animate-pulse" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    // Calculate Roadmap checklist metrics
    const totalTasks = report.preparationPlan.reduce((sum, day) => sum + day.tasks.length, 0)
    const completedCount = Object.keys(completedTasks).filter(key => completedTasks[key]).length
    const progressPct = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0

    const getInitials = (name) => {
        if (!name) return 'U'
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
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
                    <button
                        onClick={() => navigate('/')}
                        className="group w-full flex items-center gap-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200"
                    >
                        <ArrowLeftIcon className="w-5 h-5 text-on-surface-variant/80 group-hover:text-on-surface group-hover:-translate-x-0.5 transition-all duration-200" />
                        <span className="font-semibold text-label-md">Back to Dashboard</span>
                    </button>

                    <div className="py-2">
                        <div className="h-[1px] bg-outline-variant/60 my-2" />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50 px-sm mb-2">Current Session</p>
                    </div>

                    <button
                        onClick={() => { setActiveNav('technical'); setMobileSidebarOpen(false); }}
                        className={`group w-full flex items-center gap-sm rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200 ${
                            activeNav === 'technical'
                                ? 'bg-secondary-container text-on-secondary-container font-semibold border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                                : 'border border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                        }`}
                    >
                        <CodeBracketIcon className={`w-5 h-5 transition-colors duration-200 ${
                            activeNav === 'technical' ? 'text-on-secondary-container' : 'text-on-surface-variant/80 group-hover:text-on-surface'
                        }`} />
                        <span className="font-semibold text-label-md">Technical Deep-Dive</span>
                    </button>

                    <button
                        onClick={() => { setActiveNav('behavioral'); setMobileSidebarOpen(false); }}
                        className={`group w-full flex items-center gap-sm rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200 ${
                            activeNav === 'behavioral'
                                ? 'bg-secondary-container text-on-secondary-container font-semibold border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                                : 'border border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                        }`}
                    >
                        <LightBulbIcon className={`w-5 h-5 transition-colors duration-200 ${
                            activeNav === 'behavioral' ? 'text-on-secondary-container' : 'text-on-surface-variant/80 group-hover:text-on-surface'
                        }`} />
                        <span className="font-semibold text-label-md">Behavioral Insights</span>
                    </button>

                    <button
                        onClick={() => { setActiveNav('roadmap'); setMobileSidebarOpen(false); }}
                        className={`group w-full flex items-center gap-sm rounded-lg px-sm py-xs transition-all text-left cursor-pointer duration-200 ${
                            activeNav === 'roadmap'
                                ? 'bg-secondary-container text-on-secondary-container font-semibold border border-outline-variant/10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                                : 'border border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                        }`}
                    >
                        <ChartBarIcon className={`w-5 h-5 transition-colors duration-200 ${
                            activeNav === 'roadmap' ? 'text-on-secondary-container' : 'text-on-surface-variant/80 group-hover:text-on-surface'
                        }`} />
                        <span className="font-semibold text-label-md">Success Roadmap</span>
                    </button>
                </nav>

                <div className="mt-auto space-y-sm pt-md border-t border-outline-variant">
                    <button
                        onClick={() => getResumePdf(interviewId)}
                        className="w-full flex items-center justify-center gap-xs bg-primary text-on-primary rounded-lg py-sm font-semibold transition-all shadow-md hover:shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                    >
                        <ArrowDownTrayIcon className="w-5 h-5" />
                        Download Resume
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

            {/* Main Content Canvas */}
            <main className="flex-1 md:ml-52 min-h-screen flex flex-col">

                {/* Top Header */}
                <header className="flex justify-between items-center h-14 w-full px-margin-desktop bg-surface-container-lowest sticky top-0 border-b border-outline-variant z-35">
                    <div className="flex items-center gap-md">
                        <button className="md:hidden text-on-surface-variant" onClick={() => setMobileSidebarOpen(true)}>
                            <Bars3Icon className="w-6 h-6" />
                        </button>


                    </div>

                    <div className="flex items-center gap-md">
                        {/* Horizontal tabs to switch view on desktop */}
                        <nav className="hidden md:flex items-center gap-lg">
                            <button
                                onClick={() => setActiveNav('technical')}
                                className={`text-body-md font-medium pb-1 transition-all cursor-pointer ${activeNav === 'technical' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                Technical
                            </button>
                            <button
                                onClick={() => setActiveNav('behavioral')}
                                className={`text-body-md font-medium pb-1 transition-all cursor-pointer ${activeNav === 'behavioral' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                Behavioral
                            </button>
                            <button
                                onClick={() => setActiveNav('roadmap')}
                                className={`text-body-md font-medium pb-1 transition-all cursor-pointer ${activeNav === 'roadmap' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                Roadmap
                            </button>
                        </nav>

                        <div className="flex items-center gap-sm ml-lg border-l border-outline-variant pl-lg text-on-surface-variant">
                            <BellIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                            <QuestionMarkCircleIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-xs font-bold text-on-primary-fixed border border-outline-variant">
                                    {getInitials(user?.username)}
                                </div>
                                <span className="text-body-sm font-semibold text-on-surface hidden md:inline-block">
                                    {user?.username || "Guest User"}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Sub-view Content Render */}
                {activeNav === 'technical' && (
                    <div className="flex flex-col lg:flex-row gap-gutter py-6 px-margin-desktop max-w-max-width mx-auto w-full">

                        {/* Left Column: Content */}
                        <section className="flex-1 flex flex-col gap-6 min-w-0">
                            <div className="flex flex-col gap-2 pb-4 border-b border-outline-variant/30">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                                        Assessment Report
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface-variant/80 text-[10px] font-bold">
                                        AI Audit Verified
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-1">
                                    Technical Deep-Dive
                                </h2>
                                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-on-surface-variant font-medium">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                                        <BriefcaseIcon className="w-4 h-4 text-primary" />
                                        <span className="text-on-surface font-semibold">{report.title}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                                        <CalendarIcon className="w-4 h-4 text-on-surface-variant/60" />
                                        <span>Analyzed {new Date(report.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Questions Section */}
                            <div className="flex flex-col gap-4">
                                {report.technicalQuestions.map((q, index) => (
                                    <TechnicalAccordionCard key={index} item={q} index={index} />
                                ))}
                            </div>
                        </section>

                        {/* Right Column: Sidebar Widgets */}
                        <aside className="w-full lg:w-80 flex flex-col gap-4 flex-shrink-0 lg:sticky lg:top-20 lg:self-start">

                            {/* Match Score Widget */}
                            <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-primary uppercase tracking-wider font-extrabold">Role Compatibility</span>
                                        <h4 className="text-lg font-bold text-on-surface mt-0.5">Technical Match</h4>
                                    </div>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
                                        AI Scored
                                    </span>
                                </div>

                                <div className="relative flex items-center justify-center py-2 select-none">
                                    <svg className="w-32 h-32 transform -rotate-90">
                                        <defs>
                                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#0050b4" />
                                                <stop offset="100%" stopColor="#60a5fa" />
                                            </linearGradient>
                                        </defs>
                                        <circle
                                            className="text-outline-variant/30"
                                            cx="64"
                                            cy="64"
                                            fill="transparent"
                                            r="54"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            strokeDasharray="3 3"
                                        />
                                        <circle
                                            cx="64"
                                            cy="64"
                                            fill="transparent"
                                            r="54"
                                            stroke="url(#scoreGradient)"
                                            strokeDasharray="339.3"
                                            strokeDashoffset={339.3 - (report.matchScore / 100) * 339.3}
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-out"
                                        />
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-3xl font-extrabold text-on-surface">{report.matchScore}%</span>
                                        <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-0.5">
                                            {report.matchScore >= 80 ? 'Strong' : report.matchScore >= 60 ? 'Moderate' : 'Developing'}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="bg-surface-container-low/20 border border-outline-variant/30 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-semibold text-on-surface-variant">System Architecture</span>
                                            <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded text-[10px]">{Math.min(100, report.matchScore + 4)}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full" style={{ width: `${Math.min(100, report.matchScore + 4)}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-surface-container-low/20 border border-outline-variant/30 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-semibold text-on-surface-variant">Core Algorithms</span>
                                            <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded text-[10px]">{Math.max(0, report.matchScore - 4)}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full" style={{ width: `${Math.max(0, report.matchScore - 4)}%` }}></div>
                                        </div>
                                    </div>

                                    <div className="bg-surface-container-low/20 border border-outline-variant/30 rounded-xl p-3 flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-semibold text-on-surface-variant">Scalability &amp; Performance</span>
                                            <span className="text-primary font-bold bg-primary/5 px-2 py-0.5 rounded text-[10px]">{Math.max(0, report.matchScore - 12)}%</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full" style={{ width: `${Math.max(0, report.matchScore - 12)}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skill Gaps Widget */}
                             <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                                 <div className="flex justify-between items-start">
                                     <div className="flex flex-col">
                                         <span className="text-[10px] text-primary uppercase tracking-wider font-extrabold">Growth Areas</span>
                                         <h4 className="text-lg font-bold text-on-surface mt-0.5">Identified Gaps</h4>
                                     </div>
                                     <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
                                         Priority Focus
                                     </span>
                                 </div>

                                 {report.skillGaps && report.skillGaps.length > 0 ? (
                                     <div className="flex flex-col gap-4">
                                         {/* High Severity Gaps */}
                                         {report.skillGaps.filter(g => g.severity === 'high').length > 0 && (
                                             <div className="flex flex-col gap-2">
                                                 <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1.5">
                                                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                                     <span className="text-[10px] text-red-700 dark:text-red-400 font-extrabold uppercase tracking-wider">Critical Focus</span>
                                                     <span className="text-[9px] text-on-surface-variant/60 font-semibold ml-auto">Immediate Action</span>
                                                 </div>
                                                 <div className="flex flex-wrap gap-2">
                                                     {report.skillGaps.filter(g => g.severity === 'high').map((gap, i) => (
                                                         <span
                                                             key={i}
                                                             className="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-error-container/30 border border-error-container/60 text-on-error-container shadow-[0_1px_2px_rgba(147,0,10,0.02)] transition-all hover:bg-error-container/50"
                                                         >
                                                             <ExclamationCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                                             {gap.skill}
                                                         </span>
                                                     ))}
                                                 </div>
                                             </div>
                                         )}

                                         {/* Medium Severity Gaps */}
                                         {report.skillGaps.filter(g => g.severity === 'medium').length > 0 && (
                                             <div className="flex flex-col gap-2">
                                                 <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1.5">
                                                     <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                     <span className="text-[10px] text-amber-700 dark:text-amber-400 font-extrabold uppercase tracking-wider">Secondary Focus</span>
                                                     <span className="text-[9px] text-on-surface-variant/60 font-semibold ml-auto">Recommended</span>
                                                 </div>
                                                 <div className="flex flex-wrap gap-2">
                                                     {report.skillGaps.filter(g => g.severity === 'medium').map((gap, i) => (
                                                         <span
                                                             key={i}
                                                             className="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-tertiary-fixed/30 border border-tertiary-fixed/60 text-on-tertiary-fixed shadow-[0_1px_2px_rgba(54,15,0,0.02)] transition-all hover:bg-tertiary-fixed/50"
                                                         >
                                                             <ArrowTrendingUpIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                                             {gap.skill}
                                                         </span>
                                                     ))}
                                                 </div>
                                             </div>
                                         )}

                                         {/* Low Severity Gaps */}
                                         {report.skillGaps.filter(g => g.severity === 'low').length > 0 && (
                                             <div className="flex flex-col gap-2">
                                                 <div className="flex items-center gap-1.5 border-b border-outline-variant/20 pb-1.5">
                                                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                     <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-extrabold uppercase tracking-wider">Minor Focus</span>
                                                     <span className="text-[9px] text-on-surface-variant/60 font-semibold ml-auto">Nice to Have</span>
                                                 </div>
                                                 <div className="flex flex-wrap gap-2">
                                                     {report.skillGaps.filter(g => g.severity === 'low').map((gap, i) => (
                                                         <span
                                                             key={i}
                                                             className="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/20 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-300 shadow-[0_1px_2px_rgba(6,78,59,0.02)] transition-all hover:bg-emerald-500/20"
                                                         >
                                                             <CheckCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                                             {gap.skill}
                                                         </span>
                                                     ))}
                                                 </div>
                                             </div>
                                         )}
                                     </div>
                                 ) : (
                                     <p className="text-xs text-on-surface-variant italic">No major skill gaps identified! Keep it up.</p>
                                 )}

                                 <div className="bg-surface-container-low/40 p-4 rounded-xl border border-outline-variant/30">
                                     <p className="text-xs text-on-surface-variant/90 italic leading-relaxed">
                                         "Recommended focus for the next 30 days: Deep-dive into identified gaps to meet high-level team expectations and optimize system reliability."
                                     </p>
                                 </div>
                             </div>

                            {/* Promo/Action Card */}
                            <div className="relative bg-inverse-surface text-inverse-on-surface rounded-2xl p-6 overflow-hidden group shadow-sm">
                                <div className="relative z-10 flex flex-col gap-3">
                                    <h5 className="font-headline-sm text-base font-bold text-white">Ready to bridge the gap?</h5>
                                    <p className="font-body-sm opacity-80 text-xs text-slate-300">Our AI coach created a custom study roadmap based on your assessment performance.</p>
                                    <button
                                        onClick={() => setActiveNav('roadmap')}
                                        className="bg-primary text-on-primary w-full py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer text-xs uppercase tracking-wider"
                                    >
                                        View My Roadmap
                                    </button>
                                </div>
                                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                        </aside>
                    </div>
                )}

                {activeNav === 'behavioral' && (
                    <div className="flex-1 py-6 px-margin-desktop bg-background max-w-max-width mx-auto w-full flex flex-col gap-6 animate-fade-in">

                        {/* Executive AI Assessment Dashboard Header */}
                        <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-[0_4px_25px_rgba(0,0,0,0.015)] relative overflow-hidden">
                            {/* Glow background accent */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

                            <div className="flex flex-col gap-3 max-w-2xl">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                                        Executive Assessment
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                                        Values Fit Verified
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-0.5">
                                    Behavioral Insights
                                </h2>
                                <p className="text-on-surface-variant/80 text-sm leading-relaxed max-w-[600px]">
                                    Detailed psychometric mapping and scenario competency review. This dossier evaluates situational leadership, problem-solving integrity, and role alignment against standard organizational values.
                                </p>
                            </div>

                            {/* Metadata Details Card */}
                            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px] bg-surface-container-low/40 p-4 rounded-xl border border-outline-variant/30">
                                <div className="flex items-center gap-2 text-xs">
                                    <BriefcaseIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span className="text-on-surface-variant font-medium">Role:</span>
                                    <span className="text-on-surface font-semibold ml-auto">{report.title}</span>
                                </div>
                                <div className="h-[1px] bg-outline-variant/40 hidden sm:block lg:block" />
                                <div className="flex items-center gap-2 text-xs">
                                    <CalendarIcon className="w-4 h-4 text-on-surface-variant/60 flex-shrink-0" />
                                    <span className="text-on-surface-variant font-medium">Evaluation Date:</span>
                                    <span className="text-on-surface font-semibold ml-auto">
                                        {new Date(report.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Analytics Blocks (Bento Header Section) */}
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

                            {/* Culture Fit Score */}
                            <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-primary/10 transition-all duration-300 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/2 rounded-full blur-2xl group-hover:bg-primary/5 transition-colors" />
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                                            <ShieldCheckIcon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded text-[10px] font-bold">+4% vs last session</span>
                                    </div>
                                    <h3 className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Culture Fit Score</h3>
                                    <p className="text-4xl font-extrabold text-on-surface mt-1.5">
                                        {Math.min(100, report.matchScore + 4)}<span className="text-lg font-bold opacity-60 ml-0.5">%</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${Math.min(100, report.matchScore + 4)}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant/70 font-semibold mt-2">
                                        <span>Alignment Target: 85%</span>
                                        <span>Status: Strong Fit</span>
                                    </div>
                                </div>
                            </div>

                            {/* Confidence Index */}
                            <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-primary/10 transition-all duration-300 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/2 rounded-full blur-2xl group-hover:bg-tertiary/5 transition-colors" />
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-tertiary/5 border border-tertiary/10 flex items-center justify-center">
                                            <BoltIcon className="w-5 h-5 text-tertiary" />
                                        </div>
                                        <span className="text-tertiary bg-tertiary/5 border border-tertiary/10 px-2 py-0.5 rounded text-[10px] font-bold">High Reliability</span>
                                    </div>
                                    <h3 className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Confidence Index</h3>
                                    <p className="text-4xl font-extrabold text-on-surface mt-1.5">
                                        {report.matchScore}<span className="text-lg font-bold opacity-60 ml-0.5">%</span>
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-tertiary to-amber-500 h-full rounded-full transition-all duration-1000"
                                            style={{ width: `${report.matchScore}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant/70 font-semibold mt-2">
                                        <span>Calibration Target: 80%</span>
                                        <span>Status: Verified</span>
                                    </div>
                                </div>
                            </div>

                            {/* Leadership Presence */}
                            <div className="bg-surface-container-lowest border border-outline-variant/45 rounded-2xl p-6 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-primary/10 transition-all duration-300 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/2 rounded-full blur-2xl group-hover:bg-secondary/5 transition-colors" />
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-secondary/5 border border-secondary/10 flex items-center justify-center">
                                            <UserGroupIcon className="w-5 h-5 text-secondary" />
                                        </div>
                                        <span className="text-secondary bg-secondary/5 border border-secondary/10 px-2 py-0.5 rounded text-[10px] font-bold">Top 5% Applicants</span>
                                    </div>
                                    <h3 className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Leadership Presence</h3>
                                    <p className="text-4xl font-extrabold text-on-surface mt-1.5">
                                        {report.matchScore >= 85 ? 'A+' : report.matchScore >= 75 ? 'A' : report.matchScore >= 65 ? 'B+' : 'B'}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex gap-1.5">
                                        <div className={`flex-1 h-1.5 rounded-full ${report.matchScore >= 60 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                        <div className={`flex-1 h-1.5 rounded-full ${report.matchScore >= 70 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                        <div className={`flex-1 h-1.5 rounded-full ${report.matchScore >= 80 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                        <div className={`flex-1 h-1.5 rounded-full ${report.matchScore >= 90 ? 'bg-secondary' : 'bg-surface-container'}`}></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant/70 font-semibold mt-2">
                                        <span>Scale: B to A+</span>
                                        <span>Status: Highly Capable</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                            {/* Question Breakdown Accordion list */}
                            <section className="lg:col-span-8 flex flex-col gap-4">
                                <div className="flex justify-between items-center mb-base border-b border-outline-variant pb-2">
                                    <h4 className="text-headline-md font-bold text-on-surface">Question Breakdown</h4>
                                    <span className="text-label-sm text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-full font-semibold">
                                        {report.behavioralQuestions.length} Scenario Questions
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {report.behavioralQuestions.map((q, index) => (
                                        <BehavioralAccordionCard key={index} item={q} index={index} />
                                    ))}
                                </div>
                            </section>

                            {/* Sidebar elements */}
                            <aside className="lg:col-span-4 flex flex-col gap-4 w-full lg:sticky lg:top-20">

                                {/* AI Coach Summary Card */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-primary/10 transition-all duration-300">
                                    <div className="p-5 border-b border-outline-variant/60 bg-gradient-to-r from-surface-bright/50 to-surface-container-lowest">
                                        <div className="flex items-center gap-2 mb-2 select-none">
                                            <div className="p-1 rounded bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.187L15 15l-5.187.813ZM18.094 6.228 17.5 10l-.594-3.772L13 6l3.906-.594L17.5 2l.594 3.406L22 6l-3.906.228Z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] text-primary font-bold uppercase tracking-wider">AI Executive Analysis</span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <p className="text-lg md:text-xl font-extrabold text-on-surface tracking-tight text-slate-800">
                                                {report.matchScore >= 80 ? 'Excellent Ownership' : 'Strong Alignment'}
                                            </p>
                                            <span className="bg-primary/5 text-primary border border-primary/15 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-0.5">
                                                Grade A
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col gap-5">
                                        {/* Overall Feedback */}
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-1.5 border-b border-outline-variant/30 pb-1.5 select-none">
                                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Overall Feedback</span>
                                            </div>
                                            <p className="text-[13px] leading-relaxed text-slate-600 font-medium">
                                                Your narrative structures show clear <span className="font-semibold text-primary">situational ownership</span>. You demonstrate high compatibility with core values such as ownership, conflict resolution, and structured logic.
                                            </p>
                                        </div>

                                        {/* Key Strengths */}
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-center gap-1.5 border-b border-outline-variant/30 pb-1.5 select-none">
                                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Key Strengths</span>
                                            </div>
                                            <ul className="flex flex-col gap-3 text-xs text-slate-600 font-medium">
                                                <li className="flex items-start gap-2.5">
                                                    <div className="w-5 h-5 rounded bg-emerald-500/[0.04] text-emerald-600 border border-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckIcon className="w-3 h-3 stroke-[3.5]" />
                                                    </div>
                                                    <span className="leading-relaxed">
                                                        <strong className="text-slate-800 font-bold">Conflict Resolution:</strong> High emotional intelligence in navigating complex team conflicts.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2.5">
                                                    <div className="w-5 h-5 rounded bg-emerald-500/[0.04] text-emerald-600 border border-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckIcon className="w-3 h-3 stroke-[3.5]" />
                                                    </div>
                                                    <span className="leading-relaxed">
                                                        <strong className="text-slate-800 font-bold">Business Alignment:</strong> Articulates macro business impact alongside core engineering tasks.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2.5">
                                                    <div className="w-5 h-5 rounded bg-emerald-500/[0.04] text-emerald-600 border border-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <CheckIcon className="w-3 h-3 stroke-[3.5]" />
                                                    </div>
                                                    <span className="leading-relaxed">
                                                        <strong className="text-slate-800 font-bold">Accountability &amp; Grit:</strong> Clear demonstration of personal ownership for project outcomes and failures.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Next Step Recommendation */}
                                        <div className="p-4 bg-surface-container-low/60 rounded-xl border border-outline-variant/40 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col gap-2">
                                            <div className="flex items-center gap-1.5 text-slate-700 select-none">
                                                <LightBulbIcon className="w-4 h-4 text-primary" />
                                                <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-600">Next Step Recommendation</span>
                                            </div>
                                            <div className="border-t border-outline-variant/30 pt-1.5">
                                                <p className="text-xs font-bold text-on-surface mb-0.5">Employ the STAR framework</p>
                                                <p className="text-[11px] text-on-surface-variant/80 leading-relaxed font-medium">
                                                    Ensure every response clearly identifies the **Situation**, **Task**, **Action**, and **Result** to maximize executive readability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Performance velocity graph */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
                                    <h5 className="text-xs font-bold text-on-surface-variant mb-md uppercase tracking-wider">Preparation Velocity</h5>

                                    <div className="flex items-end gap-sm h-32 mb-sm">
                                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[40%]" title="Session 1: 40%"></div>
                                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[60%]" title="Session 2: 60%"></div>
                                        <div className="flex-1 bg-surface-container-high rounded-t-lg h-[55%]" title="Session 3: 55%"></div>
                                        <div className="flex-1 bg-primary/70 rounded-t-lg h-[80%]" title="Session 4: 80%"></div>
                                        <div className="flex-1 bg-primary rounded-t-lg h-[95%]" title="Session 5 (Current): 95%"></div>
                                    </div>

                                    <div className="flex justify-between text-xs text-on-surface-variant font-semibold">
                                        <span>Session 1</span>
                                        <span>Session 5 (Current)</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                )}

                {activeNav === 'roadmap' && (
                    <div className="flex-1 py-6 px-margin-desktop bg-background max-w-max-width mx-auto w-full flex flex-col gap-6 animate-fade-in">

                        {/* Page header and progress bar */}
                        <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
                                <div>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-wider mb-2">
                                        Preparation Velocity
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-700 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        {report.preparationPlan.length}-Day Study Plan
                                    </h2>
                                    <p className="text-on-surface-variant/80 text-body-sm max-w-[560px] mt-1 leading-relaxed">
                                        A personalized milestone checklist compiled from the job requirements and your current profile. Clearing these steps builds full competency.
                                    </p>
                                </div>

                                <div className="bg-surface-container-low p-md rounded-xl flex items-center gap-lg border border-outline-variant/30 flex-shrink-0">
                                    <div className="relative w-20 h-20">
                                        <svg className="w-full h-full -rotate-90">
                                            <circle
                                                className="text-surface-container-high"
                                                cx="40"
                                                cy="40"
                                                fill="transparent"
                                                r="34"
                                                stroke="currentColor"
                                                strokeWidth="6"
                                            />
                                            <circle
                                                className="text-primary transition-all duration-1000 ease-out"
                                                cx="40"
                                                cy="40"
                                                fill="transparent"
                                                r="34"
                                                stroke="currentColor"
                                                strokeDasharray="213.6"
                                                strokeDashoffset={213.6 - (progressPct / 100) * 213.6}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-bold text-primary">{progressPct}%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Cleared Progress</p>
                                        <p className="text-headline-sm font-extrabold text-on-surface mt-0.5">{completedCount}/{totalTasks} Tasks</p>
                                        <span className="text-[10px] text-primary font-semibold block mt-1">
                                            {progressPct === 100 ? '🎉 Roadmap completed!' : 'Streak active: keep learning!'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

                            {/* Main timeline of preparation plan */}
                            <div className="lg:col-span-8 space-y-4 relative">
                                {report.preparationPlan.map((day, dIdx) => {
                                    const dayTasksLength = day.tasks.length
                                    const dayCompletedCount = day.tasks.filter((_, tIdx) => !!completedTasks[`${day.day}-${tIdx}`]).length

                                    const isFullyCompleted = dayCompletedCount === dayTasksLength
                                    const isInProgress = dayCompletedCount > 0 && dayCompletedCount < dayTasksLength

                                    return (
                                        <div key={day._id || day.day} className="relative pl-12 pb-4 last:pb-0">
                                            {dIdx < report.preparationPlan.length - 1 && (
                                                <div className="timeline-line"></div>
                                            )}

                                            <div className={`absolute left-0 top-0 w-12 h-12 flex items-center justify-center rounded-full z-10 shadow-md border ${isFullyCompleted
                                                ? 'bg-primary text-white border-primary'
                                                : isInProgress
                                                    ? 'bg-surface-container-lowest text-primary border-primary border-2'
                                                    : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant'
                                                }`}>
                                                {isFullyCompleted ? (
                                                    <CheckCircleIcon className="w-6 h-6" />
                                                ) : isInProgress ? (
                                                    <PlayCircleIcon className="w-6 h-6" />
                                                ) : (
                                                    <BookOpenIcon className="w-6 h-6" />
                                                )}
                                            </div>

                                            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md roadmap-card transition-all">
                                                <div className="flex justify-between items-start mb-4 border-b border-outline-variant/30 pb-2">
                                                    <div>
                                                        <h3 className="text-body-lg font-bold text-on-surface">Day {day.day} &bull; Focus</h3>
                                                        <p className="text-sm font-semibold text-primary mt-0.5">{day.focus}</p>
                                                    </div>
                                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${isFullyCompleted
                                                        ? 'bg-primary/10 text-primary'
                                                        : isInProgress
                                                            ? 'bg-secondary-container text-on-secondary-container'
                                                            : 'bg-surface-container-high text-on-surface-variant'
                                                        }`}>
                                                        {isFullyCompleted ? 'Cleared' : isInProgress ? 'In Progress' : 'Pending'}
                                                    </span>
                                                </div>

                                                <div className="space-y-2">
                                                    {day.tasks.map((task, tIdx) => {
                                                        const isChecked = !!completedTasks[`${day.day}-${tIdx}`]
                                                        return (
                                                            <div
                                                                key={tIdx}
                                                                onClick={() => toggleTask(day.day, tIdx)}
                                                                className={`flex items-center gap-md p-sm rounded-lg border transition-all cursor-pointer select-none ${isChecked
                                                                    ? 'bg-primary/5 border-primary/20 opacity-70'
                                                                    : 'hover:bg-surface-container-low border-outline-variant/40 bg-surface-container-lowest'
                                                                    }`}
                                                            >
                                                                <div className="relative flex-shrink-0">
                                                                    <div className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all ${isChecked
                                                                        ? 'bg-primary border-primary text-white shadow-sm'
                                                                        : 'border-outline hover:border-primary bg-white'
                                                                        }`}>
                                                                        <CheckIcon className={`w-4 h-4 stroke-[3] transition-opacity ${isChecked ? 'opacity-100' : 'opacity-0'}`} />
                                                                    </div>
                                                                </div>

                                                                <span className={`font-body-md text-sm flex-grow leading-relaxed ${isChecked ? 'line-through text-on-surface-variant font-medium' : 'text-on-surface font-semibold'}`}>
                                                                    {task}
                                                                </span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Sidebar study cards */}
                            <div className="lg:col-span-4 space-y-md w-full lg:sticky lg:top-20">

                                {/* Preparation streak widget */}
                                <div className="bg-primary text-white rounded-xl p-md shadow-lg shadow-primary/10 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/70 mb-4 font-bold">Preparation Streak</h4>
                                    <div className="flex items-end gap-xs mb-md">
                                        <span className="text-display-lg leading-none font-bold">
                                            {completedCount > 0 ? Math.ceil(completedCount / 2) : 1}
                                        </span>
                                        <span className="text-body-sm font-semibold mb-1">Days Active</span>
                                    </div>
                                    <div className="h-1.5 bg-white/20 rounded-full w-full mb-sm">
                                        <div
                                            className="h-full bg-white rounded-full transition-all duration-1000"
                                            style={{ width: `${Math.min(100, (completedCount / totalTasks) * 100)}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-white/80 leading-relaxed font-medium">
                                        Complete all daily milestones to maximize confidence index metrics!
                                    </p>
                                </div>

                                {/* Study materials list */}
                                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
                                    <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-md">Daily Prep Resources</h4>

                                    <div className="space-y-sm">
                                        <a
                                            onClick={(e) => { e.preventDefault(); getResumePdf(interviewId); }}
                                            className="flex items-center gap-sm p-sm hover:bg-surface-container rounded-lg border border-transparent hover:border-outline-variant transition-all cursor-pointer"
                                        >
                                            <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                                                <DocumentTextIcon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-on-surface">Tailored Resume (PDF)</p>
                                                <p className="text-[10px] text-on-surface-variant font-semibold mt-0.5">Download optimized CV copy</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
                                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                            >
                                Dashboard
                            </a>
                            <span className="text-on-surface-variant/20 select-none">&bull;</span>
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

export default Interview